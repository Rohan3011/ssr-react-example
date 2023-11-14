"use server";

import { PostType } from "@/components/my-form";
import prisma from "@/lib/prisma";
import { Post } from "@prisma/client";

export async function addPost(post: Omit<Post, "id">) {
  try {
    const result = await prisma.post.create({
      data: post,
    });
    return result;
  } catch (err) {
    console.error(err);
  }
}
