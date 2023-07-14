import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import InputBoxWithLabel from './components/VitalsInputBoxWithLabel';
import styles from './styles';


export default function VitalReviewScreen({ route, navigation }) {
  const { inputValues } = route.params;
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
  const [editedValues, setEditedValues] = useState(inputValues);

  useEffect(() => {
    setEditedValues(inputValues);
  }, [inputValues]);

  const handleInputChange = (label, value) => {
    setEditedValues({
      ...editedValues,
      [label]: value,
    });
  };

  const handleSaveToDatabase = () => {
    // TODO: Implement logic to save editedValues to the database
    console.log('Saving to database:', editedValues);
    navigation.navigate("Upload MedHis")
    // You can also navigate to a success screen or display a message confirming the save
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>

      <View style={{marginTop: 20,marginBottom:30,width:'100%'}}>
        <Text style={{fontSize:35, fontWeight:400}}>Review Entered Vitals</Text>          
      </View>

      <View style={{width:"100%"}}>
        {Object.entries(labelProperties).map(([label, properties], index) => (
          <InputBoxWithLabel
            key={index}
            label={label}
            value={editedValues[label] || ''}
            unit={properties.unit}
            width={properties.width}
            onChange={(text) => handleInputChange(label, text)}
          />
        ))}
      </View>
      
      <View style={{width:'80%',alignItems:'center',marginTop:30,marginBottom:0}}>
        <TouchableOpacity style={styles.button} onPress={handleSaveToDatabase}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAwareScrollView>
  );
};
