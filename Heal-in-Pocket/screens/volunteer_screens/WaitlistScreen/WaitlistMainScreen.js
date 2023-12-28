import React, { useState, useCallback } from "react";
import { Text, TouchableOpacity, View, ScrollView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

import styles from './styles.js';
import RequestMessage from './components/RequestMessage.js';
import baseURL from '../../../common/baseURL';
import moment from 'moment-timezone';

export default function WaitlistMainScreen({navigation}) {
  
  const [requests, setRequests] = useState([]);
  
  // It should consider time zone issue, ignore for now

  const handleAccept = (request_id) => {
    navigation.navigate("Waitlist Response", { request_id })    
  };

  // Parse time by timezone, default is "America/Los_Angeles"
  const convertToTimeZone = (dateTimeString, timeZone) => {
    const localTime = moment.utc(dateTimeString).tz(timeZone);
    return {
      date: localTime.format('YYYY-MM-DD'),
      time: localTime.format('HH:mm:ss')
    };
  };

  /**
   * 1. fetch and update immediately when you navigate to this screen;
   * 2. if you are in this screen, fetch and update every 5 second;
   * 3. if you are not in this screen, stop fetching and updating
   */
  useFocusEffect(
    React.useCallback(() => {
      let isActive = true; // Flag to prevent state update if component is unmounted

      const fetchRequests  = async ()=> {
        try{
          const response = await axios.get(`${baseURL}request`);
          setRequests(response.data.requests);            
        } catch (error) {
          if (error.response) {
            // The request was successfully sent to the server and the server returned an error response. 
            console.log('Backend Error:', error.response.data.message);
          } else if (error.request) {
            // The request was sent, but no response was received from the server. This can be due to network issues, server downtime, etc.
            console.log('Network Error:', error.message);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error:', error.message);
          }
        }
      };

      fetchRequests(); // Fetch immediately when the screen comes into focus

      const intervalId = setInterval(fetchRequests, 2500); // Continuously fetch every 2.5 seconds
    
      return () => {
        clearInterval(intervalId); // Clear interval when the screen goes out of focus
        isActive = false; // Prevent state update on unmounted component
      };

    }, [])
  );
  
  return (
    <View style={{flex: 1}}>
      <Text style={styles.heading}>Welcome!</Text>
      <Text style={{fontSize:25,textAlign: 'center', }}>Current Request </Text>
      <Text style={{fontSize:18,color:'gray', textAlign: 'center' }}>{requests.length} patient(s) are waiting</Text>
      
      {/* This is the waiting line container: */}
      <View style={{
        borderRadius:20,
        borderWidth:2,
        backgroundColor:'#FFFFFF',
        marginTop:5,
        marginHorizontal:15,
        paddingTop:10,
        paddingHorizontal:0,
        height:430
      }}>
        <ScrollView>
          {requests.length > 0 ? (
            requests.map((request, index) => (
              <RequestMessage
                key={index}
                chiefComplaint={request.chief_complaint}
                name={request.patient_name}
                time={
                  convertToTimeZone(
                    request.createdAt.toString(), "America/Los_Angeles").time}
                tag={request.new_patient ? "New Patient" : "Follow Up"}
                onPress={() => handleAccept(request.id)}
              />
            ))
          ) : (
            <View style={{ alignItems: 'center', justifyContent: 'center',marginTop:30 }}>
              <Text style={{fontSize: 30, color: '#000000'}}>No patient request yet...</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};