"use client";
import FormContextProvider from "../forms/formContextProvider";
import { Tab } from "../forms/Tab";

import { ActiveTabContextProvider } from "../forms/activeTabContext";

export const Main = () => {
  return (
    <FormContextProvider>
      <ActiveTabContextProvider>
        <div className="h-[80vh] flex w-[96%] md:w-[40%] mx-auto my-12 justify-center   ">
          <Tab></Tab>
        </div>
      </ActiveTabContextProvider>
    </FormContextProvider>
  );
};
