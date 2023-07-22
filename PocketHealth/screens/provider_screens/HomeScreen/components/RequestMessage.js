import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles';

const RequestMessage= ({ buttonNoteText, subText, onPress }) => {
  return (
    <View style={styles.ButtonOuterContainer}>
      <View style={styles.requestContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Text style={styles.ButtonNotesText}>{buttonNoteText}</Text>
        </ScrollView>
        <Text style={styles.SubText}>{subText}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RequestMessage;
