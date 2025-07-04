'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { IoCaretDownOutline } from 'react-icons/io5';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lang, setLang] = useState('EN');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load lang from localStorage
  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) setLang(storedLang);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  const selectLanguage = (value: string, event?: React.MouseEvent) => {
    event?.stopPropagation();
    setLang(value);
    localStorage.setItem('lang', value);
    setDropdownOpen(false);
    setMobileLangOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.bgImage}></div>

      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.png" alt="Logo" width={114.9} height={34} />
        </Link>

        <nav className={styles.nav}>
          <Link href="#destinations">Destinations</Link>
          <Link href="#hotels">Hotels</Link>
          <Link href="#flights">Flights</Link>
          <Link href="#bookings">Bookings</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="#login" className={styles.login}>Login</Link>

          <Link href="#signup" className={styles.signup}>Sign up</Link>

          <div className={styles.dropdown}>
            <button onClick={toggleDropdown} className={styles.dropdownToggle}>
              {lang}
              {dropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {dropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li onClick={(e) => selectLanguage('EN', e)}>EN</li>
                <li onClick={(e) => selectLanguage('VI', e)}>VI</li>
              </ul>
            )}
          </div>
        </div>

        <button className={styles.hamburger} onClick={() => setIsMobileMenuOpen(true)}>
          <Image src="/images/icons/hamburger.png" alt="Menu" width={32} height={32} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <Image src="/images/logo.png" alt="Logo" width={114.9} height={34} />
            <button className={styles.closeBtn} onClick={() => setIsMobileMenuOpen(false)}>✕</button>
          </div>

          <ul className={styles.mobileMenuList}>
            <li onClick={() => setMobileLangOpen(prev => !prev)}>
              <div className={styles.mobileItem}>
                Language: {lang}
                <IoCaretDownOutline size={16} />
              </div>
              {mobileLangOpen && (
                <ul className={styles.mobileLangMenu}>
                  <li onClick={(e) => selectLanguage('EN', e)}>EN</li>
                  <li onClick={(e) => selectLanguage('VI', e)}>VI</li>
                </ul>
              )}
            </li>
            <li className={styles.mobileItem}>
              <Link href="#destinations">Destinations</Link>
              <IoCaretDownOutline size={16} />
            </li>
            <li className={styles.mobileItem}>
              <Link href="#hotels">Hotels</Link>
              <IoCaretDownOutline size={16} />
            </li>
            <li className={styles.mobileItem}>
              <Link href="#flights">Flights</Link>
              <IoCaretDownOutline size={16} />
            </li>
            <li className={styles.mobileItem}>
              <Link href="#bookings">Bookings</Link>
              <IoCaretDownOutline size={16} />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
