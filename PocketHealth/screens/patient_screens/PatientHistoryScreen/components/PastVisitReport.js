import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import BigShowcaseBoxWithLabel from '../../../../components/BigShowcaseBoxWithLabel';
import ShowcaseBoxWithLabel from '../../../../components/ShowcaseBoxWithLabel';

const labelProperties = {
    // 'Pain Level(0~10,0-no pain,10-worst pain)': { unit: '', width: '95%' },
    'Temperature': { unit: 'F', width: '95%' },
    'Blood Pressure': { unit: 'mmHg', width: '95%' },
    'Pulse': { unit: 'bpm', width: '95%' },
    'Oxygen': { unit: '%', width: '95%' },
    'Glucose': { unit: 'mg/dl', width: '95%' },  
    'Weight': { unit: 'Lbs', width: '95%' },
    // Add more entries as needed
    };

const PastVisitReport = ({ title, chiefComplaint, providerReport, medicalData, vitalData, width }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const rowOne = vitalData.slice(0,3);
  const rowTwo = vitalData.slice(3,5);

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
        <BigShowcaseBoxWithLabel label={chiefComplaint.label} value={chiefComplaint.value} width={width}/>
                
        {/* render doctor's report */}
        {providerReport.map((item, index) => {            
            return <BigShowcaseBoxWithLabel key={index} {...item} width={width} backgroundColor={'#FFFFD7'}/>;
        })} 
        
        {/* render patient's medical history */}
        <BigShowcaseBoxWithLabel label={medicalData[0].label} value={medicalData[0].value} width={width}/>
        <BigShowcaseBoxWithLabel label={"Current Medication/Allergies"} value={medicalData[1].value + ' [Allergies: ' + medicalData[2].value+']'} width={width}/>

        {/* render patient's vital data with unit */}
        <View style={{width:'95%', flexDirection: 'row', justifyContent: 'space-between',}}>
            {rowOne.map((item, index) => {
              return (
                <ShowcaseBoxWithLabel 
                  key={index}
                  label={item.label}
                  value={item.value}
                  unit={item.unit}
                  width='30%'
                />
              )
            })}
        </View>
        <View style={{width:'95%', flexDirection: 'row', justifyContent: 'space-between',}}>
            {rowTwo.map((item, index) => {
              return (
                <ShowcaseBoxWithLabel
                  key={index}
                  label={item.label}
                  value={item.value}
                  unit={item.unit}
                  width='45%'
                />
              )
            })}
        </View>

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