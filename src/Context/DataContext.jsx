import React, { useState, useEffect, createContext, useContext } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  return <DataContext.Provider>{children}</DataContext.Provider>;
}

function useData() {
  return useContext(DataContext);
}

export { DataProvider, useData };
