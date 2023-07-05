import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import InputBoxWithLabel from './components/InputBoxWithLabel';
import styles from './styles.js';

export default function PhoneVerification({route, navigation}) {
    const [verificationCode, setverificationCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [counter, setCounter] = useState(60);
    const [disableResend, setDisableResend] = useState(true);
    const [isNewCodeSent, setIsNewCodeSent] = useState(false);

    useEffect(() => {
        if(counter > 0) {
            const timer = setTimeout(() => setCounter(counter - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setDisableResend(false);
        }
    }, [counter]);

    const handleSignUpVerification = () => {
        if(!verificationCode) {
            setErrorMessage('Please Enter Your Verification Code');
        }
        else{
            console.log('Sign Up Success!');
            navigation.navigate("Basic Patient Info");
        }      
    };
    const handleFromResetPassword = () => {
        if(!verificationCode) {
            setErrorMessage('Please Enter Your Verification Code');
        }
        else{
            console.log('verify Success!');
            navigation.navigate("Patient Reset Password");
        }      
    };


    const handleResend = () => {
        // resend verification code backend goes here
        setCounter(60);
        setDisableResend(true);
        setIsNewCodeSent(true);
    };

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>

            <View style={{alignItems:'center',marginTop: 75,marginBottom:90}}>
                <Text style={styles.titleText}>Phone Verification</Text>
            </View>

            <View style={{width:'100%',alignItems:'center',marginTop:20,marginBottom:20}}>                

                <Text style={{color:'#7C7C7C',fontSize:15}}>
                {
                        isNewCodeSent 
                            ? `A new verification code has just been sent to your phone number : +1 xxx-xxx-${route.params.phoneNumber.substr(-4)}`
                            : `A verification code has just been sent to your phone number: +1 xxx-xxx-${route.params.phoneNumber.substr(-4)}`
                    }
                    </Text>

            </View>

            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

            <InputBoxWithLabel
                label="Verification Code"    
                value={verificationCode}  
                onChangeText={(text) => setverificationCode(text)}  
                placeholder="Please Enter the Verification Code"    
                keyboardType="phone-pad"        
            />            

            <TouchableOpacity onPress={handleResend} disabled={disableResend}>
                <Text style={styles.resend}>{counter > 0 ? `Resend in ${counter}s` : 'Resend Now'}</Text>
            </TouchableOpacity>

            <View style={{width:'100%',alignItems:'center',marginTop:50,marginBottom:40}}>
                <TouchableOpacity style={styles.button} onPress={route.params.fromForgotPassword ? handleFromResetPassword : handleSignUpVerification} >
                    <Text style={styles.buttonText}>
                    {route.params.fromForgotPassword ? 'Reset Password' : 'Create Account'}</Text>
                </TouchableOpacity>
            </View> 

        </KeyboardAwareScrollView>
    );
}