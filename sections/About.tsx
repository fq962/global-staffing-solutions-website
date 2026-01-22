// Sección About de la landing page
'use client';
import Image from 'next/image';

export default function About() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="h-auto lg:h-[500px] py-8 lg:py-0 overflow-hidden" style={{ backgroundColor: '#E0E0E0' }}>
      <div className="container mx-auto px-8 sm:px-6 md:px-8 h-full flex items-center overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Lado izquierdo - Imagen */}
          <div className="w-full flex items-center justify-center order-2 lg:order-1">
            <div className="w-full h-64 sm:h-80 lg:h-full lg:max-h-[500px] rounded-lg overflow-hidden relative">
              <Image 
                src="/global-map.png" 
                alt="Global Staffing Solutions - Map of Americas" 
                width={800}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Lado derecho - Contenido de texto */}
          <div className="flex flex-col justify-center items-start w-full h-full overflow-hidden order-1 lg:order-2">
            <div className="w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 lg:mb-6" style={{ color: '#1A1A1A' }}>
              About Us
              </h2>
              <div className="space-y-3 lg:space-y-2 text-base sm:text-lg md:text-lg lg:text-sm font-normal" style={{ color: '#1A1A1A' }}>
              <p className="word-wrap:break-word">
                At Global Staffing Solutions, we help businesses of all sizes build and manage their outsourced teams, regardless of the industry. Whether you need salesmen, customer support, IT specialists, recruiters, or back-office professionals, we design staffing solutions that let your company grow efficiently while keeping full operational control.
              </p>
              <p className="word-wrap:break-  word">
                Global Staffing Solutions is a U.S. and Latin America–based company. We handle all contracts and communication through our U.S. entity, while our teams across Latin America manage recruitment, coordination, and day-to-day support for your nearshore staff.
              </p>
              <p className="word-wrap:break-word">
                Our company operates with the backing of Multivex, a leader in human capital solutions with more than 40 years of experience and operations in 19 countries across Latin America.
              </p>
              <p className="word-wrap:break-word">
                Our mission is to provide qualified, reliable, and high-performing professionals who integrate seamlessly into your organization, so you can achieve more with less complexity.
              </p>
              </div>
              <button
                onClick={scrollToContact}
                className="mt-6 bg-[#1E3A8A] text-white font-semibold py-3 px-8 rounded hover:bg-[#132658] transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
