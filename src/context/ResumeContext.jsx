import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useReactToPrint } from "react-to-print";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const initialState = {
    personalInfo: [],
    workExperience: [],
    education: [],
    Skills: [],
  };

  const [resumeData, setResumeData] = useState(initialState);
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const updateSection = (section, data) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

 

  const values = {
    resumeData,
    updateSection,
    setResumeData,
    reactToPrintFn,
    contentRef,
  };
  return (
    <ResumeContext.Provider value={values}>{children}</ResumeContext.Provider>
  );
}

export function useResumeContext() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResumeContext must be used within a ResumeProvider");
  }
  return context;
}
