// // import React from 'react'
// // import { StyleSheet, Text, View, Button } from 'react-native'
// // import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
// // import {useState} from 'react'
// // // import {Auth} from '@aws-amplify/auth'

// // const SignUpScreen = ({navigation, route}) => {
// //     // const[email, setEmail] = useState('')
// //     // const[password, setPassword] = useState('')
// //     // const[scc, setScc] = useState('')
// // const [email, onChangeEmail] = useState('');
// //     const [password, onChangePassword] = useState('');
// //     const [repeatpassword, onChangeRepeatPassword] = useState('');
// //     const [invalidMessage, setInvalidMessage] = useState(null);
// //     // const performSignup = () => {
// //     //     navigation.navigate('FillUp')
// //     // }
// //     const performSignup = async () => {
// //         if(password === repeatpassword) {
// //             try{
// //                 const user  = await Auth.signUp({
// //                     username:email,
// //                     password,
// //                     attributes:{
// //                         email,
// //                     }
// //                 })
// //                 route.params.setUser(user);
// //                 navigation.navigate('Confirmation', {email: email, password: password});
// //             } catch (error) {
// //                 console.log('error signing up:', error);
// //             }
// //         } else {
// //             console.log('Confirmed passwords do not match.')
// //         }
// //     }
// //     return (
// //         <KeyboardAvoidingView
// //             style = {styles.container}
// //             behavior = "padding"
// //         >
// //             <View style = {styles.inputContainer}>
// //             <TextInput
// //                 placeholder = "Enter Email"
// //                 placeholderTextColor={"#666559"}
// //                 value = {email}
// //                 onChangeText = {text => onChangeEmail(text)}
// //                 style ={styles.input}

// //             />
// //             <TextInput
// //                 placeholder = "Enter Password"
// //                 placeholderTextColor={"#666559"}
// //                 value = {password}
// //                 onChangeText = {text => onChangePassword(text)}
// //                 style ={styles.input}
// //                 secureTextEntry
// //             />
            
// //             <TextInput
// //                 placeholder = "Please Repeat your Password"
// //                 placeholderTextColor={"#666559"}
// //                 value = {repeatpassword}
// //                 onChangeText = {text => onChangeRepeatPassword(text)}
// //                 style ={styles.input}
// //                 secureTextEntry
// //             />

// //             </View>
// //             <View style={styles.buttonContainer}>
                
// //                 <TouchableOpacity
// //                 onPress = {() => performSignup() }
// //                 style ={styles.button}
// //                 >
// //                 <Text style={styles.buttonText}>Sign up</Text>
// //                 </TouchableOpacity>
// //             </View>
// //         </KeyboardAvoidingView>
// //     )
// // }

// // export default SignUpScreen

// // const styles = StyleSheet.create({
// //     container:{
// //         flex: 1,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //     },
// //     inputContainer:{
// //         width: '80%'
// //     },
// //     input: {
// //         backgroundColor: 'white',
// //         paddingHorizontal: 15,
// //         paddingVertical: 10,
// //         borderRadius: 10,
// //         marginTop: 5,
// //     },
// //     buttonContainer:{
// //         width: '60%',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         marginTop: 40,
// //     },
// //     button:{
// //         backgroundColor:'#1DF9F4',
// //         width: '100%',
// //         padding: 15,
// //         borderRadius: 10,
// //         alignItems: 'center',
// //     },
// //     buttonOutline: {
// //         backgroundColor: 'white',
// //         marginTop: 5,
// //         borderColor: '#1DF9F4',
// //         borderWidth: 2        
// //     },
// //     buttonText:{
// //         color: 'white',
// //         fontWeight:'700',
// //         fontSize: 16,
// //     },
// //     buttonOutlineText:{
// //         color: '#1DF9F4',
// //         fontWeight:'700',
// //         fontSize: 16,
// //     },

// // })
// import React, { useState } from 'react';
// import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity } from 'react-native';

// export default function SignUpScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (text) => {
//     setEmail(text);
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//   };
//     /// The Backend code goes here 
//   const handleSignUp = () => {
//     console.log('Sign up pressed');
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // Call API to sign up user here
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         value={email}
//         onChangeText={handleEmailChange}
//         placeholder="Email"
//         keyboardType="email-address"
//         autoCapitalize="none"
//         autoCorrect={false}
//       />
//       <TextInput
//         style={styles.input}
//         value={password}
//         onChangeText={handlePasswordChange}
//         placeholder="Password"
//         secureTextEntry
//         autoCapitalize="none"
//         autoCorrect={false}
//       />
//       <Button title="Sign Up" onPress={handleSignUp} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold'
//   },
//   input: {
//     height: 40,
//     width: 200,
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10
//   }
// });

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
/// The Backend code goes here
  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      // Call API to create user account
      console.log('Sign up successful');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  error: {
    color: 'red',
    marginBottom: 20
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#20315f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  }
});


