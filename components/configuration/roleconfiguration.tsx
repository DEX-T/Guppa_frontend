"use client";
import { useState } from 'react';
import React from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import Link from 'next/link'

function roleconfiguration() {

  const [activeTab, setActiveTab] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  

  
  

  // State to manage the active tab
  // const [activeTab, setActiveTab] = useState('Roles');
  // const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  const tabs = [
    { name: 'Roles', link: '/createroles' },
    { name: 'Abilities', link: '/createability' },
    { name: 'Prefix', link: '/createroles' },
    { name: 'Middlewares', link: '/createroles' },
    { name: 'SubMiddlewares', link: '/createroles' },
    { name: 'Controller', link: '/createroles' },
    { name: 'Routes', link: '/createroles' },
    { name: 'Country', link: '/createroles' },
    { name: 'Timezone', link: '/createroles' },
    { name: 'Token', link: '/createroles' },
  ]; 
   
  return (
    <div className="p-4">
      <div className="title">
        <h2 className="text-2xl font-semibold mb-6">Configurations</h2>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-blue-500 hover:border-blue-500"
        >
          <Menu size={24} />
          <span className="ml-2">Menu</span>
        </button>
      </div>

      {/* Navigation tabs */}
      <div
        className={`flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-0 ${
          menuOpen ? "block" : "hidden md:flex"
        } border border-gray-200 rounded-md overflow-hidden`}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.name}
            className={`py-2 px-4 text-sm font-semibold w-full md:w-auto text-left md:text-center
              ${activeTab === tab.name
                ? 'bg-blue-500 text-white'
                : 'text-gray-500 hover:bg-gray-100'
              } ${index === 0 ? 'md:rounded-l-md' : ''}
              ${index === tabs.length - 1 ? 'md:rounded-r-md' : ''}
            `}
            onClick={() => handleTabClick(tab.name)}
          >
            <Link href={tab.link}>
              <span className="w-full block">{tab.name}</span>
            </Link>
          </button>
        ))}
      </div>
    </div>
 
    
//    





//</div><div className="p-4">

// <div className="title">
//     <h2 className="text-2xl font-semibold mb-6">Configuration</h2>
// </div>
//   {/* Hamburger Menu for Mobile */}
//   <div className="md:hidden flex justify-between items-center">
//     <button
//       className="text-3xl focus:outline-none"
//       onClick={() => setMenuOpen(!menuOpen)}
//     >
//       &#9776; {/* Hamburger Icon */}
//     </button>
//   </div>
    
//     {/* Navigation Menu */}
// <div
//     className={`flex flex-col md:flex-row gap-4 mt-4 md:mt-0  border border-gray-200 grid-cols-3 divide-x w-[81%] sm:w-[40%] md:w-[85%]  ${
//       menuOpen ? "block" : "hidden"
//     } md:block`}
//   >

//       <button
//         className={`py-2 px-4 text-sm font-semibold ${activeTab === 'Roles' ? 'bg-blue-500 text-white rounded-l-md' : 'text-gray-500'}`}
//         onClick={() => setActiveTab('Roles')}
//       >
//         Roles
//       </button>
//       <button
//         className={`py-2 px-4 text-sm font-semibold ${activeTab === 'Abilities' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
//         onClick={() => setActiveTab('Abilities')}
//       >
//         Abilities
//       </button>
//       <button
//         className={`py-2 px-4 text-sm font-semibold ${activeTab === 'Prefix' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
//         onClick={() => setActiveTab('Prefix')}
//       >
//         Prefix
//       </button>
//       <button
//         className={`py-2 px-4 text-sm font-semibold ${activeTab === 'Middlewares' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
//         onClick={() => setActiveTab('Middlewares')}
//         onMouseEnter={() => setIsDropdownOpen(true)}
//         onMouseLeave={() => setIsDropdownOpen(false)}
//       >
//         Middlewares

//       </button>
      
//       <button
      
//         className={`py-2 px-4 text-sm font-semibold ${activeTab === 'Controller' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
//         onClick={() => setActiveTab('Controller')}
//       >
//         Controller
//       </button>
    
//       <button
//         className={`py-2 px-4 text-sm font-semibold ${activeTab === 'Routes' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
//         onClick={() => setActiveTab('Routes')}
//       >
//         Routes
//       </button>
//       <button
//         className={`py-2 px-4 text-sm font-semibold ${activeTab === 'Country' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
//         onClick={() => setActiveTab('Country')}
//       >
//         Country
//       </button>
//       <button 
//         className={`py-2 px-4 text-sm font-semibold ${activeTab === 'Timezone' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
//         onClick={() => setActiveTab('Timezone')}
//       >
//         Timezone
//       </button>
//       <button
//         className={`py-2 px-4 text-sm font-semibold ${activeTab === 'Token' ? 'bg-blue-500 text-white rounded-r-md' : 'text-gray-500'}`}
//         onClick={() => setActiveTab('Token')}
//       >
//         Token
//       </button>
//     </div>

//     {/* Content Area */}
//     <div className="mt-6 p-4 border border-gray-200 rounded-md">
//       {renderTabContent()}
//     </div>
//   </div>
  )
}

export default roleconfiguration
