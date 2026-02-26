function PartnerCard({ partner }: { partner: { icon: React.ReactNode; title: string; description: string } }) {
  return (
    <div
      className="group relative rounded-xl p-6 lg:p-8 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-[#F2B705]/40 hover:-translate-y-1 hover:shadow-2xl"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
    >
      <div
        className="absolute top-0 left-6 lg:left-8 right-6 lg:right-8 h-[3px] rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ backgroundColor: "#F2B705" }}
      />

      <div
        className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#F2B705]/20"
        style={{ backgroundColor: "rgba(242, 183, 5, 0.12)" }}
      >
        <div style={{ color: "#F2B705" }}>{partner.icon}</div>
      </div>

      <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-[#F2B705] transition-colors duration-300">
        {partner.title}
      </h3>

      <p className="text-sm sm:text-base leading-relaxed text-blue-200">
        {partner.description}
      </p>
    </div>
  );
}

export default function WhoWePartnerWith() {
  const partners = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8.5 8H15.5L14 16H10L8.5 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 16L8 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M14.5 16L16 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6.5 5L8.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M17.5 5L15.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: "Startups & Growth-Stage Companies",
      description:
        "Organizations seeking cost-efficient alternatives without compromising quality — leveraging global talent and economic advantages to extend runway and scale faster.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
          <path d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22" stroke="currentColor" strokeWidth="2" />
          <path d="M12 2C9.5 4.5 8 8 8 12C8 16 9.5 19.5 12 22" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Companies Expanding into Latin America",
      description:
        "Businesses using nearshore teams as part of their go-to-market strategy, working with local professionals who understand regional culture, language, and business environments.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M3 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: "Scaling Organizations",
      description:
        "Companies experiencing growth and needing to expand teams quickly while maintaining control, structure, and operational efficiency.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Businesses Seeking Risk Mitigation",
      description:
        "Organizations that want international workforce advantages without exposure to foreign employment laws or regulatory complexity.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M6 21V19C6 17.3431 7.34315 16 9 16H13C14.6569 16 16 17.3431 16 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 11L20 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M17 14H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: "Companies Facing Domestic Talent Shortages",
      description:
        "Organizations struggling to find qualified talent locally and looking for access to broader, high-quality candidate pools.",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: "#1E3A8A" }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: "#F2B705" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-5"
          style={{ backgroundColor: "#F2B705" }}
        />
      </div>

      <div className="container mx-auto px-8 sm:px-6 md:px-8 lg:px-20 relative z-10">
        <div className="w-full mb-12 lg:mb-16 text-center">
          <p className="text-sm sm:text-base font-semibold tracking-widest uppercase mb-3" style={{ color: "#F2B705" }}>
            Our Ideal Partners
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 lg:mb-6 text-white">
            Who We Partner With
          </h2>
          <p className="text-base sm:text-lg md:text-lg lg:text-lg font-normal max-w-3xl mx-auto text-blue-100">
            We work with forward-thinking organizations that are ready to unlock the power of nearshore talent to drive growth and efficiency.
          </p>
        </div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {partners.slice(0, 3).map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {partners.slice(3).map((partner, index) => (
            <PartnerCard key={index + 3} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
