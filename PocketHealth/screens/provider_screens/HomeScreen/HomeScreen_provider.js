import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import styles from './styles';
import RequestMessage from './components/RequestMessage'; 

export default function HomeScreen({navigation}) { 

  const initialRequests = [
    { buttonNoteText: "Experiencing constant dizziness, High fever and chills for two days, Feeling unusually thirsty and frequent urination", subText: "Jane Smith   07/24 10:30AM" },
    { buttonNoteText: "Severe abdominal pain,Sudden rash and itching on the arms", subText: "Bob Martin   07/23 02:15PM" },
    { buttonNoteText: "Persistent cough and runny nose", subText: "Alice Thompson   07/23 03:25PM" },
    { buttonNoteText: "Sharp chest pain after physical exertion, Sharp lower back pain radiating to legs", subText: "Sarah Clark   07/21 12:55PM" },    
    { buttonNoteText: "Unexplained weight loss and fatigue", subText: "Mary Lewis   07/20 11:00AM" },
    { buttonNoteText: "Frequent headaches and blurred vision", subText: "James White   07/19 02:10PM" },   
    { buttonNoteText: "Swelling and pain in the right knee, Shortness of breath and chest tightness", subText: "Robert Nelson   07/18 01:30PM" },
    { buttonNoteText: "Feeling nauseous with occasional vomiting", subText: "Jennifer Hall   07/17 08:45AM" },
    { buttonNoteText: "Persistent sore throat and difficulty swallowing", subText: "Jessica Young   07/15 05:20PM" },
  ];

  const [requests, setRequests] = useState(initialRequests);

  const handleAccept = (index) => {
    console.log('Accept pressed');
    navigation.navigate("Provider Response");
    const newRequests = [...requests];
    newRequests.splice(index, 1);
    setRequests(newRequests);
  };

  return (
    <View style={{flex: 1}}>
      <Text style={styles.heading}>Welcome, Dr. Aram</Text>
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
        height:580
      }}>
        <ScrollView>
          {requests.length > 0 ? (
            requests.map((request, index) => (
              <RequestMessage
                key={index}
                buttonNoteText={request.buttonNoteText}
                subText={request.subText}
                onPress={() => handleAccept(index)}
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
