import React, { useState, useRef, createRef, useEffect } from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StackActions } from '@react-navigation/native';

import VitalsInputBoxWithLabel from './components/VitalsInputBoxWithLabel';
import styles from './styles';


export default function UploadVitals({ navigation }) {


  const labelProperties = {    
    'Temperature': { unit: 'F', width: '95%' },
    'Systolic BP': { unit: 'mmHg', width: '95%' },
    'Diastolic BP': { unit: 'mmHg', width: '95%' },
    'Pulse': { unit: 'bpm', width: '95%' },
    'Oxygen': { unit: '%', width: '95%' },
    'Glucose': { unit: 'mg/dl', width: '95%' },    
  };

  // initialize all the vitals to null
  const initialInputValues = Object.keys(labelProperties).reduce((values, label) => {
    values[label] = '';
    return values;
  }, {});

  const inputRefs = useRef([]);
  inputRefs.current = Object.keys(labelProperties).map(
    (_, index) => inputRefs.current[index] ?? createRef()
  );

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].current.focus(); 
    }
  }, []);

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
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleInputChange = (label, value) => {
    setInputValues({
      ...inputValues,
      [label]: value,
    });
    // input is on going, so set it false
    if (confirmSubmit) {
      setConfirmSubmit(false);
    }
  };

  const handleSubmit = () => {

    // Set error message
    if (isInputEmpty(inputValues)) {
      setErrorMessage('Please fill in at least one vital information to submit. Or you can skip this page.');
      return;
    }
    else {
      setErrorMessage('');
    }
   
    if (confirmSubmit) {              
      // prevent user to go back from Upload MedHis to Upload Vitals 
      navigation.dispatch(StackActions.replace('Upload MedHis'));
      setConfirmSubmit(false);  
    } 
    else {
      // Press first time, input is done, so set it true
      setConfirmSubmit(true);  
    }
  };

  const handleSkip = () => {
    navigation.dispatch(StackActions.replace('Upload MedHis')); 
  };

  // When press outside of the target button, it reverse to not confirm to submit
  const handleOutsidePress = () => {
    if(confirmSubmit) {
      setConfirmSubmit(false);
    }    
  };
  

  return (        
    <View style={{flex:1}}>
    <ScrollView style={{flex: 1}}>
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
    
      <View style={{marginTop: 20,marginBottom:20,width:'100%'}}>
        <Text style={{fontSize:35, fontWeight:400}}>Update My Vitals</Text>          
      </View> 

      <View style={{width:"100%"}}>
        {Object.entries(labelProperties).map(([label, properties], index) => (            
          <VitalsInputBoxWithLabel
            ref={inputRefs.current[index]}
            key={index}
            label={label}
            value={inputValues[label] || ''}
            unit={properties.unit}
            width={properties.width}
            onChange={(value) => handleInputChange(label, value)}   
            onFocus={handleOutsidePress}           
          />            
        ))}
      </View>

      {errorMessage ? <Text style={{color:'red', fontSize:18, marginVertical:10}}>{errorMessage}</Text> : null}  

      <View style={{width:'80%',alignItems:'center',marginTop:40,marginBottom:0}}>
        <TouchableOpacity style={confirmSubmit ? styles.confirmButton : styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {confirmSubmit ? 'Submit' : 'Confirm'}
          </Text>
        </TouchableOpacity>
      </View>

    <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:0}}>
        <TouchableOpacity style={styles.button} onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAwareScrollView>      
    </ScrollView>
    </View> 
  );
}
