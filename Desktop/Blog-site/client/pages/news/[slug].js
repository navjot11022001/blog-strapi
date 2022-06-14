import { useRouter } from "next/router";
import React from "react";
import Layout from "@/components/Layout";

const singleNews = () => {
  const router = useRouter();
  return (
    <Layout>
      <h2>router qury {router.query.slug}</h2>
    </Layout>
  );
};

export default [slug];
