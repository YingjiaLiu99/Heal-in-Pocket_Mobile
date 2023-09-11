import { Platform } from "react-native";

let baseURL;

if (Platform.OS === 'android') {
    baseURL = 'http://10.0.2.2:5001/api/v1.0/';
} else if (Platform.OS === 'ios' || Platform.OS === 'web') {
    baseURL = 'http://localhost:5001/api/v1.0/';
}

export default baseURL;