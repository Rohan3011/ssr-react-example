import prisma from "@/lib/prisma";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { zodFetch } from "@/lib/zod-fetch";
import { formSchema } from "@/schemas/form-schema";
import { z } from "zod";

export default async function PostList() {
  // const posts = await prisma.post.findMany();
  let posts;

  try {
    posts = await zodFetch(
      z.array(
        z.object({
          id: z.string(),
          slug: z.string(),
          title: z.string(),
          body: z.string(),
          authorId: z.string(),
        })
      ),
      "http://localhost:3000/api/posts"
    );
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.cause);
    }
    return null;
  }

  return (
    <div className="flex flex-col p-8">
      <h2 className="text-2xl font-bold mb-4">My Posts</h2>
      <div className="w-full flex flex-wrap gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="w-[350px]">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.authorId}</CardDescription>
            </CardHeader>
            <CardContent>{post.body}</CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Read more</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
