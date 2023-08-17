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
    userShowcase: {
      height: 70,
      width: '100%',
      marginVertical: 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E4E3E9',
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderRadius: 15,             
    },
    userShowcaseText: {
      color: '#000000',
      fontSize: 18
    },

    dropdownContainer: {
      height: 260, // Adjust to suitable value
      marginBottom: 10 // Add some space at the end of the list
    },

    error: {
      color: 'red',
      marginBottom: 20
    },  
    confirmButton: {
      backgroundColor: '#FF9248',
      // ... other styles same as 'button' ...
      height: 70,
      width: '100%',      
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderRadius: 20
    },
    selectedText: {
      alignItems: 'center', 
      marginTop: 20,
      fontSize: 18,
    },

  });

  export default styles;