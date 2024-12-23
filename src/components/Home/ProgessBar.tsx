"use client";
import { Progress } from "@/components/ui/progress";
import { formContext } from "../forms/formContextProvider";
import { useContext, useEffect, useState, useMemo } from "react";

export function ProgessBar() {
  const { formValue } = useContext(formContext);
  const [progess, setProgess] = useState(0);

  // Memoize the entries of formValue
  const formEntries = useMemo(() => Object.entries(formValue), [formValue]);

  useEffect(() => {
    let filledFormValue = 0;
    formEntries.forEach(([key, value]) => {
      if (value) {
        filledFormValue++;
      }
    });
    setProgess((filledFormValue / 12) * 100);
  }, [formEntries]);

  return (
    <Progress className="my-2 mx-auto w-[96%] md:w-[40%]" value={progess} />
  );
}
