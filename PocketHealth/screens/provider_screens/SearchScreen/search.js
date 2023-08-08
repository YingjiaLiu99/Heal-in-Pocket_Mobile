import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SearchBar } from '@rneui/themed';

import styles from './styles.js';

// Patient info component
const UserItem = ({user, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.userShowcase}>
      <Text style={styles.userShowcaseText}>{user.firstName} {user.lastName}</Text>
      <Text style={styles.userShowcaseText}>Date of Birth: {user.dateOfBirth}</Text>
    </TouchableOpacity>
  );

export default function PatientPastVisit( {navigation} ) {

    // Dummy Variables, just to test
    const users = [
        {firstName: 'James', lastName: 'Smith', dateOfBirth: '5/16/1980'},
        {firstName: 'Michael', lastName: 'Smith', dateOfBirth: '10/26/1986'},
        {firstName: 'Maria', lastName: 'Garcia', dateOfBirth: '8/13/1989'},
        {firstName: 'Robert', lastName: 'Smith', dateOfBirth: '2/1/1982'},
        {firstName: 'David', lastName: 'Smith', dateOfBirth: '06/26/1996'},
        {firstName: 'Maria', lastName: 'Rodriguez', dateOfBirth: '8/13/1989'},
        {firstName: 'Mary', lastName: 'Smith', dateOfBirth: '5/16/1973'},
        {firstName: 'Maria', lastName: 'Martinez', dateOfBirth: '02/22/1976'},
        {firstName: 'Henry', lastName: 'Taylor', dateOfBirth: '8/13/1989'},
        {firstName: 'George', lastName: 'Jones', dateOfBirth: '5/17/1980'},
        {firstName: 'Michael', lastName: 'Clark', dateOfBirth: '12/02/1986'},
        {firstName: 'Maria', lastName: 'Davis', dateOfBirth: '1/1/1989'},
      ];
      

      const [searchInput, setSearchInput] = useState("");
      const searchRef = useRef(null);
      const [searchFocus, setSearchFocus] = useState(false);
      const [filteredUsers, setFilteredUsers] = useState(users);


      const handleSearchFocus = (status) => {
        setSearchFocus(status);
      };

      const handleSearch = (text) => {
        // Do your search logic here
        // You can filter your list based on the text
        setSearchInput(text);

        // Split the input text by space and filter out any empty strings
        const searchTerms = text.toLowerCase().split(' ').filter(term => term);
  
        const filtered = users.filter(user => {
            const fullName = user.firstName.toLowerCase() + " " + user.lastName.toLowerCase();
  
            // Check that every search term appears somewhere in the full name
            return searchTerms.every(term => fullName.includes(term));
        });

        // All fulfilled users
        setFilteredUsers(filtered);
      };

      const handleClear = () => {
        // Clear your search result if any and reset your list
        setSearchInput('');
        searchRef.current.blur();
        setFilteredUsers(users);
      };

      const handleUserPress = (user) => {
        // navigation.navigate("Patient Past Visits");
        navigation.navigate("Patient Past Visits", { user });
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
            </View>
        </TouchableWithoutFeedback>
    );
};