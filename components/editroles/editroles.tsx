"use client";
import { useState } from 'react';
import Link from 'next/link';;
import React from 'react'

function createroles() {

    const [startDate, setStartDate] = useState('');
    const [jobType, setJobType] = useState('');
    const [maxBudget, setMaxBudget] = useState('');
    const [role, setRole] = useState('');
    const [roleid, setRoleId] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState('');

    
    const handleSubmit = (e:any) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log({ startDate, users, role, jobType, maxBudget, email });
    };
    return (
      <div>
      <div className="container mx-auto p-4 ">
  
      <div className="p-4 sm:p-6 md:p-8 -mt-8 ">
            {/* Title */}
            <h1 className="text-base md:text-2xl font-semibold mb-2 text-gray-800 ">
            Edit
            </h1>
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center mb-10 sm:mt-4">
              <Link href="/createroles"><span className="text-sm sm:text-base text-gray-400">Create</span></Link>
              <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
              <Link href="/viewroles"><span className="text-sm sm:text-base text-gray-400">View</span></Link>
              <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
              <span className="text-2xl sm:text-base text-blue-500 font-medium whitespace-nowrap">
                Edit roles
              </span>
            </div>
          </div>
      
            <div className="max-w-full  bg-white p-6 shadow-lg rounded-lg -mt-10">
              <h1 className="text-xl md:text-2 font-semibold mb-2 whitespace-nowrap">Description</h1>
              <p className="text-gray-500 mb-6">
                Figma ipsum component variant main layer. Slice draft horizontal image undo flatten pen pen rotate create. Star plugin content polygon font link library prototype.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
      
              {/* row  Job Date & Users to Offer Contracts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Username <span className="text-blue-500"></span>
                </label>
                <p className="text-gray-400 text-sm mb-2">
                  Input the your preffered username
                </p>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  placeholder="Email"
                />
              </div> 
                <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                 Select Role ID <span className="text-blue-500"></span>
                </label>
                <p className="text-gray-400 text-sm mb-2">
                Select current role
                </p>
                <select  
                  value={roleid}
                  onChange={(e) => setRoleId(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg"
                >
                <option>Role1</option>
                <option>Role2</option>
                <option>Role3</option>
                <option>Role4</option>
                <option>Role5</option>
              </select>

              </div>
             </div>
             
      
              {/* Row with Role Type  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Select Role Type */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                   New Role <span className="text-blue-500"></span>
                  </label>
                  <p className="text-gray-400 text-sm mb-2">
                    Select a new preffered role
                  </p>
                  <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  placeholder="Role"
                />
                </div>
      
                {/* Maximum Budget */}
                {/* <div className="mb-6">
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
                </div> */}
              {/* Submit Button*/}  
              </div>
      
              <div className="flex flex-row justify-start">
              <div className="Create">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">Update</button> 
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

export default createroles
