import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './styles.js';

const PatientInfo = ({navigation}) => {
  const [allergies, setAllergies] = useState('');
  const [conditions, setConditions] = useState('');
  const [medications, setMedications] = useState('');
  const [smokingStatus, setSmokingStatus] = useState('');
  const [pregnancyStatus, setPregnancyStatus] = useState('');

  const handleUpdate = () => {
    console.log(`Allergies: ${allergies}`);
    console.log(`Conditions: ${conditions}`);
    console.log(`Medications: ${medications}`);
    console.log(`Smoking Status: ${smokingStatus}`);
    console.log(`Pregnancy Status: ${pregnancyStatus}`);
    navigation.navigate("PatientVitals");
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Patient Medical History</Text>
      </View>

      <Text style={styles.label}>Allergies:</Text>
      <TextInput
        style={styles.input}
        value={allergies}
        onChangeText={(text) => setAllergies(text)}
        placeholder="Enter allergies information"
        keyboardType="default"
      />

      <Text style={styles.label}>Chronic Conditions:</Text>
      <TextInput
        style={styles.input}
        value={conditions}
        onChangeText={(text) => setConditions(text)}
        placeholder="Enter chronic conditions information"
        keyboardType="default"
      />

      <Text style={styles.label}>Medications:</Text>
      <TextInput
        style={styles.input}
        value={medications}
        onChangeText={(text) => setMedications(text)}
        placeholder="Enter medications information"
        keyboardType="default"
      />

      <Text style={styles.label}>Smoking Status:</Text>
      <TextInput
        style={styles.input}
        value={smokingStatus}
        onChangeText={(text) => setSmokingStatus(text)}
        placeholder="Enter smoking status information"
        keyboardType="default"
      />

      <Text style={styles.label}>Pregnancy Status:</Text>
      <TextInput
        style={styles.input}
        value={pregnancyStatus}
        onChangeText={(text) => setPregnancyStatus(text)}
        placeholder="Enter pregnancy status information"
        keyboardType="default"
      />

      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};





export default PatientInfo;
