import React from 'react';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/sarthak-choudhari',
    label: 'LinkedIn',
  },
  {
    icon: Github,
    href: 'https://github.com/SarthC',
    label: 'GitHub',
  },
  {
    icon: Mail,
    href: 'mailto:sarthakc8493@gmail.com',
    label: 'Email',
  },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FEFDFD] dark:bg-black border-t border-[#BA2F2F] dark:border-neutral-800 py-16">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Identity & Copyright */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.36em] text-[#040101] dark:text-white block mb-2">
              SARTHAK CHOUDHARI
            </span>
            <p className="text-xs text-[#040101]/60 dark:text-neutral-500">
              MIT ADT University &bull; B.Tech CSE (Minor in Quantum Computing) &bull; &copy; {new Date().getFullYear()}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="w-8 h-8 border border-[#BA2F2F] dark:border-neutral-700 flex items-center justify-center text-[#BA2F2F] dark:text-white hover:bg-[#BA2F2F] hover:text-[#FEFDFD] dark:hover:bg-white dark:hover:text-black transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={13} />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 border border-[#BA2F2F] dark:border-neutral-700 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-[#BA2F2F] dark:text-white hover:bg-[#BA2F2F] hover:text-[#FEFDFD] dark:hover:bg-white dark:hover:text-black transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={13} />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
