import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView} from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ShowcaseBoxWithLabel from '../../../components/ShowcaseBoxWithLabel';
import BigShowcaseBoxWithLabel from '../../../components/BigShowcaseBoxWithLabel';
import MedHisInputBoxWithLabel from '../../patient_screens/HomeScreen/components/MedHisInputBoxWithLabel';

export default function ProviderResponseScreen({navigation}) { 
    
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (label, value) => {
    setInputValues({
    ...inputValues,
    [label]: value,
    });
  };

  const handleReviewSubmit = () => {
    navigation.navigate('Home');
  };

  // DUMMY DATA
  const labelProperties = {
    'Assessment': { unit: '', width: '95%' },
    'Future Plan': { unit: '', width: '95%' },
  };

  const firstName = {label: 'First Name', value: 'James'}
  const lastName = {label: 'Last Name', value: 'Carter'}
  const reason = {label: 'Reason for Consultation', value:'Patient feels dizzy after diarrhea'}

  const vitalData = [
      {label: 'Pain Level (0~10, 0-no pain, 10-the worst pain)', value: '8', unit: ''},
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
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
    
    <Text style={styles.heading}>Consultation Report</Text>
    <Text style={{fontSize:15}}>Patient Info</Text>
    
    <ShowcaseBoxWithLabel
      label={firstName.label}
      value={firstName.value}
      unit=''
      width="100%"
    />

    <ShowcaseBoxWithLabel
      label={lastName.label}
      value={lastName.value}
      unit=''
      width="100%"
    />
    
    <ShowcaseBoxWithLabel
      label={reason.label}
      value={reason.value}
      unit=''
      width="100%"
    />

  

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
    
    <Text style={styles.heading}>Provider's Input</Text>
    {Object.entries(labelProperties).map(([label, properties], index) => (
          <MedHisInputBoxWithLabel
            key={index}
            label={label}
            value={inputValues[label] || ''}
            unit={properties.unit}
            width={properties.width}
            onChangeText={(value) => handleInputChange(label, value)} // change here
          />
        ))}
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleReviewSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    
    </KeyboardAwareScrollView>
    </ScrollView>

  );
}