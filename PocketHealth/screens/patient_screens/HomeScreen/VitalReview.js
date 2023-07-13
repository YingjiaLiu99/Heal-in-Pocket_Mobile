import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import InputBoxWithLabel from './components/VitalsInputBoxWithLabel';

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
    <View style={styles.container}>
      <Text style={styles.title}>Review Your Input</Text>
      <ScrollView>
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
      </ScrollView>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveToDatabase}>
        <Text style={styles.saveButtonText}>Submit</Text>
      </TouchableOpacity>
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
  saveButton: {
    backgroundColor: '#395BCD',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});
