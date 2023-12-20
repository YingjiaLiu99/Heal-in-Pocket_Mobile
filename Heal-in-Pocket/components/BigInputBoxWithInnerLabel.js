import React, { useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const BigInputBoxWithInnerLabel = ({ label, value, width, height, onChangeText, placeholder, onFocus, ...props }) => {

  const inputRef = useRef(null);

  const handlePress = () => {
    inputRef.current.focus();
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={1}>
      <View style={[styles.boxContainer, { width: width }]}>
        <View style={styles.valueContainer}>
          <View style={{flex:1}}>
            <Text style={styles.boxLabel}>{label}</Text>              
              <TextInput
                ref={inputRef}
                style={[styles.boxField, {height: height}]}
                value={value}
                onChangeText={onChangeText}
                onFocus={onFocus}
                placeholder={placeholder}
                multiline
                {...props}
              />
          </View>
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
  },  
  boxLabel: {
    fontSize: 15,
    fontWeight: '300',
    marginRight: 10,
  },
  boxField: {
    fontSize: 20,
    maxWidth: '100%',
    // height: 100, // This sets a fixed height for the TextInput    
  },
  unit: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 18,
  },
});

export default BigInputBoxWithInnerLabel;