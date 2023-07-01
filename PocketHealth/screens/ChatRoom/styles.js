import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      marginTop: 10,
      fontSize: 18,
      fontWeight: "bold",
      color: "black",
    },
    buttonContainer: {
      width: "60%",
      marginTop: 10,
    },
    button: {
      backgroundColor: "#0E8ACF",
      width: "100%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },
    buttonOutline: {
      backgroundColor: "#0E8ACF",
      marginTop: 5,
      borderColor: "#0E8ACF",
      borderWidth: 2,
    },
    buttonOutlineText: {
      color: "white",
      fontWeight: "700",
      fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
      },
      profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
      messageContainer: {
        flex: 1,
      },
      username: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      recentMessage: {
        fontSize: 14,
        color: '#555555',
      },
      chatPage: {
        flex: 1,
      },
    
  });

export default styles;