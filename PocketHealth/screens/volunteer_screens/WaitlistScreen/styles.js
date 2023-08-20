import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    fontWeight: 400
  },
  
  container: {
    flex: 1,
    alignItems: 'center',      
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingHorizontal: 20,    
    marginTop: 0,
    marginHorizontal:0,
    marginBottom:20,    
  },

  header: {
    backgroundColor: '#C5D1F9',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#C5D1F9',
    borderRadius: 15,
    marginBottom: 10,
  },
  
  dateText: {
    fontSize: 16,
    fontWeight: '500',
  },

  personText: {
    fontSize: 12,
    fontWeight: '500',
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
  button: {
    height: 70,
    width: '100%',
    marginVertical: 10,
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
});
  export default styles;