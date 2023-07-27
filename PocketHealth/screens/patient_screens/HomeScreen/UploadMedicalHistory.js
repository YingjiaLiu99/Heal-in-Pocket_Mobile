import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import MedHisInputBoxWithLabel from './components/MedHisInputBoxWithLabel';
import styles from './styles';


const UploadMedicalHistory = ({navigation}) => {
  const [values, setValues] = useState({
    value1: '',
    value2: '',
    value3: '',
  });

// function to check if the patient enter any vital
const isInputEmpty = (values) => {
  for (let key in values) {
    if (values[key] !== '') {
      return false;
    }
  }
  return true;
};

const [confirmSubmit, setConfirmSubmit] = useState(false);
const [errorMessage, setErrorMessage] = useState('');

  const handleValueChange = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });

    // input is on going, so set it false
    if (confirmSubmit) {
      setConfirmSubmit(false);
    }
  };

  const handleSubmit = () => {

    if (isInputEmpty(values)) {
      setErrorMessage('Please fill in at least one Medical history to submit. Or you can skip this page.');
      return;
    }
    else {
      setErrorMessage('');
    }
   
    if (confirmSubmit) {
              
      // Go Home while confirm
      navigation.navigate('Home');
      setConfirmSubmit(false);
  
    } 
    else {
      // Press first time, input is done, so set it true
      setConfirmSubmit(true);  
    }    
  };

  const handleSkip = () => {
    
      navigation.navigate('Home');
    
  };

  const handleOutsidePress = () => {
    if(confirmSubmit) {
      setConfirmSubmit(false);
    }    
  };

  return (    
    <View style={{flex:1}}>
    <ScrollView style={{flex: 1}}>
    <KeyboardAwareScrollView contentContainerStyle={[styles.container, {flexGrow: 1}]}>

      <View style={{marginTop: 20,marginBottom:20,width:'100%'}}>
        <Text style={{fontSize:30, fontWeight:400}}>Update My Medical History</Text>          
      </View>      
      
      <View style={{width:"100%"}}>
        <MedHisInputBoxWithLabel
          label="Chronic Illness"
          value={values.value1}          
          width="95%"
          onChangeText={(text) => handleValueChange('value1', text)}
          onFocus={handleOutsidePress}
        />
        <MedHisInputBoxWithLabel
          label="Current Medication"
          value={values.value2}          
          width="95%"
          onChangeText={(text) => handleValueChange('value2', text)}
          onFocus={handleOutsidePress}
        />
        <MedHisInputBoxWithLabel
          label="Allergies"
          value={values.value3}   
          width="95%"
          onChangeText={(text) => handleValueChange('value3', text)}
          onFocus={handleOutsidePress}
        />
      </View>

      {errorMessage ? <Text style={{color:'red', fontSize:18, marginVertical:10}}>{errorMessage}</Text> : null}  


      <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:0}}>
          <TouchableOpacity style={confirmSubmit ? styles.confirmButton : styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>
              {confirmSubmit ? 'Submit' : 'Confirm'}
            </Text>
          </TouchableOpacity>
        </View>

      <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:0}}>
        <TouchableOpacity style={styles.button} onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    
    </KeyboardAwareScrollView>
    </ScrollView>
    </View>    
  );
};  

export default UploadMedicalHistory;
