import React, { useState, useContext, useRef, createRef, useEffect } from 'react';
import { Text, View, TouchableOpacity, Alert, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StackActions } from '@react-navigation/native';

import axios from 'axios';

import InputBoxWithInnerLabel from '../../../components/InputBoxWithInnerLabel';
import BigInputBoxWithInnerLabel from '../../../components/BigInputBoxWithInnerLabel';
import styles from './styles';

import baseURL from '../../../common/baseURL';

export default function UploadMedicalInfo({ route, navigation }) {


  const { firstName, lastName, DOB, gender, 
          time, date, insurance, pcps, 
          caseHistory, smoking, pregnancy} = route.params;

  // Smoking and pregnancy: 
        // { value: 'yes', choiceLabel: 'Yes' },
        // { value: 'no', choiceLabel: 'No' },
        // { value: 'na', choiceLabel: 'NA' },
  // Default value is "na" for smoking and pregnancy


  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [confirmVital, setConfirmVital] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // use: "vital_only" for vital only
  // use: "standard" for vital + medical history
  const [corresponding_id, setCorrespondingId] = useState('');

  // Medical histories
  const [chronic_condition, setChronicCondition] = useState('');
  const [current_medications, setCurrentMedications] = useState('');
  const [allergies, setAllergies] = useState('');
  const [chief_complaint, setChiefCompliant] = useState('');

  // Vitals
  const [temperature, setTemperature] = useState('');
  // High and low
  const [systolic_blood_pressure, setSysBloodPressure] = useState('');
  const [diastolic_blood_pressure, setDiaBloodPressure] = useState('');
  const [pulse, setPulse] = useState('');
  const [oxygen, setOxygen] = useState('');
  const [glucose, setGlucose] = useState('');

  // Owner should be get from the backend, now using the dummy only for test
  // const [owner, SetOwner] = useState('');


  // Refs for input elements to manage focus
  // const temperatureRef = useRef(null);
  
  // const pulseRef = useRef(null);
  // const oxygenRef = useRef(null);
  // const glucoseRef = useRef(null);


  const labelProperties = {    
    'Temp': { unit: 'F', width: '100%' },
    'Pulse': { unit: 'bpm', width: '100%' },
    'Oxygen': { unit: '%', width: '100%' },
    'Glucose': { unit: 'mg/dl', width: '100%' },
    'Sys_BP': { unit: 'mmHg', width: '100%' },
    'Dia_BP': { unit: 'mmHg', width: '100%' },
  };

  const postNewRequest = async (data) => {
    try {
      const response = await axios.post(`${baseURL}request/volunteer/add`, data);
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
  };

  const uploadNewRecord = async (data) => {
    try {
      const response = await axios.post(`${baseURL}record`, data);
      return response.data;
    } catch (error) {
      if (error.response) {
        // The request was successfully sent to the server and the server returned an error response. 
        console.log('Backend Error (record):', error.response.data.message);
      } else if (error.request) {
        // The request was sent, but no response was received from the server. This can be due to network issues, server downtime, etc.
        console.log('Network Error:', error.message);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error:', error.message);
      }
    }
  };

  
  const handleSubmit = async() => {    
    if(chief_complaint === ''){
        // Set error message
      setErrorMessage('Please fill in reason for consultation');  
    }
    else{
      if (confirmSubmit) {   
        /**
         * following are procedures to create a new record & request
         * N/A are null value for string, -1 are null value for number
         * Standard record: use fields filled by volunteer; leave N/A for fields for doctors;  
         *                  create a request and put it the waitlist queue; set its title, time,
         *                  id according to the new record
         * Vital-only record: use fields filled by volunteer; filling everything else with NA for strings, -1 for numbers 
         *                    Vital-only record doesn't need to create request as it means the patient doesn't need to see
         *                    a doctor
         */
        const newRecord = {
          record_type: "standard",      
          smoking_status: smoking || "N/A",
          pregnancy_status: pregnancy || "N/A",
          chronic_condition: chronic_condition || "N/A",
          current_medications: current_medications || "N/A",
          allergies: allergies || "N/A",
          chief_complaint: chief_complaint,      
          vitals: {
            temperature: temperature || -1,
            systolic_blood_pressure: systolic_blood_pressure || -1,
            diastolic_blood_pressure: diastolic_blood_pressure || -1, 
            pulse: pulse || -1,
            oxygen: oxygen || -1,
            glucose: glucose || -1,
          },
          soap: {
            subjective: "N/A",
            objective: "N/A",
            assessment: "N/A",
          },          
          provider_name: "N/A",
          scribe_name: "N/A", 
          owner: '65680bc74d44698b1a7ae263' // Dummy for now      
        };

        // Upload record
        const uploadRecord = await uploadNewRecord(newRecord);
        console.log(uploadRecord);            
        const corres_id = uploadRecord.record._id; // get its corresponding id from the new created record

        // create new request on server
        const newRequest = {
          patient_name: `${firstName} ${lastName}`,
          corresponding_record: corres_id, 
          new_patient: true, // or based on a condition
          chief_complaint: uploadRecord.record.chief_complaint
        };

        // Send request to doctor panel
        try {
          const request = await postNewRequest(newRequest);
          console.log("The new created request:", request);
        } catch (error) {
          console.error("Failed to send data to server:", error);        
        }
        navigation.dispatch(StackActions.replace('Success')); // prevent going back
      } 
      else {
        setConfirmSubmit(true);        
      }
    }
  };

  const handleOutsidePress = () => {
    if(confirmSubmit) {
      setConfirmSubmit(false);
    }    
    if (confirmVital) {
      setConfirmVital(false);
    }
  };

  const handleVitalOnlySubmit = async () => {

    if (confirmVital) {
      const newRecord = {
        record_type: "vital_only",      
        smoking_status: smoking || "N/A",
        pregnancy_status: pregnancy || "N/A",
        chronic_condition: chronic_condition || "N/A",
        current_medications: current_medications || "N/A",
        allergies: allergies || "N/A",
        chief_complaint: "N/A",
    
        vitals: {
          temperature: temperature || -1,
          systolic_blood_pressure: systolic_blood_pressure || -1,
          diastolic_blood_pressure: diastolic_blood_pressure || -1, 
          pulse: pulse || -1,
          oxygen: oxygen || -1,
          glucose: glucose || -1,
        },
        soap: {
          subjective: "N/A",
          objective: "N/A",          
          assessment: "N/A",
        },
        provider_name: "N/A",
        scribe_name: "N/A",
        // Dummy Value for now:
        owner: '65680bc74d44698b1a7ae263'      
      };

      // Upload record without creating request
      const uploadRecord = await uploadNewRecord(newRecord);
      console.log(uploadRecord); 
      navigation.dispatch(StackActions.replace('Success')); // prevent going back
    }
    else {
      setConfirmVital(true);
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
      width:'100%',
      height:85
    }}>
      <View>

      <View style={{ flexDirection: 'row', paddingLeft:5}}>
        <Text style={{fontSize: 25, fontWeight: '500',width:'100%',}}>{firstName} {lastName}</Text>
      </View>              
      
      <View style={{ flexDirection: 'row', paddingLeft:5}}>
        <Text style={{fontSize: 20, fontWeight: '400', width: '45%'}}>DOB: {DOB}</Text>
      </View>

      <View style={{ flexDirection: 'row', paddingLeft:5}}>
        <Text style={{fontSize: 20, fontWeight: '400', width: '100%'}}>Street Corner Care {'['} {date} {']'}</Text>
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

      <Text style={{fontSize:27}}>Create New Record</Text>

      <Text style={{fontSize:20, fontWeight:400}}>Upload Patient's Medical History</Text>   
      <View style={{width: "100%"}}>
          <BigInputBoxWithInnerLabel
              label="Chronic Illness"
              value={chronic_condition}
              width='100%'
              height={100}
              onChangeText={(text) => setChronicCondition(text)}
              placeholder={'Please enter chronic illness...'}
              onFocus = {handleOutsidePress}
              autoFocus
          />
          <BigInputBoxWithInnerLabel
              label="Current Medication"
              value={current_medications}
              width='100%'
              height={100}
              onChangeText={(text) => setCurrentMedications(text)}
              placeholder={'Please enter current medication...'}
              onFocus = {handleOutsidePress}
          />
          <BigInputBoxWithInnerLabel
              label="Allergies"
              value={allergies}
              width='100%'
              height={100}
              onChangeText={(text) => setAllergies(text)}
              placeholder={'Please enter allergies...'}
              onFocus = {handleOutsidePress}
          />
      </View>


      <Text style={{fontSize:20, fontWeight:400}}>Upload Patient's Vitals</Text> 
      <View style={{width: "100%"}}>
          <InputBoxWithInnerLabel              
              label={"Temperature"}
              value={temperature}
              unit={labelProperties.Temp.unit}
              width={labelProperties.Temp.width}
              height={60}
              placeholder={'Click to Enter...'}
              onChange={(value) => setTemperature(value)}
              onFocus = {handleOutsidePress}
              keyboardType={'numeric'}                                  
          /> 

          <InputBoxWithInnerLabel              
              label={"Systoloc Blood Pressure"}
              value={systolic_blood_pressure}
              unit={labelProperties.Sys_BP.unit}
              width={labelProperties.Sys_BP.width}
              height={60}
              placeholder={'Click to Enter...'}
              onChange={(value) => setSysBloodPressure(value)}
              onFocus = {handleOutsidePress}
              keyboardType={'numeric'}        
          /> 

          <InputBoxWithInnerLabel              
              label={"Diastolic Blood Pressure"}
              value={diastolic_blood_pressure}
              unit={labelProperties.Dia_BP.unit}
              width={labelProperties.Dia_BP.width}
              height={60}
              placeholder={'Click to Enter...'}
              onChange={(value) => setDiaBloodPressure(value)}
              onFocus = {handleOutsidePress}
              keyboardType={'numeric'}        
          /> 

          <InputBoxWithInnerLabel              
              label={"Pulse"}
              value={pulse}
              unit={labelProperties.Pulse.unit}
              width={labelProperties.Pulse.width}
              height={60}
              placeholder={'Click to Enter...'}
              onChange={(value) => setPulse(value)}
              onFocus = {handleOutsidePress}
              keyboardType={'numeric'}         
          /> 

          <InputBoxWithInnerLabel              
              label={"Oxygen"}
              value={oxygen}
              unit={labelProperties.Oxygen.unit}
              width={labelProperties.Oxygen.width}
              height={60}
              placeholder={'Click to Enter...'}
              onChange={(value) => setOxygen(value)}
              onFocus = {handleOutsidePress}
              keyboardType={'numeric'}        
          /> 

          <InputBoxWithInnerLabel              
              label={"Glucose"}
              value={glucose}
              unit={labelProperties.Glucose.unit}
              width={labelProperties.Glucose.width}
              height={60}
              placeholder={'Click to Enter...'}
              onChange={(value) => setGlucose(value)}
              onFocus = {handleOutsidePress}
              keyboardType={'numeric'}        
          /> 
          
      </View>
      
      
      <Text style={{fontSize:20, fontWeight:400}}>Reason For Consultation</Text>
      <View style={{ marginBottom: 10, width:'100%'}}>
          <BigInputBoxWithInnerLabel
              label="Resaon For Consultation*"
              value={chief_complaint}
              width="100%"
              height={100}
              onChangeText={(text) => setChiefCompliant(text)}
              placeholder={'Please enter patient reason for consultation...'}
              onFocus = {handleOutsidePress}
          />
      </View>

    {errorMessage ? <Text style={{color:'red', fontSize:18, marginBottom:10}}>{errorMessage}</Text> : null}  

      <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:20}}>
        <TouchableOpacity style={confirmSubmit ? styles.confirmButton : styles.normalButton} onPress={handleSubmit}  onFocus={handleOutsidePress}>
          <Text style={styles.buttonText}>
            {confirmSubmit ? 'Submit Request' : 'Confirm Request'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:20}}>
        <TouchableOpacity style={confirmVital ? styles.vitalConfirmButton : styles.vitalOnlyButton} onPress={handleVitalOnlySubmit} onFocus={handleOutsidePress}>
          <Text style={styles.buttonText}>
            {confirmVital ? 'Submit Vitals' : 'Vital Check Only'}
          </Text>
        </TouchableOpacity>
      </View>
      
      {/* reserve empty space for keyboard: */}
      <View style={{ height: 300 }} />

    </ScrollView>
  </View>
  );
}
