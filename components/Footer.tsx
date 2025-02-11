import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-orange-300 mt-8 pt-8 container mx-auto p-4 text-center text-sm text-gray-500">
      <p>
        Created using Next.js, React.js, TypeScript, and Tailwind CSS. Repository hosted on <a href="https://github.com/opp-dev/eselco-website" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>. Content managed with <a href="https://obsidian.md/" target="_blank" rel="noopener noreferrer" className="underline">Obsidian</a>.
      </p>
    </footer>
  );
};

export default Footer;