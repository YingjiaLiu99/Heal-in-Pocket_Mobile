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
  });

export default styles;