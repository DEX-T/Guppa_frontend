"use client";
import React from 'react'
import Image from "next/image";
import { useState } from 'react';

export default function sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden p-3">
        <button
          className="text-3xl focus:outline-none text-black"
          onClick={toggleMenu}
        >
          &#9776; {/* Hamburger Icon */}
        </button>
      </div>

      <aside
        className={`bg-blue-700 w-64 h-screen text-white p-6 space-y-6 fixed top-0 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative`}
        style={{ backgroundColor: '#09334B' }}
      >
        <div>
        <div className="flex justify-between items-center">
        <div className="text-white font-bold text-2xl mb-8">Guppa</div>
        <button
            className="text-white text-3xl focus:outline-none md:hidden"
            onClick={toggleMenu}
          >
            &times; {/* Close Icon */}
          </button>

        </div>
          
          <div className="text-gray-400 text-sm mb-6">MENU</div>
          <nav>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Image
                  src="/path-to-dashboard-icon.png"
                  alt="Dashboard"
                  width={20}
                  height={20}
                  className="mr-3"
                />
                Dashboard
              </li>
              <li className="flex items-center text-white bg-[#174E70] p-2 rounded-lg">
                <Image
                  src="/path-to-job-posts-icon.png"
                  alt="Job Posts"
                  width={20}
                  height={20}
                  className="mr-3"
                />
                Job Posts
                <span className="ml-auto bg-blue-500 w-2 h-2 rounded-full"></span>
              </li>
              <li className="flex items-center text-gray-300">
                <Image
                  src="/path-to-contracts-icon.png"
                  alt="Contracts"
                  width={20}
                  height={20}
                  className="mr-3"
                />
                Contracts
              </li>
              <li className="flex items-center text-gray-300">
                <Image
                  src="/path-to-messages-icon.png"
                  alt="Messages"
                  width={20}
                  height={20}
                  className="mr-3"
                />
                Messages
                <span className="ml-auto bg-blue-500 w-2 h-2 rounded-full"></span>
              </li>
              <li className="flex items-center text-gray-300">
                <Image
                  src="/path-to-payments-icon.png"
                  alt="Payments"
                  width={20}
                  height={20}
                  className="mr-3"
                />
                Payments
              </li>
              <li className="flex items-center text-gray-300">
                <Image
                  src="/path-to-support-icon.png"
                  alt="Support Ticket"
                  width={20}
                  height={20}
                  className="mr-3"
                />
                Support Ticket
              </li>
            </ul>
          </nav>
        </div>

        {/* Help Card */}
        <div
          className="bg-blue-800 text-center text-white rounded-lg p-4 mt-6 relative"
          style={{ backgroundColor: '#195273' }}
        >
          <div className="mb-2">
            <p className="text-sm font-semibold">
              Need a Professional Help on Tasks?
            </p>
          </div>
          <div className="flex flex-col items-center">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">
              Post a Job
            </button>
            <Image
              src="/sidebar_image.png"
              alt=""
              width={150}
              height={150}
              className="rounded-lg mt-2"
            />
          </div>
        </div>
      </aside>
    </div>

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen); 
  //   // Disable horizontal scrolling when menu is open
  //   if (!isOpen) {
  //     document.body.style.overflowX = 'hidden';
  //   } else {
  //     document.body.style.overflowX = 'auto';
  //   }
  // }
  // return (
  // <div className="flex h-screen" >
  //   {/* Mobile Hamburger Menu */}
  //     <div className="md:hidden p-3">
  //       <button
  //         className="text-3xl focus:outline-none"
  //         onClick={toggleMenu}
  //       >
  //         &#9776; {/* Hamburger Icon */}
  //       </button>

  //   </div>    

  //   <aside
  //    className={` bg-blue-700 w-64 h-screen text-white p-6 space-y-6 ${
  //     isOpen ? "block" : "hidden"
  //    } md:block`}
  //    style={{ backgroundColor: '#09334B' }} 
   
  //       >
  //   <div>
  //     <div className="text-white font-bold text-2xl mb-8">Guppa</div>
  //     <div className="text-gray-400 text-sm mb-6">MENU</div>
  //     <nav>
  //       <ul className="space-y-4">
  //         <li className="flex items-center text-gray-300">
  //           <Image src="/path-to-dashboard-icon.png" alt="Dashboard" width={20} height={20} className="mr-3" />
  //           Dashboard
  //         </li>
  //         <li className="flex items-center text-white bg-[#174E70] p-2 rounded-lg">
  //           <Image src="/path-to-job-posts-icon.png" alt="Job Posts" width={20} height={20} className="mr-3" />
  //           Job Posts
  //           <span className="ml-auto bg-blue-500 w-2 h-2 rounded-full"></span>
  //         </li>
  //         <li className="flex items-center text-gray-300">
  //           <Image src="/path-to-contracts-icon.png" alt="Contracts" width={20} height={20} className="mr-3" />
  //           Contracts
  //         </li>
  //         <li className="flex items-center text-gray-300">
  //           <Image src="/path-to-messages-icon.png" alt="Messages" width={20} height={20} className="mr-3" />
  //           Messages
  //           <span className="ml-auto bg-blue-500 w-2 h-2 rounded-full"></span>
  //         </li>
  //         <li className="flex items-center text-gray-300">
  //           <Image src="/path-to-payments-icon.png" alt="Payments" width={20} height={20} className="mr-3" />
  //           Payments
  //         </li>
  //         <li className="flex items-center text-gray-300">
  //           <Image src="/path-to-support-icon.png" alt="Support Ticket" width={20} height={20} className="mr-3" />
  //           Support Ticket
  //         </li>
  //       </ul>
  //     </nav>
  //   </div>
    
  //      {/* Help Card */}
  //     <div className="bg-blue-800 text-center text-white rounded-lg p-4 mt-6 relative" style={{ backgroundColor: '#195273' }}>
  //        <div className="mb-2">
  //                   <p className="text-sm font-semibold">Need a Professional Help on Tasks?</p>
  //         </div>
  //     <div className="flex flex-col items-center">
  //     <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">Post a Job</button>
  //     <Image src="/sidebar_image.png" alt="" width={150} height={150} className="rounded-lg mt-2 " />
  //   </div>
  //   </div>
  // </aside>
  // </div>
  

  )}

