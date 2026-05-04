// import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold tracking-tighter italic text-[#1C1C1C] mb-6">muzzyhud</div>
            <p className="text-gray-500 text-sm mb-8 max-w-sm leading-relaxed">
              Exceptional architectural and construction company services available online.
            </p>
            <div className="space-y-2">
              <a href="mailto:contact@muzzyhud.com" className="block text-[#1C1C1C] font-semibold hover:text-[#E8A57A] transition-colors">
                contact@muzzyhud.com
              </a>
              <a href="tel:+48601344812" className="block text-[#1C1C1C] font-semibold hover:text-[#E8A57A] transition-colors">
                +48 601 344 812
              </a>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-bold text-[#1C1C1C] mb-6 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-[#1C1C1C] text-sm transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#1C1C1C] text-sm transition-colors">Realizations</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#1C1C1C] text-sm transition-colors">News</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#1C1C1C] text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#1C1C1C] text-sm transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services Links */}
          <div>
            <h4 className="font-bold text-[#1C1C1C] mb-6 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-[#1C1C1C] text-sm transition-colors">General contracting</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#1C1C1C] text-sm transition-colors">Design & Implementation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#1C1C1C] text-sm transition-colors">Renovation & modernization</a></li>
            </ul>
          </div>
          
          {/* Other & Social */}
          <div>
            <h4 className="font-bold text-[#1C1C1C] mb-6 uppercase text-sm tracking-wider">Other</h4>
            <ul className="space-y-4 mb-8">
              <li><a href="#" className="text-gray-500 hover:text-[#1C1C1C] text-sm transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#1C1C1C] text-sm transition-colors">Cooperation</a></li>
            </ul>
            
            <h4 className="font-bold text-[#1C1C1C] mb-4 uppercase text-sm tracking-wider">Social media</h4>
            <div className="flex gap-4">
              {/* <a href="#" className="w-10 h-10 bg-[#1C1C1C] flex items-center justify-center hover:bg-[#E8A57A] transition-colors group">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1C1C1C] flex items-center justify-center hover:bg-[#E8A57A] transition-colors group">
                <Instagram className="w-4 h-4 text-white" />
              </a> */}
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-sm text-gray-400">© 2026 muzzyhud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
