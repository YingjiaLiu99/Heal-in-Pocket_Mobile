import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import AnnouncementBoard from './components/AnnouncementBoard';

export default function HomeScreen({navigaton}) {
  // Dummy annoucement data. NOTICE: The number of annoucements can increase but the length of the content should smaller than a certain amount
const AnnouncementData = [
  { title: 'Job Opportunity', date: '2023-07-01', content: 'Nearby Chinese restaurant is hiring! If you are interested please contact this phone number: 858-361-4927' },
  { title: 'Event Canceled!', date: '2023-07-02', content: 'The Sundays church event is canceled! Sorry for any inconvenience.' },
  { title: 'Location Changed!', date: '2023-07-03', content: 'Our regular meeting location has been changed to XXX st' },  
  //...
];

  const navigation = useNavigation();
  const handleAccept = () => {
    console.log('Accept pressed');
    navigation.navigate("Provider Response")
  };

  return (
      <View style={{flex: 1}}>

        <Text style={styles.heading}>Welcome, Joan</Text>

        <View style={{alignItems: 'center',marginBottom:0,marginVertical:0}}>
          <Text style={{fontSize:22}}>Announcement Board</Text>
        </View>

        <AnnouncementBoard items={AnnouncementData} />
        <Text style={{fontSize:25,marginLeft:20 }}>Current Request </Text>
        <Text style={{fontSize:15,marginLeft:20, marginBottom:20,color:'gray' }}>15 patients are waiting</Text>

        <View style={styles.ButtonOuterContainer}>
          <Text style={styles.ButtonNotesText}>New patient</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleAccept}
          >
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={()=>{console.log("Reject pressed")}}
          >
            <Text style={styles.buttonText}>Reject</Text>
          </TouchableOpacity>
        </View>

      </View>
  );
};