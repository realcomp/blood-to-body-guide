import Hero from "@/components/Hero";
import WhyItMatters from "@/components/WhyItMatters";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SampleResponses from "@/components/SampleResponses";
import WhoItsFor from "@/components/WhoItsFor";
import FAQ from "@/components/FAQ";
import Limitations from "@/components/Limitations";
import Contact from "@/components/Contact";
import AboutCreator from "@/components/AboutCreator";
import StoryBehindIt from "@/components/StoryBehindIt";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <WhyItMatters />
      <Features />
      <HowItWorks />
      <SampleResponses />
      <WhoItsFor />
      <FAQ />
      <Limitations />
      <AboutCreator />
      <StoryBehindIt />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
