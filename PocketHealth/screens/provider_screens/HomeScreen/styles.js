import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    alignItems: 'center',
    marginTop:0,
    justifyContent: 'center',
    marginHorizontal:20
  },
  heading: {
    fontSize: 32,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
    marginLeft:20,
    fontWeight:400
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
    height:250,
  },
  ButtonOuterContainer2: {    
    borderColor: '#7C7C7C',
    borderWidth: 1,
    // marginBottom: 20,
    // marginHorizontal:20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 10,
    height:250,
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
  error: {
    color: 'red',
    marginBottom: 20
  },  
  confirmButton: {
    backgroundColor: '#FF9248',
    // ... other styles same as 'button' ...
    height: 50,
    width: '70%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
  },
});

export default styles;
