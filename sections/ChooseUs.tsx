// Sección ChooseUs de la landing page

export default function ChooseUs() {
  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "End-to-End Management",
      description: "We handle every step, from recruitment to payroll and compliance, so you don't have to deal with multiple vendors or local employment regulations."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Backed by Experience",
      description: "With the support of Multivex, a company with over 40 years of expertise and presence in 19 countries, we bring proven methods and a strong foundation of trust to every project."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Strategic Nearshore Location",
      description: "Based in Honduras, the second country in Latin America with the highest English proficiency after Argentina, we offer access to highly skilled, bilingual professionals ready to integrate seamlessly with your team."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Established BPO Hub",
      description: "San Pedro Sula is one of the fastest-growing BPO centers in the region, known for its strong infrastructure and experienced workforce, making it an ideal location for nearshore outsourcing operations."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 7L19 10L23 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Data-Driven Selection Process",
      description: "We use more than 50 professional assessment tools, including psychometric, aptitude, and DISC tests, ensuring every candidate we hire is the right fit for your business needs."
    }
  ];

  return (
    <section className="h-auto py-8 lg:py-12" style={{ backgroundColor: '#E0E0E0' }}>
      <div className="container mx-auto px-8 sm:px-6 md:px-8 lg:px-20">
        {/* Título y descripción introductoria */}
        <div className="w-full mb-8 lg:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 lg:mb-6" style={{ color: '#1A1A1A' }}>
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg md:text-lg lg:text-lg font-normal max-w-4xl mx-auto" style={{ color: '#1A1A1A' }}>
            Choosing Global Staffing Solutions means partnering with a team that simplifies the complexity of building and managing nearshore operations. We provide a complete, worry-free solution so you can focus on growing your business.
          </p>
        </div>
        
        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col h-full transition-transform hover:shadow-md"
            >
              {/* Icono */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#F2B705' }}>
                <div className="text-[#1A1A1A]">
                  {benefit.icon}
                </div>
              </div>
              
              {/* Título */}
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                {benefit.title}
              </h3>
              
              {/* Descripción */}
              <p className="text-sm text-gray-700 leading-relaxed grow">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
