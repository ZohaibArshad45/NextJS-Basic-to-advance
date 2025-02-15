import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 w-full mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Brand */}
        <h2 className="text-lg font-semibold text-white">YourBrand 🚀</h2>

        {/* Navigation */}
        <nav className="flex space-x-5 text-sm">
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>

        {/* Contact Info */}
        <div className="text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <Mail size={16} className="text-blue-400" />
            <span>info@yourbrand.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={16} className="text-green-400" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-red-400" />
            <span>123 Street, YourCity</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank">
            <Facebook className="hover:text-blue-500 transition" size={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Twitter className="hover:text-blue-400 transition" size={20} />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Linkedin className="hover:text-blue-600 transition" size={20} />
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
