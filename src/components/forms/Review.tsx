"use client";
import { Button } from "../ui/button";
import { tabContext } from "./activeTabContext";
import { formContext } from "./formContextProvider";
import { useContext } from "react";
export const Review = () => {
  const { formValue } = useContext(formContext);
  const { setActiveTab } = useContext(tabContext);

  return (
    <>
      <div className="review-container h-[70%] overflow-scroll">
        {Object.entries(formValue).map(([key, value]) => (
          <div
            key={key}
            className="review-item  flex my-2 flex-row items-center justify-between rounded-lg border p-3 shadow-sm"
          >
            <strong>{key}: </strong>
            <span>{typeof value === "boolean" ? value.toString() : value}</span>
          </div>
        ))}
      </div>
      <div className=" my-2 flex justify-between">
        <Button onClick={() => setActiveTab("step3")}>Previous</Button>
        <Button onClick={() => console.log(formValue)}>Submit</Button>
      </div>
    </>
  );
};
