import React, { useState, forwardRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Forward ref is used here to allow parent components to directly access the text input if needed.
const PasswordInputWithToggle = forwardRef(({ label, value, onChangeText, placeholder, secureTextEntry, ...props }, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    // Keyboard.dismiss(); 
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputSection}>
        <TextInput
          ref={ref}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor='#7C7C7C'
          secureTextEntry={!isPasswordVisible && secureTextEntry} // Secure text entry is dependent on the isPasswordVisible state and the secureTextEntry prop.
          style={styles.inputField}
          {...props} // Spread the rest of the props to the TextInput.
        />
        {secureTextEntry && ( // Only render the icon if secureTextEntry is true.
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.icon}
            
          >
            <MaterialCommunityIcons
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={24}
              color="#7C7C7C"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#7C7C7C',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    
  },
  inputField: {
    // flex: 1,
    // height: 70,
    // paddingHorizontal: 10,
    // fontSize: 20,
    // backgroundColor: '#FFFFFF',

    flex: 1,
    height: 70, // Adjusted height for a more standard input size
    paddingHorizontal: 10,
    fontSize: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 10, // Ensuring the input field aligns with the container's border radius
    borderBottomLeftRadius: 10,
    borderRightWidth: 0,
  },
  icon: {
    padding: 10,
  },
  // ... any other styles you might need ...
});

export default PasswordInputWithToggle;
