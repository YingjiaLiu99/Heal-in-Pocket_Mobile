import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SearchBar } from '@rneui/themed';
import axios from 'axios';

import baseURL from '../../../common/baseURL';
import styles from "./styles";

// Patient info component
const UserItem = ({user, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.userShowcase}>
    <Text style={styles.userShowcaseText}>{user.name}</Text>
    <Text style={styles.userShowcaseText}>Date of Birth: {user.date_of_birth}</Text>
  </TouchableOpacity>
);

export default function HomeScreen({navigation}) {
  const [searchInput, setSearchInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const searchRef = useRef(null);
  const [searchFocus, setSearchFocus] = useState(false);
  
  const handleSearchFocus = (status) => {
    setSearchFocus(status);
  };

  const handleSearch = async (text) => {
    setSearchInput(text);
    
    if (text === '') {
      setFilteredUsers([]);
      return;
    }

    try {
      const response = await axios.get(`${baseURL}patient/search/${text}`);
      setFilteredUsers(response.data.patients); // Assuming response.data is an array of user objects
      // console.log(filteredUsers);
    } catch (error) {
      console.error('Error fetching patient data:', error);
      // You can set filteredUsers to an empty array or handle the error as needed
    }
    
  };

  const handleClear = () => {
    setSearchInput('');
    setFilteredUsers([]);
    searchRef.current.blur();
  };

  const handleUserPress = (user) => {
    navigation.navigate('Options');    
  };

  const handleRegister = () => {
    navigation.navigate("Register A New Patient");
  };

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss(); if(searchInput === ''){handleSearchFocus(false);}}} accessible={false}>
        <View style={styles.container}>

        <View style={{marginTop:10,marginBottom:10,width:'100%',alignItems:'center'}}>
          <Text style={{fontSize:30, fontWeight:400}}>Search Patient Profile</Text>          
        </View>

        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:18, fontWeight:300}}>This feature is still under development, all the search results are fake data. Please use the register function instead.</Text>        
        </View>

        <View style={{width:'100%', marginTop:10}}>
          <SearchBar
            containerStyle={{borderRadius: 15, borderWidth: 1, borderColor: "transparent", backgroundColor: "#E4E3E9",  borderBottomColor: 'transparent', borderTopColor: 'transparent'}}
            inputContainerStyle={{backgroundColor: '#E4E3E9'}}
            ref={searchRef}
            placeholder="Enter first name, last name"
            onChangeText={handleSearch}
            onClear={handleClear}
            value={searchInput}
            onFocus={() => handleSearchFocus(true)}    
            autoFocus
          />

          {(searchInput !== '') && (
            <FlatList
              data={filteredUsers}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <UserItem user={item} onPress={() => handleUserPress(item)} />}
              style={styles.dropdownContainer}            
            />
          )}
        </View>

        <View style={{width:'100%',alignItems:'center',marginTop:30,marginBottom:20}}>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register A New Patient</Text>
          </TouchableOpacity>
        </View>

        </View>   
    </TouchableWithoutFeedback>
  );
};

