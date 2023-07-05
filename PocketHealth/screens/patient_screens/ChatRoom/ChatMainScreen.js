import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProviderList from "./../HomeScreen/components/ProviderList";
import styles from "./styles"
import ChatPage from './ChatPage';


const ChatMainPage = () => {

  // const navigation = useNavigation();
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: null
  //   });
  // }, [navigation]);

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>             
        {/* <Button onPress={() => performSwitch()} title='Switch to patient response'/> */}
        <View>
        <Text style={styles.text}>ProviderList</Text>
        <ProviderList></ProviderList>
        <Text style={styles.text}>Chat</Text>
        <ChatPage style={styles.chatPage}></ChatPage>
        </View>


        </ScrollView>
    </View>

    
   
  );
};

export default ChatMainPage;