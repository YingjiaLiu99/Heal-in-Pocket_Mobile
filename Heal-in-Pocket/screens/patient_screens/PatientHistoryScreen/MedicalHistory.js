import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';


import MedicalHistoryList from './components/MedicalHistoryList';
import styles from './styles.js';

export default function MedicalHistory({navigation}) {
    // Dummy medical history Data:
    const Data1 = [
        {label: 'Medical History', value: 'high blood pressure, diabetes'},
        {label: 'Current Medication', value: 'Metoprolol'},
        {label: 'Allergies', value: 'Sulfa'},        
    ];

    const Data2 = [
        {label: 'Medical History', value: 'illness 2'},
        {label: 'Current Medication', value: 'med 2'},
        {label: 'Allergies', value: 'A2'},        
    ];

    const Data3 = [
        {label: 'Medical History', value: 'illness 3'},
        {label: 'Current Medication', value: 'med 3'},
        {label: 'Allergies', value: 'A3'},        
    ];

    const AllMedData = [
        {
            title: "Nov, 12, 2022",
            items: Data1,
        },
        {
            title: "Nov, 8, 2022",
            items: Data2,            
        },
        {
            title: "Nov, 1, 2022",
            items: Data3,            
        },
    ];

    return(  
        <View style={styles.container}>
            <View style={{marginTop: 20,marginBottom:30,width:'100%'}}>
                <Text style={{fontSize:35, fontWeight:400}}>My Medical History</Text>            
            </View> 

            <FlatList
                style={{width:"100%"}}
                data={AllMedData}
                keyExtractor={ (item, index) => 'key' + index }
                renderItem={({item}) => <MedicalHistoryList width="95%" {...item} />}
            />
                
      </View>
    );
};