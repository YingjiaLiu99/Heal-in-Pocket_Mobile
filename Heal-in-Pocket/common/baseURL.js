import { Platform } from "react-native";

let baseURL;

if (Platform.OS === 'android') {
    baseURL = 'http://10.0.2.2:5001/api/v1.0/';  // This IP is for Android emulator
} else if (Platform.OS === 'ios') {
    baseURL = 'http://10.128.185.160:5001/api/v1.0/';  // Replace with your computer's local network IP address
} else if (Platform.OS === 'web') {
    baseURL = 'http://localhost:5001/api/v1.0/';
}

export default baseURL;
