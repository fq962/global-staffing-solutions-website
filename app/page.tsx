import Hero from '@/sections/Hero';
import About from '@/sections/About';
import ChooseUs from '@/sections/ChooseUs';
import Services from '@/sections/Services';
import HowItWorks from '@/sections/HowItWorks';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <ChooseUs />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}
