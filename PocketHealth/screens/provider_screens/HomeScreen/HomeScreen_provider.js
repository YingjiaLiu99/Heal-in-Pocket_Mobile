import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import AnnouncementBoard from './components/AnnouncementBoard';

export default function HomeScreen({navigaton}) {
  // Dummy annoucement data. NOTICE: The number of annoucements can increase but the length of the content should smaller than a certain amount
  const AnnouncementData = [
    { title: 'Free healthcare for you!', date: '2023-07-01', content: 'Street Corner Care every Sunday 2-3:30pm at First Presbyterian Church of San Diego'},
    { title: 'Get your flu shot!', date: '2023-08-02', content: 'There is a flu going around, get free flu shot at CVS!' },
    { title: 'System Maintenance', date: '2023-07-03', content: 'Content: Due to system maintenance, Pocket Health will be shut down for use between 2-4pm on 9/1' },  
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
          <Text style={styles.ButtonNotesText}>New Patient: James Carter - Dizzy after diarrhea</Text>
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