import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '#' },
    { label: 'Plans', to: '#' },
    { label: 'Contact Us', to: '#' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 ${scrolled ? 'bg-linear-to-r from-[#D0C1B6] to-[#C9BAA8] shadow-md backdrop-blur-sm' : 'bg-transparent'
        }`}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="font-['Playfair_Display'] text-2xl md:text-3xl" aria-label="Home">
          <span className={`transition-colors duration-300 ${scrolled ? 'text-[#2C2B28]' : 'text-white'
            }`}>✳</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`text-[13px] font-normal tracking-wide transition-all duration-300 hover:opacity-70 ${scrolled ? 'text-[#2C2B28]' : 'text-white'
                }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            className="hidden rounded-full bg-[#2C2B28] px-6 py-2 text-[11px] font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#3d3d3a] hover:shadow-lg md:inline-flex"
          >
            Register Now
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-black/5 md:hidden ${scrolled ? 'text-[#2C2B28]' : 'text-white'
            }`}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[#E5DDD5] bg-[#F5F0EB] transition-all duration-300 md:hidden ${menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="flex flex-col px-4 py-3">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#E5DDD5] py-3 text-sm text-[#1A1A1A] last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            className="mt-3 rounded-md bg-[#2C2B28] px-5 py-2.5 text-sm text-white transition-colors hover:bg-[#3d3d3a]"
          >
            Register Now
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
