import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import AnnouncementBoard from './components/AnnouncementBoard';

import styles from './styles';

// Dummy annoucement data. NOTICE: The number of annoucements can increase but the length of the content should smaller than a certain amount
const AnnouncementData = [
  { title: 'Free healthcare for you!', date: '2023-07-01', content: 'Street Corner Care every Sunday 2-3:30pm at First Presbyterian Church of San Diego'},
  { title: 'Get your flu shot!', date: '2023-08-02', content: 'There is a flu going around, get free flu shot at CVS!' },
  { title: 'System Maintenance', date: '2023-07-03', content: 'Content: Due to system maintenance, Pocket Health will be shut down for use between 2-4pm on 9/1' },  
  //...
];

const HomeScreen = ({navigation}) => {
  

  const handleConsult = () => {
    navigation.navigate('My Chat');    
  };

  const handleUpdate = () => {
    console.log('Update pressed');
    navigation.navigate("Upload Vitals")
  };

  return (
    <View style={{flex: 1}}>
      <Text style={styles.heading}>Welcome, James</Text>

      <Text style={{fontSize:20,marginLeft:20}}>Announcement Board</Text>

      <AnnouncementBoard items={AnnouncementData} />
      
      {/* patient's chat function still under dev */}
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

