import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import PastVisitReport from './components/PastVisitReport.js';
import styles from './styles.js';

export default function PastVisitRecord( {navigation} ) {
    const chiefComplaint = {label: "Chief Complaint", value: 'Patient feels dizzy after diarrhea'};
    const providerReport = [
        {   
            label: 'Subjective', 
            value: 'Left hand wound leaking pus'
        },
        {   
            label: 'Objective', 
            value: 'Left hand wound infected, cleaned wound with saline and applied antibiotic ointment. Antibiotic ointment samples given to patients.'
        },
        {   
            label: 'Assessment / Plan', 
            value: 'Use antibiotic ointment twice a day. Come back to street corner care next week.'
        },
    ];
    const medicalData = [
        {   
            label: 'Medical History', 
            value: ' high blood pressure, diabetes'
        },
        {   
            label: 'Current Medication', 
            value: 'Metoprolol'
        },
        {
            label: 'Allergies', 
            value: 'Sulfa'
        },        
    ];

    const vitalData = [        
        {label: 'Temp', value: '99', unit: 'F'},
        {label: 'Pulse', value: '70', unit:'bpm'},
        {label: 'Oxygen', value: '98', unit:'%'},
        {label: 'BP', value: '120/80', unit:'mmHg'},
        {label: 'BG', value: '110', unit:'mg/dl'},        
    ];

    const FullData = [
        {
            title: "Nov, 12, 2022",
            chiefComplaint: chiefComplaint,
            providerReport: providerReport,
            medicalData: medicalData,
            vitalData: vitalData,

        },
        {
            title: "Nov, 8, 2022",
            chiefComplaint: chiefComplaint,
            providerReport: providerReport,
            medicalData: medicalData,
            vitalData: vitalData,            
        },
        {
            title: "Nov, 1, 2022",
            chiefComplaint: chiefComplaint,
            providerReport: providerReport,
            medicalData: medicalData,
            vitalData: vitalData,            
        },
    ];

    return(
        <View style={styles.container}>
            <View style={{marginTop: 20,marginBottom:30,width:'100%'}}>
                <Text style={{fontSize:35, fontWeight:400}}>My Visit History</Text>            
            </View>

            <FlatList
                style={{width:"100%"}}
                data={FullData}
                keyExtractor={ (item, index) => 'key' + index }
                renderItem={({item}) => <PastVisitReport width={"95%"} {...item} />} 
            />            

        </View>
    );
};