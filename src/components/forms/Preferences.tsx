"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formContext } from "./formContextProvider";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useContext } from "react";
import { tabContext } from "./activeTabContext";

const formSchema = z.object({
  notification: z.boolean().default(true),
  newsLetter: z.boolean().default(true),
  emailSubcription: z.boolean().default(true),
});

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

export function Preferences() {
  const { setActiveTab } = useContext(tabContext);
  const { formValue, setFormValue } = useContext(formContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notification: formValue?.notification ?? true,
      newsLetter: formValue?.newsLetter ?? true,
      emailSubcription: formValue?.emailSubcription ?? true,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
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
    setActiveTab("step4");
  };

  return (
    <Form {...form}>
      <div>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="emailSubcription"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5" title="Email subcription">
                  <FormLabel>Marketing emails</FormLabel>
                  <FormDescription>
                    Receive emails about new products, features, and more.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newsLetter"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5" title="News letter">
                  <FormLabel>News letter</FormLabel>
                  <FormDescription>
                    Recieve News letter weekly to stay updated.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="notification"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5" title="Notification">
                  <FormLabel>Notification</FormLabel>
                  <FormDescription>Recieve notification.</FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
      <div className="flex justify-between ">
        <Button className="my-2" onClick={() => setActiveTab("step2")}>
          Previous
        </Button>
        <Button className="my-2" onClick={form.handleSubmit(onSubmit)}>
          Next
        </Button>
      </div>
    </Form>
  );
}
