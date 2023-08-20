import MyForm from "@/components/my-form";
import Posts from "@/components/posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <Posts />
      <MyForm />
    </main>
  );
}
