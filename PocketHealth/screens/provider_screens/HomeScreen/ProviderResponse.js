import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Alert} from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ShowcaseBoxWithLabel from '../../../components/ShowcaseBoxWithLabel';
import BigShowcaseBoxWithLabel from '../../../components/BigShowcaseBoxWithLabel';
import ProviderInputBox from './components/ProviderInputBox';

export default function ProviderResponseScreen({navigation}) { 
  
  const [subjective, setSubjective] = useState('');
  const [objective, setObjective] = useState('');
  const [assessment, setAssessment] = useState('');  
  
  const handleSubmit = () => {
    if(assessment === '' || subjective === '' || objective === ''){
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
            console.log(subjective);
            console.log(objective);
            console.log(assessment);            
          }
        },
      ]);
    }    
  };

  // DUMMY DATA 
  const firstName = {label: 'First Name', value: 'John'};
  const lastName = {label: 'Last Name', value: 'Doe'};
  const DateOfBirth = {label: 'Date of Birth', value: '1985-07-25'};
  const DateOfService = {label: 'Date of Service', value: '2023-07-21'};
  const location = {label: 'Care Location', value: 'Street Corner Care'};
  const reason = {label: 'Reason for Consultation', value:'Patient feels dizzy after diarrhea'};

  const vitalData = [
      {label: 'Pain Level(0~10,0-no pain,10-worst pain)', value: '8', unit: ''},
      {label: 'Temperature', value: '99', unit: 'F'},
      {label: 'Blood Pressure', value: '120/80', unit:'mmHg'},
      {label: 'Pulse', value: '70', unit:'bpm'},
      {label: 'Oxygen', value: '98', unit:'%'},
      {label: 'Glucose', value: '110', unit:'mg/dl'},  
      // {label: 'Weight', value: '150',unit:'Lbs'}, 
  ];

  const medicalHistory = {label: 'Medical History', value: 'high blood pressure, diabetes'};
  const medication = {label: 'Current Medication', value: 'Metoprolol, furosemide, metformin'};
  const allergies = {label: 'Allergies', value: 'Sulfa'};
      

return (
  <View style={{ flex: 1 }}>
    {/* The floating window that contains patient's personal info  */}
    <View style={{
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      padding: 10, 
      backgroundColor: '#DDE5FD', 
      zIndex: 999, 
      elevation: 3, 
      flexDirection: 'column',
      justifyContent: 'space-between',
      height:100
    }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{fontSize: 25, fontWeight: '500', width: '100%'}}>Name: {firstName.value} {lastName.value}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{fontSize: 20, fontWeight: '400', width: '45%'}}>DOB: {DateOfBirth.value}</Text>
        <Text style={{fontSize: 20, fontWeight: '400', width: '45%'}}>DOS: {DateOfService.value}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{fontSize: 20, fontWeight: '400', width: '100%'}}>Site: {location.value}</Text>
      </View>
    </View>
    {/* --------------------------------------------------------- */}

    <ScrollView>
    <KeyboardAwareScrollView contentContainerStyle={{...styles.container, paddingTop: 100}}>
      <Text style={{fontSize:27}}>Visit Note</Text>

      <View style={{alignItems:'flex-start',width:'100%'}}>
        <Text style={{fontSize:20, marginLeft:5, fontWeight:500}}>Chief Complaint</Text>
      </View>

      <BigShowcaseBoxWithLabel
        label={reason.label}
        value={reason.value}
        unit=''
        width="100%"
      />
          
      <View style={{alignItems:'flex-start',width:'100%'}}>
        <Text style={{fontSize:20, marginLeft:5, fontWeight:500}}>Subjective</Text>
      </View>

      <View style={{width:'100%'}}>
        <ProviderInputBox 
          label="Subjective*"
          value={subjective}
          width="100%"
          placeholder="Click to Enter Your Subjective ..."
          onChangeText={(text) => setSubjective(text)}
        />

        <BigShowcaseBoxWithLabel            
            label={medicalHistory.label}
            value={medicalHistory.value}
            unit= ''
            width="100%"
        />
        <BigShowcaseBoxWithLabel            
            label={[ medication.label, ' / ', allergies.label ]}
            value={[ medication.value, ' [',allergies.label,': ', allergies.value, ']' ]}
            unit= ''
            width="100%"
        />

      </View>

      {vitalData.map((item, index) => (
          <ShowcaseBoxWithLabel
            key={index}
            label={item.label}
            value={item.value}
            unit= {item.unit}
            width="100%"
          />
        ))}

      <View style={{alignItems:'flex-start',width:'100%'}}>
        <Text style={{fontSize:20, marginLeft:5, fontWeight:500}}>Objective</Text>
      </View>

      <View style={{width:'100%'}}>
        <ProviderInputBox 
          label="Objective*"
          value={objective}
          width="100%"
          placeholder="Click to Enter Your Objective ..."
          onChangeText={(text) => setObjective(text)}
        />

        <ProviderInputBox 
          label="Assessment / Future Plan*"
          value={assessment}
          width="100%"
          placeholder="Click to Enter Your Assessment/Future Plan ..."
          onChangeText={(text) => setAssessment(text)}
        />
      </View>

      <View style={{width:'80%',alignItems:'center',marginTop:10,marginBottom:20}}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    
    </KeyboardAwareScrollView>
    </ScrollView>

  </View>
  );
}