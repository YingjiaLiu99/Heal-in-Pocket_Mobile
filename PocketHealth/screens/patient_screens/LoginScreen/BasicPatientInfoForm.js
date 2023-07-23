// react native library：
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// own components and styles
import RadioMutipleChoice from '../../../components/RadioMultipleChoice';
import InputBoxWithLabel from '../../../components/InputBoxWithLabel';
import styles from '../../patient_screens/Forms/styles';

const BasicPatientInfoForm = ({navigation}) => {

  const [errorMessage, setErrorMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateofbirth, setDateofBirth] = useState('');
  const [genderSelection, setGenderSelection] = useState(null);

  const genderOptions = [
    {value: 'male', choiceLabel: 'Male'},
    {value: 'female', choiceLabel: 'Female'},
    {value: 'other', choiceLabel: 'Other'},
  ];  

  // Handle date of birth with "/"
  const handleDateChange = (text) => {
    const formattedText = text.split('/').join('');
    if (formattedText.length >= 5) {
      text = text.split('/').join('').replace(/(\d{2})(\d{2})(\d{1,4})/, "$1/$2/$3");
    } else if (formattedText.length >= 3) {
      text = text.split('/').join('').replace(/(\d{2})(\d{1,2})/, "$1/$2");
    }
  
    if (formattedText.length <= 8) {
      setDateofBirth(text);
    }
  };


  

  // Backend api call GOES INSIDE
  const handleSubmit = () => {
    if (!firstName) {
      setErrorMessage('Please enter your first name');      
    }
    else if(!dateofbirth) {
      setErrorMessage('Please enter your date of birth');
    }
    else if(!genderSelection){
      setErrorMessage('Please choose your Biological Sex');
    }
    else if (typeof firstName !== "string" || typeof lastName !== "string") {
      setErrorMessage('Please enter a valid name');
    }
    else {
      console.log(`First Name: ${firstName}, Last Name: ${lastName}, DOB: ${dateofbirth}, Sex: ${genderSelection}`);
      navigation.navigate("Medical History");
    }   
  };

  return (
    <ScrollView style={{flex: 1}}>
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={{marginTop: 75,marginBottom:70,width:'100%'}}>
        <Text style={styles.titleText}>Welcome,{'\n'}Set Up Your Account</Text>
        <Text style={{marginTop:10,fontSize:17}}>* is Required</Text>
      </View>    

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <InputBoxWithLabel
        label="First Name*"        
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        placeholder="Please enter your first name"
        keyboardType="default"
        width='100%'
      />

      <InputBoxWithLabel
        label="Last Name"        
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        placeholder="Please enter your Last name"
        keyboardType="default"
        width='100%'
      />
      
      <View style={{width:'100%',flexDirection:'row'}}>
        <InputBoxWithLabel
          label="Date of Birth*"        
          value={dateofbirth}
          onChangeText={(text) => handleDateChange(text)}
          placeholder="MM/DD/YYYY"        
          width='30%'
          keyboardType="phone-pad"
        />

        <View style={{marginLeft:30,marginTop:-10}}>
          <RadioMutipleChoice
            options={genderOptions}
            onSelectionChange={setGenderSelection}
            upperLabel='Biological Sex*'
          />        
        </View>
      </View>      
      

      <View style={{width:'100%',alignItems:'flex-end',marginTop:30,marginBottom:40}}>
        <TouchableOpacity 
        style={{
          height: 70,
          width: '30%',
          marginVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#395BCD',
          borderRadius:20           
        }} onPress={handleSubmit}>
          <Text style={{color:'#fff',fontSize: 25}}>Next</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default BasicPatientInfoForm;

