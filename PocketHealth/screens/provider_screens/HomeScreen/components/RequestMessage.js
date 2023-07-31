import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const RequestMessage= ({ buttonNoteText, subText, onPress}) => {
  return (
      <TouchableOpacity style={styles.ButtonOuterContainer} onPress={onPress}>
        <View style={styles.requestContainer}>        
          <Text numberOfLines={3} ellipsizeMode='tail' style={styles.ButtonNotesText}>{buttonNoteText}</Text>        
          <Text style={styles.SubText}>{subText}</Text>
        </View>      
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ButtonOuterContainer: {
    borderColor: '#7C7C7C',
    borderWidth: 1,
    marginBottom: 10,
    marginHorizontal: 10,
    paddingHorizontal:10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#DDE5FD',    
    height:110,
  },
  requestContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
  },
  ButtonNotesText: {
    fontSize: 18,
    fontWeight: 'bold',
    flexShrink: 1,
    textAlign: 'left',
  },
  SubText: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'left',
  },
  buttonContainer: {
    backgroundColor: '#395BCD',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 10,
  },

});

export default RequestMessage;
