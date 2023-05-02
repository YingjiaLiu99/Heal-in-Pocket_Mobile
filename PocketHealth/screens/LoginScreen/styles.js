import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,      
      marginTop: 20
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20
    },
    error: {
      color: 'red',
      marginBottom: 20
    },
    input: {
      height: 40,
      width: '100%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10
    },    
    button: {
      width: '70%',
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#20315f',
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderRadius: 5
    },
    buttonText: {
      color: '#fff',
      fontSize: 20
    }
  });
  export default styles;