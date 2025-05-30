import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

const NavbarLinks = ({ onClick }: { onClick?: () => void }) => {
  const PAGE_SECTIONS = [
    { name: "Inicio", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Expertise", link: "#expertise" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contacto", link: "#contact" },
  ];

  return (
    <>
      {PAGE_SECTIONS.map((section, index) => (
        <a
          key={index}
          href={section.link}
          className="text-zinc-400 hover:text-zinc-100 transition-all duration-500 text-sm tracking-wide font-light relative group px-2 py-1"
          onClick={onClick}
        >
          {section.name}
          <span className="absolute -bottom-1 left-2 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 group-hover:w-full"></span>
        </a>
      ))}
    </>
  );
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/60 backdrop-blur-3xl border-b border-zinc-800/30">
      <div className="container mx-auto px-4 py-4 md:px-8 md:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-violet-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/20">
              <span className="text-zinc-900 font-bold text-lg">A</span>
            </div>
            <div>
              <div className="text-xl font-light tracking-tight text-zinc-100">
                Diego Peralta
              </div>
              <div className="text-xs text-zinc-500 tracking-wider uppercase">
                Full Stack Developer
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-12">
            <NavbarLinks />
          </div>

          <div className="flex items-center space-x-6 ">
            <a
              href="https://github.com/DiegoPMz"
              target="_blank"
              className="text-zinc-500 hover:text-blue-400 transition-all duration-500 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/diego-peralta-b9b012291/"
              target="_blank"
              className="text-zinc-500 hover:text-blue-400 transition-all duration-500 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center pl-4">
              <button
                className="cursor-pointer text-zinc-400 hover:text-zinc-100 transition-all duration-500 "
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t border-zinc-800/30">
            <div className="flex flex-col space-y-4 pt-4">
              <NavbarLinks />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
