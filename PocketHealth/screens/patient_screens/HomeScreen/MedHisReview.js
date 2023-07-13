
// export default MedHisReviewScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MedHisInputBoxWithLabel from './components/MedHisInputBoxWithLabel';

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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Review Your Input</Text>
      <View style={styles.content}>
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

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveToDatabase}>
        <Text style={styles.saveButtonText}>Submit</Text>
      </TouchableOpacity>

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
    flex: 1,
  },
  saveButton: {
    backgroundColor: '#395BCD',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default MedHisReviewScreen;
