// react native library：
import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// own components and styles
import RadioMutipleChoice from '../../../components/RadioMultipleChoice';
import InputBoxWithLabel from '../../../components/InputBoxWithLabel';
import styles from './styles';

const RegisterPatientWithPhone = ({navigation}) => {

  const [errorMessage, setErrorMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateofbirth, setDateofBirth] = useState('');
  const [genderSelection, setGenderSelection] = useState(null);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneNumRef = useRef(null);
  const dobRef = useRef(null);

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
    else if(!phoneNumber) {
      setErrorMessage('Please enter your phone number');
    }
    else if(!genderSelection){
      setErrorMessage('Please choose your Biological Sex');
    }
    else if (typeof firstName !== "string" || typeof lastName !== "string") {
      setErrorMessage('Please enter a valid name');
    }
    else {
      navigation.navigate("Register Patient Phone Verification",
      {
        phoneNumber:phoneNumber,
        firstName: firstName,
        lastName: lastName,
        DOB: dateofbirth,
        gender: genderSelection
      });
    }   
  };

  return (
    <ScrollView>
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={{marginTop: 20,marginBottom:10,width:'100%'}}>
        <Text style={styles.titleText}>Enter Patient Information To Set Up Account</Text>
        <Text style={{marginTop:10,fontSize:17}}>* is Required</Text>
      </View>    

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <InputBoxWithLabel
        label="First Name*"        
        value={firstName}
        ref={firstNameRef}
        onChangeText={(text) => setFirstName(text)}
        placeholder="Please enter patient first name"
        keyboardType="default"
        width='100%'
        onSubmitEditing={() => lastNameRef.current.focus()}
        returnKeyType='next'
        autoFocus
      />

      <InputBoxWithLabel
        label="Last Name"        
        value={lastName}
        ref={lastNameRef}
        onChangeText={(text) => setLastName(text)}
        placeholder="Please enter patient Last name"
        keyboardType="default"
        width='100%'
        onSubmitEditing={() => phoneNumRef.current.focus()}
        returnKeyType='next'
      />
      
      <InputBoxWithLabel
        label="Phone Number*"        
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholder="Please enter patient phone number"
        keyboardType="phone-pad"
        width='100%'
        ref={phoneNumRef}
        onSubmitEditing={() => dobRef.current.focus()}
      />

      <View style={{width:'100%'}}>
        <InputBoxWithLabel
          label="Date of Birth*"        
          value={dateofbirth}
          onChangeText={(text) => handleDateChange(text)}
          placeholder="MM/DD/YYYY"        
          width='100%'
          keyboardType="phone-pad"
          ref={dobRef}
          returnKeyType='done'
        />

        <View style={{marginTop:-10, marginLeft:-105}}>
          <RadioMutipleChoice
            options={genderOptions}
            onSelectionChange={setGenderSelection}
            upperLabel='Biological Sex*'
          />        
        </View>
      </View>      
      

      <View style={{width:'100%',alignItems:'flex-end',marginTop:20,marginBottom:20}}>
        <TouchableOpacity 
        style={{
          height: 70,
          width: '30%',
          marginVertical: 0,
          marginBottom:20,
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

export default RegisterPatientWithPhone;
