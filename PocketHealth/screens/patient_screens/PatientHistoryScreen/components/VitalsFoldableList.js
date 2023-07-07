import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ShowcaseBoxWithLabel from '../../../../components/ShowcaseBoxWithLabel';

// This is the map object that maps label names to their respective units and widths.
const labelProperties = {
  'Pain Level': { unit: '', width: '95%' },
  'Temperature': { unit: 'F', width: '95%' },
  'Blood Pressure': { unit: 'mmHg', width: '95%' },
  'Pulse': { unit: 'bpm', width: '95%' },
  'Oxygen': { unit: '%', width: '95%' },
  'Glucose': { unit: 'mg/dl', width: '95%' },  
  'Weight': { unit: 'Lbs', width: '95%' },
  // Add more entries as needed
};

const VitalsFoldableList = ({ title, items, width }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={{ width: width}}>
      <TouchableOpacity 
        style={styles.header} 
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.headerText}>{title}</Text>
        <Icon name={isExpanded ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
      </TouchableOpacity>

      {isExpanded && (
        <View style={ {alignItems: 'center'} }>
          {items.map((item, index) => {
            // Retrieve the properties for this label from the map object.
            const { unit, width } = labelProperties[item.label];

            // Pass these properties to ShowcaseBoxWithLabel.
            return <ShowcaseBoxWithLabel key={index} {...item} unit={unit} width={width} />;
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#C5D1F9',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#C5D1F9',
    borderRadius: 15,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default VitalsFoldableList;
