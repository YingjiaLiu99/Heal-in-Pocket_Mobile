import React, { useState, useRef, useContext,useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import axios from 'axios';

import styles from './styles';
import InputBoxWithLabel from './components/InputBoxWithLabel';
import BigInputBoxWithLabel from './components/BigInputBoxWithLabel';
import ProviderInputBox from './components/ProviderInputBox';
import baseURL from '../../../common/baseURL';

export default function ProviderResponseScreen({route, navigation}) { 
  const { request_id } = route.params;

  // const patientInfo = ;
  // const medicalHistory = ;
  // const vitalData = ;
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 
  const [subjective, setSubjective] = useState('');
  const [objective, setObjective] = useState('');
  const [assessment, setAssessment] = useState(''); 
  const subjectiveRef = useRef(null);
  const objectiveRef = useRef(null);
  const assessmentRef = useRef(null);

  const [chiefComplaint, setChiefComplaint] = useState();
  const [medicalHistoryValue, setMedicalHistoryValue] = useState();
  const [medicationAllergies, setMedicationAllergies] = useState(' [Allergies: ' + ']');
  const [providerName, setProviderName] = useState(''); 
  const [scribeName, setScribeName] = useState('');


  const [vitalValue1, setVitalValue1] = useState();
  const [vitalValue2, setVitalValue2] = useState();
  const [vitalValue3, setVitalValue3] = useState();
  const [vitalValue4, setVitalValue4] = useState();
  const [vitalValue5, setVitalValue5] = useState();
  const [vitalValue6, setVitalValue6] = useState();



  const deleteRequest = async () => {
    try {
      const response = await axios.delete(`${baseURL}request/${request_id}`);
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
    // delete the request:
    
    const deleteResult = deleteRequest();
    console.log("Request deleting result:", deleteResult);
   
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
          // This is a bit more complex due to the formatting. If you simply want to edit the medications or allergies separately, consider splitting this into two fields.
          setMedicationAllergies(text);
        }}
      />
      </View>

      <View style={{width:'100%', flexDirection: 'row', justifyContent: 'space-between',}}>

      <InputBoxWithLabel 
        label={"Temp"}
        value={vitalValue1}
        onChange={(text) => setVitalValue1(text)}
        unit={"F"}
        width='32%'
      />

      <InputBoxWithLabel 
        label={"Pulse"}
        value={vitalValue2}
        onChange={(text) => setVitalValue2(text)}
        unit={"bpm"}
        width='32%'
      />

      <InputBoxWithLabel 
        label={"Oxygen"}
        value={vitalValue3}
        onChange={(text) => setVitalValue3(text)}
        unit={"%"}
        width='32%'
      />
      </View>

      <View style={{width:'100%', flexDirection: 'row', justifyContent: 'space-between',}}>

        <InputBoxWithLabel 
        label={"BG"}
        value={vitalValue4}
        onChange={(text) => setVitalValue4(text)}
        unit={"mg/dl"}
        width='32%'
      />

      <InputBoxWithLabel 
        label={"Systolic BP"}
        value={vitalValue5}
        onChange={(text) => setVitalValue5(text)}
        unit={"mmHg"}
        width='32%'
      />

      <InputBoxWithLabel 
        label={"Diastolic BP"}
        value={vitalValue6}
        onChange={(text) => setVitalValue6(text)}
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