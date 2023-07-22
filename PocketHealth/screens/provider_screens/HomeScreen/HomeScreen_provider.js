// import React from "react";
// import { Text, View, TouchableOpacity, ScrollView } from "react-native";
// import { useState } from "react";
// import { useNavigation } from '@react-navigation/native';
// import styles from './styles';
// import RequestMessage from './components/RequestMessage'; // import the component

// export default function HomeScreen({navigaton}) {

//   const navigation = useNavigation();
//   const handleAccept = () => {
//     console.log('Accept pressed');
//     navigation.navigate("Provider Response")
//   };

//   return (
//       <View style={{flex: 1}}>

//         <Text style={styles.heading}>Welcome, Joan</Text>
//         <Text style={{fontSize:25,marginLeft:20,marginLeft: 20,  textAlign: 'center', }}>Current Request </Text>
//         <Text style={{fontSize:15,marginLeft:20, marginBottom:20,color:'gray', textAlign: 'center' }}>15 patients are waiting</Text>

       
//       <ScrollView>
//   <RequestMessage
//   buttonNoteText="Feeling short of breath after running"
//   subText="John Doe   07/23 01:45PM"
//   onPress={handleAccept}
// />

// <RequestMessage
//   buttonNoteText="Severe headache for three days"
//   subText="Jane Smith   07/22 09:30AM"
//   onPress={handleAccept}
// />

// <RequestMessage
//   buttonNoteText="Sharp abdominal pain after eating"
//   subText="Robert Johnson   07/22 02:10PM"
//   onPress={handleAccept}
// />

// <RequestMessage
//   buttonNoteText="Experiencing frequent dizziness"
//   subText="Patricia Williams   07/21 08:00AM"
//   onPress={handleAccept}
// />

// <RequestMessage
//   buttonNoteText="Persisting cough for a week"
//   subText="James Brown   07/20 04:50PM"
//   onPress={handleAccept}
// />

// <RequestMessage
//   buttonNoteText="High fever and severe body aches"
//   subText="Jennifer Davis   07/19 05:20PM"
//   onPress={handleAccept}
// />

// <RequestMessage
//   buttonNoteText="Experiencing chest pain and nausea"
//   subText="Michael Miller   07/18 01:30PM"
//   onPress={handleAccept}
// />

// <RequestMessage
//   buttonNoteText="Persistent sore throat and difficulty swallowing"
//   subText="Jessica Wilson   07/17 10:00AM"
//   onPress={handleAccept}
// />

// <RequestMessage
//   buttonNoteText="Sudden rash on the face and neck"
//   subText="Jacob Thomas   07/16 02:45PM"
//   onPress={handleAccept}
// />

// <RequestMessage
//   buttonNoteText="Severe back pain radiating to the legs"
//   subText="Sarah Jackson   07/15 04:30PM"
//   onPress={handleAccept}
// />

// <RequestMessage
//   buttonNoteText="Blurred vision and frequent headaches"
//   subText="William Garcia   07/14 11:10AM"
//   onPress={handleAccept}
// />

// <RequestMessage
//   buttonNoteText="Frequent urination and unusual thirst"
//   subText="Mary Martinez   07/13 12:50PM"
//   onPress={handleAccept}
// />

// <RequestMessage
//   buttonNoteText="Unexplained weight loss and fatigue"
//   subText="David Rodriguez   07/12 03:20PM"
//   onPress={handleAccept}
// />

// <RequestMessage
//   buttonNoteText="Swelling and redness in the right ankle"
//   subText="Elizabeth Lewis   07/11 09:45AM"
//   onPress={handleAccept}
// />

// <RequestMessage
//   buttonNoteText="Nausea and vomiting for two days"
//   subText="Joseph Lee   07/10 05:30PM"
//   onPress={handleAccept}
// />
// </ScrollView>


// </View>
//   );
// };

import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import RequestMessage from './components/RequestMessage'; // import the component

export default function HomeScreen({navigaton}) {
  const navigation = useNavigation();

  const initialRequests = [
    { buttonNoteText: "Experiencing constant dizziness", subText: "Jane Smith   07/24 10:30AM" },
    { buttonNoteText: "Severe abdominal pain", subText: "Bob Martin   07/23 02:15PM" },
    { buttonNoteText: "Persistent cough and runny nose", subText: "Alice Thompson   07/23 03:25PM" },
    { buttonNoteText: "High fever and chills for two days", subText: "Michael Robinson   07/22 07:45PM" },
    { buttonNoteText: "Sharp chest pain after physical exertion", subText: "Sarah Clark   07/21 12:55PM" },
    { buttonNoteText: "Sudden rash and itching on the arms", subText: "David Rodriguez   07/21 04:30PM" },
    { buttonNoteText: "Unexplained weight loss and fatigue", subText: "Mary Lewis   07/20 11:00AM" },
    { buttonNoteText: "Frequent headaches and blurred vision", subText: "James White   07/19 02:10PM" },
    { buttonNoteText: "Feeling unusually thirsty and frequent urination", subText: "Patricia Harris   07/19 06:15PM" },
    { buttonNoteText: "Swelling and pain in the right knee", subText: "Robert Nelson   07/18 01:30PM" },
    { buttonNoteText: "Feeling nauseous with occasional vomiting", subText: "Jennifer Hall   07/17 08:45AM" },
    { buttonNoteText: "Sharp lower back pain radiating to legs", subText: "William Allen   07/16 03:30PM" },
    { buttonNoteText: "Persistent sore throat and difficulty swallowing", subText: "Jessica Young   07/15 05:20PM" },
    { buttonNoteText: "Severe toothache and gum swelling", subText: "Thomas King   07/15 10:15AM" },
    { buttonNoteText: "Shortness of breath and chest tightness", subText: "Emily Wright   07/14 12:45PM" }
    
   
    // add other requests here
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
        <Text style={styles.heading}>Welcome, Joan</Text>
        <Text style={{fontSize:25,marginLeft:20,marginLeft: 20,  textAlign: 'center', }}>Current Request </Text>
        <Text style={{fontSize:15,marginLeft:20, marginBottom:20,color:'gray', textAlign: 'center' }}>{requests.length} patient(s) are waiting</Text>

        <ScrollView>
          {requests.map((request, index) => (
            <RequestMessage
              key={index}
              buttonNoteText={request.buttonNoteText}
              subText={request.subText}
              onPress={() => handleAccept(index)}
            />
          ))}
        </ScrollView>
      </View>
  );
};
