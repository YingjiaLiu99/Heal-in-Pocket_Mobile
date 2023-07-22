import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';


const RequestMessage= ({ buttonNoteText, subText, onPress }) => {
  return (
    <View style={styles.ButtonOuterContainer}>
      <View style={styles.requestContainer}>
        <ScrollView>
          <Text style={styles.ButtonNotesText}>{buttonNoteText}</Text>
        </ScrollView>
        <Text style={styles.SubText}>{subText}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={{color:'#FFFFFF'}}>Accept</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonOuterContainer: {
    borderColor: '#7C7C7C',
    borderWidth: 1,
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#DDE5FD',    
    height:110,
  },
  requestContainer: {
    alignItems: 'left',
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
    fontSize: 16,
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
