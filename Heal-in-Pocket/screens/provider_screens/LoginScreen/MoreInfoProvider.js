import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import BigInputBoxWithLabel from './components/BigInputBoxWithLabel';
import styles from './styles';

const MoreInfoProvider = ({navigation}) =>{        
    const [bio, setBio] = useState(''); 
    
    const handleCreateAccount = () => {
        navigation.reset({
            index: 0,
            routes: [{ name:'Provider Main Tab', 
              state:{ 
                routes:[ {name:'My Home', state:{routes:[ {name:'Home'} ]}} ] 
              } 
            }],
          });

    };

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={{marginTop: 35,marginBottom:20,width:'100%'}}>
                <Text style={{alignItems:'center',fontSize:35,fontWeight: 400}}>One More Step...</Text>  
                <Text style={{color:'#BDBDBD',fontSize:19,marginTop:0,marginLeft:5}}>Write a little bit about yourself</Text>          
            </View>

            <View style={{width:'100%',alignItems:'center',marginTop:0,marginBottom:10}}>
                <BigInputBoxWithLabel
                    autoFocus
                    label="Bio"        
                    value={bio}
                    onChangeText={(text) => setBio(text)}
                    placeholder="Write a short introduction of yourself...Such as your experience, affiliation, hobbies (Optional) "
                    keyboardType="default"
                    width='100%'
                    returnKeyType='done'
                />

            </View>
            
            <View style={{width:'100%',alignItems:'center',marginTop:15,marginBottom:40}}>
                <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
                    <Text style={styles.buttonText}>Skip</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAwareScrollView>
    );
};

export default MoreInfoProvider;