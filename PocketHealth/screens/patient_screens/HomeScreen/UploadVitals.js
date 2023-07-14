import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import VitalsInputBoxWithLabel from './components/VitalsInputBoxWithLabel';
import styles from './styles';


export default function UploadVitals({ navigation }) {
  const labelProperties = {
    'Pain Level': { unit: '', width: '95%' },
    'Temperature': { unit: 'F', width: '95%' },
    'Blood Pressure': { unit: 'mmHg', width: '95%' },
    'Pulse': { unit: 'bpm', width: '95%' },
    'Oxygen': { unit: '%', width: '95%' },
    'Glucose': { unit: 'mg/dl', width: '95%' },
    'Weight': { unit: 'Lbs', width: '95%' },
    // Add more entries as needed
  };

  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (label, value) => {
    setInputValues({
      ...inputValues,
      [label]: value,
    });
  };

  const handleReviewSubmit = () => {
    navigation.navigate('VitalReviewScreen', { inputValues });
  };

  const handleSkip = () => {
    navigation.navigate('Upload MedHis')
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
        <TouchableOpacity style={styles.button} onPress={handleReviewSubmit}>
          <Text style={styles.buttonText}>Review and Submit</Text>
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
