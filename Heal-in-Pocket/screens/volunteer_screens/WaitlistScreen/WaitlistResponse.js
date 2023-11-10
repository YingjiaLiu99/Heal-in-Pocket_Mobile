import React, { useState, useRef, useContext, useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView} from 'react-native';
import axios from 'axios';

import styles from './styles';
import InputBoxWithLabel from './components/InputBoxWithLabel';
import BigInputBoxWithLabel from './components/BigInputBoxWithLabel';
import ProviderInputBox from './components/ProviderInputBox';
import baseURL from '../../../common/baseURL';

export default function WaitlistResponseScreen({route, navigation}) { 
  const { request_id } = route.params;

  // const patientInfo = ;
  // const medicalHistory = ;
  // const vitalData =;
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 
  const [subjective, setSubjective] = useState("");
  const [objective, setObjective] = useState('');
  const [assessment, setAssessment] = useState(''); 
  const subjectiveRef = useRef(null);
  const objectiveRef = useRef(null);
  const assessmentRef = useRef(null);

  const [chiefComplaint, setChiefComplaint] = useState("");
  const [medicalHistoryValue, setMedicalHistoryValue] = useState("");
  const [medicationAllergies, setMedicationAllergies] = useState(' [Allergies: ' + ']');
  const [providerName, setProviderName] = useState(''); 
  const [scribeName, setScribeName] = useState('');


  const [temperature, setTemperature] = useState("");
  // High and low
  const [systolic_blood_pressure, setSysBloodPressure] = useState("");
  const [diastolic_blood_pressure, setDiaBloodPressure] = useState("");
  const [pulse, setPulse] = useState("");
  const [oxygen, setOxygen] = useState("");
  const [glucose, setGlucose] = useState("");





  const updateRequest = async (data) => {
    try {
      const response = await axios.put(`${baseURL}request/${request_id}`, data);
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


  const updateRecord = async (data, recordId) => {
    try {
      const response = await axios.put(`${baseURL}record/${recordId}`, data);
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


  useEffect(() => {
    const fetchRecordData = async () => {
      try {
        // Fetch the request to get the corresponding record ID
        const requestResponse = await axios.get(`${baseURL}request/${request_id}`);
        const recordId = requestResponse.data.request.corresponding_record;
  
        // Now fetch the record using the record ID obtained from the request
        const recordResponse = await axios.get(`${baseURL}record/${recordId}`);
        const recordData = recordResponse.data.record;
        console.log(recordData);
  
        // Update state, guarding against undefined values
        // Vitals
        setTemperature(recordData.vitals.temperature); 
        console.log(temperature);
        setGlucose(recordData.vitals.glucose);
        setOxygen(recordData.vitals.oxygen);
        setPulse(recordData.vitals.pulse);
        setSysBloodPressure(recordData.vitals.systolic_blood_pressure);
        setDiaBloodPressure(recordData.vitals.diastolic_blood_pressure);

        // SOAP, but not update:
        setAssessment(recordData.soap.assessment);
        console.log(assessment);
        setObjective(recordData.soap.objective);
        setSubjective(recordData.soap.subjective);

        // chronic(med history), medication, allegies, chief_compliant:
        setMedicalHistoryValue(recordData.chronic_condition);
        setMedicationAllergies(recordData.current_medications + "[Allergies: " + recordData.allergies + "]");
        setChiefComplaint(recordData.chief_complaint);
        
        // Provider and scribe, but not update:
        setProviderName(recordData.provider_name);
        setScribeName(recordData.scribe_name);
  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchRecordData();
  }, [request_id]); // Only re-run the effect if request_id changes
  


  const handleSubmit = async () => {  

    if (chiefComplaint === "") {
      setErrorMessage("Please fill in chiefCompliant");
    }

    if (confirmSubmit) {
      // fetch the old request using the request id
      let response;
      try{
        response = await axios.get(`${baseURL}request/${request_id}`);
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
      const oldRequest = response.data.request;
      console.log(oldRequest);

      const parseMedicationAllergies = () => {
        const allergyStart = medicationAllergies.indexOf('[Allergies:');
        const medication = medicationAllergies.substring(0, allergyStart).trim();
        console.log(allergyStart);
        const allergy = medicationAllergies.substring(allergyStart + 11, medicationAllergies.length - 1).trim(" ");
      
        return { medication, allergy };
      };

      const medicationAllergyFormat = parseMedicationAllergies();
      
      console.log(medicationAllergyFormat.allergy);

      // Update the record here:
      const newRecord = {
        
        chronic_condition: medicalHistoryValue || "N/A",
        allergies: medicationAllergyFormat.allergy || "N/A",
        current_medications: medicationAllergyFormat.medication || 'N/A',
        chief_complaint: chiefComplaint || "N/A",
    
        vitals: {
          temperature: temperature || -1,
          systolic_blood_pressure: systolic_blood_pressure || -1,
          diastolic_blood_pressure: diastolic_blood_pressure || -1, 
          pulse: pulse || -1,
          oxygen: oxygen || -1,
          glucose: glucose || -1,
        },
      };

      const recordId = oldRequest.corresponding_record;
      const updated_record = updateRecord(newRecord, recordId);
      
      // create a new request with the updated data
      const newRequest = {
        patient_name: oldRequest.patient_name, // the patient name should not change
        corresponding_record: oldRequest.corresponding_record, // the corersponding_record should not change
        new_patient: oldRequest.new_patient, // the patient's new_patient status should not change
        chief_complaint: chiefComplaint
      };

      const updated_request = updateRequest(newRequest);
      console.log("The new updated request: ", updated_request);
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
          <Text style={{fontSize: 25, fontWeight: '500',width:'100%',}}>{"Jimmy Wang"}</Text>
        </View>              
        
        <View style={{ flexDirection: 'row', paddingLeft:5}}>
          <Text style={{fontSize: 20, fontWeight: '400', width: '45%'}}>DOB: {"09/23/1977"}</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft:5}}>
          <Text style={{fontSize: 20, fontWeight: '400', width: '100%'}}>{"Street Corner Care"} {'['} {"11/12/2022"} {']'}</Text>
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
            // This is a bit more complex due to the formatting. 
            // If you simply want to edit the medications or allergies separately,
            // consider splitting this into two fields.
            setMedicationAllergies(text);
          }}
        />
        </View>

        <View style={{width:'100%', flexDirection: 'row', justifyContent: 'space-between',}}>

          <InputBoxWithLabel 
          label={"Temp"}
          value={temperature.toString()}
          onChange={(text) => setTemperature(text)}
          unit={"F"}
          width='32%'
        />

        <InputBoxWithLabel 
          label={"Pulse"}
          value={pulse.toString()}
          onChange={(text) => setPulse(text)}
          unit={"bpm"}
          width='32%'
        />

        <InputBoxWithLabel 
          label={"Oxygen"}
          value={oxygen.toString()}
          onChange={(text) => setOxygen(text)}
          unit={"%"}
          width='32%'
        />
        </View>

        <View style={{width:'100%', flexDirection: 'row', justifyContent: 'space-between',}}>

          <InputBoxWithLabel 
          label={"BG"}
          value={glucose.toString()}
          onChange={(text) => setGlucose(text)}
          unit={"mg/dl"}
          width='32%'
        />

        <InputBoxWithLabel 
          label={"Systolic BP"}
          value={systolic_blood_pressure.toString()}
          onChange={(text) => setSysBloodPressure(text)}
          unit={"mmHg"}
          width='32%'
        />

        <InputBoxWithLabel 
          label={"Diastolic BP"}
          value={diastolic_blood_pressure.toString()}
          onChange={(text) => setDiaBloodPressure(text)}
          unit={"mmHg"}
          width='32%'
          onFocus={handleOutsidePress}
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