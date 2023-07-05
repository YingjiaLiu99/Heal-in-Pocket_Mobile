import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const [search, setSearch] = useState("");

  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null
    });
  }, [navigation]);

  return (
    <View>
      <ScrollView>            
        <Text>Patient Home</Text>        
      </ScrollView>
    </View>
  );
};
export default HomeScreen;