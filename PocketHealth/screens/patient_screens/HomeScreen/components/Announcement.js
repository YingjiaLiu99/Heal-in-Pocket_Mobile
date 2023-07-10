// Announcement.js
import React from 'react';
import { View, Text, ScrollView, Dimensions, FlatList, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const Announcement = ({ announcements }) => {
  const [currentScrollIndex, setCurrentScrollIndex] = React.useState(0);

  const onViewRef = React.useRef((viewableItems) => {
    setCurrentScrollIndex(viewableItems.viewableItems[0].index);
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        onScrollToIndexFailed={() => {}}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        showsHorizontalScrollIndicator={false}
        data={announcements}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ScrollView style={styles.scrollView}>
            <Text style={styles.announcementTitle}>Announcement</Text>
            <Text style={styles.announcementDate}>{item.date}</Text>
            <Text style={styles.announcementText}>{item.text}</Text>
          </ScrollView>
        )}
      />

      <View style={styles.indicatorContainer}>
        {announcements.map((_, i) => {
          return (
            <View
              key={i}
              style={[styles.indicator,
              {backgroundColor: i === currentScrollIndex ? 'black' : 'gray'}]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3, 
    borderRadius: 10, 
    borderColor: '#7C7C7C', 
    borderWidth: 1, 
    marginBottom: 20
  },
  scrollView: {
    width, 
    padding: 10
  },
  announcementTitle: {
    fontSize: 40, 
    textAlign: 'center'
  },
  announcementDate: {
    fontSize: 14, 
    textAlign: 'center', 
    color: 'gray', 
    marginBottom: 40
  },
  announcementText: {
    fontSize: 30, 
    textAlign: 'center'
  },
  indicatorContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 10, 
    borderRadius: 10
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    margin: 5,
  }
});

export default Announcement;
