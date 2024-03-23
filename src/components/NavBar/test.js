"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const maxHeight = isMenuOpen ? '500px' : '0px';

  return (
    <>
      <style jsx>{`
        .link {
          position: relative;
          color: white;
          text-decoration: none;
          padding-bottom: 5px; /* Adjust space for underline */
        }

        .link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0; /* Adjust to control distance from text */
          height: 2px; /* Height of underline */
          width: 100%;
          background-color: white;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }

        .link:hover::after,
        .link:focus::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
      <header className="bg-home-link-background-blue">
        <div className="lg:hidden flex items-center justify-between pt-10 pl-6 pb-6 pr-6 w-full box-border">
          <button className="relative p-4 focus:outline-none" onClick={toggleMenu}>
            <div className="block w-8">
              <div className={`absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
              <div className={`absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
            </div>
          </button>

          <a href="/">
            <Image
              src="/media/logo.png"
              alt="Logo Home Link"
              width={242}
              height={28}
            />
          </a>
        </div>

        {/* Navbar mobile */}
        <div
          style={{ maxHeight: maxHeight }} className={`transition-max-height duration-700 ease-in-out overflow-hidden lg:hidden`}>
          <div className="bg-home-link-background-blue w-full p-6">
            <a href="/" className="link block py-2 border border-solid rounded-xl mb-3 pl-4 uppercase text-xl">Home</a>
            <a href="/about" className="link block py-2 border border-solid rounded-xl mb-3 pl-4 uppercase text-xl">Portfólio</a>
            <a href="/services" className="link block py-2 border border-solid rounded-xl mb-3 pl-4 uppercase text-xl">Nossos Serviços</a>
          </div>
        </div>

        {/* Navbar desktop */}
        <div className="hidden lg:flex justify-between items-center p-6">
          <a href="/">
            <Image
              src="/media/logo.png"
              alt="Logo Home Link"
              width={242}
              height={28}
            />
          </a>
          <div className='flex gap-12'>
            <a href="/" className="link">Home</a>
            <a href="/about" className="link">Portfólio</a>
            <a href="/services" className="link">Nossos Serviços</a>
          </div> 
          <a href="" className=' text-white font-bold font-sans inline-block border border-solid rounded-xl border-home-link-background-blue p-2 bg-home-link-seccond-blue hover:bg-home-link-light-blue hover:text-home-link-background-blue'>Solicitar Orçamento</a>
        </div>
      </header>
    </>
  );
}