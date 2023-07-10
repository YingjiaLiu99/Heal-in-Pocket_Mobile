import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import PastVisitReport from './components/PastVisitReport.js';
import styles from './styles.js';

export default function PastVisitRecord( {navigation} ) {
    const providerReport = [
        {   
            label: 'Reason For consultation', 
            value: 'Feeling dizzy after having diarrhea and upset stomach.'
        },
        {   
            label: 'Assessment', 
            value: 'Likely dehydrated because of diarrhea'
        },
        {   
            label: 'Future Plan', 
            value: 'Drink more water. If possible, take over the counter diarrhea medications to control symptoms'
        },
    ];
    const medicalData = [
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

    const vitalData = [
        {label: 'Pain Level', value: '8'},
        {label: 'Temperature', value: '99'},
        {label: 'Blood Pressure', value: '120/80'},
        {label: 'Pulse', value: '70'},
        {label: 'Oxygen', value: '98'},
        {label: 'Glucose', value: '110'},  
        {label: 'Weight', value: '150'},
    ];

    const FullData = [
        {
            title: "Nov, 6, 2022",
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
            title: "Nov, 12, 2022",
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