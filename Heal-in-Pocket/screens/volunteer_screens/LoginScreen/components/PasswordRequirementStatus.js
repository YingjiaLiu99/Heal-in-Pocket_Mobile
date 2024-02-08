// RequirementItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PasswordRequirementStatus = ({ isValid, text }) => (
  <View style={styles.requirementRow}>
    <Text style={styles.requirementText}>{text}</Text>
    <Text style={[styles.statusIcon, isValid ? styles.valid : styles.invalid]}>
    
      {isValid ? <AntDesign name="check" color = "green" size={20}/>: <AntDesign name="close" color = "red" size={20}/>}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  requirementRow: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
  },
  requirementText: {
    fontSize: 15,
    color: '#7C7C7C',
    // alignContent: 'left',
    flex: 1,
  },
  statusIcon: {
    fontSize: 20,
    marginLeft: 10,
    // alignContent: 'right',
  },
  valid: {
    color: 'green',
  },
  invalid: {
    color: 'red',
  },
});

export default PasswordRequirementStatus;
