"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formContext } from "./formContextProvider";
import { useContext } from "react";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { tabContext } from "./activeTabContext";

const formSchema = z.object({
  floor: z.string().min(3, { message: "enter plot no." }),
  streetName: z.string().min(2, {
    message: "Enter a street name",
  }),
  city: z.string().min(3, { message: "Enter city name" }),
  postalCode: z
    .string()
    .length(6, { message: "Enter a valid 6-digit postal code" })
    .regex(/^[1-9][0-9]{5}$/, { message: "Enter a valid Indian postal code" }),
  state: z.string().min(2, { message: "Please enter your state" }),
  country: z.string().min(2, { message: "Please enter your country" }),
});

export const AddressDetails = () => {
  const { formValue, setFormValue } = useContext(formContext);
  const { setActiveTab } = useContext(tabContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      floor: formValue?.floor || "",
      streetName: formValue?.streetName || "",
      postalCode: formValue?.postalCode || "",
      city: formValue?.city || "",
      state: formValue?.state || "",
      country: formValue?.country || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormValue((prev) => ({ ...prev, ...values }));
    setActiveTab("step3");
  }

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="floor"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Floor or Plot</FormLabel>
            <FormControl>
              <Input placeholder="Enter street name" {...field}></Input>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
      <FormField
        control={form.control}
        name="streetName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Street name</FormLabel>
            <FormControl>
              <Input placeholder="Enter street name" {...field}></Input>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
      <FormField
        control={form.control}
        name="postalCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Postal code</FormLabel>
            <FormControl>
              <Input placeholder="Postal code" {...field}></Input>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
      <FormField
        control={form.control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>City name</FormLabel>
            <FormControl>
              <Input placeholder="city name" {...field}></Input>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
      <FormField
        control={form.control}
        name="state"
        render={({ field }) => (
          <FormItem>
            <FormLabel>State name</FormLabel>
            <FormControl>
              <Input placeholder="state name" {...field}></Input>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Coutry name</FormLabel>
            <FormControl>
              <Input placeholder="country name" {...field}></Input>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
      <div className="flex justify-between ">
        <Button className="my-2" onClick={() => setActiveTab("step1")}>
          Previous
        </Button>
        <Button className="my-2" onClick={form.handleSubmit(onSubmit)}>
          Next
        </Button>
      </div>
    </Form>
  );
};
