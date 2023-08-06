import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity, Alert, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StackActions } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import InputBoxWithInnerLabel from '../../../components/InputBoxWithInnerLabel';
import BigInputBoxWithInnerLabel from '../../../components/BigInputBoxWithInnerLabel';
import styles from './styles';
// import the context:
import VisitDataContext from '../../../context/context_VisitData';
import RequestMessContext from '../../../context/context_requestMess';

export default function UploadMedicalInfo({ route, navigation }) {
  const visit_id = uuid.v4();
  const { visitData, setVisitData } = useContext(VisitDataContext);
  const { requests, setRequests } = useContext(RequestMessContext);
  const { firstName, lastName, DOB, genderSelection } = route.params;
  const labelProperties = {    
    'Temp': { unit: 'F', width: '100%' },
    'Pulse': { unit: 'bpm', width: '100%' },
    'Oxygen': { unit: '%', width: '100%' },
    'BG': { unit: 'mg/dl', width: '100%' },
    'BP': { unit: 'mmHg', width: '100%' },
  };

  const initialInputValues = Object.keys(labelProperties).reduce((values, label) => {
    values[label] = '';
    return values;
  }, {});

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [vitalValues, setVitalValues] = useState(initialInputValues);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [medHistoryValues, setMedHistoryValues] = useState({chronicIllness: 'N.A.', currentMedication: 'N.A.', allergies: 'N.A.'});

  // Handle date of birth with "/"
  const handleDateChange = (text) => {
    const formattedText = text.split('/').join('');
    if (formattedText.length >= 5) {
      text = text.split('/').join('').replace(/(\d{2})(\d{2})(\d{1,4})/, "$1/$2/$3");
    } else if (formattedText.length >= 3) {
      text = text.split('/').join('').replace(/(\d{2})(\d{1,2})/, "$1/$2");
    }
    
    if (formattedText.length <= 8) {
      setDate(text);
    }
  };

  const handleInputChange = (type, label, value) => {
    if (type === "vital") {
      setVitalValues({
        ...vitalValues,
        [label]: value,
      });
    } else if (type === "medHistory") {
      setMedHistoryValues({
        ...medHistoryValues,
        [label]: value,
      });
    }
    if (confirmSubmit) {
      setConfirmSubmit(false);
    }
  };

  const handleSubmit = () => {    
    if(reason === ''){
        // Set error message
      setErrorMessage('Please fill in reason for consultation');  
    }
    else{
      if (confirmSubmit) {   
        // create new record and put it in the context         
        const existingRecordIndex = visitData.findIndex(record => record.date === date);

        const patientData = {
          firstName: firstName,
          lastName: lastName,
          DOB: DOB,
          site: "Street Corner Care",
          DOS: date,
          time: time,
          visitNote: {
            patientInfo: [
              {label:'Name', value:`${firstName} ${lastName}`},
              {label:'DOB', value:DOB},
              {label:'location', value:'Street Corner Care'},
              {label:'DOS', value:date},
            ],
            chiefComplaint: reason,
            providerReport: [],
            medicalHistory: [
              { label: "Chronic Illness", value: medHistoryValues.chronicIllness },
              { label: "Current Medication", value: medHistoryValues.currentMedication },
              { label: "Allergies", value: medHistoryValues.allergies },
            ],
            vitalData: Object.entries(vitalValues).map(([label, value]) => ({
              label,
              value,
              unit: labelProperties[label].unit,
            })),
          },
          visit_id:visit_id,
          published:false,
        };

        if (existingRecordIndex >= 0) {
          // add patient data to existing record
          const updatedVisitData = [...visitData];
          updatedVisitData[existingRecordIndex].patients.push(patientData);
          setVisitData(updatedVisitData);
        } else {
          // create new record
          const newRecord = {
            date: date,
            patients: [patientData],
          };
          setVisitData([...visitData, newRecord]);
        }
        // create new request and put it in the context
        const newRequest = {
          chiefComplaint:reason,
          time:time,
          name:`${firstName} ${lastName}`,
          tag:'New Patient',
          visit_id:visit_id,
        };
        setRequests([...requests, newRequest]);
        console.log(visit_id);
        navigation.dispatch(StackActions.replace('Success'));
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

  return (
    <ScrollView>
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      
      <View style={{marginTop: 5, marginBottom: 10, width: '100%', alignItems: 'center',}}>
          <Text style={{fontSize: 35, fontWeight: 400}}>Create New Record</Text>          
      </View>

      <View style={{width: "100%"}}>
      <InputBoxWithInnerLabel
        label="Date"
        value={date}
        width="100%"
        height={60}
        placeholder="MM/DD/YYYY"
        keyboardType="phone-pad"
        onChange={(text) => handleDateChange(text)}
        onFocus = {handleOutsidePress}
      />

      <InputBoxWithInnerLabel
        label="Time"
        value={time}
        width="100%"
        height={60}
        placeholder={"Click to Enter Time..."}
        onChange={(text) => {setTime(text)}}
        onFocus = {handleOutsidePress}
      />
      </View>

      <Text style={{fontSize:20, fontWeight:400}}>Upload Patient's Vitals</Text>          
      

      <View style={{width: "100%"}}>
          {Object.entries(labelProperties).map(([label, properties], index) => (
          <InputBoxWithInnerLabel
              key={index}
              label={label}
              value={vitalValues[label] || ''}
              unit={properties.unit}
              width={properties.width}
              height={60}
              placeholder={'Click to Enter...'}
              onChange={(value) => handleInputChange("vital", label, value)}
              onFocus = {handleOutsidePress}
              keyboardType={'numeric'}
          />
          ))}
      </View>

      
      <Text style={{fontSize:20, fontWeight:400}}>Upload Patient's Medical History</Text>          
      

      <View style={{width: "100%"}}>
          <BigInputBoxWithInnerLabel
              label="Chronic Illness"
              value={medHistoryValues.chronicIllness}
              width='100%'
              height={100}
              onChangeText={(text) => handleInputChange('medHistory', 'chronicIllness', text)}
              placeholder={'Please enter chronic illness...'}
              onFocus = {handleOutsidePress}
          />
          <BigInputBoxWithInnerLabel
              label="Current Medication"
              value={medHistoryValues.currentMedication}
              width='100%'
              height={100}
              onChangeText={(text) => handleInputChange('medHistory', 'currentMedication', text)}
              placeholder={'Please enter current medication...'}
              onFocus = {handleOutsidePress}
          />
          <BigInputBoxWithInnerLabel
              label="Allergies"
              value={medHistoryValues.allergies}
              width='100%'
              height={100}
              onChangeText={(text) => handleInputChange('medHistory', 'allergies', text)}
              placeholder={'Please enter allergies...'}
              onFocus = {handleOutsidePress}
          />
      </View>

      
      <Text style={{fontSize:20, fontWeight:400}}>Reason For Consultation</Text>          
      

      <View style={{ marginBottom: 10, width:'100%'}}>
          <BigInputBoxWithInnerLabel
              label="Resaon For Consultation*"
              value={reason}
              width="95%"
              height={100}
              onChangeText={(text) => setReason(text)}
              placeholder={'Please enter patient reason for consultation...'}
              onFocus = {handleOutsidePress}
          />
      </View>

    {errorMessage ? <Text style={{color:'red', fontSize:18, marginBottom:10}}>{errorMessage}</Text> : null}  

      <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:30}}>
        <TouchableOpacity style={confirmSubmit ? styles.confirmButton : styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {confirmSubmit ? 'Submit' : 'Confirm'}
          </Text>
        </TouchableOpacity>
      </View>

    </KeyboardAwareScrollView>
    </ScrollView>
  );
}
