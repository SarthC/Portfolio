import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Beyond Code', href: '#extracurriculars' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#FEFDFD]/95 dark:bg-black/95 backdrop-blur-md border-b border-[#BA2F2F] dark:border-neutral-800 transition-colors">
        <div className="section-container">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo in uppercase wide tracking */}
            <a
              href="#"
              onClick={scrollToTop}
              className="text-xs font-semibold uppercase tracking-[0.36em] text-[#040101] dark:text-white hover:text-[#BA2F2F] dark:hover:text-[#BA2F2F] transition-colors"
            >
              SARTHAK CHOUDHARI
            </a>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                      isActive
                        ? 'text-[#BA2F2F] dark:text-white font-semibold underline underline-offset-8 decoration-2 decoration-[#BA2F2F] dark:decoration-white'
                        : 'text-[#040101]/70 hover:text-[#BA2F2F] dark:text-neutral-400 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[#BA2F2F] dark:border-neutral-700 text-[#BA2F2F] dark:text-white hover:bg-[#BA2F2F] hover:text-[#FEFDFD] dark:hover:bg-white dark:hover:text-black transition-all"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden flex items-center justify-center w-9 h-9 border border-[#BA2F2F] dark:border-neutral-700 text-[#BA2F2F] dark:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-x-0 top-16 bg-[#FEFDFD] dark:bg-black border-b border-[#BA2F2F] dark:border-neutral-800 p-8 shadow-2xl">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm uppercase tracking-[0.28em] py-2 border-b border-[#BA2F2F]/20 dark:border-neutral-900 ${
                      isActive
                        ? 'text-[#BA2F2F] dark:text-white font-semibold'
                        : 'text-[#040101]/70 dark:text-neutral-400'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => {
                    toggleTheme();
                    setMobileOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-[#BA2F2F] dark:border-white text-xs uppercase tracking-[0.2em] font-semibold text-[#BA2F2F] dark:text-white hover:bg-[#BA2F2F] hover:text-[#FEFDFD] dark:hover:bg-white dark:hover:text-black transition-all"
                >
                  {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                  Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
