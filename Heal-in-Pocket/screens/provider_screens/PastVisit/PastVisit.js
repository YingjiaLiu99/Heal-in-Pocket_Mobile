import React, { useState, useEffect, useContext } from "react";
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles.js';
import PastVisitReport from './components/PastVisitReport.js';
import { UserContext } from "../../../context/userContext.js";
import axios from 'axios';
import baseURL from '../../../common/baseURL';

export default function PastVisit( {navigation} ) {
    const { userId, setUserId } = useContext(UserContext);
    const [reviewedRecordsData, setReviewedRecordsData] = useState([]);
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
        // console.log("The type of updatedAt is: ", typeof date);
        dates[date.slice(0, 10)] = date.slice(11, 19) 
        return date.slice(0, 10);
    };

    const getPatientInfo = async (patientId) => {
        try {
            const response = await axios.get(`${baseURL}patient/patient/${patientId}`);
            const patientInfo = response.data.patient;
            return {
                name: patientInfo.name,
                DOB: patientInfo.date_of_birth
            };
        } catch (error) {
            if (error.response) {
              // The request was successfully sent to the server and the server returned an error response. 
              console.log('Backend Error:', error.response.data.message);
            } else if (error.request) {
              // The request was sent, but no response was received from the server. This can be due to network issues, server downtime, etc.
              console.log('Network Error:', error.message);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error:', error.message);
            }
            return {
                name: "failed to load",
                DOB: "failed to load"
            };
          } 
    };

    const site = "Street Corner Care"
    // const time = "10:00 am"

    // call backend to get all viewed_records of a corresponding doctor_id
    const getAllViewedRecords = async (userId) => {
        try {
          const response = await axios.get(`${baseURL}doctor/viewedRecords/${userId}`);
          const records = response.data.viewed_records;        
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
                if (record.owner) {
                    const {name, DOB} = await getPatientInfo(record.owner);
                    const date = getDate(record.updatedAt);
                    medicalHistory[record.owner] = [
                        { label: 'Chronic Illness', value: record.chronic_condition || 'N/A' },
                        { label: 'Current Medication', value: record.current_medications || 'N/A' },
                        { label: 'Allergies', value: record.allergies || 'N/A' }
                    ];
                    patientInfo[record.owner] = [
                        { label: 'Name', value: name },
                        { label: 'Date of Birth', value: DOB },
                        { label: 'Location', value: site || 'N/A' },
                        { label: 'DOS', value: dates[date] || 'N/A' },
                        { label: 'Smoking Status', value: record.smoking_status || 'N/A' },
                        { label: 'Pregnancy Status', value: record.pregnancy_status || 'N/A' }
                    ];
                    console.log("time is: ", dates[date]);
                }
            }

          setMedicalHistory(medicalHistory);
          setPatientInfo(patientInfo);
          setReviewedRecordsData(groupedRecords);
          return response.data.viewed_records;
        } catch (error) {
          console.error('Error fetching viewed records:', error);
        }
    };
     
    // need change here:
    useEffect(() => {
        console.log(userId);
        getAllViewedRecords(userId);
    }, [userId]);
      
    // console.log("reviewedRecordsData looks like: ", reviewedRecordsData);

   
    
    
    return (
        <View style={styles.container}>
        <View style={{marginTop: 20,marginBottom:30,width:'100%'}}>
            <Text style={{fontSize:35, fontWeight:400}}>My Past Visits</Text>            
        </View>
    
        <FlatList
            style={{width:"100%"}}
            data={Object.entries(reviewedRecordsData)}
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
                            <PastVisitReport
                                key={record._id}
                                owner={record.owner}
                                name={patientInfo[record.owner][0]['value']}
                                time={patientInfo[record.owner][3]['value']}
                                chiefComplaint={record.chief_complaint}
                                providerReport={record.soap}
                                medicalData={medicalHistory[record.owner]}
                                vitalData={record.vitals}
                                patientInfo={patientInfo[record.owner]}
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