import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StackActions } from '@react-navigation/native';

import InputBoxWithInnerLabel from '../../../components/InputBoxWithInnerLabel';
import BigInputBoxWithInnerLabel from '../../../components/BigInputBoxWithInnerLabel';
import styles from './styles';

export default function UploadMedicalInfo({ navigation }) {
  const labelProperties = {    
    'Temperature': { unit: 'F', width: '95%' },
    'Blood Pressure': { unit: 'mmHg', width: '95%' },
    'Pulse': { unit: 'bpm', width: '95%' },
    'Oxygen': { unit: '%', width: '95%' },
    'Glucose': { unit: 'mg/dl', width: '95%' },    
    // Add more entries as needed
  };

  const initialInputValues = Object.keys(labelProperties).reduce((values, label) => {
    values[label] = '';
    return values;
  }, {});

  const [vitalValues, setVitalValues] = useState(initialInputValues);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [medHistoryValues, setMedHistoryValues] = useState({
    chronicIllness: '',
    currentMedication: '',
    allergies: '',
  });

  const [reason, setReason] = useState('');


  const handleInputChange = (type, label, value) => {
    if (type === "vital") {
      setVitalValues({
        ...vitalValues,
        [label]: value,
      });
    } else if (type === "medHistory") {
      setMedHistoryValues({
        ...medHistoryValues,
        [label]: value,
      });
    }

    // input is on going, so set it false
    if (confirmSubmit) {
      setConfirmSubmit(false);
    }
  };


  const isInputEmpty = (inputValues) => {
    for (let key in inputValues) {
      if (inputValues[key] !== '') {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = () => {    
    if(reason === ''){
        // Set error message
      setErrorMessage('Please fill in fields.');
      return;
    
    }
    else{

      if (confirmSubmit) {
              
        // Go to success, while click confirm
        console.log({vitalValues, medHistoryValues, reason});
        navigation.dispatch(StackActions.replace('Success'));
        setConfirmSubmit(false);
    
      } 
      else {
        // Press first time, input is done, so set it true
        setConfirmSubmit(true);  
      }
    }
  };


  const handleOutsidePress = () => {
    if(confirmSubmit) {
      setConfirmSubmit(false);
    }
    Keyboard.dismiss(); // Dismiss the keyboard
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress} accessible={false}>
    <ScrollView>
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      
        <View style={{marginTop: 20, marginBottom: 20, width: '100%', alignItems: 'center',}}>
            <Text style={{fontSize: 35, fontWeight: 400}}>Create New Record</Text>          
        </View>

        <View style={{ marginBottom: 5, width:'100%'}}>
            <Text style={{fontSize:20, fontWeight:400}}>Upload Patient's Vitals</Text>          
        </View>

        <View style={{width: "100%"}}>
            {Object.entries(labelProperties).map(([label, properties], index) => (
            <InputBoxWithInnerLabel
                key={index}
                label={label}
                value={vitalValues[label] || ''}
                unit={properties.unit}
                width={properties.width}
                height={60}
                placeholder={'Click to Enter...'}
                onChange={(value) => handleInputChange("vital", label, value)}
                keyboardType={'numeric'}
            />
            ))}
        </View>

        <View style={{ marginBottom: 5, width:'100%'}}>
            <Text style={{fontSize:20, fontWeight:400}}>Upload Patient's Medical History</Text>          
        </View>

        <View style={{width: "100%"}}>
            <BigInputBoxWithInnerLabel
                label="Chronic Illness"
                value={medHistoryValues.chronicIllness}
                width="95%"
                height={100}
                onChangeText={(text) => handleInputChange('medHistory', 'chronicIllness', text)}
                placeholder={'Please enter chronic illness...'}
            />
            <BigInputBoxWithInnerLabel
                label="Current Medication"
                value={medHistoryValues.currentMedication}
                width="95%"
                height={100}
                onChangeText={(text) => handleInputChange('medHistory', 'currentMedication', text)}
                placeholder={'Please enter current medication...'}
            />
            <BigInputBoxWithInnerLabel
                label="Allergies"
                value={medHistoryValues.allergies}
                width="95%"
                height={100}
                onChangeText={(text) => handleInputChange('medHistory', 'allergies', text)}
                placeholder={'Please enter allergies...'}
            />
        </View>

        <View style={{ marginBottom: 5, width:'100%'}}>
            <Text style={{fontSize:20, fontWeight:400}}>Resaon For Consultation</Text>          
        </View>

        <View style={{ marginBottom: 10, width:'100%'}}>
            <BigInputBoxWithInnerLabel
                label="Resaon For Consultation*"
                value={reason}
                width="95%"
                height={100}
                onChangeText={(text) => setReason(text)}
                placeholder={'Please enter patient reason for consultation...'}
            />
        </View>

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}  

        <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:0}}>
          <TouchableOpacity style={confirmSubmit ? styles.confirmButton : styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>
              {confirmSubmit ? 'Submit' : 'Confirm'}
            </Text>
          </TouchableOpacity>
        </View>

    </KeyboardAwareScrollView>
    </ScrollView>
    </TouchableWithoutFeedback>
  );
}
