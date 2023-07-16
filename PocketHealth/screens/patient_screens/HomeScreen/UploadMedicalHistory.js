import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
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

  const handleValueChange = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    if(isInputEmpty(values)){
      Alert.alert('Your Input is Empty', 'If you dont wish to enter anything, please skip.',[
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'Skip',
          onPress: () => {
            navigation.navigate('Home');
          }          
        },        
      ]); 
    }
    else{
      Alert.alert('Are You Sure To Submit?', 'You cannot edit once submitted',[
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => {
            navigation.navigate('Home');
            console.log(values);
          }
        },
      ]);
    }    
  };

  const handleSkip = () => {
    if(!isInputEmpty(values)){
      Alert.alert('Are You Sure To Skip?', 'Your entered vitals will not be saved',[
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => {
            navigation.navigate('Home');
          }
        },
      ]);
    }
    else{
      navigation.navigate('Home');
    }
  };

  return (
    <ScrollView>
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>

      <View style={{marginTop: 20,marginBottom:20,width:'100%'}}>
        <Text style={{fontSize:30, fontWeight:400}}>Upload My Medical Hisotry</Text>          
      </View>      
      
      <View style={{width:"100%"}}>
        <MedHisInputBoxWithLabel
          label="Chronic Illness"
          value={values.value1}          
          width="95%"
          onChangeText={(text) => handleValueChange('value1', text)}
        />
        <MedHisInputBoxWithLabel
          label="Current Medication"
          value={values.value2}          
          width="95%"
          onChangeText={(text) => handleValueChange('value2', text)}
        />
        <MedHisInputBoxWithLabel
          label="Allergies"
          value={values.value3}   
          width="95%"
          onChangeText={(text) => handleValueChange('value3', text)}
        />
      </View>


      <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:0}}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:0}}>
        <TouchableOpacity style={styles.button} onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    
    </KeyboardAwareScrollView>
    </ScrollView>
  );
};  

export default UploadMedicalHistory;
