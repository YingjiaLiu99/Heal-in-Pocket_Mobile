import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './styles.js';

const VitalsCollectingForm = ({navigation}) => {
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
    navigation.navigate("Medical History");
  };

  const getDate = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">

      <View style={styles.banner}>
        <Text style={styles.bannerText}>Patient Vital Information</Text>
        <Text style={styles.bannerText}>{getDate()}</Text>
      </View>

      <Text style={styles.label}>Temperature(°F):</Text>
      <View style={styles.inputContainer_narrow}>
        <TextInput
          style={styles.input_narrow}
          value={temperature}
          onChangeText={(text) => setTemperature(text)}
          placeholder="Enter temperature"
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.label}>Blood Pressure(mmHG):</Text>
      <View style={styles.inputContainer_narrow}>
        <TextInput
          style={styles.input_narrow}
          value={bloodPressure}
          onChangeText={(text) => setBloodPressure(text)}
          placeholder="Enter blood pressure"
          keyboardType="numeric"
        />
    
      </View>

      <Text style={styles.label}>Pulse(bpm):</Text>
      <View style={styles.inputContainer_narrow}>
        <TextInput
          style={styles.input_narrow}
          value={pulse}
          onChangeText={(text) => setPulse(text)}
          placeholder="Enter pulse rate"
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.label}>Oxygen(%):</Text>
      <View style={styles.inputContainer_narrow}>
        <TextInput
          style={styles.input_narrow}
          value={oxygen}
          onChangeText={(text) => setOxygen(text)}
          placeholder="Enter oxygen level"
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.label}>Glucose(mg/dl):</Text>
      <View style={styles.inputContainer_narrow}>
      <TextInput
          style={styles.input_narrow}
          value={glucose}
          onChangeText={(text) => setGlucose(text)}
          placeholder="Enter glucose level"
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.label}>Pain Level(mg/dl)</Text>      
      <View style={styles.inputContainer_narrow}>
        <TextInput
          style={styles.input_narrow}
          value={painLevel}
          onChangeText={(text) => setPainLevel(text)}
          placeholder="Enter pain level"
        />
      </View>

      <Text style={styles.label}>Respiration (bpm):</Text>
      <View style={styles.inputContainer_narrow}>
        <TextInput
          style={styles.input_narrow}
          value={respiration}
          onChangeText={(text) => setRespiration(text)}
          placeholder="Enter respiration rate"
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.label}>Height(ft/in):</Text>
      <View style={styles.inputContainer_narrow}>
        <TextInput
          style={styles.input_narrow}
          value={heightFeet}
          onChangeText={(text) => setHeightFeet(text)}
          placeholder="Feet"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input_narrow}
          value={heightInches}
          onChangeText={(text) => setHeightInches(text)}
          placeholder="Inches"
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.label}>Weight(lbs):</Text>
      <View style={styles.inputContainer_narrow}>
        <TextInput
          style={styles.input_narrow}
          value={weight}
          onChangeText={(text) => setWeight(text)}
          placeholder="Enter weight"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
);
};
export default VitalsCollectingForm;
