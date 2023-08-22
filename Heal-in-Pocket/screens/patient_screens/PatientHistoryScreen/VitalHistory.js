import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import VitalsFoldableList from './components/VitalsFoldableList';
import styles from './styles.js';

export default function VitalHistory({navigation}) {
    // Dummy Vital Data:
    const vitalData1 = [        
        {label: 'Temp', value: '99', unit: 'F'},
        {label: 'Pulse', value: '70', unit:'bpm'},
        {label: 'Oxygen', value: '98', unit:'%'},
        {label: 'BP', value: '120/80', unit:'mmHg'},
        {label: 'BG', value: '110', unit:'mg/dl'}, 
    ];

    const vitalData2 = [
        {label: 'Temp', value: '102', unit: 'F'},
        {label: 'Pulse', value: '78', unit:'bpm'},
        {label: 'Oxygen', value: '90', unit:'%'},
        {label: 'BP', value: '129/70', unit:'mmHg'},
        {label: 'BG', value: '110', unit:'mg/dl'},
    ];

    const vitalData3 = [
        {label: 'Temp', value: '97', unit: 'F'},
        {label: 'Pulse', value: '120', unit:'bpm'},
        {label: 'Oxygen', value: '100', unit:'%'},
        {label: 'BP', value: '140/90', unit:'mmHg'},
        {label: 'BG', value: '150', unit:'mg/dl'},
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