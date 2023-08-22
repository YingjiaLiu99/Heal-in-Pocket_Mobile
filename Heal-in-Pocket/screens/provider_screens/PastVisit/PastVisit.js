import React, { useState, useContext } from "react";
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles.js';
import VisitDataContext from "../../../context/context_VisitData.js";
import PastVisitReport from './components/PastVisitReport.js';

export default function PastVisit( {navigation} ) {
    const { visitData, setVisitData } = useContext(VisitDataContext);
    const [expandedDates, setExpandedDates] = useState([]);

    const toggleExpandedDate = (date) => {
        if (expandedDates.includes(date)) {
        setExpandedDates(expandedDates.filter(expandedDate => expandedDate !== date));
        } else {
        setExpandedDates([...expandedDates, date]);
        }
    }

    return (
        <View style={styles.container}>
        <View style={{marginTop: 20,marginBottom:30,width:'100%'}}>
            <Text style={{fontSize:35, fontWeight:400}}>My Past Visits</Text>            
        </View>
    
        <FlatList
            style={{width:"100%"}}
            data={visitData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View>
                    <TouchableOpacity 
                            style={[styles.header, { backgroundColor: expandedDates.includes(item.date) ? 'white' : 'white' }]} 
                            onPress={() => toggleExpandedDate(item.date)}>
                        <Text style={styles.dateText}>{item.date}</Text>
                        <Icon name={expandedDates.includes(item.date) ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
                    </TouchableOpacity>
                    {expandedDates.includes(item.date) && item.patients.map((visit, index) => (    
                        <View key={index} style={{ alignItems: 'center' }}>
                        { (visit.published === true) &&
                        <PastVisitReport
                            key={index}
                            name={`${visit.firstName} ${visit.lastName}`}
                            time={visit.time}
                            chiefComplaint={visit.visitNote.chiefComplaint}
                            providerReport={visit.visitNote.providerReport}
                            medicalData={visit.visitNote.medicalHistory}
                            vitalData={visit.visitNote.vitalData}
                            patientInfo={visit.visitNote.patientInfo}
                            providerName = {visit.visitNote.provider_name}
                            scribeName = {visit.visitNote.scribe_name}
                            width={'100%'}
                        />
                        }
                        </View>
                    ))}
                </View>
            )}
            
        />
        </View>
    );
};