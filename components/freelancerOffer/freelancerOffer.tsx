"use client";
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

export default function freelancerOffer() {
  
  const [startDate, setStartDate] = useState('');
  const [jobType, setJobType] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [users, setUsers] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ startDate, users, jobType, maxBudget });
  };
  return (
    <div>
    <div className="container mx-auto p-4 ">

    <div className="p-4 sm:p-6 md:p-8 -mt-8 ">
          {/* Title */}
          <h1 className="text-base md:text-2xl font-semibold mb-2 text-gray-800 ">
          Send an Offer
          </h1>
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center mb-10 sm:mt-4">
            <Link href="/dashboard"><span className="text-sm sm:text-base text-gray-400">Dashboard</span></Link>
            <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
            <Link href="/dashboard"><span className="text-sm sm:text-base text-gray-400">Messages</span></Link>
            <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
            <span className="text-sm sm:text-base text-blue-500 font-medium whitespace-nowrap">
              Offer Contract
            </span>
          </div>
        </div>
    
          <div className="max-w-full  bg-white p-6 shadow-lg rounded-lg -mt-10">
            <h1 className="text-xl md:text-2 font-semibold mb-2 whitespace-nowrap">Job Description</h1>
            <p className="text-gray-500 mb-6">
              Figma ipsum component variant main layer. Slice draft horizontal image undo flatten pen pen rotate create. Star plugin content polygon font link library prototype.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
    
            {/* row  Job Date & Users to Offer Contracts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Start Date <span className="text-blue-500">ℹ️</span>
              </label>
              <p className="text-gray-400 text-sm mb-2">
                Set the date Freelancer is to start
              </p>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg"
                placeholder="Date"
              />
            </div>
              <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
              Select User <span className="text-blue-500">ℹ️</span>
              </label>
              <p className="text-gray-400 text-sm mb-2">
              Users to Offer Contracts
              </p>
              <select
                value={users}
                onChange={(e) => setUsers(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg"
              >
              <option>User1</option>
              <option>User2</option>
              <option>User3</option>
              <option>User4</option>
              <option>User5</option>
            </select>
            </div>
           </div>
           
    
            {/* Row with Job Type and Maximum Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Select Job Type */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Select Job Type <span className="text-blue-500">ℹ️</span>
                </label>
                <p className="text-gray-400 text-sm mb-2">
                  Let your recruiter know a bit more about you and what you do
                </p>
                <select className="w-full border border-gray-300 p-3 rounded-lg"
                 value={jobType}
                 onChange={(e) => setJobType(e.target.value)}>
                  <option>Hourly</option>
                  <option>Fixed Time</option>
                  {/* Add your options here */}
                </select>
              </div>
    
              {/* Maximum Budget */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Maximum Budget <span className="text-blue-500">ℹ️</span>
                </label>
                <p className="text-gray-400 text-sm mb-2">
                  Let your recruiter know a bit more about you and what you do
                </p>
                <input
                  type="currency"
                  value={maxBudget}
                 onChange={(e) => setMaxBudget(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  placeholder="$"
                />
              </div>
            {/* Submit Button*/}  
            </div>
    
            <div className="flex flex-row justify-start">
            <div className="submit">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">Submit</button> 
            </div>
    
            <div className="cancel">
            <button className="mt-4 bg-white text-gray-500 px-4 py-2 rounded-full">Cancel</button>
            </div>
            </div>
            
          </form>
          </div>
        </div>
    </div>
  )
}