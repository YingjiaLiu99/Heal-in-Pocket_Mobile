// export default function PatientProfileScreen({ route }) {
//   // Extract the patientData from route.params
//   const { patientData } = route.params;

//   return (
//     <View style={{ flex: 1, backgroundColor: '#DDE5FD' }}>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <Text style={styles.headerText}>Patient Profile</Text>

//         {/* Display patient information */}
//         <Text style={styles.infoText}>Name: {patientData.name}</Text>
//         <Text style={styles.infoText}>Date of Birth: {patientData.date_of_birth}</Text>
//         <Text style={styles.infoText}>Gender: {patientData.gender}</Text>
//         <Text style={styles.infoText}>Primary Care Provider: {patientData.primary_care_provider}</Text>
//         <Text style={styles.infoText}>Insurance: {patientData.insurance}</Text>
//         <Text style={styles.infoText}>Last Seen: {patientData.lastSeen}</Text>
//         {/* Add more fields as needed */}
//       </ScrollView>
//     </View>
//   );
// }

// import React from 'react';
// import { View, ScrollView, StyleSheet } from 'react-native';
// import BigInputBoxWithLabel from './components/BigInputBoxWithLabel'; // Adjust the import path as necessary

// export default function PatientProfileScreen({ route }) {
//   // Extract the patientData from route.params
//   const { patientData } = route.params;

//   // Format the date for display
//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (

    
    
//     <View style={styles.container}>
      

//         {/* Assuming BigInputBoxWithLabel takes label, value, and editable props */}
//         <BigInputBoxWithLabel
//           label="Name"
//           value={patientData.name}
//           editable={false}
//         />

//         <BigInputBoxWithLabel
//           label="Date of Birth"
//           value={patientData.date_of_birth}
//           editable={false}
//         />

//         <BigInputBoxWithLabel
//           label="Gender"
//           value={patientData.gender}
//           editable={false}
//         />

//         <BigInputBoxWithLabel
//           label="Primary Care Provider"
//           value={patientData.primary_care_provider}
//           editable={false}
//         />

//         <BigInputBoxWithLabel
//           label="Insurance"
//           value={patientData.insurance}
//           editable={false}
//         />

//         <BigInputBoxWithLabel
//           label="Last Seen"
//           value={patientData.lastSeen}
//           editable={false}
//         />

//         {/* Add more fields as needed */}
//     </View>
//  );
// }

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// backgroundColor: '#f2f2f2',
// },
// contentContainer: {
// padding: 20,
// },
// // Add additional styles if needed
// });



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
