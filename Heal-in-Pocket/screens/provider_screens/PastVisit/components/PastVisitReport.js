import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import BigShowcaseBoxWithLabel from '../../../../components/BigShowcaseBoxWithLabel';
import ShowcaseBoxWithLabel from '../../../../components/ShowcaseBoxWithLabel';


const PastVisitReport = ({ name, time, chiefComplaint, providerReport, medicalData, vitalData, patientInfo, providerName, scribeName, width }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const providerReportItems = providerReport ? Object.entries(providerReport).map(([key, value]) => ({ label: key, value })) : [];
  // const medicalDataItems = medicalData ? Object.entries(medicalData).map(([key, value]) => ({ label: key, value })) : [];
  const vitalDataItems = vitalData ? Object.entries(vitalData).map(([key, value]) => ({ label: key, value, unit: 'Units' })) : [];
  const firstLineVitalData = vitalDataItems.slice(0, 3);
  const secondLineVitalData = vitalDataItems.slice(3); 

  // Revise the abbreviation of blood pressure
  firstLineVitalData[1].label = "Systolic BP";
  firstLineVitalData[2].label = "Diastolic BP";


  return (
    <View style={{ width: '95%'}}>
      <TouchableOpacity 
        style={styles.header} 
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.headerText}>{name} - {time}</Text>
        <Icon name={isExpanded ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
      </TouchableOpacity>

      {isExpanded && (
        <View style={ {alignItems: 'center'} }>
        <Text style={styles.classifyText}>Patient's Infomation:</Text>
        <ShowcaseBoxWithLabel                
          label={patientInfo[0].label}
          value={patientInfo[0].value}                
          width={width}
        />
        <ShowcaseBoxWithLabel                
          label={patientInfo[1].label}
          value={patientInfo[1].value}                
          width={width}
        />
        <BigShowcaseBoxWithLabel label={"Site/DOS"} value={patientInfo[2].value + ' [' + patientInfo[3].value+']'} width={width}/>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <ShowcaseBoxWithLabel                
              label={patientInfo[4].label}
              value={patientInfo[4].value}                
              width='49%'
            />
            <ShowcaseBoxWithLabel                
              label={patientInfo[5].label}
              value={patientInfo[5].value}                
              width='49%'
            />
          </View>

        <Text style={styles.classifyText}>Chief Complaint:</Text>
        <BigShowcaseBoxWithLabel label={'Chief Complaint'} value={chiefComplaint} width={width}/>

        <Text style={styles.classifyText}>Medical Provider's note:</Text>
        {/* render doctor's report */}
        {providerReportItems.map((item, index) => {            
            return <BigShowcaseBoxWithLabel key={index} {...item} width={width} />;
        })} 

        <Text style={styles.classifyText}>Patient's Medical Infomation:</Text>
        {/* render patient's medical history */}
        <BigShowcaseBoxWithLabel label={medicalData[0].label} value={medicalData[0].value} width={width}/>
        <BigShowcaseBoxWithLabel label={"Current Medication/Allergies"} value={medicalData[1].value + ' [Allergies: ' + medicalData[2].value+']'} width={width}/>

        <View style={{width:'100%', flexDirection: 'row', justifyContent: 'space-between',}}>
          {firstLineVitalData.map((item, index) => {
            return (
              <ShowcaseBoxWithLabel
                key={index}
                label={item.label}
                value={item.value}
                unit={item.unit}
                width='33%'
              />
            );
          })}
        </View>

        <View style={{width:'100%', flexDirection: 'row', justifyContent: 'space-between',}}>
          {secondLineVitalData.map((item, index) => {
            return (
              <ShowcaseBoxWithLabel
                key={index}
                label={item.label}
                value={item.value}
                unit={item.unit}
                width='33%'
              />
            );
          })}
        </View>

        <Text style={styles.classifyText}> Provider's Infomation:</Text>
        <ShowcaseBoxWithLabel                
          label={'Provider Name'}
          value={providerName}                       
          width={width}
        />
        <ShowcaseBoxWithLabel                
          label={'Scribe Name'}
          value={scribeName}                       
          width={width}
        />
        
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