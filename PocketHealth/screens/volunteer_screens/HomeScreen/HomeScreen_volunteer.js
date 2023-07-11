import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({navigaton}) {

  const navigation = useNavigation();

  return (
    <View>
      <ScrollView>            
        <Text>Volunteer Home</Text>        
      </ScrollView>
    </View>
  );
};