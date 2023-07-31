import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ShowcaseBoxWithLabel from '../../../components/ShowcaseBoxWithLabel';
import BigShowcaseBoxWithLabel from '../../../components/BigShowcaseBoxWithLabel';
import ProviderInputBox from './components/ProviderInputBox';

export default function ProviderResponseScreen({route, navigation}) { 
  const { index, requests, setRequests } = route.params;

  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 
  const [subjective, setSubjective] = useState('');
  const [objective, setObjective] = useState('');
  const [assessment, setAssessment] = useState(''); 

const handleSubmit = () => {
  // if(assessment === '' || subjective === '' || objective === ''){
  //   setErrorMessage('Please fill in fields.');      
  // }

  if (confirmSubmit) {            
    // Go to success while confirm
    const newRequests = [...requests];
    newRequests.splice(index, 1);
    setRequests(newRequests);

    navigation.navigate('Success');
    console.log(assessment);
    console.log(subjective);
    console.log(objective); 
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

  // DUMMY DATA 
  const firstName = {label: 'First Name', value: 'Madison'};
  const lastName = {label: 'Last Name', value: 'Powers'};
  const DateOfBirth = {label: 'Date of Birth', value: '07/25/1977'};
  const DateOfService = {label: 'Date of Service', value: '7/26/2023'};
  const location = {label: 'Care Location', value: 'Street Corner Care'};
  const reason = {label: 'Chief Complaint', value:'Patient feels dizzy after diarrhea'};

  const vitalData = [      
      {label: 'Temp', value: '99', unit: 'F'},      
      {label: 'Pulse', value: '70', unit:'bpm'},
      {label: 'Oxygen', value: '98', unit:'%'},
      {label: 'BP', value: '120/80', unit:'mmHg'},
      {label: 'BG', value: '110', unit:'mg/dl'},             
  ];

  const medicalHistory = {label: 'Medical History', value: 'high blood pressure, diabetes'};
  const medication = {label: 'Current Medication', value: 'Metoprolol, furosemide, metformin'};
  const allergies = {label: 'Allergies', value: 'Sulfa'};
      

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
              <Text style={{fontSize: 25, fontWeight: '500',width:'100%',}}>{firstName.value} {lastName.value}</Text>
            </View>              
            
            <View style={{ flexDirection: 'row', paddingLeft:5}}>
              <Text style={{fontSize: 20, fontWeight: '400', width: '45%'}}>DOB: {DateOfBirth.value}</Text>
            </View>

            <View style={{ flexDirection: 'row', paddingLeft:5}}>
              <Text style={{fontSize: 20, fontWeight: '400', width: '100%'}}>{location.value} {'['} {DateOfService.value} {']'}</Text>
            </View>

            </View>

        </View>

          <ScrollView>
          <KeyboardAwareScrollView contentContainerStyle={{...styles.container, paddingTop: 85}}>
            <Text style={{fontSize:27}}>Visit Note</Text>

            <BigShowcaseBoxWithLabel
              label={reason.label}
              value={reason.value}
              unit=''
              width="100%"
            />            

            <View style={{width:'100%'}}>
              <ProviderInputBox 
                label="Subjective"
                value={subjective}
                width="100%"
                placeholder="Click to Enter Your Subjective ..."
                onChangeText={(text) => setSubjective(text)}
                onFocus={handleOutsidePress}
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

            <View style={{width:'100%', flexDirection: 'row', justifyContent: 'space-between',}}>
              <ShowcaseBoxWithLabel 
                label={vitalData[0].label}
                value={vitalData[0].value}
                unit={vitalData[0].unit}
                width='30%'
              />
              <ShowcaseBoxWithLabel 
                label={vitalData[1].label}
                value={vitalData[1].value}
                unit={vitalData[1].unit}
                width='30%'
              />
              <ShowcaseBoxWithLabel 
                label={vitalData[2].label}
                value={vitalData[2].value}
                unit={vitalData[2].unit}
                width='30%'
              />
            </View>

            <View style={{width:'100%', flexDirection: 'row', justifyContent: 'space-between',}}>
              <ShowcaseBoxWithLabel
                label={vitalData[3].label}
                value={vitalData[3].value}
                unit={vitalData[3].unit}
                width='45%'
              />
              <ShowcaseBoxWithLabel
                label={vitalData[4].label}
                value={vitalData[4].value}
                unit={vitalData[4].unit}
                width='45%'
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
              />

              <ProviderInputBox 
                label="Assessment / Future Plan"
                value={assessment}
                width="100%"
                placeholder="Click to Enter Your Assessment/Future Plan ..."
                onChangeText={(text) => setAssessment(text)}
                onFocus={handleOutsidePress}
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

          
          </KeyboardAwareScrollView>
          </ScrollView>          
        </View>
    
  );
};