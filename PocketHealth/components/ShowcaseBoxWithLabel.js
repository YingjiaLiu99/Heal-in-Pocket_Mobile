import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShowcaseBoxWithLabel = ({ label, value, unit, width, ...props }) => {
  return (
    <View style={[styles.boxContainer, {width:width}]}>
      <View style={styles.valueContainer}>
        <View>
          <Text style={styles.boxLabel}>{label}</Text>
          <Text
            style={styles.boxField}
            {...props}
          >
            {value}
          </Text>
        </View>
        <Text style={styles.unit}>{unit}</Text>
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
  boxField: {
    fontSize: 20,
  },
  unit: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop:18,
  },
});
export default ShowcaseBoxWithLabel;
