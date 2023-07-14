import ShowcaseBoxWithLabel from '../../../components/ShowcaseBoxWithLabel';
import BigShowcaseBoxWithLabel from '../../../components/BigShowcaseBoxWithLabel';
// import VitalsInputBoxWithLabel from '/Users/wenyuanchen/Desktop/PocketHealth/PocketHealth/screens/patient_screens/HomeScreen/components/VitalsInputBoxWithLabel.js'

import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView} from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default function ProviderResponseScreen({navigaton}) {
        // Dummy Vital Data:
        const name = [ {label: 'Name', value: 'James'}]
        const reason = [{label: 'Complaints', value:'Backpain'}]           
        const vitalData = [
            {label: 'Pain Level', value: '8', unit: ''},
            {label: 'Temperature', value: '99', unit: 'F'},
            {label: 'Blood Pressure', value: '120/80', unit:'mmHg'},
            {label: 'Pulse', value: '70', unit:'bpm'},
            {label: 'Oxygen', value: '98', unit:'%'},
            {label: 'Glucose', value: '110', unit:'mg/dl'},  
            {label: 'Weight', value: '150',unit:'Lbs'}, 
        ];

        const medHisData = [
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
    

return (
    <ScrollView>
    <KeyboardAwareScrollView style={styles.container}>
    {/* <ScrollView style = {styles.ButtonOuterContainer2}> */}
    <Text style={styles.heading}>Review Patient's Input</Text>
    <Text style={{fontSize:25,marginLeft:20 }}>Patient Info</Text>
      {name.map((item, index) => (
        <ShowcaseBoxWithLabel
          key={index}
          label={item.label}
          value={item.value}
          unit={item.unit}
          width={350}
        />
      ))}
       {reason.map((item, index) => (
        <ShowcaseBoxWithLabel
          key={index}
          label={item.label}
          value={item.value}
          unit= {item.unit}
          width={350}
        />
      ))}

    <Text style={{fontSize:25,marginLeft:20 }}>Vital Info</Text>
    {vitalData.map((item, index) => (
        <ShowcaseBoxWithLabel
          key={index}
          label={item.label}
          value={item.value}
          unit= {item.unit}
          width={350}
        />
      ))}
  
    <Text style={{fontSize:25,marginLeft:20 }}>Medical History</Text>
    {medHisData.map((item, index) => (
        <BigShowcaseBoxWithLabel
          key={index}
          label={item.label}
          value={item.value}
          unit=""
          width={350}
        />
      ))}
    {/* </ScrollView>     */}
    </KeyboardAwareScrollView>
    </ScrollView>

  );
}