import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabContext } from "./activeTabContext";
import { useContext } from "react";
import { PersonalDetails } from "./PersonalDetails";
import { AddressDetails } from "./AddressDetails";
import { Preferences } from "./Preferences";
import { Review } from "./Review";
import { motion, AnimatePresence } from "framer-motion";

export function Tab() {
  const { activeTab } = useContext(tabContext);
  return (
    <Tabs defaultValue="step1" value={activeTab}>
      {/* Navigation (Stepper) */}
      <TabsList>
        <TabsTrigger value="step1"> Personal Info</TabsTrigger>
        <TabsTrigger value="step2"> Address</TabsTrigger>
        <TabsTrigger value="step3"> Preferences</TabsTrigger>
        <TabsTrigger value="step4"> Review</TabsTrigger>
      </TabsList>

      {/* Steps (Form Pages) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <TabsContent
            className="flex px-4 justify-center flex-col"
            value="step1"
          >
            <h2 className="my-4">Personal Information</h2>
            <PersonalDetails />
          </TabsContent>

          <TabsContent
            className="flex px-4 justify-center flex-col"
            value="step2"
          >
            <h2 className="my-4">Address Details</h2>
            <AddressDetails></AddressDetails>
          </TabsContent>

          <TabsContent
            className="flex px-4 justify-center flex-col"
            value="step3"
          >
            <h2 className="my-4">Preferences</h2>
            <Preferences></Preferences>
          </TabsContent>

          <TabsContent className="h-[60vh] px-4" value="step4">
            <h2 className="my-4">Review & Submit</h2>
            <Review></Review>
          </TabsContent>
        </motion.div>
      </AnimatePresence>
    </Tabs>
  );
}
