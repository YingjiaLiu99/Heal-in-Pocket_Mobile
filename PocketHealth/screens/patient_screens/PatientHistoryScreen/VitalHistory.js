import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import VitalsFoldableList from './components/VitalsFoldableList';
import styles from './styles.js';

export default function VitalHistory({navigation}) {
    // Dummy Vital Data:
    const vitalData1 = [
        // {label: 'Pain Level(0~10,0-no pain,10-worst pain)', value: '8'},
        {label: 'Temperature', value: '99'},
        {label: 'Blood Pressure', value: '120/80'},
        {label: 'Pulse', value: '70'},
        {label: 'Oxygen', value: '98'},
        {label: 'Glucose', value: '110'},  
        // {label: 'Weight', value: '150'}, 
    ];

    const vitalData2 = [
        // {label: 'Pain Level(0~10,0-no pain,10-worst pain)', value: '8'},
        {label: 'Temperature', value: ''},
        {label: 'Blood Pressure', value: '120/80'},
        {label: 'Pulse', value: '70'},
        {label: 'Oxygen', value: ''},
        {label: 'Glucose', value: '190'},  
        // {label: 'Weight', value: '170'},
    ];

    const vitalData3 = [
        // {label: 'Pain Level(0~10,0-no pain,10-worst pain)', value: '8'},
        {label: 'Temperature', value: ''},
        {label: 'Blood Pressure', value: '120/80'},
        {label: 'Pulse', value: '70'},
        {label: 'Oxygen', value: ''},
        {label: 'Glucose', value: '110'},  
        // {label: 'Weight', value: '150'},
    ];

    const AllVitalData = [
        {
            title: "Nov, 12, 2022",
            items: vitalData1,
        },
        {
            title: "Nov, 8, 2022",
            items: vitalData2,            
        },
        {
            title: "Nov, 1, 2022",
            items: vitalData3,            
        },
    ];

    return(  
        <View style={styles.container}>
            <View style={{marginTop: 20,marginBottom:30,width:'100%'}}>
                <Text style={{fontSize:35, fontWeight:400}}>My Past Vitals</Text>            
            </View> 

            <FlatList
                style={{width:"100%"}}
                data={AllVitalData}
                keyExtractor={ (item, index) => 'key' + index }
                renderItem={({item}) => <VitalsFoldableList {...item} />}
            />
                
      </View>
    );
};