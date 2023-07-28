import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles.js';
import PastVisitReport from './components/PastVisitReport.js';

export default function PastVisit( {navigation} ) {

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

    const medicalData = [
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

    const dummyNote = {
        SOAPNote: providerReport,
        medicalHistory: medicalData,
        vitals: vitalData
    };

    const FullData = [
        {
            date: "Nov, 12, 2022",
            people: [
                { name: "James Doe", time: "10:00 am", visitNote: dummyNote},
                { name: "Joey Price", time: "12:00 pm",  visitNote: dummyNote},
                { name: "Madison Powers", time: "4:00 pm",  visitNote: dummyNote},
            ],    
        },   

        {
            date: "Nov, 11, 2022",
            people: [
                { name: "James Zhang", time: "9:00 am", visitNote: dummyNote}, 
                { name: "Bill B", time: "5:00 pm", visitNote: dummyNote},
            ],            
        }
    ];

    const [expandedDates, setExpandedDates] = useState([]);

  const toggleExpandedDate = (date) => {
    if (expandedDates.includes(date)) {
      setExpandedDates(expandedDates.filter(expandedDate => expandedDate !== date));
    } else {
      setExpandedDates([...expandedDates, date]);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{marginTop: 20,marginBottom:30,width:'100%'}}>
          <Text style={{fontSize:35, fontWeight:400}}>My Past Visits</Text>            
      </View>
  
      <FlatList
          style={{width:"100%"}}
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
                  {expandedDates.includes(item.date) && item.people.map((visit, index) => (
                      
                      <PastVisitReport
                          key={index}
                          name={visit.name}
                          time={visit.time}
                          providerReport={visit.visitNote.SOAPNote}
                          medicalData={visit.visitNote.medicalHistory}
                          vitalData={visit.visitNote.vitals}
                          width={'95%'}
                      />
                  ))}
              </View>
          )}
          
      />
    </View>
  );
};