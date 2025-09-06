import React, { useState, useEffect, useRef } from "react";
import { Modal } from "antd";
import getSymbolFromCurrency from "currency-symbol-map";
import NavbarBottom from "./NavbarBottom";


const Navbar = () => {
  const [isCurrencyModalOpen, setIsCurrencyModalOpen] = useState(false);
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("PKR");
  const [selectedFlag, setSelectedFlag] = useState("https://flagcdn.com/w80/pk.png");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const currencies = [
    { code: "USD", name: "US Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "PKR", name: "Pakistani Rupee" },
    { code: "GBP", name: "British Pound" },
    { code: "INR", name: "Indian Rupee" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "ZAR", name: "South African Rand" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "THB", name: "Thai Baht" },
    { code: "HKD", name: "Hong Kong Dollar" },
  ];

  const countries = [
    { name: "Pakistan", flag: "https://flagcdn.com/w80/pk.png" },
    { name: "United States", flag: "https://flagcdn.com/w80/us.png" },
    { name: "United Kingdom", flag: "https://flagcdn.com/w80/gb.png" },
    { name: "India", flag: "https://flagcdn.com/w80/in.png" },
    { name: "Canada", flag: "https://flagcdn.com/w80/ca.png" },
    { name: "Australia", flag: "https://flagcdn.com/w80/au.png" },
    { name: "Saudi Arabia", flag: "https://flagcdn.com/w80/sa.png" },
    { name: "China", flag: "https://flagcdn.com/w80/cn.png" },
  ];

  return (
    <div>
        <div className="bg-[#003B95] font-sans text-white font-medium 
        justify-between flex px-6 lg:pl-24 lg:pr-22 items-center py-3 relative pb-3">
      {/* Logo */}
      <div className="logo">
        <h2 className="text-white font-sans font-bold text-xl lg:text-2xl">Booking.com</h2>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-12">
        {/* Currency Button */}
        <p
          className="cursor-pointer flex items-center gap-2 hover:bg-[#ebe9e931] px-2 py-1 rounded"
          onClick={() => setIsCurrencyModalOpen(true)}
        >
          {getSymbolFromCurrency(selectedCurrency)} {selectedCurrency}
        </p>

        <div
          className="cursor-pointer flex items-center gap-2 hover:bg-[#ebe9e931] px-2 py-1 rounded"
          onClick={() => setIsCountryModalOpen(true)}
        >
          <div className="w-5 h-5 rounded-full overflow-hidden">
            <img 
              src={selectedFlag} 
              alt="flag" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        <div className="property_listing">
          <p>List Your Property</p>
        </div>

        <div>
          <button className="mr-4 bg-white text-blue-600 hover:bg-[#F0F6FD] px-3 py-1 rounded">
            Register
          </button>
          <button className="ml-4 bg-white text-blue-600 hover:bg-[#F0F6FD] px-3 py-1 rounded">
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Menu Button */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="lg:hidden absolute top-full left-0 right-0 bg-[#003B95] shadow-lg z-50">
          <div className="px-6 py-4 space-y-4">
            {/* Currency Button */}
            <div
              className="cursor-pointer flex items-center gap-2 hover:bg-[#ebe9e931] px-2 py-2 rounded"
              onClick={() => {
                setIsCurrencyModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              <span className="text-lg">{getSymbolFromCurrency(selectedCurrency)}</span>
              <span>{selectedCurrency}</span>
            </div>

            {/* Country Button */}
            <div
              className="cursor-pointer flex items-center gap-2 hover:bg-[#ebe9e931] px-2 py-2 rounded"
              onClick={() => {
                setIsCountryModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <img 
                  src={selectedFlag} 
                  alt="flag" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <span>Language</span>
            </div>

            {/* List Your Property */}
            <div className="hover:bg-[#ebe9e931] px-2 py-2 rounded">
              <p>List Your Property</p>
            </div>

            {/* Auth Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <button 
                className="bg-white text-blue-600 hover:bg-[#F0F6FD] px-3 py-2 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </button>
              <button 
                className="bg-white text-blue-600 hover:bg-[#F0F6FD] px-3 py-2 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Currency Modal */}
      <Modal
        width={1000}
        title="Select Your Currency"
        open={isCurrencyModalOpen}
        onCancel={() => setIsCurrencyModalOpen(false)}
        footer={null}
      >
        <p className="text-gray-500 text-sm mb-4">
          Where applicable, prices will be converted to—and shown in—the currency you select.
          The currency you pay in may differ based on your reservation, and a service fee may also apply.
        </p>

        <div className="grid grid-cols-4 gap-3 w-full">
          {currencies.map((cur) => (
            <div
              key={cur.code}
              className={`flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100 ${
                cur.code === selectedCurrency ? "bg-gray-200" : ""
              }`}
              onClick={() => {
                setSelectedCurrency(cur.code);
                setIsCurrencyModalOpen(false);
              }}
            >
              <span className="text-lg">{getSymbolFromCurrency(cur.code)}</span>
              <div>
                <p className="font-medium">{cur.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Modal>

      {/* Country Modal */}
      <Modal
        width={900}
        title="Select your language"
        heading="Suggested for you"
        open={isCountryModalOpen}
        onCancel={() => setIsCountryModalOpen(false)}
        footer={null}
      >
        <div className="grid grid-cols-4 gap-3 w-full">
        <p className=" text-sm mb-4  font-medium">Suggested for you</p>
          {countries.map((country) => (
            <div
              key={country.name}
              className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100 mt-3"
              onClick={() => {
                setSelectedFlag(country.flag);
                setIsCountryModalOpen(false);
              }}
            >
             <div className="w-6 h-6 rounded-full overflow-hidden">
               <img 
                 src={country.flag} 
                 alt={country.name} 
                 className="w-full h-full object-cover" 
               />
             </div>
              <p className="font-medium">{country.name}</p>
            </div>
          ))}
        </div>
      </Modal>
      
    </div>
    <NavbarBottom/>
    </div>
  );
};

export default Navbar;