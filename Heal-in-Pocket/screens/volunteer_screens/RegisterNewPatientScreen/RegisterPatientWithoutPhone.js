// react native library：
import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

// own components and styles
import RadioMutipleChoice from './components/RadioMultipleChoice';
import InputBoxWithLabel from '../../../components/InputBoxWithLabel';
import styles from './styles';
import axios from 'axios';
import baseURL from '../../../common/baseURL';

const RegisterPatientWithoutPhone = ({navigation}) => {

  const [errorMessage, setErrorMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateofbirth, setDateofBirth] = useState('');
  const [insurance, setInsurance] = useState('');
  const [primaryCareProvider, setPrimaryCareProvider] = useState('');
  const [lastSeen, setLastSeen] = useState('');
  const [genderSelection, setGenderSelection] = useState(null);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const dobRef = useRef(null);
  const insuranceRef = useRef(null);
  const primaryCareProviderRef = useRef(null);
  const lastSeenRef = useRef(null);


  const genderOptions = [
    {value: 'male', choiceLabel: 'Male'},
    {value: 'female', choiceLabel: 'Female'},
    {value: 'other', choiceLabel: 'Other'},
  ];  

  const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = date.getFullYear();
    // setDate(`${month}/${day}/${year}`);
    
    return `${month}/${day}/${year}`;
  }

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
  const handleSubmit = async() => {
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
      const newPatient = {
        name: `${firstName} ${lastName}`,
        gender: genderSelection,
        date_of_birth: dateofbirth,
        insurance: insurance || "N/A",
        primary_care_provider: primaryCareProvider || "N/A",
        last_seen: lastSeen || "N/A"
      }

      try {
        //api call to backend
        const response = await axios.post(`${baseURL}patient/volCreateNewPatientWithoutPhoneNum`, newPatient);
        console.log("the patient is: ", response.data);
        console.log("the patient id is : ", response.data.patient.id);
        const patient_id = response.data.patient.id; //store the patient id
        
        // navigate to the next page together with the required parameters
        navigation.navigate("Upload New Record",
        {
          firstName: firstName,
          lastName: lastName,
          DOB: dateofbirth,
          patientId: patient_id,
          date:getCurrentDate(),
        });
      } catch (error) {
        console.error('Error registering patient:', error.response?.data || error.message);
        setErrorMessage('Failed to register patient.');
      }
    }
    
  };

  return (
    <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={
      {
        alignItems: 'center',      
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical:0,      
        marginTop: 0,
        marginHorizontal:0,
      }}>
    
      <View style={{marginTop: 35,marginBottom:30,width:'100%'}}>
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
        onSubmitEditing={() => dobRef.current.focus()}
        returnKeyType='next'
      />
      
      
      <InputBoxWithLabel
        label="Date of Birth*"        
        value={dateofbirth}
        ref={dobRef}
        onChangeText={(text) => handleDateChange(text)}
        placeholder="MM/DD/YYYY"        
        width='100%'
        keyboardType="phone-pad"
        returnKeyType='next'
        onSubmitEditing={() => insuranceRef.current.focus()}
      />

      <InputBoxWithLabel
          label="Insurance"        
          value={insurance}
          ref={insuranceRef}
          onChangeText={(text) => setInsurance(text)}
          placeholder="Please enter insurance"
          keyboardType="default"
          width='100%'
          onSubmitEditing={() => primaryCareProviderRef.current.focus()}
          returnKeyType='next'
      />

      <InputBoxWithLabel
          label="Primary Care Provider"        
          value={primaryCareProvider}
          ref={primaryCareProviderRef}
          onChangeText={(text) => setPrimaryCareProvider(text)}
          placeholder="Please enter primary care provider"
          keyboardType="default"
          width='100%'
          onSubmitEditing={() => lastSeenRef.current.focus()}
          returnKeyType='next'
      />

      <InputBoxWithLabel
          label = "Last Seen/Hospitalized"
          value={lastSeen}
          ref={lastSeenRef}
          onChangeText={(text) => setLastSeen(text)}
          placeholder="Please enter the hospitalized history"
          keyboardType="default"
          width='100%'
      />

      
      <View style={{marginTop:-10}}>
        <RadioMutipleChoice
          options={genderOptions}
          onSelectionChange={setGenderSelection}
          upperLabel='Biological Sex*'
        />        
      </View>            
      

      <View style={{width:'100%',alignItems:'flex-end',marginTop:20,marginBottom:20}}>
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

      {/* reserve empty space for keyboard: */}
      <View style={{ height: 300 }} />  

    </ScrollView>
  );
};

export default RegisterPatientWithoutPhone;