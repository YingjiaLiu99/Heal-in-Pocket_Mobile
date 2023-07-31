import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles.js';
import PastVisitReport from './components/PastVisitReport.js';

export default function PastVisit( {navigation} ) {
    const patientInfo = [
        {label:'Name', value:'James Doe'},
        {label:'DOB', value:'11/11/1977'},
        {label:'location', value:'Street Corner Care'},
        {label:'DOS', value:'11/12/2022'},
    ];

    const providerReport = [
        {   
            label: 'Subjective', 
            value: 'Left hand wound leaking pus'
        },
        {   
            label: 'Objective', 
            value: 'Left hand wound infected, cleaned wound with saline and applied antibiotic ointment. Antibiotic ointment samples given to patients.'
        },
        {   
            label: 'Assessment / Plan', 
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
        {label: 'Temp', value: '99', unit: 'F'},
        {label: 'Pulse', value: '70', unit:'bpm'},
        {label: 'Oxygen', value: '98', unit:'%'},
        {label: 'BP', value: '120/80', unit:'mmHg'},
        {label: 'BG', value: '110', unit:'mg/dl'},        
    ];

    const chiefComplaint = {label: "Chief Complaint", value: 'Patient feels dizzy after diarrhea'};

    const dummyNote = {
        chiefComplaint: chiefComplaint,
        patientInfo:patientInfo,
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
                    <View key={index} style={{ alignItems: 'center' }}>
                      <PastVisitReport
                          key={index}
                          name={visit.name}
                          time={visit.time}
                          chiefComplaint={chiefComplaint}
                          providerReport={visit.visitNote.SOAPNote}
                          medicalData={visit.visitNote.medicalHistory}
                          vitalData={visit.visitNote.vitals}
                          patientInfo={visit.visitNote.patientInfo}
                          width={'95%'}
                      />
                    </View>
                  ))}
              </View>
          )}
          
      />
    </View>
  );
};