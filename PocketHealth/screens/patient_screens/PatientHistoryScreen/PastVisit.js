import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import PastVisitReport from './components/PastVisitReport.js';
import styles from './styles.js';

export default function PastVisitRecord( {navigation} ) {
    const providerReport = [
        {   
            label: 'Reason For consultation', 
            value: 'Left hand wound leaking pus'
        },
        {   
            label: 'Assessment', 
            value: 'Left hand wound infected, cleaned wound with saline and applied antibiotic ointment. Antibiotic ointment samples given to patients.'
        },
        {   
            label: 'Future Plan', 
            value: 'Use antibiotic ointment twice a day. Come back to street corner care next week.'
        },
    ];
    const medicalData = [
        {   
            label: 'Chronic Illness', 
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
        // {label: 'Pain Level(0~10,0-no pain,10-worst pain)', value: '8'},
        {label: 'Temperature', value: '99'},
        {label: 'Blood Pressure', value: '120/80'},
        {label: 'Pulse', value: '70'},
        {label: 'Oxygen', value: '98'},
        {label: 'Glucose', value: '110'},  
        {label: 'Weight', value: '150'},
    ];

    const FullData = [
        {
            title: "Nov, 12, 2022",
            providerReport: providerReport,
            medicalData: medicalData,
            vitalData: vitalData,

        },
        {
            title: "Nov, 8, 2022",
            providerReport: providerReport,
            medicalData: medicalData,
            vitalData: vitalData,            
        },
        {
            title: "Nov, 1, 2022",
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