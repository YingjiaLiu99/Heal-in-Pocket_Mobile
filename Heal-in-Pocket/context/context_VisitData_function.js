import React, { useState } from 'react';
import VisitDataContext from './context_VisitData';

export const VisitDataContextProvider = ({ children }) => {
  const [visitData, setVisitData] = useState([]);

  return (
    <VisitDataContext.Provider value={{ visitData, setVisitData }}>
      {children}
    </VisitDataContext.Provider>
  );
};