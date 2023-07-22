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

  ButtonNotesText: {
    fontSize: 20,
    fontWeight: 'bold',
    flexShrink: 1,
    textAlign: 'left',


  },
  SubText: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'left',
  },

  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  buttonContainer: {
    backgroundColor: '#395BCD',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  requestContainer: {
    alignItems: 'left',
    flexDirection: 'column',
    flex: 1,
  },
});

export default styles;


