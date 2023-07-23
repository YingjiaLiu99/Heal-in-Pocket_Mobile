import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ShowcaseBoxWithLabel from '../../../components/ShowcaseBoxWithLabel';
import BigShowcaseBoxWithLabel from '../../../components/BigShowcaseBoxWithLabel';
import ProviderInputBox from './components/ProviderInputBox';

export default function ProviderResponseScreen({navigation}) { 
// qzh_General5
    
//   const [assessment, setAssessment] = useState('');
//   const [futurePlan, setFuturePlan] = useState('');
//   const [reasonDoc, setReasonDoc] = useState('');
//   const [confirmSubmit, setConfirmSubmit] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');


//   const handleInputChange = (name, value) => {
//     switch (name) {
//         case 'assessment':
//             setAssessment(value);
//             break;
//         case 'futurePlan':
//             setFuturePlan(value);
//             break;
//         case 'reasonDoc':
//             setReasonDoc(value);
//             break;
//         default:
//             break;
//     }

//     if (confirmSubmit) {
//       setConfirmSubmit(false);
//     }
//   }

//   const handleSubmit = () => {
//     if(assessment === '' || futurePlan === '' || reasonDoc === ''){
//       setErrorMessage('Please fill in fields.');
//       return;
//     }

//     if (confirmSubmit) {
              
//       // Go to success while confirm
//       navigation.navigate('Success');
//       console.log(assessment);
//       console.log(futurePlan);
//       setConfirmSubmit(false);
  
//     } 
//     else {
//       // Press first time, input is done, so set it true
//       setConfirmSubmit(true);  
//     }

      

  
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
      {label: 'Temp', value: '99', unit: 'F'},      
      {label: 'Pulse', value: '70', unit:'bpm'},
      {label: 'Oxygen', value: '98', unit:'%'},
      {label: 'BP', value: '120/80', unit:'mmHg'},
      {label: 'BG', value: '110', unit:'mg/dl'},             
  ];

// qzh_General5
//   const medHisData = [
//     {   
//       label: 'Chronic Illness', 
//       value: ' high blood pressure, diabetes'
//     },
//     {   
//       label: 'Current Medication', 
//       value: 'Metoprolol'
//     },
//     {
//       label: 'Allergies', 
//       value: 'Sulfa'
//     },
//   ];

//   const handleOutsidePress = () => {
//     if(confirmSubmit) {
//       setConfirmSubmit(false);
//     }
//     Keyboard.dismiss(); // Dismiss the keyboard
//   };
    

//   return (
//     <TouchableWithoutFeedback onPress={handleOutsidePress} accessible={false}>
//       <ScrollView>
//         <KeyboardAwareScrollView contentContainerStyle={styles.container}>
    
//           <Text style={styles.heading}>Visit Note</Text>
//           <Text style={{fontSize:18}}>Patient Info</Text>
        
//           <ShowcaseBoxWithLabel
//             label={firstName.label}
//             value={firstName.value}
//             unit=''
//             width="100%"
//           />

//         <ShowcaseBoxWithLabel
//           label={lastName.label}
//           value={lastName.value}
//           unit=''
//           width="100%"
//         />
        
//         <BigShowcaseBoxWithLabel
//           label={reason.label}
//           value={reason.value}
//           unit=''
//           width="100%"
//         />

      
//         <Text style={{fontSize:18}}>Patient Vitals</Text>

//         {vitalData.map((item, index) => (
//             <ShowcaseBoxWithLabel
//               key={index}
//               label={item.label}
//               value={item.value}
//               unit= {item.unit}
//               width="100%"
//             />
//           ))}
    
//         <Text style={{fontSize:18}}>Patient Medical History</Text>

//         {medHisData.map((item, index) => (
//             <BigShowcaseBoxWithLabel
//               key={index}
//               label={item.label}
//               value={item.value}          
//               width="100%"
//             />
//           ))}
        
//         <Text style={{fontSize:20, color:'red'}}>Provider's Input (*required)</Text>

//         <View style={{width:"100%"}}>
//         <ProviderInputBox 
//           label="Reason For Consultation*"
//           value={reasonDoc}
//           width="100%"
//           placeholder="Click to Enter Reason For Consultation ..."
//           onChangeText={(text) => handleInputChange('reasonDoc', text)}
//         />

//         <ProviderInputBox 
//           label="Assessment*"
//           value={assessment}
//           width="100%"
//           placeholder="Click to Enter Your Assessment ..."
//           onChangeText={(text) => handleInputChange('assessment', text)}
//         />

//         <ProviderInputBox 
//           label="Future Plan*"
//           value={futurePlan}
//           width="100%"
//           placeholder="Click to Enter Suggested Future Plan ..."
//           onChangeText={(text) => handleInputChange('futurePlan', text)}
//         />
//         </View>

//         {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null} 


//         <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:0}}>
//           <TouchableOpacity style={confirmSubmit ? styles.confirmButton : styles.buttonContainer} onPress={handleSubmit}>
//             <Text style={styles.buttonText}>
//               {confirmSubmit ? 'Submit' : 'Confirm'}
//             </Text>
//           </TouchableOpacity>
//         </View>
// =======
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
    </TouchableWithoutFeedback>

  </View>
  );
}