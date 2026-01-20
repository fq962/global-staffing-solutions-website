// Sección Contact de la landing page

export default function Contact() {
  return (
    <section className="h-auto lg:h-[600px] py-8 lg:py-0" style={{ backgroundColor: '#f0b505' }}>
      <div className="container mx-auto px-8 sm:px-6 md:px-8 lg:px-20 h-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8">
          {/* Lado izquierdo - Información de contacto */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6" style={{ color: '#1A1A1A' }}>
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 lg:mb-6" style={{ color: '#1A1A1A' }}>
              Ready to expand your team? Contact us today to discuss your staffing needs.
            </p>
            {/* Apartado del número de teléfono */}
            <div className="mb-6 lg:mb-0">
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold mb-2" style={{ color: '#1A1A1A' }}>
                Phone
              </h3>
              <a 
                href="tel:+1234567890" 
                className="text-base sm:text-lg md:text-xl lg:text-xl font-medium hover:underline" 
                style={{ color: '#1A1A1A' }}
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
          
          {/* Lado derecho - Formulario de contacto (sin card) */}
          <div className="flex items-center justify-center lg:items-center py-4 lg:py-0">
            <div className="w-full max-w-md">
              <h2 className="text-xl font-bold mb-4" style={{ color: '#1A1A1A' }}>
                Contact Us to Learn About Your Project
              </h2>
              <form className="space-y-3">
                <div>
                  <label htmlFor="contact-name" className="block text-sm mb-1 font-medium" style={{ color: '#1A1A1A' }}>
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    className="w-full px-3 py-2 rounded border-2 border-[#5d4602] bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#5d4602] text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm mb-1 font-medium" style={{ color: '#1A1A1A' }}>
                    Email*
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    className="w-full px-3 py-2 rounded border-2 border-[#5d4602] bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#5d4602] text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm mb-1 font-medium" style={{ color: '#1A1A1A' }}>
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 rounded border-2 border-[#5d4602] bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#5d4602] text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-sm mb-1 font-medium" style={{ color: '#1A1A1A' }}>
                    Company*
                  </label>
                  <input
                    type="text"
                    id="contact-company"
                    name="company"
                    required
                    className="w-full px-3 py-2 rounded border-2 border-[#5d4602] bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#5d4602] text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-requirements" className="block text-sm mb-1 font-medium" style={{ color: '#1A1A1A' }}>
                    Tell us a bit about your requirements
                  </label>
                  <textarea
                    id="contact-requirements"
                    name="requirements"
                    rows={3}
                    className="w-full px-3 py-2 rounded border-2 border-[#5d4602] bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#5d4602] resize-none text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#5d4602] text-white font-semibold py-2 px-6 rounded hover:bg-[#4a3801] transition-colors text-sm"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
