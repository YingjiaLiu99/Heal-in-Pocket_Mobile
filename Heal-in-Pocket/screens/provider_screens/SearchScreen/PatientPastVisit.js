import React, { useState, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles.js';
import axios from 'axios';
import baseURL from '../../../common/baseURL.js';
import SearchPastVisitReport from './components/SearchPastVisitReport.js';

export default function PatientPastVisit( {route, navigation} ) {
    const { user } = route.params;
    const patientId = user._id;
    console.log("the patient id is: ", patientId);

    const [recordsData, setRecordsData] = useState([]);
    const [expandedDates, setExpandedDates] = useState([]);
    const [medicalHistory, setMedicalHistory] = useState({});
    const [patientInfo, setPatientInfo] = useState({});

    const toggleExpandedDate = (date) => {
        if (expandedDates.includes(date)) {
        setExpandedDates(expandedDates.filter(expandedDate => expandedDate !== date));
        } else {
        setExpandedDates([...expandedDates, date]);
        }
    }

    const dates = {}
    const getDate = (date) => {
        dates[date.slice(0, 10)] = date.slice(11, 19) 
        return date.slice(0, 10);
    };

    const site = "Street Corner Care"
    
    // call backend to get all records of a corresponding patient_id
    const getPastVisitRecords = async (patientId) => {
        try {
            
            const response = await axios.get(`${baseURL}record/patient/${patientId}`);
            const records = response.data.records;
            console.log("the records are: ", records);
                    
            const medicalHistory = {}
            const patientInfo = {}
          

            const processVitals = (vitals) => {
                Object.keys(vitals).forEach(key => {
                    if (vitals[key] === -1) {
                        vitals[key] = "N/A";
                    }
                });
                return vitals;
                };
            
            const groupedRecords = records.reduce((acc, record) => {
                if (record.vitals) {
                    record.vitals = processVitals(record.vitals);
                }

                const date = getDate(record.updatedAt);
                if (!acc[date]) {
                    acc[date] = [];
                }
                acc[date].push(record);
                return acc;
            }, {});

            for(const record of records){
                console.log("record is: ", record);
                const name = user.name;
                const DOB = user.date_of_birth;
                const date = getDate(record.updatedAt);
                medicalHistory[record._id] = [
                    { label: 'Chronic Illness', value: record.chronic_condition || 'N/A' },
                    { label: 'Current Medication', value: record.current_medications || 'N/A' },
                    { label: 'Allergies', value: record.allergies || 'N/A' }
                ];
                patientInfo[record._id] = [
                    { label: 'Name', value: name },
                    { label: 'Date of Birth', value: DOB },
                    { label: 'Location', value: site || 'N/A' },
                    { label: 'DOS', value: dates[date] || 'N/A' },
                    { label: 'Smoking Status', value: record.smoking_status || 'N/A' },
                    { label: 'Pregnancy Status', value: record.pregnancy_status || 'N/A' }
                ];
                
            }

            setMedicalHistory(medicalHistory);
            setPatientInfo(patientInfo);
            setRecordsData(groupedRecords);
            console.log("medical history is: ", medicalHistory);
            return response.data.records;
        } catch (error) {
          console.error('Error fetching records:', error);
        }
    };

    useEffect(() => {
        getPastVisitRecords(patientId);
    }, [patientId]);

    console.log("the records/pastvisits are: ", recordsData);
    
    
    return (
        <View style={styles.container}>

            <View style={{marginTop: 0,marginBottom:10,width:'100%', paddingTop:10}}>
                <Text style={{fontSize:30, fontWeight:400}}>{user.name}</Text> 
                <Text style={{fontSize: 20}}>DOB: {user.date_of_birth}</Text>           
            </View>

            <View style={{alignItems: 'center',}}>
                <Text style={{fontSize: 25}}>Past Visits</Text>
            </View>
    
            <FlatList
                style={{width:"100%"}}
                data={Object.entries(recordsData)}
                keyExtractor={(item) => item[0]}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity 
                                style={[styles.header, { backgroundColor: expandedDates.includes(item[0]) ? 'white' : 'white' }]} 
                                onPress={() => toggleExpandedDate(item[0])}>
                            <Text style={styles.dateText}>{item[0]}</Text>
                            <Icon name={expandedDates.includes(item[0]) ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
                        </TouchableOpacity>
                        {expandedDates.includes(item[0]) &&  
                            <View style={{ alignItems: 'center' }}>
                            {item[1].map(record => (
                                <SearchPastVisitReport
                                    key={record._id}
                                    time={patientInfo[record._id][3]['value']}
                                    chiefComplaint={record.chief_complaint}
                                    providerReport={record.soap}
                                    medicalData={medicalHistory[record._id]}
                                    vitalData={record.vitals}
                                    patientInfo={patientInfo[record._id]}
                                    providerName = {record.provider_name}
                                    scribeName = {record.scribe_name}
                                    width={'100%'}
                                />
                            ))}
                            </View>
                        }
                    </View>
                )}
                
            />
        </View>
    );
};