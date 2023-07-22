import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SearchBar } from '@rneui/themed';


import styles from "./styles";

// Patient info component
const UserItem = ({user, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.userShowcase}>
    <Text style={styles.userShowcaseText}>{user.firstName} {user.lastName}</Text>
    <Text style={styles.userShowcaseText}>Date of Birth: {user.dateOfBirth}</Text>
  </TouchableOpacity>
);

export default function HomeScreen({navigation}) {
  
  const users = [
    {firstName: 'James', lastName: 'Smith', dateOfBirth: '5/16/1980'},
    {firstName: 'Michael', lastName: 'Smith', dateOfBirth: '10/26/1986'},
    {firstName: 'Maria', lastName: 'Garcia', dateOfBirth: '8/13/1989'},
    {firstName: 'Robert', lastName: 'Smith', dateOfBirth: '2/1/1982'},
    {firstName: 'David', lastName: 'Smith', dateOfBirth: '06/26/1996'},
    {firstName: 'Maria', lastName: 'Rodriguez', dateOfBirth: '8/13/1989'},
    {firstName: 'Mary', lastName: 'Smith', dateOfBirth: '5/16/1973'},
    {firstName: 'Maria', lastName: 'Martinez', dateOfBirth: '20/22/1976'},
    {firstName: 'Henry', lastName: 'Taylor', dateOfBirth: '8/13/1989'},
    {firstName: 'George', lastName: 'Jones', dateOfBirth: '5/17/1980'},
    {firstName: 'Michael', lastName: 'Clark', dateOfBirth: '12/02/1986'},
    {firstName: 'Maria', lastName: 'Davis', dateOfBirth: '1/1/1989'},
  ];

  const [searchInput, setSearchInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const searchRef = useRef(null);
  const [searchFocus, setSearchFocus] = useState(false);
  
  const handleSearchFocus = (status) => {
    setSearchFocus(status);
  };

  const handleSearch = (text) => {
    setSearchInput(text);
  
    // Split the input text by space and filter out any empty strings
    const searchTerms = text.toLowerCase().split(' ').filter(term => term);
  
    const filtered = users.filter(user => {
      const fullName = user.firstName.toLowerCase() + " " + user.lastName.toLowerCase();
  
      // Check that every search term appears somewhere in the full name
      return searchTerms.every(term => fullName.includes(term));
    });
  
    setFilteredUsers(filtered);
  };

  const handleClear = () => {
    setSearchInput('');
    setFilteredUsers(users);
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

        <View style={{marginTop:10,marginBottom:10,width:'100%',}}>
          <Text style={{fontSize:30, fontWeight:400}}>Welcome, David</Text>          
        </View>

        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:18, fontWeight:300}}>Search Patient Profile</Text>          
        </View>

        <View style={{width:'100%', marginTop:10}}>
          <SearchBar
            ref={searchRef}
            placeholder="Enter patient first name, last name"
            onChangeText={handleSearch}
            onClear={handleClear}
            value={searchInput}
            onFocus={() => handleSearchFocus(true)}            
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

