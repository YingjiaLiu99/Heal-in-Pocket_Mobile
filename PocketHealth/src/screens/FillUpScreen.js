// import React from 'react';
// import { StyleSheet, Text, ScrollView, View } from 'react-native';
// import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
// import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
// import {createPatient} from '../graphql/mutations';
// import {useState} from 'react'
// import { useEffect } from "react";


// const FillUpScreen = ({navigation, route}) => {
//     const [userInfo, setUserInfo] = useState("");
//     const [userID, setUserID] = useState("");
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [bloodPressure, setBloodPressure] = useState('')
//     const [height, setHeight] = useState('')
//     const [weight, setWeight] = useState('')

//     // useEffect(()=> {
//     //     fetchUser();        
//     // }, []);

//     const performSignup = () => {
//         route.params.setIsSignedIn(true);
//     };

//     // const fetchUser = async () => {
//     //     const cognitoUser = await Auth.currentAuthenticatedUser({
//     //         bypassCache: false,
//     //     });
//     //     setUserInfo(cognitoUser);
//     //     setUserID(cognitoUser.username);
//     //     setEmail(cognitoUser.attributes.email);
//     //     console.log("user id:  "+ userID);
//     //     console.log("user email:  "+ email);
        
//     // };

//     const AddPatient = async() =>{
//         var currentdate = new Date();
//         var datetime = currentdate.getDate() + "/"
//         + (currentdate.getMonth()+1)  + "/" 
//         + currentdate.getFullYear() + " @ "  
//         + currentdate.getHours() + ":"  
//         + currentdate.getMinutes() + ":" 
//         + currentdate.getSeconds();
//         var Item_id = "Item_id" + name + Math.random().toString(16).slice(2) + datetime;
//         var PatientID = "PID" + name + Math.random().toString(16).slice(2);
//         const createPatientInput ={
//             id: Item_id,            
//             PID: PatientID,
//             Pname: name,            
//             // Email: userInfo.email,
//             Email: "fakeUserEmail",
//             Weight: weight,
//             Height: height,
//             Blood_pressure: bloodPressure
//         };
//         const pushInfo = await API.graphql(graphqlOperation(createPatient,{input: createPatientInput}, 'AMAZON_COGNITO_USER_POOLS'));
//         console.log(JSON.stringify(pushInfo.data))
//     }


//     const onPress = () => {
//         performSignup();        
//         AddPatient();
//     };

//     return (        
//         <ScrollView>
//             <KeyboardAvoidingView style = {styles.container} behavior = "padding">
//                 <View style = {styles.inputContainer}>

//                     <TextInput
//                         placeholder = "Enter Patient's Name"
//                         placeholderTextColor={"#666559"}
//                         value = {name}
//                         onChangeText = {text => setName(text)}
//                         style ={styles.input}
//                     />                    

//                     <TextInput
//                         placeholder = "Enter Patient's Blood Pressure"
//                         placeholderTextColor={"#666559"}
//                         value = {bloodPressure}
//                         onChangeText = {text => setBloodPressure(text)}
//                         style ={styles.input}
//                     />                  

//                     <TextInput
//                         placeholder = "Enter Patient's Height"
//                         placeholderTextColor={"#666559"}
//                         value = {height}
//                         onChangeText = {text => setHeight(text)}
//                         style ={styles.input}
//                     />

//                     <TextInput
//                         placeholder = "Enter Patient's Weight"
//                         placeholderTextColor={"#666559"}
//                         value = {weight}
//                         onChangeText = {text => setWeight(text)}
//                         style ={styles.input}
//                     />

//                 </View>

//                 <View style={styles.buttonContainer}>
//                     <TouchableOpacity
//                     onPress = {onPress}
//                     style ={styles.button}
//                     >
//                     <Text style={styles.buttonText}>Submit</Text>
//                     </TouchableOpacity>
//                 </View>
//             </KeyboardAvoidingView>
//         </ScrollView>
//     )
// }

// export default FillUpScreen

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     inputContainer:{
//         width: '90%',
//     },
//     input: {
//         height: 150,
//         justifyContent: "flex-start",
//         borderColor: "grey",
//         backgroundColor: "white",        
//         borderWidth: 1,
//         padding: 5,
//         margin: 1
//     },
//     buttonContainer:{
//         width: '60%',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 40,
//     },
//     button:{
//         backgroundColor:'#1DF9F4',
//         width: '100%',
//         padding: 15,
//         borderRadius: 10,
//         alignItems: 'center',
//     },
//     buttonOutline: {
//         backgroundColor: 'white',
//         marginTop: 5,
//         borderColor: '#1DF9F4',
//         borderWidth: 2        
//     },
//     buttonText:{
//         color: 'white',
//         fontWeight:'700',
//         fontSize: 16,
//     },
//     buttonOutlineText:{
//         color: '#1DF9F4',
//         fontWeight:'700',
//         fontSize: 16,
//     },

// })
