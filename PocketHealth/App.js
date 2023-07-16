// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Entry screen of the app: general login page:
import LoginScreen from './screens/patient_screens/LoginScreen/LoginScreen';
// patient login & signup related screens:
import SignUpScreen_patient from './screens/patient_screens/LoginScreen/SignUpScreen';
import PhoneVerification_patient from './screens/patient_screens/LoginScreen/PhoneVerification';
import ResetPassword_patient from './screens/patient_screens/LoginScreen/ResetPassword';
import EnterPhoneNumToResetPassword_patient from './screens/patient_screens/LoginScreen/EnterPhoneNumToResetPass';
import BasicPatientInfoForm_patient from './screens/patient_screens/LoginScreen/BasicPatientInfoForm';
import MedicalHistory_patient from './screens/patient_screens/LoginScreen/MedicalHistory';
import HomeScreen_patient from './screens/patient_screens/HomeScreen/HomeScreen';
import UploadVitals from './screens/patient_screens/HomeScreen/UploadVitals';
import UploadMedicalHistory from './screens/patient_screens/HomeScreen/UploadMedicalHistory';

// patient home screen related screens:
import VitalsCollectingForm_patient from './screens/patient_screens/Forms/VitalsCollectingForm';
import NewComplaintForm_patient from './screens/patient_screens/Forms/NewComplaintForm';
// patient medical history related screens:
import PatientHistoryMain_patient from './screens/patient_screens/PatientHistoryScreen/PatientHistoryScreen';
import VitalHistory_patient from './screens/patient_screens/PatientHistoryScreen/VitalHistory';
import MedicalHistoryRecord_patient from './screens/patient_screens/PatientHistoryScreen/MedicalHistory';
import PastVisitRecord_patient from './screens/patient_screens/PatientHistoryScreen/PastVisit';
// patient chat related screens:
import ChatMainPage_patient from './screens/patient_screens/Chat/ChatMainScreen';

// provider login & signup related screens:
import SignUpScreen_provider from './screens/provider_screens/LoginScreen/ProviderSignUpScreen';
import LoginScreen_provider from './screens/provider_screens/LoginScreen/ProviderLoginScreen';
import PhoneVerification_provider from './screens/provider_screens/LoginScreen/ProviderPhoneVerification';
import ProviderEnterPhoneNumToResetPass from './screens/provider_screens/LoginScreen/ProviderEnterPhoneNumToResetPass';
import ProviderResetPassword from './screens/provider_screens/LoginScreen/ProviderResetPassword';
import BasicProviderInfo from './screens/provider_screens/LoginScreen/BasicProviderInfo';
import MoreInfoProvider from './screens/provider_screens/LoginScreen/MoreInfoProvider';
// provider homescreen and related screens:
import HomeScreen_provider from './screens/provider_screens/HomeScreen/HomeScreen_provider';

import ProviderResponseScreen from './screens/provider_screens/HomeScreen/ProviderResponse';

// Provider chat related screens:
import ChatMainPage_provider from './screens/provider_screens/Chat/ChatMainScreen_provider';

// volunteer login & signup related screens:
import SignUpScreen_volunteer from './screens/volunteer_screens/LoginScreen/VolunteerSignUpScreen';
import LoginScreen_volunteer from './screens/volunteer_screens/LoginScreen/VolunteerLoginScreen';
import PhoneVerification_volunteer from './screens/volunteer_screens/LoginScreen/VolunteerPhoneVerification';
import VolunteerEnterPhoneNumToResetPass from './screens/volunteer_screens/LoginScreen/VolunteerEnterPhoneNumToResetPass';
import VolunteerResetPassword from './screens/volunteer_screens/LoginScreen/VolunteerResetPassword';
import BasicVolunteerInfo from './screens/volunteer_screens/LoginScreen/BasicVolunteerInfo';

// volunteer home screen related screens:
import HomeScreen_volunteer from './screens/volunteer_screens/HomeScreen/HomeScreen_volunteer';
import RegisterNewPatient_volunteer from './screens/volunteer_screens/RegisterNewPatientScreen/RegisterNewPatientScreen';
import RegisterPatientWithoutPhone from './screens/volunteer_screens/RegisterNewPatientScreen/RegisterPatientWithoutPhone';
import RegisterPatientWithPhone from './screens/volunteer_screens/RegisterNewPatientScreen/RegisterPatientWithPhone';
import RegisterPatientPhoneVerification from './screens/volunteer_screens/RegisterNewPatientScreen/RegisterPatientPhoneVerification';



// the main stack:
const Stack = createStackNavigator();
// the login stack(which supports patients, providers, and admin login)
const LoginStack = createStackNavigator();
// patient's tab: including Home screen stack, record screen stack, chat screen stack
const Tab_patient = createBottomTabNavigator();
const HomeStack_patient = createStackNavigator();
const HistoryStack_patient = createStackNavigator();
const ChatStack_patient = createStackNavigator();
// provider's tab: including Home screen stack, chat stack
const Tab_provider = createBottomTabNavigator();
const HomeStack_provider = createStackNavigator();
const ChatStack_provider = createStackNavigator();
// volunteer's tab: including Home screen stack, patient profile manage stack
const Tab_vol = createBottomTabNavigator();
const HomeStack_vol = createStackNavigator();
const RecordManagerStack_vol = createStackNavigator();


//-------------------------------------------------Login & SignUp Stack----------------------------------------------------------------//
function LoginNavigator() {
  return (
    <LoginStack.Navigator>      
      <LoginStack.Screen name="Login" component={LoginScreen} />
      {/* Patient login related screens: */}      
      <LoginStack.Screen name="Patient Sign Up" component={SignUpScreen_patient} />      
      <LoginStack.Screen name="Patient Phone Verification" component={PhoneVerification_patient} />
      <LoginStack.Screen name="Patient Enter Phone Num to Reset Password" component={EnterPhoneNumToResetPassword_patient}/>
      <LoginStack.Screen name="Patient Reset Password" component={ResetPassword_patient}/>
      <LoginStack.Screen name="Basic Patient Info" component={BasicPatientInfoForm_patient} />
      <LoginStack.Screen name="Medical History" component={MedicalHistory_patient} />
      <LoginStack.Screen name="Patient's Vitals" component={VitalsCollectingForm_patient} />

      {/* Provider login related screens: */}
      <LoginStack.Screen name="Provider Login" component={LoginScreen_provider} />
      <LoginStack.Screen name="Provider Sign Up" component={SignUpScreen_provider} />
      <LoginStack.Screen name="Provider Phone Verification" component={PhoneVerification_provider} />
      <LoginStack.Screen name="Provider Reset Password" component={ProviderResetPassword} />
      <LoginStack.Screen name="Provider Enter Phone Num to Reset Password" component={ProviderEnterPhoneNumToResetPass} />
      <LoginStack.Screen name="Basic Provider Info" component={BasicProviderInfo} />
      <LoginStack.Screen name="More Provider Info" component={MoreInfoProvider} />      
      
      {/* Volunteer login related screens: */}
      <LoginStack.Screen name="Volunteer Login" component={LoginScreen_volunteer} />
      <LoginStack.Screen name="Volunteer Sign Up" component={SignUpScreen_volunteer} />
      <LoginStack.Screen name="Volunteer Phone Verification" component={PhoneVerification_volunteer} />
      <LoginStack.Screen name="Volunteer Reset Password" component={VolunteerResetPassword} />
      <LoginStack.Screen name="Volunteer Enter Phone Num to Reset Password" component={VolunteerEnterPhoneNumToResetPass} />
      <LoginStack.Screen name="Basic Volunteer Info" component={BasicVolunteerInfo} />      

    </LoginStack.Navigator>
  );
}

//-------------------------------------------------Patient Tab & Stack----------------------------------------------------------------//
// Patient Tab:
function HomeTab_patient() {
  return (
    <Tab_patient.Navigator>
      <Tab_patient.Screen name="My Home" options={{ headerShown: false }} component={HomeNavigator_patient} />   
      <Tab_patient.Screen name="My Record" options={{ headerShown: false }} component={HistoryNavigator_patient} />
      <Tab_patient.Screen name="My Chat" options={{ headerShown: false }} component={ChatNavigator_patient} />
    </Tab_patient.Navigator>
  );
}

// Patient Stacks: home, history, chat:
function HomeNavigator_patient() {
  return (
    <HomeStack_patient.Navigator>    
      <HomeStack_patient.Screen name="Home" component={HomeScreen_patient} options={{ tabBarVisible:true }}/> 
      <HomeStack_patient.Screen name="New Complaint" component={NewComplaintForm_patient} options={{ tabBarVisible:false }}/>
      <HomeStack_patient.Screen name="Upload Vitals" component={UploadVitals} options={{ tabBarVisible:false }}/>
      <HomeStack_patient.Screen name= "Upload MedHis" component={UploadMedicalHistory} options={{ tabBarVisible:false}}/>
      {/* any follow up screens from home goes from here */}
    </HomeStack_patient.Navigator>
  );
}

function HistoryNavigator_patient() {
  return (
    <HistoryStack_patient.Navigator>
      <HistoryStack_patient.Screen name="Patient History" component={PatientHistoryMain_patient} />
      <HistoryStack_patient.Screen name="Vital History" component={VitalHistory_patient} />
      <HistoryStack_patient.Screen name="Medical History" component={MedicalHistoryRecord_patient} />
      <HistoryStack_patient.Screen name="Past Visit" component={PastVisitRecord_patient} />
      {/* any follow up screens from home goes from here */}
    </HistoryStack_patient.Navigator>
  );
}

function ChatNavigator_patient() {
  return (
    <ChatStack_patient.Navigator>
      <ChatStack_patient.Screen name="Chat" component={ChatMainPage_patient} />
      {/* any follow up screens from home goes from here */}
    </ChatStack_patient.Navigator>
  );
}

//-------------------------------------------------Provider Tab & Stack----------------------------------------------------------------//
// Provider Tab:
function HomeTab_provider() {
  return(
    <Tab_provider.Navigator>
      <Tab_provider.Screen name="My Home" options={{ headerShown: false }} component={HomeNavigator_provider} />
      <Tab_provider.Screen name="My Chat" options={{ headerShown: false }} component={ChatNavigator_provider} />      
    </Tab_provider.Navigator>
  );
}

// Provider Stacks: home, chat:
function HomeNavigator_provider() {
  return (
    <HomeStack_provider.Navigator>
      <HomeStack_provider.Screen name="Home" component={HomeScreen_provider} />
      <HomeStack_provider.Screen name="Provider Response" component={ProviderResponseScreen} />
      
      {/* any follow up screens from home goes from here */}
    </HomeStack_provider.Navigator>
  );
}

function ChatNavigator_provider() {
  return(
    <ChatStack_provider.Navigator>
      <HomeStack_provider.Screen name="Chat" component={ChatMainPage_provider} />
    </ChatStack_provider.Navigator>
  );
}

//-------------------------------------------------Volunteer Tab & Stack----------------------------------------------------------------//
// Volunteer Tab:
function HomeTab_vol() {
  return(
    <Tab_vol.Navigator>
      <Tab_vol.Screen name="My Home" options={{ headerShown: false }} component={HomeNavigator_vol} />      
    </Tab_vol.Navigator>
  );
}

// Volunteer Stacks:
function HomeNavigator_vol() {
  return(
    <HomeStack_vol.Navigator>
      <HomeStack_vol.Screen name="Home" component={HomeScreen_volunteer} />  
      {/* any follow up screens from home goes from here */}  
      <HomeStack_vol.Screen name="Register A New Patient" component={RegisterNewPatient_volunteer} />
      <HomeStack_vol.Screen name="Register Patient With Phone" component={RegisterPatientWithPhone} />
      <HomeStack_vol.Screen name="Register Patient Without Phone" component={RegisterPatientWithoutPhone} />
      <HomeStack_vol.Screen name="Register Patient Phone Verification" component={RegisterPatientPhoneVerification} />
    </HomeStack_vol.Navigator>
  );
}

// function RecordManagerNavigator_vol() {
//   return(
//     <RecordManagerStack_vol.Navigator>
//       <RecordManagerStack_vol.Screen name="Home" component={RecordManagerScreen_vol} />
//     </RecordManagerStack_vol.Navigator>
//   );
// }

//-------------------------------------------------Entry Point of App.js----------------------------------------------------------------//
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator options={{ headerShown: false }}>
        <Stack.Screen name="Login Section" options={{ headerShown: false }} component={LoginNavigator} />
        <Stack.Screen name="Patient Main Tab" options={{ headerShown: false }} component={HomeTab_patient} />
        <Stack.Screen name="Provider Main Tab" options={{ headerShown: false }} component={HomeTab_provider} />
        <Stack.Screen name="Volunteer Main Tab" options={{ headerShown: false }} component={HomeTab_vol} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;