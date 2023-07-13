import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import MedHisInputBoxWithLabel from './components/MedHisInputBoxWithLabel';

const UploadMedicalHistory = ({navigation}) => {
  const [values, setValues] = useState({
    value1: 'Value 1',
    value2: 'Value 2',
    value3: 'Value 3',
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
    navigation.navigate('Home')
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Upload Medical Hisotry</Text>
      <View style={styles.content}>
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
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleReviewSubmit}>
        <Text style={styles.buttonText}>Review and Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.buttonMargin]} onPress={handleSkip}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
    </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    title: {
      fontSize: 34,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    content: {
      flex: 1,  // Change this to adjust the screen space taken by the boxes
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
      button: {
        backgroundColor: '#395BCD',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        width: '100%',
      },
      buttonMargin: {
        marginTop: 20, // Add some vertical space between buttons
      },
      buttonText: {
        color: '#fff',
        fontSize: 20,
      },
  });
  

export default UploadMedicalHistory;
