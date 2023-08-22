import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity, FlatList,} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles.js';
import SearchPastVistReport from "./components/SearchPastVistReport.js"


export default function PatientPastVisit( {route, navigation} ) {
    const { user } = route.params;

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
    {label: 'Temp', value: '99', unit: 'F'},
    {label: 'Pulse', value: '70', unit:'bpm'},
    {label: 'Oxygen', value: '98', unit:'%'},
    {label: 'BP', value: '120/80', unit:'mmHg'},
    {label: 'BG', value: '110', unit:'mg/dl'},        
  ];

  const patientInfo = [
    {label:'Name', value: `${user.firstName} ${user.lastName}` },
    {label:'DOB', value: user.dateOfBirth},
    {label:'location', value:'Street Corner Care'},
    {label:'DOS', value:'11/12/2022'},
  ];

  const chiefComplaint = {label: "Chief Complaint", value: 'Patient feels dizzy after diarrhea'};

  const FullData = [
    {
        title: "Nov, 12, 2022",
        patientInfo:patientInfo,
        chiefComplaint: chiefComplaint,
        providerReport: providerReport,
        medicalData: medicalHistory,
        vitalData: vitalData,

    },
    {
        title: "Nov, 8, 2022",
        patientInfo:patientInfo,
        chiefComplaint: chiefComplaint,
        providerReport: providerReport,
        medicalData: medicalHistory,
        vitalData: vitalData,            
    },
    {
        title: "Nov, 1, 2022",
        patientInfo:patientInfo,
        chiefComplaint: chiefComplaint,
        providerReport: providerReport,
        medicalData: medicalHistory,
        vitalData: vitalData,            
    },
];

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

        <View style={{marginTop: 0,marginBottom:10,width:'100%', paddingTop:10}}>
            <Text style={{fontSize:30, fontWeight:400}}>{user.firstName} {user.lastName}</Text> 
            <Text style={{fontSize: 20}}>DOB: {user.dateOfBirth}</Text>           
        </View>

        <View style={{alignItems: 'center',}}>
          <Text style={{fontSize: 25}}>Past Visits</Text>
        </View>

       <FlatList
          style={{width:"100%"}}
          data={FullData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>           
            <SearchPastVistReport                
                title={item.title}
                patientInfo={item.patientInfo}
                providerReport={item.providerReport}
                medicalHistory={item.medicalData}
                vitalData={item.vitalData}
                chiefComplaint={item.chiefComplaint}
                width={'95%'}
            />}            
        />
      

      </View>
 
  );
};
