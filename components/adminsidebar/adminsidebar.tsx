"use client";
import React from 'react'
import { useState } from 'react';
import { FaUsers, FaWallet, FaChartBar, FaCog, FaHeadset, FaColumns } from "react-icons/fa";
import { ChevronDown, ChevronUp } from 'lucide-react'; 



export default function adminsidebar() {
  const [isReportsOpen, setIsReportsOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  const toggleReportsDropdown = () => setIsReportsOpen(!isReportsOpen);
  const toggleConfigDropdown = () => setIsConfigOpen(!isConfigOpen);
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white w-64 h-screen space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${
          isOpen ? "-translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        {/* Header with Logo and Close Icon */}
        <div className="flex items-center justify-between mb-8 px-4">
          <div className="text-2xl font-bold">Guppa</div>
          {/* Close icon, only visible on mobile */}
          <button
            className="text-2xl md:hidden focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <h2 className="text-sm uppercase mb-4 pl-4">Navigation</h2>

        <nav className="space-y-1">
          {/* Menu */}
          <a
            href="#"
            className="flex items-center py-2 px-4  bg-[#E1F4FF]  text-blue-400 rounded-md text-sm"
          >
            <FaColumns className="mr-3" /> Dashboard
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-white hover:bg-[#E1F4FF] hover:text-blue-400 rounded-md">
            <FaUsers className="mr-3" /> Users
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-white hover:bg-[#E1F4FF] hover:text-blue-400 rounded-md">
            <FaWallet className="mr-3" /> Payments
          </a>

          <div>
            <button
              className="flex items-center py-2 px-4 text-white w-full hover:bg-[#E1F4FF] hover:text-blue-400 rounded-md focus:outline-none"
              onClick={toggleReportsDropdown}
            >
              <FaChartBar className="mr-3" /> Reports
              <span className="ml-auto">
                {isReportsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </button>
            {/* Dropdown menu */}
            {isReportsOpen && (
              <div className="mt-2 bg-gray-800 rounded-md shadow-lg">
                <a href="#" className="block px-4 py-2 text-white text-sm hover:bg-[#E1F4FF] hover:text-blue-400">
                  Report 1
                </a>
                <a href="#" className="block px-4 py-2 text-white text-sm hover:bg-[#E1F4FF] hover:text-blue-400">
                  Report 2
                </a>
              </div>
            )}
          </div>

          <div>
            <button
              className="flex items-center py-2 px-4 text-white w-full hover:bg-[#E1F4FF] hover:text-blue-400 rounded-md focus:outline-none"
              onClick={toggleConfigDropdown}
            >
              <FaCog className="mr-3" /> Configurations
              <span className="ml-auto">
                {isConfigOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </button>
            {/* Dropdown menu */}
            {isConfigOpen && (
              <div className="mt-2 bg-gray-800 rounded-md shadow-lg">
                <a href="#" className="block px-4 py-2 text-white text-sm hover:bg-[#E1F4FF] hover:text-blue-400">
                  Config 1
                </a>
                <a href="#" className="block px-4 text-white py-2 text-sm hover:bg-[#E1F4FF] hover:text-blue-400">
                  Config 2
                </a>
              </div>
            )}
          </div>

          <a href="#" className="flex items-center py-2 px-4 text-white hover:bg-[#E1F4FF] hover:text-blue-400 rounded-md">
            <FaHeadset className="mr-3" /> Support
          </a>
        </nav>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden p-3">
        <button
          className="text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"} {/* Toggle between hamburger and close icon */}
        </button>
      </div>
    </div>
  </div>
  )
}
