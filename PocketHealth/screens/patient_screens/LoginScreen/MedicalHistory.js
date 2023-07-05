import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import BigInputBoxWithLabel from './components/BigInputBoxWithLabel';
import styles from './styles';

const PatientHistoryForm = ({navigation}) => {
  const [allergies, setAllergies] = useState('');
  const [illness, setIllness] = useState('');
  const [medications, setMedications] = useState('');

  const handleCreateAccount = () => {
    console.log(`Chronical Illness: ${illness}`);    
    console.log(`Medications: ${medications}`);   
    console.log(`Allergies: ${allergies}`); 
    
    navigation.reset({
        index: 0,
        routes: [{ name:'Patient Main Tab', 
          state:{ 
            routes:[ {name:'My Home', state:{routes:[ {name:'Home'} ]}} ] 
          } 
        }],
      });

  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={{marginTop: 30,marginBottom:30,width:'100%'}}>
            <Text style={{alignItems:'center',fontSize:35,fontWeight: 400}}>One More Step...</Text>  
            <Text style={{color:'#BDBDBD',fontSize:19,marginTop:0,marginLeft:5}}>Enter information to help your doctors</Text>          
        </View>

        <View style={{width:'100%',alignItems:'center',marginTop:0,marginBottom:10}}>
            <BigInputBoxWithLabel
                label="Chronic Illness"        
                value={illness}
                onChangeText={(text) => setIllness(text)}
                placeholder="Any known chronic Illness"
                keyboardType="default"
                width='100%'
            />
            <BigInputBoxWithLabel
                label="Current Medication"        
                value={medications}
                onChangeText={(text) => setMedications(text)}
                placeholder="Please write down any medication you currently take"
                keyboardType="default"
                width='100%'
            />
            <BigInputBoxWithLabel
                label="Allergies"        
                value={allergies}
                onChangeText={(text) => setAllergies(text)}
                placeholder="Any known allergies"
                keyboardType="default"
                width='100%'
            />
        </View>

        <View style={{width:'100%',alignItems:'center',marginTop:5,marginBottom:40}}>
            <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
            <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
        </View>

    </KeyboardAwareScrollView>    
  );
};

export default PatientHistoryForm;
