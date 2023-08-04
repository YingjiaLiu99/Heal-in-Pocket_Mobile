import React from 'react';

const RequestMessContext = React.createContext();

export default RequestMessContext;

//-----------------------------------------------------------------
//  each data in the requests array has the following schema:
// requests[i] = 
// {
//     ChiefComplaint: "....",
//     time: "3:00pm",
//     name: "James Smith",
//     tag: "New Patient",
//     visit_id: 'xxxxx',
// }
//-----------------------------------------------------------------