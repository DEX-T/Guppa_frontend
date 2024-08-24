"use client";
import React from 'react'
import { useState } from 'react';

export default function successinvite() {
    const [isVisible, setIsVisible] = useState(true);

  // Function to close the card
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full md:max-w-lg">
        <div className="flex justify-end">
          <button 
           onClick={handleClose}
           className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">Close</span>
            &#x2715; {/* Close icon */}
          </button>
        </div>
        <div className="flex flex-col items-center">
          {/* Image */}
          <img
            src="/successfull_Invite.png" 
            alt="Success"
            className="w-48 h-48 object-contain mb-4"
          />
          {/* Title */}
          <h2 className="text-lg md:text-2xl font-semibold mb-4 text-gray-800 ">
            Offer Has Been Sent Successfully
          </h2>
          {/* Description */}
          <p className="text-gray-500 text-center mb-6">
            Are you sure you want to post this job? You will be able to receive proposals once they are uploaded. No charges till you hire.
          </p>
          {/* Button */}
          <button className="bg-[#3498DB] text-white py-2 px-4 rounded w-full md:w-auto">
                Messages
        </button>
        </div>
      </div>
    </div>
      

  )
}
