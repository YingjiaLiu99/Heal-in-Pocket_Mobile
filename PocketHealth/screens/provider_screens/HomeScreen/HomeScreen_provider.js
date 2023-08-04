import React, { useContext, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import styles from './styles';
import RequestMessage from './components/RequestMessage'; 
import RequestMessContext from "../../../context/context_requestMess";


export default function HomeScreen({navigation}) {

  const {requests, setRequests} = useContext(RequestMessContext);
  const handleAccept = (visit_id) => {
    navigation.navigate("Provider Response", { visit_id })
  };

  return (
    <View style={{flex: 1}}>
      <Text style={styles.heading}>Welcome, Doctor</Text>
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
        height:550
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
