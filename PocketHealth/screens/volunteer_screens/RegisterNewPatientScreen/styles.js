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
      fontSize: 40,
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
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 20
    },
    buttonText: {
      color: '#fff',
      fontSize: 22
    },

    userShowcase: {
      height: 70,
      width: '100%',
      marginVertical: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#C5D1F9',
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderRadius: 0,             
    },
    userShowcaseText: {
      color: '#000000',
      fontSize: 18
    },

    dropdownContainer: {
      height: 400, // Adjust to suitable value
      marginBottom: 40 // Add some space at the end of the list
    },

  });

  export default styles;