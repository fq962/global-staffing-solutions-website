// Sección HowItWorks de la landing page

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Discovery Call",
      description: "We start by understanding your company's needs, goals, and ideal team structure to design a customized staffing plan."
    },
    {
      number: "2",
      title: "Candidate Selection",
      description: "Using more than 50 professional assessment tools—including psychometric, aptitude, and DISC tests—we identify and present top candidates that fit your technical and cultural requirements."
    },
    {
      number: "3",
      title: "Team Integration",
      description: "Once approved, your team is onboarded under your direction while we handle all administrative, HR, and compliance processes."
    },
    {
      number: "4",
      title: "Ongoing Support",
      description: "We continuously manage payroll, performance, and compliance, ensuring your team stays productive, motivated, and aligned with your business objectives."
    }
  ];

  return (
    <section className="h-auto py-8 lg:py-12" style={{ backgroundColor: '#fff' }}>
      <div className="container mx-auto px-8 sm:px-6 md:px-8 lg:px-20">
        {/* Título y descripción principal */}
        <div className="w-full mb-8 lg:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 lg:mb-6" style={{ color: '#1A1A1A' }}>
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-lg lg:text-lg font-normal max-w-4xl mx-auto" style={{ color: '#1A1A1A' }}>
            We make it simple to build and manage your nearshore team through a clear, structured process that ensures quality, transparency, and efficiency every step of the way.
          </p>
        </div>
        
        {/* Grid de pasos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              {/* Número del paso */}
              <div className="mb-4">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ color: '#F2B705' }}>
                  {step.number}
                </span>
              </div>
              
              {/* Título del paso */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 lg:mb-4" style={{ color: '#1A1A1A' }}>
                {step.title}
              </h3>
              
              {/* Descripción del paso */}
              <p className="text-base sm:text-lg lg:text-lg font-normal" style={{ color: '#1A1A1A' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
