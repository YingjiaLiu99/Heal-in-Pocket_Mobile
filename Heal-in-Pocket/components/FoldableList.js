import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ShowcaseBoxWithLabel from './ShowcaseBoxWithLabel';

const FoldableList = ({ title, items, width }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={{ width: width }}>
      <TouchableOpacity 
        style={styles.header} 
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.headerText}>{title}</Text>
        <Icon name={isExpanded ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
      </TouchableOpacity>

      {isExpanded && (
        <View style={{alignItems: 'center'}}>
          {items.map((item, index) => (
            <ShowcaseBoxWithLabel key={index} {...item} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#7C7C7C',
    borderRadius: 15,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    borderTopWidth: 0,
    borderWidth: 2,
    borderColor: '#7C7C7C',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default FoldableList;

