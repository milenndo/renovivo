import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import WhyUs from "@/components/home/WhyUs";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Renovivo | Ремонтни услуги в София - Every Detail Matters</title>
        <meta 
          name="description" 
          content="Renovivo предлага професионални ремонтни услуги в София - цялостен ремонт, бани, кухни, боядисване. Над 10 години опит. Безплатна консултация!" 
        />
        <meta name="keywords" content="ремонт, София, баня, кухня, цялостен ремонт, боядисване, renovivo" />
        <link rel="canonical" href="https://renovivo.bg" />
      </Helmet>
      <Layout>
        <Hero />
        <Services />
        <About />
        <Projects />
        <WhyUs />
        <CTA />
      </Layout>
    </>
  );
};

export default Index;
