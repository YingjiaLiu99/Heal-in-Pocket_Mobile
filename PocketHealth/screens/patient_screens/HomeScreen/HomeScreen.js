// import React from 'react';
// import { View, Text, TouchableOpacity,ScrollView } from 'react-native';
// import Announcement from './components/Announcement';
// import styles from './styles';

// // there should be a function that takes in annoucements and pass to 
// const announcements = [
//   { id: '1', text: 'First Announcement', date: '2023-07-01' },
//   { id: '2', text: 'Second Announcement', date: '2023-07-02' },
//   { id: '3', text: 'Third Announcement', date: '2023-07-03' },
// ];

// const HomeScreen = () => {
//   const [showConsultBox, setShowConsultBox] = useState(false);
//   const handleConsult = () => {
//     console.log('Consult pressed')
//   }
//   const handleUpdate = () => {
//     console.log('Update pressed')
//   }
//   //Name should be a param to be passed
//   return (
//     <View style={styles.container}>
 
//       <Text style={styles.heading}>Welcome, James</Text>

//       <Announcement announcements={announcements} />

//       {/* <View style={styles.announcementContainer}>
//         <Text style={styles.announcementText}>Begin New Consult</Text>
//         <TouchableOpacity
//           style={styles.buttonContainer}
//           onPress={handleConsult}
//         >
//           <Text style={styles.buttonText}>Consult</Text>
//         </TouchableOpacity>
//       </View>  */}
//       {/* <ScrollView style={styles.dialogueContainer}>
//         <View style={styles.dialogueItemContainer}>
//           <View style={styles.dialogueLeft}>
//             <Text style={styles.dialogueTextLeft}>
//               Person A: Hello, how are you?
//             </Text>
//           </View>
//           <View style={styles.dialogueRight}>
//             <Text style={styles.dialogueTextRight}>
//               Person B: Hi! I'm doing great, thanks for asking.
//             </Text>
//           </View>
//         </View>

//         <View style={styles.dialogueItemContainer}>
//           <View style={styles.dialogueLeft}>
//             <Text style={styles.dialogueTextLeft}>
//               Person A: Did you watch that new movie?
//             </Text>
//           </View>
//           <View style={styles.dialogueRight}>
//             <Text style={styles.dialogueTextRight}>
//               Person B: Yes, I did. It was amazing!
//             </Text>
//           </View>
//         </View>

//         <View style={styles.dialogueItemContainer}>
//           <View style={styles.dialogueLeft}>
//             <Text style={styles.dialogueTextLeft}>
//               Person A: What are your plans for the weekend?
//             </Text>
//           </View>
//           <View style={styles.dialogueRight}>
//             <Text style={styles.dialogueTextRight}>
//               Person B: I'm going to a concert with some friends.
//             </Text>
//           </View>
//         </View>

//         {/* Additional dialogues go here*/}
        
//       {/* </ScrollView> */}
//       {showConsultBox ? (
//         <ScrollView style={styles.dialogueContainer}>
//           <View style={styles.dialogueItemContainer}>
//             <View style={styles.dialogueLeft}>
//               <Text style={styles.dialogueTextLeft}>
//                 Person A: Hello, how are you?
//               </Text>
//             </View>
//             <View style={styles.dialogueRight}>
//               <Text style={styles.dialogueTextRight}>
//                 Person B: Hi! I'm doing great, thanks for asking.
//               </Text>
//             </View>
//           </View>

//           <View style={styles.dialogueItemContainer}>
//             <View style={styles.dialogueLeft}>
//               <Text style={styles.dialogueTextLeft}>
//                 Person A: Did you watch that new movie?
//               </Text>
//             </View>
//             <View style={styles.dialogueRight}>
//               <Text style={styles.dialogueTextRight}>
//                 Person B: Yes, I did. It was amazing!
//               </Text>
//             </View>
//           </View>

//           <View style={styles.dialogueItemContainer}>
//             <View style={styles.dialogueLeft}>
//               <Text style={styles.dialogueTextLeft}>
//                 Person A: What are your plans for the weekend?
//               </Text>
//             </View>
//             <View style={styles.dialogueRight}>
//               <Text style={styles.dialogueTextRight}>
//                 Person B: I'm going to a concert with some friends.
//               </Text>
//             </View>
//           </View>

//           {/* Additional dialogues go here */}
//         </ScrollView>
//       ) : (
//         <View style={styles.announcementContainer}>
//           <Text style={styles.announcementText}>Begin New Consult</Text>
//           <TouchableOpacity
//             style={styles.buttonContainer}
//             onPress={handleConsult}
//           >
//             <Text style={styles.buttonText}>Consult</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//      <View style={styles.announcementContainer}>
//      <Text style={styles.announcementText}>Update Health Info</Text>
//      <TouchableOpacity
//        style={styles.buttonContainer}
//        onPress={handleUpdate}
//      >
//        <Text style={styles.buttonText}>Update</Text>
//      </TouchableOpacity>
//    </View>
//  </View>

// };

// export default HomeScreen;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Announcement from './components/Announcement';
import styles from './styles';

const announcements = [
  { id: '1', text: 'First Announcement', date: '2023-07-01' },
  { id: '2', text: 'Second Announcement', date: '2023-07-02' },
  { id: '3', text: 'Third Announcement', date: '2023-07-03' },
];

const HomeScreen = () => {
  const [showConsultBox, setShowConsultBox] = useState(true);

  const handleConsult = () => {
    console.log('Consult pressed');
  };

  const handleUpdate = () => {
    console.log('Update pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome, James</Text>

      <Announcement announcements={announcements} />

      {showConsultBox ? (
        <ScrollView style={styles.dialogueContainer}>
          <View style={styles.dialogueItemContainer}>
            <View style={styles.dialogueLeft}>
              <Text style={styles.dialogueTextLeft}>
                Person A: Hello, how are you?
              </Text>
            </View>
            <View style={styles.dialogueRight}>
              <Text style={styles.dialogueTextRight}>
                Person B: Hi! I'm doing great, thanks for asking.
              </Text>
            </View>
          </View>

          <View style={styles.dialogueItemContainer}>
            <View style={styles.dialogueLeft}>
              <Text style={styles.dialogueTextLeft}>
                Person A: Did you watch that new movie?
              </Text>
            </View>
            <View style={styles.dialogueRight}>
              <Text style={styles.dialogueTextRight}>
                Person B: Yes, I did. It was amazing!
              </Text>
            </View>
          </View>

          <View style={styles.dialogueItemContainer}>
            <View style={styles.dialogueLeft}>
              <Text style={styles.dialogueTextLeft}>
                Person A: What are your plans for the weekend?
              </Text>
            </View>
            <View style={styles.dialogueRight}>
              <Text style={styles.dialogueTextRight}>
                Person B: I'm going to a concert with some friends.
              </Text>
            </View>
          </View>

          {/* Additional dialogues go here */}
        </ScrollView>
      ) : (
        <View style={styles.announcementContainer}>
          <Text style={styles.announcementText}>Begin New Consult</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleConsult}
          >
            <Text style={styles.buttonText}>Consult</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.announcementContainer}>
        <Text style={styles.announcementText}>Update Health Info</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleUpdate}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

