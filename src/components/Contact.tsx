import React, { useState } from 'react';
import { Mail, ExternalLink, Github, Copy, Check } from 'lucide-react';

const EMAIL = 'sarthakc8493@gmail.com';

const socials = [
  {
    platform: 'LinkedIn',
    icon: ExternalLink,
    link: 'https://linkedin.com/in/sarthak-choudhari',
    display: 'linkedin.com/in/sarthak-choudhari',
  },
  {
    platform: 'GitHub',
    icon: Github,
    link: 'https://github.com/SarthC',
    display: 'github.com/SarthC',
  },
  {
    platform: 'Email',
    icon: Mail,
    link: `mailto:${EMAIL}`,
    display: EMAIL,
  },
];

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = EMAIL;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="section-padding border-b border-[#BA2F2F] dark:border-neutral-800">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow and Heading */}
          <div className="mb-12">
            <span className="section-eyebrow">INDEX 07 / INQUIRY &amp; NETWORK</span>
            <h2 className="section-title mb-4">Let&apos;s Connect</h2>
            <p className="section-subtitle">
              Open to high-impact software engineering roles, hackathon collaborations, research inquiries, and technical discussion.
            </p>
          </div>

          {/* Primary Email Showcase Card */}
          <div className="border border-[#BA2F2F] dark:border-neutral-800 bg-[#FEFDFD] dark:bg-black p-8 sm:p-12 mb-8">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#BA2F2F] dark:text-neutral-400 mb-3 block font-semibold">
              PRIMARY COMMUNICATION CHANNEL
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <a
                href={`mailto:${EMAIL}`}
                className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-[#040101] dark:text-white hover:text-[#BA2F2F] dark:hover:text-neutral-300 transition-colors hover:underline underline-offset-8"
              >
                {EMAIL}
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 border border-[#BA2F2F] dark:border-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-[#BA2F2F] dark:text-white hover:bg-[#BA2F2F] hover:text-[#FEFDFD] dark:hover:bg-white dark:hover:text-black transition-all self-start sm:self-auto"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Copied to Clipboard' : 'Copy Address'}
              </button>
            </div>
          </div>

          {/* Social Links Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.link}
                target={social.platform !== 'Email' ? '_blank' : undefined}
                rel={social.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                className="border border-[#BA2F2F] dark:border-neutral-800 bg-[#FEFDFD] dark:bg-black p-5 flex items-center justify-between hover:border-[#BA2F2F] dark:hover:border-neutral-500 transition-colors group"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#BA2F2F] dark:text-neutral-500 block mb-1 font-semibold">
                    {social.platform}
                  </span>
                  <span className="text-xs font-medium text-[#040101] dark:text-white group-hover:text-[#BA2F2F] dark:group-hover:underline underline-offset-4 transition-colors">
                    {social.display}
                  </span>
                </div>
                <social.icon size={16} className="text-[#BA2F2F] dark:text-zinc-400 group-hover:scale-110 transition-transform flex-shrink-0 ml-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
