import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 0,
    justifyContent: 'center',
    marginHorizontal: 20
  },
  heading: {
    fontSize: 32,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    fontWeight: 400
  },
  ButtonOuterContainer: {
    borderColor: '#7C7C7C',
    borderWidth: 1,
    marginBottom: 8,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },  
  
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#395BCD',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 10,
    width:'80%',
    height:50,    
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  },  
});

export default styles;


