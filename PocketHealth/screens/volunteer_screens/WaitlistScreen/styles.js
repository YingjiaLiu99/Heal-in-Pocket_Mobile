import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
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

});
  export default styles;