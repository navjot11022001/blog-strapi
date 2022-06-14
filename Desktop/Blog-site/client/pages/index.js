import Link from "next/link";
import Layout from "@/components/Layout";
export default function Home() {
  return (
    <div>
      <Layout>
        <h1>Home</h1>
        <Link href="/about">
          <a>about</a>
        </Link>
      </Layout>
    </div>
  );
}
