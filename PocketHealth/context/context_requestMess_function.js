import React, { useState } from 'react';
import RequestMessContext from './context_requestMess';

export const RequestMessContextProvider = ({ children }) => {
    const [requests, setRequests] = useState([]);

    return (
        <RequestMessContext.Provider value={{ requests, setRequests }}>
            {children}
        </RequestMessContext.Provider>
    );
};