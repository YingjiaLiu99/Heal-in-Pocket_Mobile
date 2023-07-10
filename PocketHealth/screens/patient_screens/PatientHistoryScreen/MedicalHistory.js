import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';


import MedicalHistoryList from './components/MedicalHistoryList';
import styles from './styles.js';

export default function MedicalHistory({navigation}) {
    // Dummy medical history Data:
    const Data1 = [
        {   
            label: 'Chronic Illness', 
            value: 'About Chronic Diseases:\
            Chronic diseases are defined \
            broadly as conditions that last\
            1 year or more and require ongoing\
            medical attention or limit activities\
            of daily living or both. Chronic\
            diseases such as heart disease,\
            cancer, and diabetes are the \
            leading causes of death and \
            disability in the United States.'
        },
        {   
            label: 'Current Medication', 
            value: 'Current Medications: Medications \
            the patient is presently taking \
            including all prescriptions, \
            over-the-counters, herbals and vitamin/mineral/dietary \
            (nutritional) supplements with each \
            medications name, dosage, frequency \
            and administered route.'
        },
        {
            label: 'Allergies', 
            value: 'An allergy is where your body reacts \
            to something thats normally harmless like \
            pollen, dust or animal fur. The symptoms \
            can be mild, but for some people they can \
            be very serious.'
        },        
    ];

    const Data2 = [
        {label: 'Chronic Illness', value: 'Back pain'},
        {label: 'Current Medication', value: ''},
        {label: 'Allergies', value: 'Banana'},        
    ];

    const Data3 = [
        {label: 'Chronic Illness', value: ''},
        {label: 'Current Medication', value: ''},
        {label: 'Allergies', value: 'Milk'},        
    ];

    const AllMedData = [
        {
            title: "Nov, 6, 2022",
            items: Data1,
        },
        {
            title: "Nov, 8, 2022",
            items: Data2,            
        },
        {
            title: "Nov, 12, 2022",
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