import React, { useState, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles.js';
import PastVisitReport from './components/PastVisitReport.js';

import axios from 'axios';
import baseURL from '../../../common/baseURL';

export default function PastVisit( {navigation} ) {
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

    const getDate = (date) => {
        // console.log("The type of updatedAt is: ", typeof date);
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
                name: "N/A",
                DOB: "N/A"
            };
          } 
    };

    const doctorId = "659afd3ac4f02806bb8e6b8e";
    const site = "Street Corner Care"
    const time = "10:00 am"

    // call backend to get all viewed_records of a corresponding doctor_id
    const getAllViewedRecords = async (doctorId) => {
        try {
          const response = await axios.get(`${baseURL}doctor/viewedRecords/${doctorId}`);
          const records = response.data.viewed_records;        
          const medicalHistory = {}
          const patientInfo = {}
          
          for(const record of records){
            console.log("record is: ", record);
            if (record.owner) {
                const {name, DOB} = await getPatientInfo(record.owner);
                medicalHistory[record.owner] = [
                    { label: 'Chronic Illness', value: record.chronic_condition || 'N/A' },
                    { label: 'Current Medication', value: record.current_medications || 'N/A' },
                    { label: 'Allergies', value: record.allergies || 'N/A' }
                ];
                patientInfo[record.owner] = [
                    { label: 'Name', value: name },
                    { label: 'Date of Birth', value: DOB },
                    { label: 'Location', value: site || 'N/A' },
                    { label: 'DOS', value: time || 'N/A' }
                ];
            }
          }        
          setMedicalHistory(medicalHistory);
          setPatientInfo(patientInfo);
          setReviewedRecordsData(records);
          return response.data.viewed_records;
        } catch (error) {
          console.error('Error fetching viewed records:', error);
        }
    };

    useEffect(() => {
        getAllViewedRecords(doctorId);
    }, [doctorId]);
      
    console.log("reviewedRecordsData looks like: ", reviewedRecordsData);

   
    
    
    return (
        <View style={styles.container}>
        <View style={{marginTop: 20,marginBottom:30,width:'100%'}}>
            <Text style={{fontSize:35, fontWeight:400}}>My Past Visits</Text>            
        </View>
    
        <FlatList
            style={{width:"100%"}}
            data={reviewedRecordsData}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
                <View>
                    <TouchableOpacity 
                            style={[styles.header, { backgroundColor: expandedDates.includes(getDate(item.updatedAt)) ? 'white' : 'white' }]} 
                            onPress={() => toggleExpandedDate(getDate(item.updatedAt))}>
                        <Text style={styles.dateText}>{getDate(item.updatedAt)}</Text>
                        <Icon name={expandedDates.includes(getDate(item.updatedAt)) ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
                    </TouchableOpacity>
                    {expandedDates.includes(getDate(item.updatedAt)) &&  
                        <View style={{ alignItems: 'center' }}>
                        {/* { (reviewed_record.published === true) && */}
                        {<PastVisitReport
                            key={item._id}
                            owner={item.owner}
                            name={patientInfo[item.owner][0]['value']}
                            time={time}
                            chiefComplaint={item.chief_complaint}
                            providerReport={item.soap}
                            medicalData={medicalHistory[item.owner]}
                            vitalData={item.vitals}
                            patientInfo={patientInfo[item.owner]}
                            providerName = {item.provider_name}
                            scribeName = {item.scribe_name}
                            width={'100%'}
                        />
                        }
                        </View>
                    }
                </View>
            )}
            
        />
        </View>
    );
};