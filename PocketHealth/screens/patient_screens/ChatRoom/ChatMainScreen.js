import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


import styles from './styles.js';

export default function ChatMainScreen({navigation}) {  

  return (
    <View style={styles.container}>

      <View style={{marginTop: 75,marginBottom:70,width:'100%',alignItems: 'center'}}>
        <Text style={styles.titleText}>"Chat With Doctors"{'\n'}Coming Soon,{'\n'}Stay Tuned!</Text>        
      </View>

    </View>
  );
};