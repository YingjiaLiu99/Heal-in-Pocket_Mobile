import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import MedHisInputBoxWithLabel from './components/MedHisInputBoxWithLabel';
import styles from './styles';

const MedHisReviewScreen = ({ route, navigation }) => {
  const [inputValues, setInputValues] = useState(route.params.inputValues);

  const handleInputChange = (key, value) => {
    setInputValues({
      ...inputValues,
      [key]: value,
    });
  };

  const handleSaveToDatabase = () => {
    console.log('Saving to database:', inputValues);
    navigation.navigate('Home')
  };

  return (
    <ScrollView>
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>

      <View style={{marginTop: 30,marginBottom:30,width:'100%'}}>
        <Text style={{fontSize:30, fontWeight:400}}>Review Entered Information</Text>          
      </View>

      <View style={{width:"100%"}}>
        <MedHisInputBoxWithLabel
          label="Chronic Illness"
          value={inputValues.value1}
          unit=""
          width="95%"
          onChangeText={(text) => handleInputChange('value1', text)}
        />
        <MedHisInputBoxWithLabel
          label="Current Medication"
          value={inputValues.value2}
          unit=""
          width="95%"
          onChangeText={(text) => handleInputChange('value2', text)}
        />
        <MedHisInputBoxWithLabel
          label="Allergies"
          value={inputValues.value3}
          unit=""
          width="95%"
          onChangeText={(text) => handleInputChange('value3', text)}
        />
      </View>

      <View style={{width:'80%',alignItems:'center',marginTop:20,marginBottom:0}}>
        <TouchableOpacity style={styles.button} onPress={handleSaveToDatabase}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default MedHisReviewScreen;
