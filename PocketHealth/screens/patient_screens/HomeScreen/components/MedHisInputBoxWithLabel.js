import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

const MedHisInputBoxWithLabel = ({ label, value, unit, width, onChangeText }) => {
  return (
    <View style={[styles.boxContainer, { width: width }]}>
      <View style={styles.valueContainer}>
        <View style={styles.labelValueContainer}>
          <Text style={styles.boxLabel}>{label}</Text>
          {/* <ScrollView> */}
            <TextInput
              style={styles.boxField}
              value={value}
              onChangeText={onChangeText}
              multiline
            />
          {/* </ScrollView> */}
          <Text style={styles.unit}>{unit}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    marginBottom: 10,
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#7C7C7C',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  labelValueContainer: {
    flex: 1,
    minHeight: 170,
    // maxHeight: 170, // This sets a fixed height for the TextInput box
  },
  boxLabel: {
    fontSize: 15,
    fontWeight: '300',
    marginRight: 10,
  },
  boxField: {
    fontSize: 20,
    maxWidth: '90%', // Modify as per your requirement
  },
  unit: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 18,
  },
});

export default MedHisInputBoxWithLabel;
