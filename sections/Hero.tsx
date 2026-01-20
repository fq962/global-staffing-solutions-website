// Sección Hero de la landing page

export default function Hero() {
  return (
    <section className="h-auto lg:h-[500px] py-8 lg:py-0" style={{ backgroundColor: '#F2B705' }}>
      <div className="container mx-auto px-8 sm:px-6 md:px-8 lg:px-20 h-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lado izquierdo - Headline y Subheadline */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6" style={{ color: '#1A1A1A' }}>
              Your team abroad, built and managed by experts.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 lg:mb-0" style={{ color: '#1A1A1A' }}>
              Expand your operations without opening an office abroad. We handle recruitment, HR, compliance, and local labor regulations.
            </p>
            {/* Botón Contact Us (solo visible en móvil) */}
            <button className="lg:hidden w-full sm:w-auto px-8 py-3 bg-[#5d4602] text-white font-semibold rounded hover:bg-[#4a3801] transition-colors">
              Contact Us
            </button>
          </div>
          
          {/* Lado derecho - Formulario de contacto (oculto en móvil) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-md rounded-lg p-4" style={{ backgroundColor: '#5d4602' }}>
              <h2 className="text-xl font-bold mb-4 text-white">
                Contact Us to Learn About Your Project
              </h2>
              <form className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-white text-sm mb-1">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white text-sm mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-white text-sm mb-1">
                    Company*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="requirements" className="block text-white text-sm mb-1">
                    Tell us a bit about your requirements
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={3}
                    className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white resize-none text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-[#5d4602] font-semibold py-2 px-6 rounded hover:bg-gray-100 transition-colors text-sm"
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
