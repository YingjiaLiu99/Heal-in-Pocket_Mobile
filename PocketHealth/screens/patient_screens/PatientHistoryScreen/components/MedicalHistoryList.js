import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import BigShowcaseBoxWithLabel from '../../../../components/BigShowcaseBoxWithLabel';


const MedicalHistoryList = ({ title, items, width }) => {
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
          <BigShowcaseBoxWithLabel label={items[0].label} value={items[0].value} width={width}/>
          <BigShowcaseBoxWithLabel label={"Current Medication/Allergies"} value={items[1].value + ' [Allergies: ' + items[2].value+']'} width={width}/>          
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

export default MedicalHistoryList;