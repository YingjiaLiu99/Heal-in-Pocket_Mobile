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
// import the context:
import VisitDataContext from '../../../context/context_VisitData';
import RequestMessContext from '../../../context/context_requestMess';

export default function RecordPatientInfo({ route, navigation }) {

    const { firstName, lastName, DOB, genderSelection } = route.params;
    const [insurance, setInsurance] = useState('');
    const [pcps, setPcPs] = useState('');
    const [caseHistory, setCaseHistory] = useState('');
    const [smoking, setSmoking] = useState('');
    const [pregnancy, setPregnancy] = useState('');

    const insuranceRef = useRef(null);
    const pcpsRef = useRef(null);
    const caseHistoryRef = useRef(null);
    const smokingRef = useRef(null);
    const pregnancyRef = useRef(null);

    const smokingOption = [
        { value: 'yes', choiceLabel: 'Yes' },
        { value: 'no', choiceLabel: 'No' },
        { value: 'na', choiceLabel: 'NA' },
    ];

    const pregnancyStatus = [
        { value: 'yes', choiceLabel: 'Yes' },
        { value: 'no', choiceLabel: 'No' },
        { value: 'na', choiceLabel: 'NA' },
    ];


    // Backend api call GOES INSIDE
    const handleSubmit = () => {
        // Only check if insurance is valid
        if (typeof insurance !== "string") {
            setErrorMessage('Please enter a valid name');
        }
        else {
            console.log(`First Name: ${firstName}, Last Name: ${lastName}, DOB: ${DOB}, Sex: ${genderSelection}
            , Insurance: ${insurance}, PcPs: ${pcps}, caseHistory: ${caseHistory}, smoking: ${smoking}, pregnancy: ${pregnancy}`);

        navigation.navigate("Upload New Record", 
        {
            firstName: firstName,
            lastName: lastName,
            DOB: DOB,
            gender: genderSelection,
            insurance: insurance,
            pcps: pcps,
            caseHistory: caseHistory,
            smoking: smoking,
            pregnancy: pregnancy
        });
    }   
  };


   


    return(
        <ScrollView>
            <KeyboardAwareScrollView contentContainerStyle={styles.container}>

                <View style={{marginTop: 35,marginBottom:30,width:'100%'}}>

                </View>
                {/* <Text>Enter Patient Information To Set Up Account</Text> */}

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
                    autoFocus
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
                    autoFocus
                />

                <InputBoxWithLabel
                    label = "Last Seen/Hospitalized"
                    value={caseHistory}
                    ref={caseHistoryRef}
                    onChangeText={(text) => setCaseHistory(text)}
                    placeholder="Please enter the hospitalized history"
                    keyboardType="default"
                    width='100%'
                    onSubmitEditing={() => smokingRef.current.focus()}
                    returnKeyType="next"
                    autoFocus
                />
                <View>
                    <RadioMutipleChoiceCenter
                        options={smokingOption}
                        onSelectionChange={(selectSmoking) => setSmoking(selectSmoking)}
                        upperLabel="Smoking Status"
                    />
                </View>

                <View>
                    <RadioMutipleChoiceCenter
                        options={pregnancyStatus}
                        onSelectionChange={(selectPregnancy) => setSmoking(selectPregnancy)}
                        upperLabel="Pregancy Status"
                    />
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

            </KeyboardAwareScrollView>
            
        </ScrollView>
        
    );

}
