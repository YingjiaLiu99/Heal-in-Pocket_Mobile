import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard, ScrollView} from "react-native";
import { SearchBar } from '@rneui/themed';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//import { useRoute } from '@react-navigation/native';

import styles from './styles.js';
import SearchPastVistReport from "./components/SearchPastVistReport.js"





export default function PatientPastVisit( {route, navigation} ) {
    //const route = useRoute();
    const { user } = route.params;

    const [errorMessage, setErrorMessage]= useState("");
    const [lockerNewFeature, setLocker] = useState(false);

    const providerReport = [
      {   
          label: 'Reason For consultation', 
          value: 'Left hand wound leaking pus'
      },
      {   
          label: 'Assessment', 
          value: 'Left hand wound infected, cleaned wound with saline and applied antibiotic ointment. Antibiotic ointment samples given to patients.'
      },
      {   
          label: 'Future Plan', 
          value: 'Use antibiotic ointment twice a day. Come back to street corner care next week.'
      },
  ];

  const medicalHistory = [
      {   
          label: 'Chronic Illness', 
          value: ' high blood pressure, diabetes'
      },
      {   
          label: 'Current Medication', 
          value: 'Metoprolol'
      },
      {
          label: 'Allergies', 
          value: 'Sulfa'
      },        
  ];

  const vitalData = [
      // {label: 'Pain Level(0~10,0-no pain,10-worst pain)', value: '8'},
      {label: 'Temp', value: '99'},
      {label: 'Oxygen', value: '98'},
      {label: 'Pulse', value: '70'},
      {label: 'BP', value: '120/80'},
      {label: 'Glucose', value: '110'},        
  ];

  const DateOfService = {label: 'Date of Service', value: '2023-07-21'};
  const location = {label: 'Care Location', value: 'Street Corner Care'};


  const dummyNote = {
    ProviderNote: providerReport,
    medicalHistory: medicalHistory,
    vitals: vitalData
  };

  const FullData = [
    {
        date: "Nov, 12, 2022",
        record: [
            { time: "10:00 am", visitNote: dummyNote},
            { time: "12:00 pm", visitNote: dummyNote},
        ],    
    },   

    {
        date: "Dec, 11, 2022",
        record: [
            { time: "9:00 am", visitNote: dummyNote},
        ],            
    }
  ];


  // Assume all user has same fullData, data retrieve by user id. 
  // const databaseByUser = [
  //   {
  //       name: "David Smith",
  //       data: FullData 
  //   },   

  //   {
  //     name: "Maria Rodriguez",
  //     data: FullData          
  //   },
  // ];
  



  const handleSubmit = () => {
      if (!lockerNewFeature) {
        setErrorMessage("New Feature is Coming :) ");
      }
      else {
        navigation.navigate('Create New Note');
      }
  }; 

  const [expandedDates, setExpandedDates] = useState([]);

  const toggleExpandedDate = (date) => {

    // If we toggle before and retoggle it, it remove certain date
    if (expandedDates.includes(date)) {
      const index = expandedDates.indexOf(date);
      const newExpandedDates = [...expandedDates];
      newExpandedDates.splice(index, 1);
      setExpandedDates(newExpandedDates);
    } else {
      setExpandedDates([...expandedDates, date]);
    }
  }


  return (
    <View style={styles.container}>
        <View style={{
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          padding: 10, 
          backgroundColor: '#DDE5FD', 
          zIndex: 999, 
          elevation: 3, 
          flexDirection: 'column',
          justifyContent: 'space-between',
          height:100
        }}>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{fontSize: 25, fontWeight: '500', width: '100%'}}>Name: {user.firstName} {user.lastName}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{fontSize: 20, fontWeight: '400', width: '45%'}}>DOB: {user.dateOfBirth}</Text>
            <Text style={{fontSize: 20, fontWeight: '400', width: '45%'}}>DOS: {DateOfService.value}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{fontSize: 20, fontWeight: '400', width: '100%'}}>Site: {location.value}</Text>
          </View>
        </View>

        {/* Change to user ID later */}
        {/* <Text>{user.firstName} {user.lastName}</Text>
        <Text>Date of Birth: {user.dateOfBirth}</Text> */}
        

        <FlatList>
          contentContainerStyle={{ paddingTop: 100 }}
          ListHeaderComponent={() => <Text>Patient Past Visit</Text>}
          data={FullData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
                <TouchableOpacity 
                    style={[styles.header, { backgroundColor: expandedDates.includes(item.date) ? 'white' : 'white' }]} 
                      onPress={() => toggleExpandedDate(item.date)}>
                  <Text style={styles.dateText}>{item.date}</Text>
                  <Icon name={expandedDates.includes(item.date) ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
                </TouchableOpacity>
                  {expandedDates.includes(item.date) && item.record.map((visit, index) => (
                      <SearchPastVistReport
                          key={index}
                          time={visit.time}
                          providerReport={visit.visitNote.providerReport}
                          medicalHistory={visit.visitNote.medicalHistory}
                          vitalData={visit.visitNote.vitalData}
                          width={'95%'}
                      />
                  ))}
            </View>
          )}



        </FlatList>
      


        {!lockerNewFeature ? <Text style={{color:'red', fontSize:18, marginBottom:10}}>{errorMessage}</Text> : null}

        <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:30}}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>
              {"Create New Note"}
            </Text>
          </TouchableOpacity>
        </View>

        
        



        
      </View>

        
  );
};
