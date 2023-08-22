import React, { useState, useContext } from "react";
import { FlatList, Text, TouchableOpacity, View, ScrollView} from 'react-native';

import styles from './styles.js';
import RequestMessage from './components/RequestMessage.js'; 
import RequestMessContext from "../../../context/context_requestMess.js";

export default function WaitlistMainScreen({navigation}) {

    const {requests, setRequests} = useContext(RequestMessContext);
    const handleAccept = (visit_id) => {
      navigation.navigate("Waitlist Response", { visit_id })
    };
  
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
                  chiefComplaint={request.chiefComplaint}
                  name={request.name}
                  time={request.time}
                  tag={request.tag}
                  onPress={() => handleAccept(request.visit_id)}
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