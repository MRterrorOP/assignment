"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formContext } from "./formContextProvider";
import { useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Enter valid email address" }),
  gender: z.enum(["male", "female", "other"], {
    message: "choose a valid option",
  }),
});

export function PersonalDetails() {
  const { formValue, setFormValue } = useContext(formContext);
  const { setActiveTab } = useContext(tabContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: formValue?.username || "",
      email: formValue?.email || "",
      gender: (formValue?.gender as "male") || "male", // Default gender
    },
  });

  const { reset } = form;

  //fetch Data from backend.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("api/save-form-data", {
          method: "GET",
        });
        try {
          const data = await res.json();
          setFormValue((prev) => ({ ...prev, ...data }));
          reset({
            username: data.username || "",
            email: data.email || "",
            gender: data.gender || "male", // Default gender
          });
        } catch {
          console.log("errror");
        }

        // Use reset to update form values
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setFormValue, reset]);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setFormValue((prev) => ({ ...prev, ...values }));
    const response = await fetch("api/save-form-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    try {
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setActiveTab("step2");
    console.log("step2");
  }
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter Username"
                title="User Name"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter email"
                title="Email Address"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="gender"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Gender</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Gender" title="User Name" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="male">male</SelectItem>
                <SelectItem value="female">female</SelectItem>
                <SelectItem value="other">other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button className="my-2" onClick={form.handleSubmit(onSubmit)}>
        Next
      </Button>
    </Form>
  );
}
