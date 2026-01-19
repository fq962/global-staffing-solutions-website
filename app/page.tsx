import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
