"use client";
import React from 'react'
import Image from 'next/image';
import { Menu, Bell, Moon } from 'lucide-react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; 



export default function adminheader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    
  return (
    <div>
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          
          {/* Hamburger Icon for Desktop */}
          <div className="relative hidden md:block">
            <button 
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            >
              <Menu size={24} />
            </button>
            
            {/* Hamburger Dropdown */}
            {isHamburgerOpen && (
              <div className="absolute top-full left-0 mt-2 bg-[#E1F4FF] shadow-md rounded-md p-4 ">
                <a href="#" className="block py-2 text-gray-700 hover:text-blue-400 whitespace-nowrap">Menu Item 1</a>
                <a href="#" className="block py-2 text-gray-700 hover:text-blue-400 whitespace-nowrap">Menu Item 2</a>
                <a href="#" className="block py-2 text-gray-700 hover:text-blue-400 whitespace-nowrap">Menu Item 3</a>
              </div>
            )}
          </div>

          {/* Logo or title placeholder */}
          <div className="flex-1"></div>

          {/* ChevronDown Icon for Mobile */}
          <button 
            className="text-gray-500 hover:text-gray-700 focus:outline-none md:hidden"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {isDropdownOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>

          {/* Icons and User Profile for both Desktop and Mobile */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Icon */}
            <button className="bg-gray-200 p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none hidden md:block">
              <Moon size={24} />
            </button>

            {/* Notification Icon */}
            <button className="relative bg-gray-200 p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none hidden md:block">
              <Bell size={24} />
              <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-600 rounded-full"></span>
            </button>

            {/* User Profile */}
            <div className="flex items-center">
              <img 
                src="/landscape-placeholder.svg" 
                alt="User avatar" 
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-2 hidden md:block">
                <p className="text-sm font-medium text-gray-700">Dexree Robert</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isDropdownOpen && (
          <div className="mt-4 bg-white shadow-md rounded-md p-4 md:hidden">
            <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100">Menu Item 1</a>
            <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100">Menu Item 2</a>
            <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100">Menu Item 3</a>
            <button className="bg-gray-200 p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none w-auto mx-auto flex items-center justify-center space-x-2 mb-2">
               <Moon size={24} /> 
               <span>Dark Mode</span>
            </button>
            <button className="bg-gray-200 p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none w-auto mx-auto flex items-center justify-center space-x-2 mb-2">
                <Bell size={24} /> 
               <span>Notifications</span>
            </button>
             
          </div>
        )}
      </header>
    </div>
  )
}
