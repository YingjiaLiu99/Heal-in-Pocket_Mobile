import React, { useState, useContext, useRef, createRef, useEffect } from 'react';
import { Text, View, TouchableOpacity, Alert, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StackActions } from '@react-navigation/native';

import axios from 'axios';

import InputBoxWithInnerLabel from '../../../components/InputBoxWithInnerLabel';
import BigInputBoxWithInnerLabel from '../../../components/BigInputBoxWithInnerLabel';
import styles from './styles';

import baseURL from '../../../common/baseURL';

export default function UploadMedicalInfo({ route, navigation }) {


  const { firstName, lastName, DOB, gender, time, date} = route.params;


  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // TODO: create states to store the vitals and medical histories

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
  
  const handleSubmit = async() => {    
    if(reason === ''){
        // Set error message
      setErrorMessage('Please fill in reason for consultation');  
    }
    else{
      if (confirmSubmit) {   
      // create a new record here, use all the data you stored in the states.
      // for the fields that needed to be filled by doctors, put null
      // after successfully create the record, get its record id from response
      // and put it in the request's corresponding_record field below


      // create new request on server
      const newRequest = {
        patient_name: `${firstName} ${lastName}`,
        corresponding_record: "64fe875d4a817ea50b7fcf63", // dummy data now
        new_patient: true, // or based on a condition
        chief_complaint: reason
      };

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
  };

  const handleVitalOnlySubmit = () => {
    navigation.navigate('Home');
  }

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
              value={medHistoryValues.chronicIllness}
              width='100%'
              height={100}
              onChangeText={(text) => }
              placeholder={'Please enter chronic illness...'}
              onFocus = {handleOutsidePress}
          />
          <BigInputBoxWithInnerLabel
              label="Current Medication"
              value={medHistoryValues.currentMedication}
              width='100%'
              height={100}
              onChangeText={(text) => }
              placeholder={'Please enter current medication...'}
              onFocus = {handleOutsidePress}
          />
          <BigInputBoxWithInnerLabel
              label="Allergies"
              value={medHistoryValues.allergies}
              width='100%'
              height={100}
              onChangeText={(text) => }
              placeholder={'Please enter allergies...'}
              onFocus = {handleOutsidePress}
          />
      </View>


      <Text style={{fontSize:20, fontWeight:400}}>Upload Patient's Vitals</Text> 
      <View style={{width: "100%"}}>
          
           {/* the original implementation use map function, don't use it  */}
          {/* <InputBoxWithInnerLabel
              key={index}
              label={label}
              value={vitalValues[label] || ''}
              unit={properties.unit}
              width={properties.width}
              height={60}
              placeholder={'Click to Enter...'}
              onChange={(value) => }
              onFocus = {handleOutsidePress}
              keyboardType={'numeric'}
              autoFocus={label === 'Temp'} // this line is added              
          /> */}

          {/* TODO: use inputBoxWithInnerLabel one by one to store each vital
          into its state. Also need to implement the feature: after click return key,
          it can jump to next vital's box */}
          
      </View>
      
      
      <Text style={{fontSize:20, fontWeight:400}}>Reason For Consultation</Text>
      <View style={{ marginBottom: 10, width:'100%'}}>
          <BigInputBoxWithInnerLabel
              label="Resaon For Consultation*"
              value={reason}
              width="100%"
              height={100}
              onChangeText={(text) => setReason(text)}
              placeholder={'Please enter patient reason for consultation...'}
              onFocus = {handleOutsidePress}
          />
      </View>

    {errorMessage ? <Text style={{color:'red', fontSize:18, marginBottom:10}}>{errorMessage}</Text> : null}  

      <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:20}}>
        <TouchableOpacity style={confirmSubmit ? styles.confirmButton : styles.normalButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {confirmSubmit ? 'Submit Request' : 'Confirm Request'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:60}}>
        <TouchableOpacity style={styles.vitalOnlyButton} onPress={handleVitalOnlySubmit}>
          <Text style={styles.buttonText}>Vital Check Only</Text>
        </TouchableOpacity>
      </View>
      
      {/* reserve empty space for keyboard: */}
      <View style={{ height: 300 }} />

    </ScrollView>
  </View>
  );
}
