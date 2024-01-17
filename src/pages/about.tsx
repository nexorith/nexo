import { PageHeader } from "@/components/layout/PageHeader";
import Head from "next/head";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Xavier Entrepreneurship Bootcamp</title>
      </Head>

      <Navbar />

      <PageHeader title="About" />

      <Footer />
    </>
  );
};

export default About;
