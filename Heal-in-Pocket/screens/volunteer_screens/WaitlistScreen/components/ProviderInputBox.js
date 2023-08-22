
import React, { forwardRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const ProviderInputBox = forwardRef(({ label, value, width, placeholder, onChangeText, onFocus, autoFocus, onSubmitEditing, returnKeyType = "none" }, ref) => {

  const handlePress = () => {
    ref.current.focus();
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={1}>
      <View style={[styles.boxContainer, { width: width }]}>
        <View style={styles.valueContainer}>
          <View style={styles.labelValueContainer}>
            <Text style={styles.boxLabel}>{label}</Text>              
              <TextInput
                ref={ref}
                style={[styles.boxField, { width: width }]}
                value={value}
                onChangeText={onChangeText}
                onFocus={onFocus}
                placeholder={placeholder}
                multiline={true}
                autoFocus={autoFocus}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}  
                blurOnSubmit={true}
                editable={false}             
              />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  boxContainer: {
    marginBottom: 10,
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#7C7C7C',
    backgroundColor: '#FFFFD7',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  labelValueContainer: {
    flex: 1,
    // minHeight: 130,
    // maxHeight: 200, // This sets a fixed height for the TextInput box
  },
  boxLabel: {
    fontSize: 15,
    fontWeight: '300',
    marginRight: 10,
  },
  boxField: {
    fontSize: 20,
    maxWidth: '100%',
    height: 100, // This sets a fixed height for the TextInput    
  },
  unit: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 18,
  },
});

export default ProviderInputBox;