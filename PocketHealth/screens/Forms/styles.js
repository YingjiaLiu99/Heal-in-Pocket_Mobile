import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center'
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    error: {
      color: 'red',
      marginBottom: 20
    },
    input: {
      height: 40,
      width: '90%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10
    }, 
    input_narrow: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
        flex: 1,
        marginRight: 10,
    },
    inputContainer_narrow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
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
    },
    banner: {
        backgroundColor: 'darkblue',
        alignItems: 'center',
        top: 0,
            left: 0,
            right: 0,
        padding: 20,
        marginBottom: 10,
    },
    bannerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    }
  });
export default styles;