import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import BigShowcaseBoxWithLabel from '../../../../components/BigShowcaseBoxWithLabel';
import ShowcaseBoxWithLabel from '../../../../components/ShowcaseBoxWithLabel';

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

const PastVisitReport = ({ title, providerReport, medicalData, vitalData, width }) => {
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
        <Text style={styles.classifyText}>Medical Provider's note:</Text>        
        {/* render doctor's report */}
        {providerReport.map((item, index) => {            
            return <BigShowcaseBoxWithLabel key={index} {...item} width={width} />;
        })} 
        <Text style={styles.classifyText}>Patient's Infomation:</Text>
        {/* render patient's medical history */}
        {medicalData.map((item, index) => {            
            return <BigShowcaseBoxWithLabel key={index} {...item} width={width} />;
        })}

        {/* render patient's vital data with unit */}
        {vitalData.map((item, index) => {            
            const { unit, width } = labelProperties[item.label];            
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
  classifyText: {
    fontSize: 16,
    fontWeight: '500',
    color:'#395BCD'
  },
});

export default PastVisitReport;