import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandIdentity, COLORS } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', to: '/', isLink: true },
    { label: 'Web Development', to: '/web-development', isLink: true },
    ...(isHomePage ? [
      { label: 'Packages', id: 'packages', isLink: false },
      { label: 'Portfolio', id: 'portfolio', isLink: false },
      { label: 'FAQ', id: 'faq', isLink: false },
    ] : [])
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(255, 255, 255, 0.8)'
          : 'rgba(255, 255, 255, 0.4)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
        borderBottom: scrolled
          ? '1px solid rgba(129, 199, 212, 0.2)'
          : '1px solid transparent',
        boxShadow: scrolled
          ? '0 4px 30px rgba(0, 0, 0, 0.05)'
          : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <BrandIdentity
              showText={true}
              textColor={COLORS.NAVY}
              iconSize="w-10 h-10"
              textSize="text-2xl"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              item.isLink ? (
                <Link
                  key={index}
                  to={item.to!}
                  className="text-base font-semibold transition-all duration-300 hover:scale-110 relative group"
                  style={{ color: COLORS.NAVY }}
                >
                  {item.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: COLORS.AQUA }}
                  />
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id!)}
                  className="text-base font-semibold transition-all duration-300 hover:scale-110 relative group"
                  style={{ color: COLORS.NAVY }}
                >
                  {item.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: COLORS.AQUA }}
                  />
                </button>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-all duration-300"
              style={{
                background: isOpen ? COLORS.AQUA : 'transparent',
                color: isOpen ? 'white' : COLORS.NAVY,
              }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item, index) => (
            item.isLink ? (
              <Link
                key={index}
                to={item.to!}
                className="block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  color: COLORS.NAVY,
                  background: 'rgba(129, 199, 212, 0.1)',
                }}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={index}
                onClick={() => scrollToSection(item.id!)}
                className="w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  color: COLORS.NAVY,
                  background: 'rgba(129, 199, 212, 0.1)',
                }}
              >
                {item.label}
              </button>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
