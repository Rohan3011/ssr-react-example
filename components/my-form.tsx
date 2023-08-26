"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  title: z.string(),
  content: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
  published: z.boolean(),
  date: z.date().optional(),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    // @ts-ignore
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "My Awesome Blog Post",
      content: "This is the content of my blog post...",
      author: "John Doe",
      tags: ["technology", "programming"],
      published: true,
      date: new Date("2023-08-20"),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-md"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-baseline gap-4 ">
              <FormLabel>Title</FormLabel>
              <div className="col-span-3 space-y-4">
                <FormControl className="w-full">
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-baseline gap-4">
              <FormLabel>Author</FormLabel>
              <div className="col-span-3 space-y-4">
                <FormControl className="w-full">
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-baseline gap-4">
              <FormLabel>Content</FormLabel>
              <div className="col-span-3 space-y-4">
                <FormControl className="w-full">
                  <Textarea placeholder="Type your message here." />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end items-center gap-4">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
