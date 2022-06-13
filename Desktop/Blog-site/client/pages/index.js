import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../component/Layout";
export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <h1>Home</h1>
        <Link href="/about">
          <a>about</a>
        </Link>
      </Layout>
    </div>
  );
}
