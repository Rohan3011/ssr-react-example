import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.post.findMany();
    return Response.json(posts);
  } catch (err) {
    return new Response("Something went wrong!", {
      status: 400,
    });
  }
}
