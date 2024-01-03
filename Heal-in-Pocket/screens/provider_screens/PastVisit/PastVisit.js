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
    // const [patientNames, setPatientNames] = useState({});
    // const [dobs, setDobs] = useState({});
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

    const getPatientNames = async (patientId) => {
        try {
            const response = await axios.get(`${baseURL}patient/patient/${patientId}`);
            // console.log("Patient information:", response.data);
            return response.data.patient.name;
        } catch (error) {
            console.error('Error fetching patient information:', error);
        }
    };

    const getPatientDobs = async (patientId) => {
        try {
            const response = await axios.get(`${baseURL}patient/patient/${patientId}`);
            return response.data.patient.date_of_birth;
        } catch (error) {
            console.error('Error fetching patient information:', error);
        }
    };

    // const getPatientInfo = async (patientId) => {
    //     try {
    //         const response = await axios.get(`${baseURL}patient/patient/${patientId}`);
    //         return response.data.patient;
    //     } catch (error) {
    //         console.error('Error fetching patient information:', error);
    //     }
    // };

    const doctorId = "6590a453e9775c5e7191519b";
    const site = "Street Corner Care"
    const time = "10:00 am"

    // call backend to get all viewed_records of a corresponding doctor_id
    const getAllViewedRecords = async (doctorId) => {
        try {
          const response = await axios.get(`${baseURL}doctor/${doctorId}`);
          const records = response.data.viewed_records;
        //   const names = {};
        //   const dobs = {};
          const medicalHistory = {}
          const patientInfo = {}
          
          for(const record of records){
            console.log("record is: ", record);
            if (record.owner) {
                // names[record.owner] = await getPatientNames(record.owner);
                // dobs[record.owner] = await getPatientDobs(record.owner);
                medicalHistory[record.owner] = [];
                medicalHistory[record.owner].push({ label: 'Chronic Illness', value: record.chronic_condition || 'None' });
                medicalHistory[record.owner].push({ label: 'Current Medication', value: record.current_medications || 'None' });
                medicalHistory[record.owner].push({ label: 'Allergies', value: record.allergies || 'None' });
                patientInfo[record.owner] = [];
                patientInfo[record.owner].push({ label: 'Name', value: await getPatientNames(record.owner) || 'None' });
                patientInfo[record.owner].push({ label: 'Date of Birth', value: await getPatientDobs(record.owner) || 'None' });
                patientInfo[record.owner].push({ label: 'Location', value: site || 'None' });
                patientInfo[record.owner].push({ label: 'DOS', value: time|| 'None' });
            }
          }
        //   setPatientNames(names);
        //   setDobs(dobs);
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