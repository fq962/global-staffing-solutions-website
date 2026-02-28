import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#132658] py-2">
      <div className="container mx-auto px-8 sm:px-6 md:px-8 lg:px-20 flex items-center justify-end gap-2">
        <a
          href="https://wa.me/16123577313"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm"
        >
          <Image
            src="/whatsapp.svg"
            alt="WhatsApp"
            width={18}
            height={18}
            className="brightness-0 invert opacity-90"
          />
          <span>+1 (612) 357-7313</span>
        </a>
      </div>
    </nav>
  );
}
