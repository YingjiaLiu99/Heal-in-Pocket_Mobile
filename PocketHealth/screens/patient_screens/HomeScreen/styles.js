import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 30,
    textAlign: 'left',
    marginBottom: 20,
  },
  announcementContainer: {
    flex: 1,
    borderColor: '#7C7C7C',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  announcementText: {
    fontSize: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    height: 40,
    width: '50%',
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
    fontSize: 15,
  },
  dialogueContainer: {
    flex: 2,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#7C7C7C',
    padding: 10,
  },
  dialogueItemContainer: {
    marginBottom: 10,
  },
  dialogueLeft: {
    alignSelf: 'flex-start',
    marginRight: 10,
    padding: 10,
    backgroundColor: '#E1E1E1',
    borderRadius: 10,
  },
  dialogueRight: {
    alignSelf: 'flex-end',
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#D3F7FE',
    borderRadius: 10,
  },
  dialogueTextLeft: {
    fontSize: 18,
    textAlign: 'left',
  },
  dialogueTextRight: {
    fontSize: 18,
    textAlign: 'right',
  },
  dialoguePersonLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 14,
    color: '#555555',
    marginBottom: 5,
  },
  dialoguePersonRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: 14,
    color: '#555555',
    marginBottom: 5,
  },
});

export default styles;
