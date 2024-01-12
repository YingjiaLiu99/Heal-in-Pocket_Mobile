import React, { useState, useRef, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SearchBar } from '@rneui/themed';
import axios from 'axios';

import baseURL from '../../../common/baseURL';
import styles from './styles.js';

// Patient info component
const UserItem = ({user, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.userShowcase}>
      <Text style={styles.userShowcaseText}>{user.name}</Text>
      <Text style={styles.userShowcaseText}>Date of Birth: {user.date_of_birth}</Text>
    </TouchableOpacity>
  );

export default function PatientPastVisit( {navigation} ) {

      const [searchInput, setSearchInput] = useState('');
      const [filteredUsers, setFilteredUsers] = useState([]);
      const searchRef = useRef(null);
      const [searchFocus, setSearchFocus] = useState(false);
      const timerRef = useRef(null);


      const handleSearchFocus = (status) => {
        setSearchFocus(status);
      };

      // Effect debouncing the search input
      useEffect(() => {
        // Clear the existing timer
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }

        // Set a new timer
        timerRef.current = setTimeout(async () => {
          handleSearch(searchInput);
        }, 500); // 500ms delay

        // Cleanup function to clear timer when component unmounts or before next effect runs
        return () => {
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }
        };
      }, [searchInput]); // Effect depends on searchInput


      // Clear search input and filtered users when user back from option screen
      useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          setSearchInput('');
          setFilteredUsers([]);
        });

        return unsubscribe;
      }, [navigation]);

      const handleSearch = async (text) => {
        //setSearchInput(text);
        
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

      const getCurrentDate = () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
        const year = date.getFullYear();
        // setDate(`${month}/${day}/${year}`);
        
        return `${month}/${day}/${year}`;
      }

      // Should send the information together now:
      const handleUserPress = (user) => {
        navigation.navigate("Patient Past Visits", { user });
        
        console.log(user._id, user.name, user.date_of_birth, user.gender);
      };


    return(
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss(); if(searchInput === ''){handleSearchFocus(false);}}} accessible={false}>
            <View style={styles.container}>
                <View style={{marginTop:10,marginBottom:10,width:'100%',}}>
                    <Text style={{fontSize:25, fontWeight:400}}>Search Patient Past Visits</Text>          
                </View>

                <View style={{alignItems:'center'}}>
                    {/* <Text style={{fontSize:18, fontWeight:300}}>Search Patient Past Visits</Text> */}
                    <Text style={{fontSize:18, fontWeight:300}}>This feature is still under development, all the search results are fake data</Text>       
                </View>

                <View style={{width:'100%', marginTop:10}}>
                    <SearchBar
                        containerStyle={{borderRadius: 15, borderWidth: 1, borderColor: "transparent", backgroundColor: "#E4E3E9",  borderBottomColor: 'transparent', borderTopColor: 'transparent'}}
                        inputContainerStyle={{backgroundColor: '#E4E3E9'}}
                        ref={searchRef}
                        placeholder="Enter patient first name, last name"
                        onChangeText={(text) => setSearchInput(text)}
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
            </View>
        </TouchableWithoutFeedback>
    );
};