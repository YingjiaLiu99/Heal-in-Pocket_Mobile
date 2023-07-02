import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',      
      justifyContent: 'flex-start',
      flexDirection: 'column',
      paddingHorizontal: 20,
      paddingVertical:0,      
      marginTop: 0,
      marginHorizontal:0
    },
    
    titleText: {
      alignItems: 'center',      
      fontSize: 45,
      fontWeight: 400  
    },
    error: {
      color: 'red',
      marginBottom: 20
    },   

    forgotPassword: {
      fontSize: 15,
      color: '#333232',      
      textDecorationLine: 'underline'
    },
    resend: {
      fontSize: 15,
      color: '#333232',      
      textDecorationLine: 'underline',
      textAlign: 'right'
    },

    button: {
      height: 70,
      width: '100%',
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#395BCD',
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderRadius: 5
    },
    buttonText: {
      color: '#fff',
      fontSize: 25
    },

    doctorSignin: {
      fontSize: 15,
      color: '#333232',      
      textDecorationLine: 'underline'
    }
  });

  export default styles;