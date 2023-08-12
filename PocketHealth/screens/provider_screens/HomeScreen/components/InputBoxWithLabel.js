import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const InputBoxWithLabel = ({ label, value, onChange, unit, width, marginLeft, marginRight, ...props }) => {
  return (
    <View style={[styles.boxContainer, {width:width}, {marginLeft:marginLeft}, {marginRight:marginRight}]}>
      <View style={styles.valueContainer}>
        <Text style={styles.boxLabel}>{label}</Text>
        <View style={styles.valueAndUnit}>
          <TextInput
            style={styles.boxField}
            value={value}
            onChangeText={onChange}
            {...props}
          />
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
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: '#7C7C7C',
    backgroundColor:'#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 10,    
    paddingTop:5,
    height: 60,
  },
  boxLabel: {
    fontSize: 15,
    fontWeight: 300,
    marginBottom: 5,
  },
  valueAndUnit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxField: {
    fontSize: 15,
    flex: 1,
    paddingRight: 5, // some padding to ensure text doesn't touch the unit
  },
  unit: {
    fontSize: 15,
    minWidth: 40, // Adjust this based on the width of the largest expected unit. Ensures the unit is always fully visible.
    textAlign: 'right', 
  },
});

export default InputBoxWithLabel;