import React, { useState, useRef } from 'react';
import { ScrollView, View, Dimensions, Text, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const AnnouncementBoard = ({ items }) => {
  const scrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event) => {
    const { x } = event.nativeEvent.contentOffset;
    const pageIndex = Math.round(x / width);
    const offset = pageIndex * width;

    if (offset !== x) {
      scrollRef.current.scrollTo({ x: offset, animated: true });
    }

    setCurrentPage(pageIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        contentContainerStyle={styles.scrollContainer}
      >
        {items.map((item, index) => (
          <View key={index} style={[styles.page, { width }]}>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <ScrollView style={styles.contentScrollView} contentContainerStyle={{justifyContent: 'flex-start'}}>
                <Text style={styles.content}>{item.content}</Text>
              </ScrollView>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.pageIndicatorContainer}>
        {items.map((_, index) => (
          <View
            key={index}
            style={[
              styles.pageIndicator,
              currentPage === index && styles.pageIndicatorActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height:600,
    },
    scrollContainer: {
      flexDirection: 'row',
    },
    page: {
      justifyContent: 'flex-start',
      padding: 20,
    },
    contentContainer: {
      alignItems: 'center',
      maxWidth: width - 40,
      height: 600, // Fixed height for the entire container, adjust as needed
      backgroundColor: '#E3E9FC',
      paddingVertical:10,      
    },
    title: {
      fontWeight: 'bold',
      fontSize: 35,
      marginBottom: 5,
    },
    date: {
      fontSize: 18,
      marginBottom: 5,
    },
    contentScrollView: {
      maxHeight: 400, // Adjust as needed based on the space you want the content to take
    },
    content: {
      fontSize: 25,
    },
    pageIndicatorContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
    },
    pageIndicator: {
      margin: 5,
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: '#ccc',
    },
    pageIndicatorActive: {
      backgroundColor: '#000',
    },
  });

export default AnnouncementBoard;
