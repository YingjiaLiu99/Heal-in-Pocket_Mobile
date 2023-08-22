import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import BigInputBoxWithLabel from './components/BigInputBoxWithLabel';
import styles from './styles';

const MoreInfoProvider = ({navigation}) =>{    
    const [bio, setBio] = useState('');
    const [experience, setExperience] = useState('');
    const pwdRef1 = useRef();
    const pwdRef2 = useRef();

    const handleCreateAccount = () => {
        console.log(`Bio: ${bio}`);
        console.log(`Experience: ${experience}`);        

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
                    placeholder="Write a short introduction of yourself... (Optional) "
                    keyboardType="default"
                    width='100%'
                    returnKeyType='next'
                    onSubmitEditing={() => pwdRef1.current.focus()}  

                />

                <BigInputBoxWithLabel
                    ref={pwdRef1}
                    label="Experience"        
                    value={experience}
                    onChangeText={(text) => setExperience(text)}
                    placeholder="Write down any experience you want to share... (Optional) "
                    keyboardType="default"
                    width='100%'
                    returnKeyType='done'
                />
            </View>
            
            <View style={{width:'100%',alignItems:'center',marginTop:15,marginBottom:40}}>
                <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAwareScrollView>
    );
};

export default MoreInfoProvider;