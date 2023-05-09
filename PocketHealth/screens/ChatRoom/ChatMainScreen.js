import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ChatMainPage = () => {

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

export default ChatMainPage;