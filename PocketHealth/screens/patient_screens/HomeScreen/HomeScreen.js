import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import AnnouncementBoard from './components/AnnouncementBoard';

import styles from './styles';

// Dummy annoucement data. NOTICE: The number of annoucements can increase but the length of the content should smaller than a certain amount
const AnnouncementData = [
  { title: 'Job Opportunity', date: '2023-07-01', content: 'Nearby Chinese restaurant is hiring! If you are interested please contact this phone number: 858-361-4927' },
  { title: 'Event Canceled!', date: '2023-07-02', content: 'The Sundays church event is canceled! Sorry for any inconvenience.' },
  { title: 'Location Changed!', date: '2023-07-03', content: 'Our regular meeting location has been changed to XXX st' },  
  //...
];

const HomeScreen = () => {
  

  const handleConsult = () => {
    console.log('Consult pressed');
  };

  const handleUpdate = () => {
    console.log('Update pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome, James</Text>

      <Text style={{fontSize:20,marginLeft:20}}>Announcement Board</Text>

      <AnnouncementBoard items={AnnouncementData} />
      
      <View style={styles.ButtonOuterContainer}>
        <Text style={styles.ButtonNotesText}>Begin New Consult</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleConsult}
        >
          <Text style={styles.buttonText}>Consult</Text>
        </TouchableOpacity>
      </View>
      

      <View style={styles.ButtonOuterContainer}>
        <Text style={styles.ButtonNotesText}>Update Health Info</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleUpdate}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

