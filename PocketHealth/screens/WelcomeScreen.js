import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const WelcomeScreen = ({navigation}) => {

    const handlePatientLogin = () => {
        navigation.navigate('Login');
    };
    const handleProviderLogin = () => {
        navigation.navigate('Provider Login');
    };
    const handleVolunteerLogin = () => {
        navigation.navigate('Volunteer Login');
    };

  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'#FFFFFF', paddingHorizontal: 20,}}>
        
        <View style={{width:'100%', alignItems:'flex-end'}}>        
            <Image
                style={{width: 120, height: 120}}
                source={require('../assets/images/pocket_health.png')}
            />
        </View>

        <View style={{alignItems:'flex-start', width:'100%'}}>
            <Text style={{fontSize: 45, fontWeight: '400', textAlign: 'left', marginBottom:5}}>Welcome,</Text>
            <Text style={{fontSize: 45, fontWeight: '400', textAlign: 'left',  marginBottom:50}}>to Pocket Health!</Text>            
        </View>   

        <Text style={{fontSize: 35, fontWeight: '400', textAlign: 'left'}}>Are You a...</Text>

        <View style={{width:'100%', marginTop:10}}>
            <TouchableOpacity style={styles.button} onPress={handlePatientLogin}>
                <Text style={styles.buttonText}>Patient</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleProviderLogin}>
                <Text style={styles.buttonText}>Provider</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleVolunteerLogin}>
                <Text style={styles.buttonText}>Volunteer</Text>
            </TouchableOpacity>

        </View>
        



    </View>
  );
}

const styles = StyleSheet.create({     
    button: {
      height: 80,
      width: '100%',
      marginBottom: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#395BCD',
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderRadius: 20
    },
    buttonText: {
      color: '#fff',
      fontSize: 25
    },
});


export default WelcomeScreen;
