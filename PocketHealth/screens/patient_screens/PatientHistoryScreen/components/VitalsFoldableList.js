import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ShowcaseBoxWithLabel from '../../../../components/ShowcaseBoxWithLabel';

const VitalsFoldableList = ({ title, items, width }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // split items into two rows
  const rowOne = items.slice(0,3);
  const rowTwo = items.slice(3,5);

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
        <View>
          <View style={{width:'100%', flexDirection: 'row', justifyContent: 'space-between',}}>
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

          <View style={{width:'100%', flexDirection: 'row', justifyContent: 'space-between',}}>
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
});

export default VitalsFoldableList;
