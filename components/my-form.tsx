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
import { user } from "@/lib/temp";
import { Post } from "@prisma/client";
import { addPost } from "@/app/_actions";
import { revalidatePath } from "next/cache";
import { formSchema } from "@/schemas/form-schema";

export type PostType = z.infer<typeof formSchema>;

export function PostForm() {
  const form = useForm<PostType>({
    // @ts-ignore
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
      authorId: user.id,
      tags: [],
      published: true,
      date: new Date("2023-08-20"),
    },
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const data = {
      title: values.title,
      body: values.body,
      slug: slugify(values.title),
      authorId: values.authorId,
    };

    const res = await addPost(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 w-full max-w-md p-4 rounded"
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
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
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
        /> */}

        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-baseline gap-4">
              <FormLabel>Body</FormLabel>
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

function slugify(title: string) {
  return title
    .toLowerCase() // Convert the title to lowercase letters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove non-alphanumeric characters
    .replace(/-+$/g, ""); // Remove trailing hyphens
}
