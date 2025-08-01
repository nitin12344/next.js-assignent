'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Load theme from localStorage on component mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link href="/" className="nav-logo">
            Nitin Dekaliya
          </Link>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            href="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          
          <Link 
            href="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          
          <div className="nav-dropdown">
            <button className={`nav-link dropdown-toggle ${isActive('/services') || isActive('/services/web-development') || isActive('/services/seo') || isActive('/services/consulting') ? 'active' : ''}`}>
              Services
            </button>
            <div className="dropdown-menu">
              <Link 
                href="/services" 
                className="dropdown-item"
                onClick={() => setIsMenuOpen(false)}
              >
                All Services
              </Link>
              <div className="dropdown-submenu">
                <button className="dropdown-item submenu-toggle">
                  Web Development
                </button>
                <div className="submenu">
                  <Link 
                    href="/services/web-development" 
                    className="submenu-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link 
                    href="/services/web-development/mern" 
                    className="submenu-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    MERN Stack
                  </Link>
                  <Link 
                    href="/services/web-development/mean" 
                    className="submenu-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    MEAN Stack
                  </Link>
                  <Link 
                    href="/services/web-development/dotnet" 
                    className="submenu-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    .NET Stack
                  </Link>
                </div>
              </div>
              <Link 
                href="/services/seo" 
                className="dropdown-item"
                onClick={() => setIsMenuOpen(false)}
              >
                SEO Services
              </Link>
              <Link 
                href="/services/consulting" 
                className="dropdown-item"
                onClick={() => setIsMenuOpen(false)}
              >
                Consulting
              </Link>
            </div>
          </div>
          
          <Link 
            href="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkTheme ? '☀️' : '🌙'}
          </button>
          
          <button 
            className="hamburger" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
} 