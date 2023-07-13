import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1    
  },
  heading: {
    fontSize: 30,
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 10,
    marginLeft:20
  },
  ButtonOuterContainer: {    
    borderColor: '#7C7C7C',
    borderWidth: 1,
    marginBottom: 20,
    marginHorizontal:20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height:150,
  },
  ButtonNotesText: {
    fontSize: 25,
    textAlign: 'center',
  },
  buttonContainer: {
    height: 50,
    width: '70%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#395BCD',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  }, 
  container2: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    marginTop: 20,
  }, 
});

export default styles;
