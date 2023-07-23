import React, { useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const VitalsInputBoxWithLabel = ({ label, value, unit, width, onChange, onFocus }) => {

  const inputRef = useRef(null);
  
  const handlePress = () => {
    inputRef.current.focus();
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={1}>
      <View style={[styles.boxContainer, { width: width }]}>
        <View style={styles.valueContainer}>
          <View>
            <Text style={styles.boxLabel}>{label}</Text>
            <TextInput
              ref={inputRef}
              style={styles.boxField}
              value={value}
              onChangeText={onChange}
              onFocus={onFocus}
              placeholder='Click to Enter Your Vital ...'
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.unit}>{unit}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    height: 60,
  },
  boxLabel: {
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 5,
  },
  boxField: {
    fontSize: 20,
  },
  unit: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 18,
  },
});

export default VitalsInputBoxWithLabel;
