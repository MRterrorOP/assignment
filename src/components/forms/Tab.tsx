import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabContext } from "./activeTabContext";
import { useContext } from "react";
import { PersonalDetails } from "./PersonalDetails";
import { AddressDetails } from "./AddressDetails";
import { Preferences } from "./Preferences";
import { Review } from "./Review";
export function Tab() {
  const { activeTab, setActiveTab } = useContext(tabContext);
  return (
    <Tabs
      defaultValue="step1"
      value={activeTab}
      onValueChange={(value) =>
        setActiveTab(value as "step1" | "step2" | "step3" | "step4")
      }
    >
      {/* Navigation (Stepper) */}
      <TabsList>
        <TabsTrigger value="step1"> Personal Info</TabsTrigger>
        <TabsTrigger value="step2"> Address</TabsTrigger>
        <TabsTrigger value="step3"> Preferences</TabsTrigger>
        <TabsTrigger value="step4"> Review</TabsTrigger>
      </TabsList>

      {/* Steps (Form Pages) */}
      <TabsContent className="flex justify-center flex-col" value="step1">
        <h2 className="my-4">Personal Information</h2>
        <PersonalDetails />
      </TabsContent>

      <TabsContent className="flex justify-center flex-col" value="step2">
        <h2 className="my-4">Address Details</h2>
        <AddressDetails></AddressDetails>
      </TabsContent>

      <TabsContent className="flex justify-center flex-col" value="step3">
        <h2 className="my-4">Preferences</h2>
        <Preferences></Preferences>
      </TabsContent>

      <TabsContent
        className="flex  flex-col overscroll-auto h-[100%]"
        value="step4"
      >
        <h2 className="my-4">Review & Submit</h2>
        <Review></Review>
      </TabsContent>
    </Tabs>
  );
}
