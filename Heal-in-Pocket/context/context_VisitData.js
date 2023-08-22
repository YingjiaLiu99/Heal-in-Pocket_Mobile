import React from 'react';

const VisitDataContext = React.createContext();

export default VisitDataContext;

//-------------------------------------------------------------------------------------------------------------------------------------------//
//                                          each data in the VisitData array has the following schema:
// visitdata[i] = 
// {
//     date: "July, 06, 2022",
//     patients: [
//         { firstName: "James", lastName:'Doe', DOB: '09/23/1977', site: 'Street Corner Care', DOS: '11/12/2022', time: "10:00 am", 
//             visitNote: {
//             patientInfo: [
//                 {label:'Name', value:`${firstName} ${lastName}`},
//                 {label:'DOB', value:'07/22/1974'},
//                 {label:'location', value:'Street Corner Care'},
//                 {label:'DOS', value:'5:00 pm'},
//             ],
//             chiefComplaint: 'Patient feels dizzy after diarrhea',
//             providerReport: [
//                 {   
//                     label: 'Subjective', 
//                     value: 'Left hand wound leaking pus'
//                 },
//                 {   
//                     label: 'Objective', 
//                     value: 'Left hand wound infected, cleaned wound with saline and applied antibiotic ointment.'
//                 },
//                 {   
//                     label: 'Assessment / Plan', 
//                     value: 'Use antibiotic ointment twice a day. Come back to street corner care next week.'
//                 },
//             ],
//             medicalHistory: [
//                 {   
//                     label: 'Chronic Illness', 
//                     value: ' high blood pressure, diabetes'
//                 },
//                 {   
//                     label: 'Current Medication', 
//                     value: 'Metoprolol'
//                 },
//                 {
//                     label: 'Allergies', 
//                     value: 'Sulfa'
//                 }
//             ],
//             vitalData: [
//                 {label: 'Temp', value: '99', unit: 'F'},
//                 {label: 'Pulse', value: '70', unit:'bpm'},
//                 {label: 'Oxygen', value: '98', unit:'%'},
//                 {label: 'BG', value: '110', unit:'mg/dl'},
//                 {label: 'Systolic BP', value: '120', unit:'mmHg'},
//                 {label: 'Diastolic BP', value: '80', unit:'mmHg'},
//             ],
//             },
//             visit_id: 'xxxxx',
//             published: 'false',
//             provider_name: 'xxxx',
//             scribe_name: 'xxxx'
//         },
//     ],
// };
//-------------------------------------------------------------------------------------------------------------------------------------------//
