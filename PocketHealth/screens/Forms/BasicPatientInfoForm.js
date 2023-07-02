// react native library：
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// own components and styles
import RadioMutipleChoice from '../../components/RadioMultipleChoice';
import InputBoxWithLabel from '../../components/InputBoxWithLabel';
import styles from './styles';

const BasicPatientInfoForm = ({navigation}) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [genderSelection, setGenderSelection] = useState(null);
  const genderOptions = [
    {value: 'male', choiceLabel: 'Male'},
    {value: 'female', choiceLabel: 'Female'},
    {value: 'other', choiceLabel: 'Other'},
  ];  

  // Backend api call GOES INSIDE
  const handleSubmit = () => {
    if (!firstName) {
      alert('Please enter your first name');
    }
    else if(!age) {
      alert('Please enter your age');
    }
    else if(!genderSelection){
      alert('Please choose your Biological Sex');
    }
    else if (typeof firstName !== "string" || typeof lastName !== "string") {
      alert('Please enter a valid name');
    }
    else {
      console.log(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}, Sex: ${genderSelection}`);
      navigation.navigate("Medical History");
    }   
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={{marginTop: 75,marginBottom:70,width:'100%'}}>
        <Text style={styles.titleText}>Welcome,{'\n'}Set Up Your Account</Text>
        <Text style={{marginTop:10,fontSize:17}}>* is Required</Text>
      </View>    

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
          label="Age*"        
          value={age}
          onChangeText={(text) => setAge(text)}
          placeholder="Age"        
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
        }} onPress={handleSubmit}>
          <Text style={{color:'#fff',fontSize: 25}}>Next</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAwareScrollView>
  );
};

export default BasicPatientInfoForm;

