import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StackActions } from '@react-navigation/native';

import VitalsInputBoxWithLabel from './components/VitalsInputBoxWithLabel';
import styles from './styles';


export default function UploadVitals({ navigation }) {
  const labelProperties = {
    'Pain Level (0~10, 0-no pain, 10-the worst pain)': { unit: '', width: '95%' },
    'Temperature': { unit: 'F', width: '95%' },
    'Blood Pressure': { unit: 'mmHg', width: '95%' },
    'Pulse': { unit: 'bpm', width: '95%' },
    'Oxygen': { unit: '%', width: '95%' },
    'Glucose': { unit: 'mg/dl', width: '95%' },
    'Weight': { unit: 'Lbs', width: '95%' },
    // Add more entries as needed
  };

  // initialize all the vitals to null
  const initialInputValues = Object.keys(labelProperties).reduce((values, label) => {
    values[label] = '';
    return values;
  }, {});

  // function to check if the patient enter any vital
  const isInputEmpty = (inputValues) => {
    for (let key in inputValues) {
      if (inputValues[key] !== '') {
        return false;
      }
    }
    return true;
  };

  const [inputValues, setInputValues] = useState(initialInputValues);

  const handleInputChange = (label, value) => {
    setInputValues({
      ...inputValues,
      [label]: value,
    });
  };

  const handleSubmit = () => {
    if(isInputEmpty(inputValues)){
      Alert.alert('Your Input is Empty', 'If you dont wish to enter anything, please skip.',[
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'Skip',
          onPress: () => {
            // prevent user to go back from Upload MedHis to Upload Vitals
            navigation.dispatch(StackActions.replace('Upload MedHis'));
          }          
        },        
      ]); 
    }

    else{
      Alert.alert('Are You Sure To Submit?', 'You cannot edit once submitted',[
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => {
            console.log(inputValues);
            // prevent user to go back from Upload MedHis to Upload Vitals
            navigation.dispatch(StackActions.replace('Upload MedHis'));
          }
        },
      ]);
    }        
  };

  const handleSkip = () => {
    if(!isInputEmpty(inputValues)){
      Alert.alert('Are You Sure To Skip?', 'Your entered vitals will not be saved',[
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => {           
            // prevent user to go back from Upload MedHis to Upload Vitals 
            navigation.dispatch(StackActions.replace('Upload MedHis'));
          }
        },
      ]);
    }
    else{
      // prevent user to go back from Upload MedHis to Upload Vitals
      navigation.dispatch(StackActions.replace('Upload MedHis'));
    }    
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      
      <View style={{marginTop: 20,marginBottom:30,width:'100%'}}>
        <Text style={{fontSize:35, fontWeight:400}}>Update My Vitals</Text>          
      </View>

      <View style={{width:"100%"}}>
        {Object.entries(labelProperties).map(([label, properties], index) => (
          <VitalsInputBoxWithLabel
            key={index}
            label={label}
            value={inputValues[label] || ''}
            unit={properties.unit}
            width={properties.width}
            onChange={(value) => handleInputChange(label, value)}
          />
        ))}
      </View>
            
      <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:0}}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit and Continue</Text>
        </TouchableOpacity>
      </View>

      <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:0}}>
        <TouchableOpacity style={styles.button} onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAwareScrollView>
  );
}
