"use client";
import React from 'react'
import { useState } from 'react';


const settings = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('ProfileSettings');
    const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle
  
    // Function to render content based on the active tab
    const renderTabContent = () => {
      switch (activeTab) {
        case 'ProfileSettings':
          return <div className="bg-white border border-gray-300 p-4 rounded-lg min-h-[300px]">Profile Settings</div>;
        case 'BidPoints':
          return <div className="bg-white border border-gray-300 p-4 rounded-lg min-h-[300px]">Bid Points Content</div>;
        case 'Billings':
          return <div className="bg-white border border-gray-300 p-4 rounded-lg min-h-[300px]">Billings Content</div>;
        case 'PasswordSecurity':
          return <div className="bg-white border border-gray-300 p-4 rounded-lg min-h-[300px]">Password & Security Content</div>;
        case 'NotificationSettings':
          return <div className="bg-white border border-gray-300 p-4 rounded-lg min-h-[300px]">Notification Settings Content</div>;
        case 'HelpSupport':
          return <div className="bg-white border border-gray-300 p-4 rounded-lg min-h-[300px]">Help & Support Content</div>;
        default:
          return null;
      }
    };
  
    return ( 
     
    <div className="p-4">

    <div className="title">
        <h2 className="text-2xl font-semibold mb-6">Settings</h2>
    </div>
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex justify-between items-center">
        <button
          className="text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776; {/* Hamburger Icon */}
        </button>
      </div>
        
        {/* Navigation Menu */}
    <div
        className={`flex flex-col md:flex-row gap-4 mt-4 md:mt-0  border border-gray-200 grid-cols-3 divide-x w-[81%] sm:w-[40%] md:w-[85%]  ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >

          <button
            className={`py-2 px-4 text-sm font-semibold ${activeTab === 'ProfileSettings' ? 'bg-blue-500 text-white rounded-l-md' : 'text-gray-500'}`}
            onClick={() => setActiveTab('ProfileSettings')}
          >
            Profile Settings
          </button>
          <button
            className={`py-2 px-4 text-sm font-semibold ${activeTab === 'BidPoints' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
            onClick={() => setActiveTab('BidPoints')}
          >
            Bid Points
          </button>
          <button
            className={`py-2 px-4 text-sm font-semibold ${activeTab === 'Billings' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
            onClick={() => setActiveTab('Billings')}
          >
            Billings
          </button>
          <button
            className={`py-2 px-4 text-sm font-semibold ${activeTab === 'PasswordSecurity' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
            onClick={() => setActiveTab('PasswordSecurity')}
          >
            Password & Security
          </button>
          <button
            className={`py-2 px-4 text-sm font-semibold ${activeTab === 'NotificationSettings' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
            onClick={() => setActiveTab('NotificationSettings')}
          >
            Notification Settings
          </button>
          <button
            className={`py-2 px-4 text-sm font-semibold ${activeTab === 'HelpSupport' ? 'bg-blue-500 text-white rounded-r-md' : 'text-gray-500'}`}
            onClick={() => setActiveTab('HelpSupport')}
          >
            Help & Support
          </button>
        </div>
  
        {/* Content Area */}
        <div className="mt-6 p-4 border border-gray-200 rounded-md">
          {renderTabContent()}
        </div>
      </div>
    );
  };
  
  export default settings;