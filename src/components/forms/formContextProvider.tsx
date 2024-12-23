"use client";
import { createContext, useState } from "react";

interface formValue {
  username?: string;
  email?: string;
  gender?: string;
  floor?: string;
  streetName?: string;
  postalCode?: string;
  city?: string;
  state?: string;
  country?: string;
  notification?: boolean;
  newsLetter?: boolean;
  emailSubcription?: boolean;
}

interface FormContextType {
  formValue: formValue;
  setFormValue: React.Dispatch<React.SetStateAction<formValue>>;
}

export const formContext = createContext<FormContextType>({
  formValue: {
    username: "",
    email: "",
    gender: "",
    floor: "",
    streetName: "",
    postalCode: "",
    city: "",
    state: "",
    country: "",
    notification: false,
    newsLetter: false,
    emailSubcription: false,
  },
  setFormValue: () => {},
});

const FormContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [formValue, setFormValue] = useState<formValue>({
    username: "",
    email: "",
    gender: "",
    floor: "",
    streetName: "",
    postalCode: "",
    city: "",
    state: "",
    country: "",
    notification: true,
    newsLetter: true,
    emailSubcription: true,
  });

  return (
    <formContext.Provider value={{ formValue, setFormValue }}>
      {children}
    </formContext.Provider>
  );
};

export default FormContextProvider;
