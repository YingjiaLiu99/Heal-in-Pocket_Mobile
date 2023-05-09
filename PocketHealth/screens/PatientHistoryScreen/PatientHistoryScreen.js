import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const PatientHistoryScreen = () => {

  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null
    });
  }, [navigation]);


  return (
    <View />
  );
};

export default PatientHistoryScreen;