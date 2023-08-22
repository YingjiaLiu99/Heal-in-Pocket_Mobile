import React, { useRef, useState, useContext } from 'react';
import { Text, View, TouchableOpacity, Alert, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StackActions } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import InputBoxWithInnerLabel from '../../../components/InputBoxWithInnerLabel';
import BigInputBoxWithInnerLabel from '../../../components/BigInputBoxWithInnerLabel';
import RadioMutipleChoice from '../../../components/RadioMultipleChoice';
import InputBoxWithLabel from '../../../components/InputBoxWithLabel';
import RadioMutipleChoiceCenter from '../../../components/RadioMultipleChoiceCenter';
import styles from './styles';


export default function RecordPatientInfo({ route, navigation }) {

    const { firstName, lastName, DOB, gender } = route.params;
    const [time, setTime] = useState('');
    const [insurance, setInsurance] = useState('');
    const [pcps, setPcPs] = useState('');
    const [caseHistory, setCaseHistory] = useState('');
    const [smoking, setSmoking] = useState(null);
    const [pregnancy, setPregnancy] = useState(null);

    const timeRef = useRef(null);
    const insuranceRef = useRef(null);
    const pcpsRef = useRef(null);
    const caseHistoryRef = useRef(null);

    const smokingOption = [
        { value: 'yes', choiceLabel: 'Yes' },
        { value: 'no', choiceLabel: 'No' },
        { value: 'na', choiceLabel: 'NA' },
    ];

    const pregnancyOption = [
        { value: 'yes', choiceLabel: 'Yes' },
        { value: 'no', choiceLabel: 'No' },
        { value: 'na', choiceLabel: 'NA' },
    ];

    // Generated today's date
    const getCurrentDate = () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
        const year = date.getFullYear();
        // setDate(`${month}/${day}/${year}`);
        
        return `${month}/${day}/${year}`;
    }


    // Backend api call GOES INSIDE
    const handleSubmit = () => {
        // Only check if insurance is valid
        if (typeof insurance !== "string") {
            setErrorMessage('Please enter a valid name');
        }
        else {
            console.log(`First Name: ${firstName}, Last Name: ${lastName}, DOB: ${DOB}, Sex: ${gender}
            , Insurance: ${insurance}, PcPs: ${pcps}, caseHistory: ${caseHistory}, smoking: ${smoking}
            , pregnancy: ${pregnancy}, date: ${getCurrentDate()}, time: ${time} `);

        navigation.navigate("Upload New Record", 
        {
            firstName: firstName,
            lastName: lastName,
            DOB: DOB,
            gender: gender,
            time: time,
            insurance: insurance,
            pcps: pcps,
            caseHistory: caseHistory,
            smoking: smoking,
            pregnancy: pregnancy,
            date:getCurrentDate(),
        });
    }   
  };

    return(
        <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={
            {
              alignItems: 'center',      
              justifyContent: 'flex-start',
              flexDirection: 'column',
              paddingHorizontal: 20,
              paddingVertical:0,      
              marginTop: 0,
              marginHorizontal:0,              
            }}>

        <View style={{marginTop: 35,marginBottom:30,width:'100%'}}>
            <Text style={styles.dateText}>Date: {getCurrentDate()}</Text>

        </View>

        <View style={{width: "100%"}}>
            <InputBoxWithLabel
                label="Time"
                value={time}
                ref={timeRef}
                onChangeText={(text) => {setTime(text)}}
                width="100%"
                keyboardType="default"
                placeholder={"e.g. 01:35 pm"}
                onSubmitEditing={() => insuranceRef.current.focus()}
                returnKeyType='next'
                autoFocus
            />

            <InputBoxWithLabel
                label="Insurance"        
                value={insurance}
                ref={insuranceRef}
                onChangeText={(text) => setInsurance(text)}
                placeholder="Please enter insurance"
                keyboardType="default"
                width='100%'
                onSubmitEditing={() => pcpsRef.current.focus()}
                returnKeyType='next'
                
            />

            <InputBoxWithLabel
                label="Primary Care Provider"        
                value={pcps}
                ref={pcpsRef}
                onChangeText={(text) => setPcPs(text)}
                placeholder="Please enter primary care provider"
                keyboardType="default"
                width='100%'
                onSubmitEditing={() => caseHistoryRef.current.focus()}
                returnKeyType='next'
                
            />

            <InputBoxWithLabel
                label = "Last Seen/Hospitalized"
                value={caseHistory}
                ref={caseHistoryRef}
                onChangeText={(text) => setCaseHistory(text)}
                placeholder="Please enter the hospitalized history"
                keyboardType="default"
                width='100%'
                
            />
            
            <View>
                <RadioMutipleChoiceCenter
                    options={smokingOption}
                    onSelectionChange={(selectSmoking) => setSmoking(selectSmoking)}
                    upperLabel="Smoking Status"
                />

                <RadioMutipleChoiceCenter
                    options={pregnancyOption}
                    onSelectionChange={(selectPregnancy) => setPregnancy(selectPregnancy)}
                    upperLabel="Pregancy Status"
                />
            </View>
        </View>

        <View style={{width:'100%',alignItems:'flex-end',marginTop:20,marginBottom:20}}>
            <TouchableOpacity 
                style={{
                height: 70,
                width: '30%',
                marginVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#395BCD',
                borderRadius:20           
                }} onPress={handleSubmit}>
                <Text style={{color:'#fff',fontSize: 25}}>Next</Text>
            </TouchableOpacity>
        </View>

        {/* reserve empty space for keyboard: */}
        <View style={{ height: 300 }} />            
            
        </ScrollView>        
    );

}
