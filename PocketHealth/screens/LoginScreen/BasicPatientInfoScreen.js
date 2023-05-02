
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './styles.js';

const BasicPatientInfoScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');

  // API TO DB GOES INSIDE
  const handleSubmit = () => {
    if (!name ) {
      alert('Please enter your name');
    } else if (age &(isNaN(parseInt(age)))) {
      alert('Please enter a valid age');
    } else if (typeof name !== "string" ) {
    alert('Please enter a valid name');
      }
    else {
      console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}, Phone: ${phone}`);
      navigation.navigate("Login")
    }
    

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Basic Information</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
        keyboardType="default"
      />

      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={(text) => setAge(text)}
        placeholder="Enter your age"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Gender:</Text>
      <TextInput
        style={styles.input}
        value={gender}
        onChangeText={(text) => setGender(text)}
        placeholder="Enter your gender"
        keyboardType="default"
      />

      <Text style={styles.label}>Phone:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={(text) => setPhone(text)}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default BasicPatientInfoScreen;

