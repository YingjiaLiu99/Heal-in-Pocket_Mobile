import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';


import styles from './styles.js';

export default function PatientHistoryScreen({navigation}) {

  const handleVitalHistory = () => {
    navigation.navigate('Vital History');
  };
  const handleMedicalHistory = () => {
    navigation.navigate('Medical History');
  };
  const handlePastVisit = () => {
    navigation.navigate('Past Visit');
  };  

  return (
    <View style={styles.container}>

      <View style={{alignItems:'center',marginTop: 60,marginBottom:60}}>
          <Text style={styles.titleText}>My Record</Text>
      </View>

      <View style={{width:'100%',alignItems:'center',marginTop:10,marginBottom:10}}>
        <TouchableOpacity style={styles.button} onPress={handleVitalHistory}>
          <Text style={styles.buttonText}>My Vital History</Text>
        </TouchableOpacity>
      </View>

      <View style={{width:'100%',alignItems:'center',marginTop:10,marginBottom:10}}>
        <TouchableOpacity style={styles.button} onPress={handleMedicalHistory}>
          <Text style={styles.buttonText}>My Medical History</Text>
        </TouchableOpacity>
      </View>

      <View style={{width:'100%',alignItems:'center',marginTop:10,marginBottom:10}}>
        <TouchableOpacity style={styles.button} onPress={handlePastVisit}>
          <Text style={styles.buttonText}>My Past Visits</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

