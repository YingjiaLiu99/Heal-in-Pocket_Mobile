import React, { useState, useRef, useContext } from 'react';
import { View, TouchableOpacity, Text, ScrollView} from 'react-native';
import styles from './styles';

import InputBoxWithLabel from './components/InputBoxWithLabel';
import BigInputBoxWithLabel from './components/BigInputBoxWithLabel';
import ProviderInputBox from './components/ProviderInputBox';
import VisitDataContext from '../../../context/context_VisitData';
import RequestMessContext from '../../../context/context_requestMess';

export default function WaitlistResponseScreen({route, navigation}) { 
  const { visit_id } = route.params;
  const { visitData, setVisitData } = useContext(VisitDataContext);
  const { requests, setRequests } = useContext(RequestMessContext);

  const visit = visitData.find(visit => visit.patients.find(patient => patient.visit_id === visit_id));
  const patient = visit ? visit.patients.find(patient => patient.visit_id === visit_id) : null;

  const patientInfo = patient.visitNote.patientInfo;
  const medicalHistory = patient.visitNote.medicalHistory;
  const vitalData = patient.visitNote.vitalData;
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 
  const [subjective, setSubjective] = useState('');
  const [objective, setObjective] = useState('');
  const [assessment, setAssessment] = useState(''); 
  const subjectiveRef = useRef(null);
  const objectiveRef = useRef(null);
  const assessmentRef = useRef(null);

  const [chiefComplaint, setChiefComplaint] = useState(patient.visitNote.chiefComplaint);
  const [medicalHistoryValue, setMedicalHistoryValue] = useState(medicalHistory[0].value);
  const [medicationAllergies, setMedicationAllergies] = useState(medicalHistory[1].value + ' [Allergies: ' + medicalHistory[2].value + ']');
  const [providerName, setProviderName] = useState(''); 
  const [scribeName, setScribeName] = useState('');


  const [vitalValue1, setVitalValue1] = useState(vitalData[0].value);
  const [vitalValue2, setVitalValue2] = useState(vitalData[1].value);
  const [vitalValue3, setVitalValue3] = useState(vitalData[2].value);
  const [vitalValue4, setVitalValue4] = useState(vitalData[3].value);
  const [vitalValue5, setVitalValue5] = useState(vitalData[4].value);
  const [vitalValue6, setVitalValue6] = useState(vitalData[5].value);



const handleSubmit = () => {
  // if(assessment === '' || subjective === '' || objective === ''){
  //   setErrorMessage('Please fill in fields.');      
  // }
  if (confirmSubmit) {            
    // publish the visit 
    const updatedVisitData = visitData.map(visit => ({
      ...visit,
      patients: visit.patients.map(patient => 
        patient.visit_id === visit_id ? {
          ...patient,
          published: false,
          visitNote: {
            // ...patient.visitNote,
            ...patient.visitNote,
            provider_name: providerName,
            scribe_name:scribeName,
            chiefComplaint: chiefComplaint,
            medicalHistory: [
              ...patient.visitNote.medicalHistory.slice(0, 1), // Keep the initial data
              { ...patient.visitNote.medicalHistory[0], value: medicalHistoryValue }, // Update the first value
              { ...patient.visitNote.medicalHistory[1], value: medicationAllergies.split(' [Allergies: ')[0] }, // Update the second value by splitting the combined field
              { ...patient.visitNote.medicalHistory[2], value: medicationAllergies.split(' [Allergies: ')[1].split(']')[0] }, // Update the third value by splitting the combined field
            ],
            vitalData: [
              { ...patient.visitNote.vitalData[0], value: vitalValue1 },
              { ...patient.visitNote.vitalData[1], value: vitalValue2 },
              { ...patient.visitNote.vitalData[2], value: vitalValue3 },
              { ...patient.visitNote.vitalData[3], value: vitalValue4 },
              { ...patient.visitNote.vitalData[4], value: vitalValue5 },
              { ...patient.visitNote.vitalData[5], value: vitalValue6 },
            ],
            providerReport: [
    
              {label: 'Subjective', value: subjective},
              {label: 'Objective', value: objective},
              {label: 'Assessment / Plan', value: assessment},
           
            ]
          }
        } : patient
      )
    }));
    setVisitData(updatedVisitData);
    navigation.navigate('Success');
  } 
  else {
    // Press first time, input is done, so set it true
    setConfirmSubmit(true);  
  }
}
 
  const handleOutsidePress = () => {
    if(confirmSubmit) {
      setConfirmSubmit(false);
    }    
  }; 

return (
  <View style={{flex:1}}>
    <View style={{
      position: 'absolute',              
      paddingTop: 0, 
      backgroundColor: '#DDE5FD', 
      zIndex: 999, 
      elevation: 3, 
      flexDirection: 'column',
      justifyContent: 'space-between',
      height:85
    }}>
      <View>

      <View style={{ flexDirection: 'row', paddingLeft:5}}>
        <Text style={{fontSize: 25, fontWeight: '500',width:'100%',}}>{patientInfo[0].value}</Text>
      </View>              
      
      <View style={{ flexDirection: 'row', paddingLeft:5}}>
        <Text style={{fontSize: 20, fontWeight: '400', width: '45%'}}>DOB: {patientInfo[1].value}</Text>
      </View>

      <View style={{ flexDirection: 'row', paddingLeft:5}}>
        <Text style={{fontSize: 20, fontWeight: '400', width: '100%'}}>{patientInfo[2].value} {'['} {patientInfo[3].value} {']'}</Text>
      </View>

      </View>

    </View>

    <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={
      {
        alignItems: 'center',      
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical:0,      
        marginTop: 0,
        marginHorizontal:0, 
        paddingTop: 85
      }}>
    
      <Text style={{fontSize:27}}>Visit Note</Text>

      <BigInputBoxWithLabel
        label='Chief Complaint'
        value={chiefComplaint}
        width="100%"
        onChange={(text) => setChiefComplaint(text)}
      />      

      <View style={{width:'100%'}}>
        <ProviderInputBox 
          label="Subjective"
          value={subjective}
          width="100%"
          placeholder="Click to Enter Your Subjective ..."
          onChangeText={(text) => setSubjective(text)}
          onFocus={handleOutsidePress}
          autoFocus={true}
          returnKeyType={"next"}
          onSubmitEditing={() => objectiveRef.current.focus()}
          ref={subjectiveRef}
        />

        <BigInputBoxWithLabel
          label='Medical History'
          value={medicalHistoryValue}
          width="100%"
          onChange={(text) => setMedicalHistoryValue(text)}
      />

      <BigInputBoxWithLabel
        label='Current Medication/Allergies'
        value={medicationAllergies}
        width="100%"
        onChange={(text) => {
          // This is a bit more complex due to the formatting. If you simply want to edit the medications or allergies separately, consider splitting this into two fields.
          setMedicationAllergies(text);
        }}
      />
      </View>

      <View style={{width:'100%', flexDirection: 'row', justifyContent: 'space-between',}}>

        <InputBoxWithLabel 
        label={vitalData[0].label}
        value={vitalValue1}
        onChange={(text) => setVitalValue1(text)}
        unit={vitalData[0].unit}
        width='32%'
      />

      <InputBoxWithLabel 
        label={vitalData[1].label}
        value={vitalValue2}
        onChange={(text) => setVitalValue2(text)}
        unit={vitalData[1].unit}
        width='32%'
      />

      <InputBoxWithLabel 
        label={vitalData[2].label}
        value={vitalValue3}
        onChange={(text) => setVitalValue3(text)}
        unit={vitalData[2].unit}
        width='32%'
      />
      </View>

      <View style={{width:'100%', flexDirection: 'row', justifyContent: 'space-between',}}>

        <InputBoxWithLabel 
        label={vitalData[3].label}
        value={vitalValue4}
        onChange={(text) => setVitalValue4(text)}
        unit={vitalData[3].unit}
        width='32%'
      />

      <InputBoxWithLabel 
        label={vitalData[4].label}
        value={vitalValue5}
        onChange={(text) => setVitalValue5(text)}
        unit={vitalData[4].unit}
        width='32%'
      />

      <InputBoxWithLabel 
        label={vitalData[5].label}
        value={vitalValue6}
        onChange={(text) => setVitalValue6(text)}
        unit={vitalData[5].unit}
        width='32%'
      />
      </View>


      <View style={{width:'100%'}}>
        <ProviderInputBox 
          label="Objective"
          value={objective}
          width="100%"
          placeholder="Click to Enter Your Objective ..."
          onChangeText={(text) => setObjective(text)}
          onFocus={handleOutsidePress}
          ref={objectiveRef}
          returnKeyType={"next"}
          onSubmitEditing={() => assessmentRef.current.focus()}
        />

        <ProviderInputBox 
          label="Assessment / Future Plan"
          value={assessment}
          width="100%"
          placeholder="Click to Enter Your Assessment/Future Plan ..."
          onChangeText={(text) => setAssessment(text)}
          onFocus={handleOutsidePress}
          ref={assessmentRef}
          returnKeyType={"done"}
        />

        <BigInputBoxWithLabel
        label='Provider Name'
        value={providerName}  // You'll need to manage this state variable similarly as others
        width="100%"
        onChange={(text) => setProviderName(text)}
        editable={false}
      />

      <BigInputBoxWithLabel
        label='Scribe Name'
        value={scribeName}  // You'll need to manage this state variable similarly as others
        width="100%"
        onChange={(text) => setScribeName(text)}
        editable={false}
      />
      </View>
      


      {errorMessage ? <Text style={{color:'red', fontSize:18, marginBottom:10}}>{errorMessage}</Text> : null}

      <View style={{width:'80%',alignItems:'center',marginTop:10,marginBottom:20}}>
        <TouchableOpacity style={confirmSubmit ? styles.confirmButton : styles.normalButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {confirmSubmit ? 'Submit' : 'Confirm'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* reserve empty space for keyboard: */}
      <View style={{ height: 300 }} />

    </ScrollView>          
  </View>
  );
};