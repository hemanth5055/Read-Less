"use client";
import { createContext, useState } from "react";

export const UrlContext = createContext();

export const UrlContextProvider = ({ children }) => {
  const [url, setUrl] = useState("");

  return (
    <UrlContext.Provider value={{ url, setUrl }}>
      {children}
    </UrlContext.Provider>
  );
};
