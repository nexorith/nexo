import Head from "next/head";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { JobStagesSection } from "@/components/home/JobStagesSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CourseCategories } from "@/components/home/CourseCategories";
import { Testimonials } from "@/components/home/Testimonials";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Ourclients } from "@/components/home/Ourclients";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nexorith Nepal</title>
        <meta name="description" content="Nexorith Nepal is a leading digital marketing and software company, providing top-notch services to clients in nepal." />
        <meta name="keywords" content="digital marketing, software development, web development, SEO, social media marketing, technology solutions" />
        <meta name="author" content="Nexorith Nepal" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="Nexorith Nepal - Digital Marketing & Software Company" />
        <meta property="og:description" content="Nexorith Nepal is a leading digital marketing and software company, providing top-notch services to clients worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nexorithnepal.com/" />
        <meta property="og:image" content="https://www.nexorithnepal.com/" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nexorith Nepal - Digital Marketing & Software Company" />
        <meta name="twitter:description" content="Nexorith Nepal is a leading digital marketing and software company, providing top-notch services to clients worldwide." />
        <meta name="twitter:image" content="https://www.nexorithnepal.com" />

        {/* Favicon */}
       

        <link rel="icon" href="/nexorith.png" />
      </Head>

      <Navbar />

      <HeroSection />
      <AboutSection />
      <JobStagesSection />
      <CourseCategories />
      <FeaturesSection />
      {/* <Ourclients/> */}
      <Testimonials />

      <Footer />
    </>
  );
}
