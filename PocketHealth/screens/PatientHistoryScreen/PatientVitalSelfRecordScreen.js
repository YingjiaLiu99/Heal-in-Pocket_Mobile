import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import styles from './styles.js';

const PatientVitals = ({navigation}) => {
  const [temperature, setTemperature] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [pulse, setPulse] = useState('');
  const [oxygen, setOxygen] = useState('');
  const [glucose, setGlucose] = useState('');
  const [painLevel, setPainLevel] = useState('');
  const [respiration, setRespiration] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [weight, setWeight] = useState('');

  const handleUpdate = () => {
    console.log(`Temperature: ${temperature} F`);
    console.log(`Blood Pressure: ${bloodPressure} mmHG`);
    console.log(`Pulse: ${pulse} bpm`);
    console.log(`Oxygen: ${oxygen}%`);
    console.log(`Glucose: ${glucose} mg/dl`);
    console.log(`Pain Level: ${painLevel}`);
    console.log(`Respiration: ${respiration} bpm`);
    console.log(`Height: ${heightFeet}'${heightInches}"`);
    console.log(`Weight: ${weight} lbs`);
    navigation.navigate("MyComplaintScreen");
  };

  const getDate = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Patient Vital Information</Text>
        <Text style={styles.bannerText}>{getDate()}</Text>
      </View>

      <Text style={styles.label}>Temperature(°F):</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={temperature}
          onChangeText={(text) => setTemperature(text)}
          placeholder="Enter temperature"
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.label}>Blood Pressure(mmHG):</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={bloodPressure}
          onChangeText={(text) => setBloodPressure(text)}
          placeholder="Enter blood pressure"
          keyboardType="numeric"
        />
    
      </View>

      <Text style={styles.label}>Pulse(bpm):</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={pulse}
          onChangeText={(text) => setPulse(text)}
          placeholder="Enter pulse rate"
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.label}>Oxygen(%):</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={oxygen}
          onChangeText={(text) => setOxygen(text)}
          placeholder="Enter oxygen level"
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.label}>Glucose(mg/dl):</Text>
      <View style={styles.inputContainer}>
      <TextInput
          style={styles.input}
          value={oxygen}
          onChangeText={(text) => setGlucose(text)}
          placeholder="Enter glucose level"
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.label}>Pain Level(mg/dl)</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={painLevel}
        onChangeText={(text) => setPainLevel(text)}
        placeholder="Enter pain level"
      />
    </View>

    <Text style={styles.label}>Respiration (bpm):</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={respiration}
        onChangeText={(text) => setRespiration(text)}
        placeholder="Enter respiration rate"
        keyboardType="numeric"
      />
    </View>

    <Text style={styles.label}>Height(ft/in):</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={heightFeet}
        onChangeText={(text) => setHeightFeet(text)}
        placeholder="Feet"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={heightInches}
        onChangeText={(text) => setHeightInches(text)}
        placeholder="Inches"
        keyboardType="numeric"
      />
    </View>

    <Text style={styles.label}>Weight(lbs):</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={(text) => setWeight(text)}
        placeholder="Enter weight"
        keyboardType="numeric"
      />
    </View>

    <Button title="Update" onPress={handleUpdate} />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 20,
},
banner: {
  backgroundColor: 'darkblue',
  alignItems: 'center',
  top: 0,
      left: 0,
      right: 0,
  padding: 20,
  marginBottom: 10,
},
bannerText: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 5,
},
label: {
  fontSize: 16,
  marginBottom: 5,
},
inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
},
input: {
  borderWidth: 1,
  borderColor: 'gray',
  borderRadius: 5,
  padding: 5,
  flex: 1,
  marginRight: 10,
},
});


export default PatientVitals;
