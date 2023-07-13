import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import VitalsInputBoxWithLabel from './components/VitalsInputBoxWithLabel';

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
    <View style={styles.container}>
      <Text style={styles.title}>Upload Vitals</Text>
      <View style={styles.content}>
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleReviewSubmit}>
          <Text style={styles.buttonText}>Review and Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    marginTop: 20,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#395BCD',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '70%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
