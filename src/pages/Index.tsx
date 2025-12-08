import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import WhyUs from "@/components/home/WhyUs";
import CTA from "@/components/home/CTA";

const Index = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Начало",
      "item": "https://renovivo.bg"
    }]
  };

  return (
    <>
      <Helmet>
        <title>Renovivo | Ремонти София - Цялостен ремонт на апартаменти, бани, кухни</title>
        <meta 
          name="description" 
          content="Renovivo - водеща фирма за ремонти в София. Професионален цялостен ремонт на апартаменти, бани, кухни, боядисване. 10+ години опит, 500+ проекта. ☎️ Безплатен оглед!" 
        />
        <meta name="keywords" content="ремонт София, ремонти апартаменти София, ремонт баня София, ремонт кухня София, боядисване София, цялостен ремонт, строителни услуги София, майстор София, ремонтна фирма София" />
        <link rel="canonical" href="https://renovivo.bg" />
        <meta property="og:title" content="Renovivo | Професионални ремонти в София" />
        <meta property="og:description" content="Водеща фирма за ремонти в София. Цялостен ремонт, бани, кухни. 500+ завършени проекта." />
        <meta property="og:url" content="https://renovivo.bg" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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
