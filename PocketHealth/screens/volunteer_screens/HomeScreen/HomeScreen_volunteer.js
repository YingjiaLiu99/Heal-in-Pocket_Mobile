import React from "react";
import { Text, View, TouchableOpacity,FlatList } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SearchBar } from '@rneui/themed';
import { useState, useRef } from "react";

import styles from "./styles";

export default function HomeScreen({navigaton}) {

  const users = ['David', 'Dave', 'John', 'Davina', 'xxxDavxxx', 'Michael', 'Sarah'];
  const [searchInput, setSearchInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const searchRef = useRef(null);

  const handleSearch = (text) => {
    setSearchInput(text);
    
    const filtered = users.filter(user => {
      return user.toLowerCase().includes(text.toLowerCase());
    });

    setFilteredUsers(filtered);
  };

  const handleClear = () => {
    setSearchInput('');
    setFilteredUsers(users);
    searchRef.current.blur();
  };

  const handleRegister = () => {

  };
  

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>

      <View style={{width:'100%'}}>
        <SearchBar
          ref={searchRef}
          placeholder="Type Here..."
          onChangeText={handleSearch}
          onClear={handleClear}
          value={searchInput}
        />
      </View>

      {/* <FlatList
        data={filteredUsers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      /> */}

      <View style={{width:'100%',alignItems:'center',marginTop:50,marginBottom:40}}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register A New Patient</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAwareScrollView>    
  );
};