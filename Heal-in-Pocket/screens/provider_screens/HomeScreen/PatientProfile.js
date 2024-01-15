import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BigInputBoxWithLabel from './components/BigInputBoxWithLabel'; // Adjust the import path as necessary

export default function PatientProfileScreen({ route }) {
  // Extract the patientData from route.params
  const { patientData } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Title "Patient Profile" */}
        <Text style={styles.headerText}>Patient Profile</Text>

        {/* Display patient information */}
        <BigInputBoxWithLabel
          label="Name"
          value={patientData.name}
          editable={false}
        />
        <BigInputBoxWithLabel
          label="Date of Birth"
          value={patientData.date_of_birth} // Assuming the key is 'dateOfBirth'
          editable={false}
        />
    <BigInputBoxWithLabel
      label="Gender"
      value={patientData.gender}
      editable={false}
    />
    <BigInputBoxWithLabel
      label="Insurance"
      value={patientData.insurance}
      editable={false}
    />
    <BigInputBoxWithLabel
      label="Last Seen"
      value={patientData.last_seen}
      editable={false}
    />
    {/* Add more fields as needed */}
  </ScrollView>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#DDE5FD',
},
contentContainer: {
padding: 20,
},
headerText: {
fontSize: 27,
textAlign: 'center',
marginVertical: 20, // Adjust the margin as needed to reduce the space
},
// Add additional styles if needed
});
