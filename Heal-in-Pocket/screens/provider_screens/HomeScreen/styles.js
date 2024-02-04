import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 0,
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingTop:100
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
  confirmButton: {
    backgroundColor: '#FF9248',    
    height: 50,
    width: '70%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
  },
  normalButton: {
    backgroundColor: '#395BCD',    
    height: 50,
    width: '70%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
  },  
  headerButton: {
  width: 63, // Diameter of the round button
  height: 63, // Diameter of the round button
  borderRadius: 35, // Half the width/height to make it round
  backgroundColor: '#4287f5', // Button color
  justifyContent: 'center',
  alignItems: 'center',
  },
  headerButtonText: {
    color: 'white', 
    fontSize: 15,
    textAlign: 'center'
  }
      
  
});

export default styles;


