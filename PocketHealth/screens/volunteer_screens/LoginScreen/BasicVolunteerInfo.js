import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import InputBoxWithLabel from './components/InputBoxWithLabel';
import styles from './styles';


export default function BasicVolunteerInfo({navigation}) {
    const [errorMessage, setErrorMessage] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [title, setTitle] = useState('');
    const [affiliation, setAffiliation] = useState('');

    const handleSignUp = () => {
        if (!firstName) {
            setErrorMessage('Please enter your first name');      
        }
        else if (!lastName) {
            setErrorMessage('Please enter your last name');
        }
        else if (!title) {
            setErrorMessage('Please enter your title');
        }
        else {
            console.log(`First Name: ${firstName}, Last Name: ${lastName}, title: ${title}, affiliation: ${affiliation}`);
            navigation.navigate("More Volunteer Info");
        }
    };


return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={{marginTop:25,marginBottom:40,width:'100%'}}>
            <Text style={{fontSize:40,fontWeight:400}}>Welcome,{'\n'}Set Up Your Account</Text>
            <Text style={{marginTop:10,fontSize:17}}>* is Required</Text>
        </View>

        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

        <InputBoxWithLabel
            label="First Name*"    
            value={firstName}  
            onChangeText={(text) => setFirstName(text)}  
            placeholder="Please Enter Your First Name"    
            keyboardType="default"        
        />

        <InputBoxWithLabel
            label="Last Name*"    
            value={lastName}  
            onChangeText={(text) => setLastName(text)}  
            placeholder="Please Enter Your Last Name"    
            keyboardType="default"        
        />

        <InputBoxWithLabel
            label="Title*"    
            value={title}  
            onChangeText={(text) => setTitle(text)}  
            placeholder="Please Enter Your title (eg. MD, NP, etc.)"    
            keyboardType="default"        
        />

        <InputBoxWithLabel
            label="Affiliation"    
            value={affiliation}  
            onChangeText={(text) => setAffiliation(text)}  
            placeholder="Please Enter Your Affiliation (optional)"    
            keyboardType="default"        
        />

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
                }} onPress = {handleSignUp}>
            <Text style={{color:'#fff',fontSize: 25}}>Next</Text>
            </TouchableOpacity>
      </View>

    </KeyboardAwareScrollView>
    );
};