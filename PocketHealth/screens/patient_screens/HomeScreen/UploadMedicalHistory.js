import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import MedHisInputBoxWithLabel from './components/MedHisInputBoxWithLabel';
import styles from './styles';

const UploadMedicalHistory = ({navigation}) => {
  const [values, setValues] = useState({
    value1: '',
    value2: '',
    value3: '',
  });

  const handleValueChange = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleReviewSubmit = () => {
    navigation.navigate('MedHisReviewScreen', { inputValues: values });
  };

  const handleSkip = () => {
    navigation.navigate('Home');
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
          unit=""
          width="95%"
          onChangeText={(text) => handleValueChange('value1', text)}
        />
        <MedHisInputBoxWithLabel
          label="Current Medication"
          value={values.value2}
          unit=""
          width="95%"
          onChangeText={(text) => handleValueChange('value2', text)}
        />
        <MedHisInputBoxWithLabel
          label="Allergies"
          value={values.value3}
          unit=""
          width="95%"
          onChangeText={(text) => handleValueChange('value3', text)}
        />
      </View>


      <View style={{width:'80%',alignItems:'center',marginTop:0,marginBottom:0}}>
        <TouchableOpacity style={styles.button} onPress={handleReviewSubmit}>
          <Text style={styles.buttonText}>Review and Submit</Text>
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
