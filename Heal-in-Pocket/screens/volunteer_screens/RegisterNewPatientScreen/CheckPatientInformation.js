// react native library：
import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

// own components and styles
import RadioMutipleChoice from './components/RadioMultipleChoice';
import InputBoxWithLabel from '../../../components/InputBoxWithLabel';
import styles from './styles';
import axios from 'axios';
import baseURL from '../../../common/baseURL';

export default function CheckPatientInformation_volunteer({route, navigation}) { 

    const {firstName, lastName, DOB, patientId, date, gender, insurance, pcp, lastSeen} = route.params;

    const [enableEdit, setEnableEdit] = useState(false);
    const [confirmCheck, setConfirmCheck] = useState(true);

    let oldInsurance = insurance;
    let oldPcp = pcp;
    let oldLastSeen = lastSeen;

    const [errorMessage, setErrorMessage] = useState('');

    const [insuranceCheck, setInsurance] = useState(insurance);
    const [pcpCheck, setPrimaryCareProvider] = useState(pcp);
    const [lastSeenCheck, setLastSeen] = useState(lastSeen);

    const primaryCareProviderRef = useRef(null);
    const lastSeenRef = useRef(null);

    const handleSubmit = async() => {

        if ((confirmCheck)) {
            const infoChange = {
                insurance: insuranceCheck,
                primary_care_provider: pcpCheck,
                last_seen: lastSeenCheck,
            };

            setConfirmCheck(true);

            try { 
                const response = await axios.patch(`${baseURL}patient/update/${patientId}`, infoChange)
                console.log("update info for current patient is: ", response.data.patient.insurance
                    + " " + response.data.patient.primary_care_provider 
                    + " " + response.data.patient.last_seen );

                navigation.navigate("Upload New Record",{
                    firstName: firstName,
                    lastName: lastName,
                    DOB: DOB,
                    patientId: patientId,
                    date:date,
                    gender: gender, 
                    insurance: response.data.patient.insurance,
                    pcp: response.data.patient.primary_care_provider,
                    lastSeen: response.data.patient.last_seen,
                });
                
            } catch (error) {
                console.error('Error updating information:', error.response?.data || error.message);
                setErrorMessage('Failed to update information.');
            }
        }
        else {
            setConfirmCheck(true);
        }

    };

    const afterEnableEditConfirmCheck = async() => {
        // False at first, while edit is click but the confirm is false
        // Change to True if the confirm is clicked and change to submit: 
        // Release the update while set to true

        if (enableEdit) {
            setConfirmCheck(!confirmCheck);
        }
        
    };

    const handleEdit = async() => {
        //setEnableEdit(!enableEdit);
        // console.log(enableEdit ? 'Disable Edit' : 'Enable Edit');
        setEnableEdit(true);
        setConfirmCheck(!confirmCheck);
    };
    
    return (
    <View style={{flex:1}}>
      <View style={{
        position: 'absolute',              
        paddingTop: 0, 
        backgroundColor: '#DDE5FD', 
        zIndex: 999, 
        elevation: 3, 
        flexDirection: 'column',
        justifyContent: 'space-between',
        width:'100%',
        height:85
        }}>
      <View>

      <View style={{ flexDirection: 'row', paddingLeft:5}}>
        <Text style={{fontSize: 25, fontWeight: '500',width:'100%',}}>{firstName} {lastName}</Text>
      </View>              
      
      <View style={{ flexDirection: 'row', paddingLeft:5}}>
        <Text style={{fontSize: 20, fontWeight: '400', width: '45%'}}>DOB: {DOB}</Text>
      </View>

      <View style={{ flexDirection: 'row', paddingLeft:5}}>
        <Text style={{fontSize: 20, fontWeight: '400', width: '100%'}}>Gender: {gender}</Text>
      </View>

      </View>
      
    </View>
        <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={
        {
            alignItems: 'center',      
            justifyContent: 'flex-start',
            flexDirection: 'column',
            paddingHorizontal: 20,
            paddingVertical:0,      
            marginTop: 0,
            marginHorizontal:0, 
            paddingTop: 85
          }}>
        
        <View style={{marginTop: 10,marginBottom:20,width:'100%', alignItems: 'center'}}>
            <Text style={{
                    fontSize:18, 
                    
                    // color: "#458FE4", 
                    color: enableEdit && !confirmCheck ? "#4CBC2D"
                    : !enableEdit && confirmCheck ? "#458FE4"
                    : enableEdit && confirmCheck ? "#F9A514"
                    : "",
                    fontWeight: "bold"
                }}>
                {enableEdit && !confirmCheck ? "Click Confirm to Finish Your Change" 
                : !enableEdit && confirmCheck ? "Click Edit to Change Your Information"
                : enableEdit && confirmCheck ? "Click Submit to Submit Your Change"
                : ""}

            </Text>
            {/* <Text style={{marginTop:10,fontSize:17}}>* is Required</Text> */}
        </View>    

        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

        <InputBoxWithLabel
            label="Insurance"        
            value={insuranceCheck}
            onChangeText={(text) => setInsurance(text)}
            placeholder="Please enter insurance"
            keyboardType="default"
            width='100%'
            onSubmitEditing={() => primaryCareProviderRef.current.focus()}
            returnKeyType='next'
            editable={enableEdit}
            selectTextOnFocus={enableEdit}
            color = {enableEdit ? "#000" : "#808080"}
        />

        <InputBoxWithLabel
            label="Primary Care Provider"        
            value={pcpCheck}
            ref={primaryCareProviderRef}
            onChangeText={(text) => setPrimaryCareProvider(text)}
            placeholder="Please enter primary care provider"
            keyboardType="default"
            width='100%'
            onSubmitEditing={() => lastSeenRef.current.focus()}
            returnKeyType='next'
            editable={enableEdit}
            selectTextOnFocus={enableEdit}
            color = {enableEdit ? "#000" : "#808080"}
        />

        <InputBoxWithLabel
            label = "Last Seen/Hospitalized"
            value={lastSeenCheck}
            ref={lastSeenRef}
            onChangeText={(text) => setLastSeen(text)}
            placeholder="Please enter the hospitalized history"
            keyboardType="default"
            width='100%'
            // Test for editable: 
            editable={enableEdit}
            selectTextOnFocus={enableEdit}
            color = {enableEdit ? "#000" : "#808080"}
        />
        

        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 20, marginBottom: 20 }}>
        {/* Edit Button or Placeholder */}
        {!enableEdit ? (
            <TouchableOpacity 
                style={{
                    height: 70,
                    width: '30%',
                    marginVertical: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#395BCD', // Blue for edit
                    borderRadius: 20,
                }} 
                onPress={handleEdit}>
                <Text style={{ color: '#fff', fontSize: 25 }}>
                    Edit
                </Text>
            </TouchableOpacity>
        ) : (
            <View style={{ width: '30%', height: 70, marginVertical: 10 }} />
        )}

        {/* Skip Button */}
        <TouchableOpacity 
            style={{
                height: 70,
                width: '30%', 
                marginVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: confirmCheck && enableEdit ? "#F9A514" : '#4CBC2D', // Green color for next
                borderRadius: 20
            }} 
            onPress={handleSubmit}>
            <Text style={{ color: '#fff', fontSize: 25 }}>
                {((enableEdit === false) && (confirmCheck === true)) ? 'Skip'
                 : ((enableEdit === true) && (confirmCheck === false)) ? "Confirm"
                :  ((enableEdit === true) && (confirmCheck === true)) ? "Submit" : ""}

                
            </Text>
        </TouchableOpacity>
        </View>
        {/* reserve empty space for keyboard: */}
        <View style={{ height: enableEdit ? 200 : 50 }} /> 
         
        </ScrollView>

    </View>


    );

};