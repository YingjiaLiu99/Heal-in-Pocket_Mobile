import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles.js';
import PastVisitReport from './components/PastVisitReport.js';

export default function PastVisit( {navigation} ) {

    const [clickDate, setClickedDate] = useState(null);
    const [clickPeople, setClickedPeople] = useState(null);

    const [isDateExpanded, setIsDateExpanded] = useState(false);
    const [isPeopleExpanded, setIsPeopleExpanded] = useState(false);

    const handleDate = (date) => {
        setClickedDate(date);
        setClickedPeople(null);
        setIsDateExpanded(!isDateExpanded);
    };

    const handlePeople = (people) => {
        setClickedPeople(people);
        setIsPeopleExpanded(!isPeopleExpanded);
    };


    const providerReport = [
        {   
            label: 'Reason For consultation', 
            value: 'Left hand wound leaking pus'
        },
        {   
            label: 'Assessment', 
            value: 'Left hand wound infected, cleaned wound with saline and applied antibiotic ointment. Antibiotic ointment samples given to patients.'
        },
        {   
            label: 'Future Plan', 
            value: 'Use antibiotic ointment twice a day. Come back to street corner care next week.'
        },
    ];

    const medicalData = [
        {   
            label: 'Chronic Illness', 
            value: ' high blood pressure, diabetes'
        },
        {   
            label: 'Current Medication', 
            value: 'Metoprolol'
        },
        {
            label: 'Allergies', 
            value: 'Sulfa'
        },        
    ];

    const vitalData = [
        // {label: 'Pain Level(0~10,0-no pain,10-worst pain)', value: '8'},
        {label: 'Temperature', value: '99'},
        {label: 'Blood Pressure', value: '120/80'},
        {label: 'Pulse', value: '70'},
        {label: 'Oxygen', value: '98'},
        {label: 'Glucose', value: '110'},        
    ];

    const FullData = [
        {
            date: "Nov, 12, 2022",
            people: [
                { name: "James Doe", time: "10:00 am"},
                { name: "Joey Price", time: "12:00 pm"},
                { name: "Madison Powers", time: "4:00 pm"},
            ],
            providerReport: providerReport,
            medicalData: medicalData,
            vitalData: vitalData,

        },   

        {
            date: "Nov, 11, 2022",
            people: [
                { name: "James Zhang", time: "9:00 am"}, 
                { name: "Bill B", time: "5:00 pm"},
            ],
            providerReport: providerReport,
            medicalData: medicalData,
            vitalData: vitalData,
        }
    ];

    return(
        <View style={styles.container}>
            <View style={{marginTop: 20,marginBottom:30,width:'100%'}}>
                <Text style={{fontSize:35, fontWeight:400}}>My Past Visits</Text>            
            </View>

        <FlatList
            style={{ width: "100%" }}
            data={FullData}
            keyExtractor={(item) => item.date}
            renderItem={({ item }) => (
                <View>
                    <TouchableOpacity
                        style={styles.header}
                        onPress={() => handleDate(item.date)}>
                        <Text
                            style={[
                                styles.dateText,
                            ]}>
                            {item.date}
                        </Text>
                        <Icon
                            name={clickDate === item.date && isDateExpanded ? 'chevron-up' : 'chevron-down'} size={24} color="black"
                        />
                    </TouchableOpacity>


                    {clickDate === item.date && isDateExpanded && ( 
                        <View>
                            <FlatList
                                data={item.people}
                                //keyExtractor={(people) => people.name}
                                renderItem={({ item1 }) => (
                                    //<View>
                                        <TouchableOpacity
                                            style={styles.header}
                                            onPress={() => handlePeople(item1)}>
                                            <Text 
                                                style={[
                                                    styles.personText,
                                                ]}>
                                                {item1.name} - {item1.time}
                                            </Text>
                                            <Icon 
                                                name={clickPeople === item1 && isPeopleExpanded ? "chevron-up" : "chevron-down"} size={20} color="black"
                                            />
                                            {/* {clickPeople === item1 && isPeopleExpanded && (
                                                <FlatList
                                                    style={{width:"100%"}}
                                                    data={FullData}
                                                    keyExtractor={ (item, index) => 'key' + index }
                                                    renderItem={({item}) => <PastVisitReport width={"95%"} {...item} />} 
                                                />  
                                            )} */}

                                            {/* {clickPerson === item1 && isPersonExpanded && (
                                                <PastVisitReport
                                                    name={item1.name}
                                                    time={item1.time}
                                                    providerReport={item.providerReport}
                                                    medicalData={item.medicalData}
                                                    vitalData={item.vitalData}
                                                    width={'95%'}
                                                />
                                            )} */}
                                        </TouchableOpacity>

                                        
                                )}
                                
                            /> 
                        </View>
                            
                    )} 

                </View>
            )}
        />
        
    </View>
    );
};