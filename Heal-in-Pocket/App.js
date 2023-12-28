// App.js
import React from 'react';
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import  Feather from 'react-native-vector-icons/Feather';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
// import the context of VisitData
import { VisitDataContextProvider } from './context/context_VisitData_function';
import { RequestMessContextProvider } from './context/context_requestMess_function';
// Welcome Page:
import WelcomeScreen from './screens/WelcomeScreen';
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
// patient settings related screens:
import SettingsMainScreen_patient from './screens/patient_screens/SettingsScreen/SettingsMainScreen';

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
import SuccessScreen_provider from './screens/provider_screens/HomeScreen/Success';
// Provider chat related screens:
import ChatMainPage_provider from './screens/provider_screens/Chat/ChatMainScreen_provider';
// Provider past visit related screens:
import PastVisits_provider from './screens/provider_screens/PastVisit/PastVisit';
// Provider search related screens:
import Search_provider from './screens/provider_screens/SearchScreen/search';
import PatientPastVisit_provider from './screens/provider_screens/SearchScreen/PatientPastVisit';
import CreateNewNote_provider from './screens/provider_screens/SearchScreen/createNewNote';
// Provider settings related screens:
import SettingsMainScreen_provider from './screens/provider_screens/SettingsScreen/SettingsMainScreen';

// volunteer login & signup related screens:
import SignUpScreen_volunteer from './screens/volunteer_screens/LoginScreen/VolunteerSignUpScreen';
import LoginScreen_volunteer from './screens/volunteer_screens/LoginScreen/VolunteerLoginScreen';
import PhoneVerification_volunteer from './screens/volunteer_screens/LoginScreen/VolunteerPhoneVerification';
import VolunteerEnterPhoneNumToResetPass from './screens/volunteer_screens/LoginScreen/VolunteerEnterPhoneNumToResetPass';
import VolunteerResetPassword from './screens/volunteer_screens/LoginScreen/VolunteerResetPassword';
import BasicVolunteerInfo from './screens/volunteer_screens/LoginScreen/BasicVolunteerInfo';
// volunteer home screen related screens:
import HomeScreen_volunteer from './screens/volunteer_screens/HomeScreen/HomeScreen_volunteer';
import OptionScreen_vol from './screens/volunteer_screens/HomeScreen/OptionScreen';
import RegisterNewPatient_volunteer from './screens/volunteer_screens/RegisterNewPatientScreen/RegisterNewPatientScreen';
import RegisterPatientWithoutPhone_volunteer from './screens/volunteer_screens/RegisterNewPatientScreen/RegisterPatientWithoutPhone';
import RegisterPatientWithPhone_volunteer from './screens/volunteer_screens/RegisterNewPatientScreen/RegisterPatientWithPhone';
import RegisterPatientPhoneVerification_volunteer from './screens/volunteer_screens/RegisterNewPatientScreen/RegisterPatientPhoneVerification';
import UploadNewRecord_vol from './screens/volunteer_screens/HomeScreen/uploadNewRecord';
import SuccessScreen_vol from './screens/volunteer_screens/HomeScreen/Success';
// volunteer settings related screens:
import WaitlistMainScreen_vol from './screens/volunteer_screens/WaitlistScreen/WaitlistMainScreen';
import WaitlistResponseScreen from './screens/volunteer_screens/WaitlistScreen/WaitlistResponse';
import SuccessWaitlistScreen_vol from './screens/volunteer_screens/WaitlistScreen/Success';
import SettingsMainScreen_vol from './screens/volunteer_screens/SettingsScreen/SettingsMainScreen';



// the main stack:
const Stack = createStackNavigator();
// the login stack(which supports patients, providers, and admin login)
const LoginStack = createStackNavigator();
// patient's tab: including Home screen stack, record screen stack, chat screen stack
const Tab_patient = createMaterialBottomTabNavigator();
const HomeStack_patient = createStackNavigator();
const HistoryStack_patient = createStackNavigator();
const ChatStack_patient = createStackNavigator();
const SettingStack_patient = createStackNavigator();
// provider's tab: including Home screen stack, chat stack
const Tab_provider = createMaterialBottomTabNavigator();
const HomeStack_provider = createStackNavigator();
const ChatStack_provider = createStackNavigator();
const PastVisitStack_provider = createStackNavigator();
const SearchStack_provider = createStackNavigator();
const SettingStack_provider = createStackNavigator();
// volunteer's tab: including Home screen stack, patient profile manage stack
const Tab_vol = createMaterialBottomTabNavigator();
const HomeStack_vol = createStackNavigator();
const RecordManagerStack_vol = createStackNavigator();
const WaitlistStack_vol = createStackNavigator();
const SettingStack_vol = createStackNavigator();


//-------------------------------------------------Login & SignUp Stack----------------------------------------------------------------//
function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}}/>      
      <LoginStack.Screen name="Login" component={LoginScreen} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      {/* Patient login related screens: */}      
      <LoginStack.Screen name="Patient Sign Up" component={SignUpScreen_patient} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>      
      <LoginStack.Screen name="Patient Phone Verification" component={PhoneVerification_patient} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="Patient Enter Phone Num to Reset Password" component={EnterPhoneNumToResetPassword_patient} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="Patient Reset Password" component={ResetPassword_patient} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="Basic Patient Info" component={BasicPatientInfoForm_patient} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="Medical History" component={MedicalHistory_patient} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="Patient's Vitals" component={VitalsCollectingForm_patient} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>

      {/* Provider login related screens: */}
      <LoginStack.Screen name="Provider Login" component={LoginScreen_provider} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="Provider Sign Up" component={SignUpScreen_provider} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="Provider Phone Verification" component={PhoneVerification_provider} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="Provider Reset Password" component={ProviderResetPassword} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="Provider Enter Phone Num to Reset Password" component={ProviderEnterPhoneNumToResetPass} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="Basic Provider Info" component={BasicProviderInfo} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="More Provider Info" component={MoreInfoProvider} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>      
      
      {/* Volunteer login related screens: */}
      <LoginStack.Screen name="Volunteer Login" component={LoginScreen_volunteer} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="Volunteer Sign Up" component={SignUpScreen_volunteer} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="Volunteer Phone Verification" component={PhoneVerification_volunteer} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="Volunteer Reset Password" component={VolunteerResetPassword} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="Volunteer Enter Phone Num to Reset Password" component={VolunteerEnterPhoneNumToResetPass} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <LoginStack.Screen name="Basic Volunteer Info" component={BasicVolunteerInfo} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>      

    </LoginStack.Navigator>
  );
}

//-------------------------------------------------Patient Tab & Stack----------------------------------------------------------------//
// Patient Tab:
function HomeTab_patient() {
  return (
    <Tab_patient.Navigator
      initialRouteName='My Home'
      activeColor='#395BCD' 
      inactiveColor= 'black' 
      barStyle={{ backgroundColor: '#DDE5FD' }}
    >
      <Tab_patient.Screen name="My Home" component={HomeNavigator_patient} options={{
         headerShown: false,
         tabBarColor:'black',
         tabBarLabel: <Text style={{fontSize:15, marginTop:5}}>Home</Text>,         
         tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
         }}
      />
      <Tab_patient.Screen name="My Record" component={HistoryNavigator_patient} options={{
         headerShown: false,
         tabBarLabel: <Text style={{fontSize:15, marginTop:5}}>My Record</Text>,         
         tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-text-outline" color={color} size={30} />
          ),
         }}
      />   
      
      <Tab_patient.Screen name="My Settings" component={SettingsNavigator_patient} options={{
         headerShown: false,
         tabBarLabel: <Text style={{fontSize:15, marginTop:5}}>Settings</Text>,         
         tabBarIcon: ({ color }) => (
            <Feather name="settings" color={color} size={25} />
          ),
         }}
      />      
    </Tab_patient.Navigator>
  );
}

// Patient Stacks: home, history, chat:
function HomeNavigator_patient() {
  return (
    <HomeStack_patient.Navigator>    
      <HomeStack_patient.Screen name="Home" component={HomeScreen_patient} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/> 
      <HomeStack_patient.Screen name="New Complaint" component={NewComplaintForm_patient} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <HomeStack_patient.Screen name="Upload Vitals" component={UploadVitals} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <HomeStack_patient.Screen name= "Upload MedHis" component={UploadMedicalHistory} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      {/* any follow up screens goes from here */}
    </HomeStack_patient.Navigator>
  );
}

function HistoryNavigator_patient() {
  return (
    <HistoryStack_patient.Navigator>
      <HistoryStack_patient.Screen name="Patient History" component={PatientHistoryMain_patient} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <HistoryStack_patient.Screen name="Vital History" component={VitalHistory_patient} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <HistoryStack_patient.Screen name="Medical History" component={MedicalHistoryRecord_patient} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <HistoryStack_patient.Screen name="Past Visit" component={PastVisitRecord_patient} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      {/* any follow up screens goes from here */}
    </HistoryStack_patient.Navigator>
  );
}

function SettingsNavigator_patient() {
  return (
    <SettingStack_patient.Navigator>
      <SettingStack_patient.Screen name="Settings" component={SettingsMainScreen_patient} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      {/* any follow up screens goes from here */}
    </SettingStack_patient.Navigator>
  );
}

//-------------------------------------------------Provider Tab & Stack----------------------------------------------------------------//
// Provider Tab:
function HomeTab_provider() {
  return(   
    <Tab_provider.Navigator
      initialRouteName='My Home'      
      activeColor='#395BCD' 
      inactiveColor= 'black' 
      barStyle={{ backgroundColor: '#DDE5FD' }}     
    >
      <Tab_provider.Screen name="My Home" component={HomeNavigator_provider} options={{
         headerShown: false,
         tabBarLabel: <Text style={{fontSize:15, marginTop:5}}>Home</Text>,         
         tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
         }}
      />
      
      <Tab_provider.Screen name="My Past Visits" component={PastVisitNavigator_provider} options={{
         headerShown: false,
         tabBarLabel: <Text style={{fontSize:15, marginTop:5}}>Past Visits</Text>,         
         tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="clipboard-text-outline" color={color} size={30} />
          ),
         }}
      />

      <Tab_provider.Screen name="My Search" component={SearchNavigator_provider} options={{
         headerShown: false,
         tabBarLabel: <Text style={{fontSize:15, marginTop:5}}>Search</Text>,         
         tabBarIcon: ({ color }) => (
          <Feather name="search" color={color} size={25} />
          ),
         }}
      />

      <Tab_provider.Screen name="My Settings" component={SettingsNavigator_provider} options={{
         headerShown: false,
         tabBarLabel: <Text style={{fontSize:15, marginTop:5}}>Settings</Text>,         
         tabBarIcon: ({ color }) => (
            <Feather name="settings" color={color} size={25} />
          ),
         }}
      />      
    </Tab_provider.Navigator>
  );
}

// Provider Stacks: home, chat:
function HomeNavigator_provider() {
  return (
    <HomeStack_provider.Navigator>
      <HomeStack_provider.Screen name="Home" component={HomeScreen_provider} options={{headerBackTitle:'Back', headerTitle: '', headerStyle:{backgroundColor:'#DDE5FD'}}} />
      <HomeStack_provider.Screen name="Provider Response" component={ProviderResponseScreen} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}} />
      <HomeStack_provider.Screen name="Success" component={SuccessScreen_provider} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD',}}} />
      
      {/* any follow up screens from home goes from here */}
    </HomeStack_provider.Navigator>
  );
}

function PastVisitNavigator_provider() {
  return (
    <PastVisitStack_provider.Navigator>
      <PastVisitStack_provider.Screen name="Past Visit" component={PastVisits_provider} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
    </PastVisitStack_provider.Navigator>
  );
}

function SearchNavigator_provider() {
  return (
    <SearchStack_provider.Navigator>
      <SearchStack_provider.Screen name="Search" component={Search_provider} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <SearchStack_provider.Screen name="Patient Past Visits" component={PatientPastVisit_provider} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <SearchStack_provider.Screen name="Create New Note" component={CreateNewNote_provider} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
    </SearchStack_provider.Navigator>
  );
}

function SettingsNavigator_provider() {
  return (
    <SettingStack_provider.Navigator>
      <SettingStack_provider.Screen name="Settings" component={SettingsMainScreen_provider} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      {/* any follow up screens goes from here */}
    </SettingStack_provider.Navigator>
  );
}

//-------------------------------------------------Volunteer Tab & Stack----------------------------------------------------------------//
// Volunteer Tab:
function HomeTab_vol() {
  return(   
    <Tab_vol.Navigator
      initialRouteName='My Home'
      activeColor='#395BCD'      
      barStyle={{ backgroundColor: '#DDE5FD' }}
    >
      <Tab_vol.Screen name="My Home" component={HomeNavigator_vol} options={{
         headerShown: false,
         tabBarLabel: <Text style={{fontSize:15, marginTop:5}}>Home</Text>,         
         tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
         }}
      />  
      <Tab_vol.Screen name="My Waitlist" component={WaitlistNavigator_vol} options={{
         headerShown: false,
         tabBarLabel: <Text style={{fontSize:15, marginTop:5}}>Waitlist</Text>,         
         tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="clipboard-text-outline" color={color} size={30} />
          ),
         }}
      />        
      <Tab_vol.Screen name="My Settings" component={SettingsNavigator_vol} options={{
         headerShown: false,
         tabBarLabel: <Text style={{fontSize:15, marginTop:5}}>Settings</Text>,         
         tabBarIcon: ({ color }) => (
            <Feather name="settings" color={color} size={25} />
          ),
         }}
      />      
    </Tab_vol.Navigator>
  );
}

// Volunteer Stacks:
function HomeNavigator_vol() {
  return(
    <HomeStack_vol.Navigator>
      <HomeStack_vol.Screen name="Home" component={HomeScreen_volunteer} options={{headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}} />  
      {/* any follow up screens from home goes from here */}  
      <HomeStack_vol.Screen name="Register A New Patient" component={RegisterNewPatient_volunteer} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <HomeStack_vol.Screen name="Register Patient With Phone" component={RegisterPatientWithPhone_volunteer} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <HomeStack_vol.Screen name="Register Patient Without Phone" component={RegisterPatientWithoutPhone_volunteer} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <HomeStack_vol.Screen name="Register Patient Phone Verification" component={RegisterPatientPhoneVerification_volunteer} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <HomeStack_vol.Screen name="Options" component={OptionScreen_vol} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <HomeStack_vol.Screen name="Upload New Record" component={UploadNewRecord_vol} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <HomeStack_vol.Screen name='Success' component={SuccessScreen_vol} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>

    </HomeStack_vol.Navigator>
  );
}

function WaitlistNavigator_vol() {
  return (
    <WaitlistStack_vol.Navigator>
      <WaitlistStack_vol.Screen name="Waitlist" component={WaitlistMainScreen_vol} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <WaitlistStack_vol.Screen name="Waitlist Response" component={WaitlistResponseScreen} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      <WaitlistStack_vol.Screen name="Success" component={SuccessWaitlistScreen_vol} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      {/* any follow up screens goes from here */}
    </WaitlistStack_vol.Navigator>
  );
}

function SettingsNavigator_vol() {
  return (
    <SettingStack_vol.Navigator>
      <SettingStack_vol.Screen name="Settings" component={SettingsMainScreen_vol} options={{headerBackTitle:'Back',headerTitle: '',headerStyle:{backgroundColor:'#DDE5FD'}}}/>
      {/* any follow up screens goes from here */}
    </SettingStack_vol.Navigator>
  );
}


//-------------------------------------------------Entry Point of App.js----------------------------------------------------------------//
function App() {
  return (
    <VisitDataContextProvider>
    <RequestMessContextProvider>
    <NavigationContainer>
      <Stack.Navigator options={{ headerShown: false }}>
        <Stack.Screen name="Login Section" options={{ headerShown: false }} component={LoginNavigator} />
        <Stack.Screen name="Patient Main Tab" options={{ headerShown: false }} component={HomeTab_patient} />
        <Stack.Screen name="Provider Main Tab" options={{ headerShown: false }} component={HomeTab_provider} />
        <Stack.Screen name="Volunteer Main Tab" options={{ headerShown: false }} component={HomeTab_vol} />
      </Stack.Navigator>
    </NavigationContainer>
    </RequestMessContextProvider>
    </VisitDataContextProvider>
  );
}

export default App;