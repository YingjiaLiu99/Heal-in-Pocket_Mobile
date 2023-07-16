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
      marginHorizontal:0,
      // backgroundColor:'#FFFFFF'
    },
    
    titleText: {
      alignItems: 'center',      
      fontSize: 45,
      fontWeight: 400  
    },

    buttonContainer: {
      height: 70,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:15
    },
    
    button: {
      height: 70,
      width: '100%',      
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

  export default styles;