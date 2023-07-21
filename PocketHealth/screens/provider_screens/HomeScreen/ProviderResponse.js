import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Alert} from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ShowcaseBoxWithLabel from '../../../components/ShowcaseBoxWithLabel';
import BigShowcaseBoxWithLabel from '../../../components/BigShowcaseBoxWithLabel';
import ProviderInputBox from './components/ProviderInputBox';

export default function ProviderResponseScreen({navigation}) { 
    
  const [assessment, setAssessment] = useState('');
  const [futurePlan, setFuturePlan] = useState('');
  const [reasonDoc, setReasonDoc] = useState('');

  const handleSubmit = () => {
    if(assessment === '' || futurePlan === '' || reasonDoc === ''){
      Alert.alert('Missing Input', 'Please enter all required areas',[
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },               
      ]); 
    }
    else{
      Alert.alert('Are You Sure To Submit?', 'You cannot edit once submitted',[
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => {
            navigation.navigate('Success');
            console.log(assessment);
            console.log(futurePlan);
          }
        },
      ]);
    }    
  };

  // DUMMY DATA 

  const firstName = {label: 'First Name', value: 'James'}
  const lastName = {label: 'Last Name', value: 'Carter'}
  const reason = {label: 'Reason for Consultation', value:'Patient feels dizzy after diarrhea'}

  const vitalData = [
      {label: 'Pain Level(0~10,0-no pain,10-worst pain)', value: '8', unit: ''},
      {label: 'Temperature', value: '99', unit: 'F'},
      {label: 'Blood Pressure', value: '120/80', unit:'mmHg'},
      {label: 'Pulse', value: '70', unit:'bpm'},
      {label: 'Oxygen', value: '98', unit:'%'},
      {label: 'Glucose', value: '110', unit:'mg/dl'},  
      {label: 'Weight', value: '150',unit:'Lbs'}, 
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

  const medHisData = [
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
    

return (
    <ScrollView>
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Visit Note</Text>
      <Text style={{fontSize:18}}>Patient Info</Text>
            
      <ShowcaseBoxWithLabel
        label={firstName.label}
        value={firstName.value}
        unit=''
        width="100%"
      />

      <ShowcaseBoxWithLabel
        label={lastName.label}
        value={lastName.value}
        unit=''
        width="100%"
      />
      
      <BigShowcaseBoxWithLabel
        label={reason.label}
        value={reason.value}
        unit=''
        width="100%"
      />

    
      <Text style={{fontSize:18}}>Patient Vitals</Text>

      {vitalData.map((item, index) => (
          <ShowcaseBoxWithLabel
            key={index}
            label={item.label}
            value={item.value}
            unit= {item.unit}
            width="100%"
          />
        ))}
    
      <Text style={{fontSize:18}}>Patient Medical History</Text>

      {medHisData.map((item, index) => (
          <BigShowcaseBoxWithLabel
            key={index}
            label={item.label}
            value={item.value}          
            width="100%"
          />
        ))}
      
      <Text style={{fontSize:20, color:'red'}}>Provider's Input (*required)</Text>

      <View style={{width:"100%"}}>
      <ProviderInputBox 
        label="Reason For Consultation*"
        value={reasonDoc}
        width="100%"
        placeholder="Click to Enter Reason For Consultation ..."
        onChangeText={(text) => setReasonDoc(text)}
      />

      <ProviderInputBox 
        label="Assessment*"
        value={assessment}
        width="100%"
        placeholder="Click to Enter Your Assessment ..."
        onChangeText={(text) => setAssessment(text)}
      />

      <ProviderInputBox 
        label="Future Plan*"
        value={futurePlan}
        width="100%"
        placeholder="Click to Enter Suggested Future Plan ..."
        onChangeText={(text) => setFuturePlan(text)}
      />
      </View>

      <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:0}}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    
    </KeyboardAwareScrollView>
    </ScrollView>

  );
}