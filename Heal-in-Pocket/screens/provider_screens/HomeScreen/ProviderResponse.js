import React, { useState, useRef, useContext,useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import styles from './styles';
import axios from 'axios';
import baseURL from '../../../common/baseURL';

import InputBoxWithLabel from './components/InputBoxWithLabel';
import BigInputBoxWithLabel from './components/BigInputBoxWithLabel';
import ProviderInputBox from './components/ProviderInputBox';
import VisitDataContext from '../../../context/context_VisitData';
import RequestMessContext from '../../../context/context_requestMess';

export default function ProviderResponseScreen({route, navigation}) { 
  const { visit_id, record_id } = route.params;
  const [record, setRecord] = useState('');

  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 
  const [subjective, setSubjective] = useState('');
  const [objective, setObjective] = useState('');
  const [assessment, setAssessment] = useState(''); 
  const subjectiveRef = useRef(null);
  const objectiveRef = useRef(null);
  const assessmentRef = useRef(null);

  const [chronic_condition, setChronic_condition] = useState("");
  const [current_medications, setCurrent_medications] = useState("");
  const [allergies, setAllergies] = useState("");
  const [chiefComplaint, setChiefComplaint] = useState("");
  const [medicalHistoryValue, setMedicalHistoryValue] = useState(chronic_condition);
  const [medicationAllergies, setMedicationAllergies] = useState(current_medications + ' [Allergies: ' + allergies + ']');
  const [providerName, setProviderName] = useState(''); 
  const [scribeName, setScribeName] = useState('');

  const [temperature, setTemperature] = useState('');
  const [systolic_blood_pressure, setSystolic_bp] = useState('');
  const [diastolic_blood_pressure, setDiastolic_bp] = useState('');
  const [pulse, setPulse] = useState('');
  const [oxygen, setOxygen] = useState('');
  const [glucose, setGlucose] = useState('');



  const deleteRequest = async(visit_id) => {
    try {
      const response = await axios.delete(`${baseURL}request/${visit_id}`);

      if (response.status !== 200) {
          throw new Error(response.data.message || 'Failed to delete.');
      }

      return response.data;

      //Alert.alert('Success', 'Request delete success');

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
  }
 
  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const response = await axios.get(`${baseURL}record/${record_id}`);
        const record = response.data.record
        // setRecord(response.data.record);
        if(record && record.vitals){
          setRecord(record)
          setTemperature(record.vitals.temperature);
          setSystolic_bp(record.vitals.systolic_blood_pressure);
          setDiastolic_bp(record.vitals.diastolic_blood_pressure);
          setPulse(record.vitals.pulse);
          setOxygen(record.vitals.oxygen);
          setGlucose(record.vitals.glucose);
          // setting 
        }
        console.log(record);
      } catch (error) {
        console.error('Error fetching record:', error);
      }
    };
    fetchRecord();
  }, []);

  const updateRecord = async (data) => {
    try {
      const response = await axios.put(`${baseURL}record/${record_id}`, data);
      console.log("response is:", response);
      console.log("response data is: ", response.data);
      return response.data;
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
  }



const handleSubmit = async () => {

  if (confirmSubmit) {            

    // try {
    //   const deleteRequest_ = await deleteRequest(visit_id);
    //   console.log("Request removed:", deleteRequest_);
    // } catch (error) {
    //   console.error("Failed to send data to server:", error);   
    // } 

    let response;
    try{
      response = await axios.get(`${baseURL}record/${record_id}`);
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
    
    const oldRecord = response.data.record;
    console.log("the old record is: ", oldRecord);
    const updatingRecord = {
      record_type: oldRecord.record_type,

      smoking_status: oldRecord.smoking_status,
      pregnancy_status: oldRecord.pregnancy_status,
      chronic_condition: oldRecord.chronic_condition,
      current_medications: oldRecord.current_medications,
      allergies: oldRecord.allergies,
      chief_complaint: oldRecord.chiefComplaint,

      vitals: {        
          temperature: temperature,
          systolic_blood_pressure: systolic_blood_pressure,
          diastolic_blood_pressure: diastolic_blood_pressure,
          pulse: pulse,
          oxygen: oxygen,
          glucose: glucose,        
      },
    
      soap: {
          subjective: oldRecord.soap.subjective,
          objective: oldRecord.soap.objective,
          assessment: oldRecord.soap.assessment,
      },

      provider_name: oldRecord.provider_name,
      scribe_name: oldRecord.scribe_name,
      owner: oldRecord.owner,
    };
    console.log("The record to update is: ", updatingRecord);
    const updated_record = await updateRecord(updatingRecord);
    console.log("The new updated record: ", updated_record);
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
        <Text style={{fontSize: 25, fontWeight: '500',width:'100%',}}>{"Robert Zhang"}</Text>
      </View>              
      
      <View style={{ flexDirection: 'row', paddingLeft:5}}>
        <Text style={{fontSize: 20, fontWeight: '400', width: '45%'}}>DOB: {"00/00/0000"}</Text>
      </View>

      <View style={{ flexDirection: 'row', paddingLeft:5}}>
        <Text style={{fontSize: 20, fontWeight: '400', width: '100%'}}>{"San Diego"} {'['} {"09/23/2021"} {']'}</Text>
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
        label={"Temp"}
        value={temperature}
        onChange={(text) => setTemperature(text)}
        unit={"F"}
        width='32%'
        />

        <InputBoxWithLabel 
        label={"Pulse"}
        value={pulse}
        onChange={(text) => setPulse(text)}
        unit={"bpm"}
        width='32%'
        />

        <InputBoxWithLabel 
        label={"Oxygen"}
        value={oxygen}
        onChange={(text) => setOxygen(text)}
        unit={"%"}
        width='32%'
        />
      </View>

      <View style={{width:'100%', flexDirection: 'row', justifyContent: 'space-between',}}>

        <InputBoxWithLabel 
        label={"BG"}
        value={glucose}
        onChange={(text) => setGlucose(text)}
        unit={"mg/dl"}
        width='32%'
        />

      <InputBoxWithLabel 
        label={"Sys BP"}
        value={systolic_blood_pressure}
        onChange={(text) => setSystolic_bp(text)}
        unit={"mmHg"}
        width='32%'
      />

      <InputBoxWithLabel 
        label={"Dia BP"}
        value={diastolic_blood_pressure}
        onChange={(text) => setDiastolic_bp(text)}
        unit={"mmHg"}
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
      />

      <BigInputBoxWithLabel
        label='Scribe Name'
        value={scribeName}  // You'll need to manage this state variable similarly as others
        width="100%"
        onChange={(text) => setScribeName(text)}
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