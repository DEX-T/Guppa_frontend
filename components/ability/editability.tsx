"use client";
import { useState } from 'react';
import Link from 'next/link';;
import React from 'react'

function editability() {
    const [roleId, setRoleId] = useState("");
    const [ability, setAbility] = useState("");
    const [abilityId, setAbilityId] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    
    const handleSubmit = (e:any) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log({ roleId, ability, abilityId, error, success, loading });
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
              <Link href="/createability"><span className="text-sm sm:text-base text-gray-400">Create</span></Link>
              <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
              <Link href="/viewability"><span className="text-sm sm:text-base text-gray-400">View</span></Link>
              <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
              <span className="text-2xl sm:text-base text-blue-500 font-medium whitespace-nowrap">
                Edit Ability
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
                  New Ability <span className="text-blue-500"></span>
                </label>
                <p className="text-gray-400 text-sm mb-2">
                Figma ipsum component variant main layer.
                </p>
                <input
                  type="text"
                  value={ability}
                  onChange={(e) => setAbility(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  placeholder="New Ability"
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
                  value={roleId}
                  onChange={(e) => setRoleId(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg"
                >
                <option>Id-1</option>
                <option>Id-2</option>
                <option>Id-3</option>
                <option>Id-4</option>
                <option>Id-5</option>
              </select>

              </div>
             </div>
             
      
              {/* Row with Role Type  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Select Role Type */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                   Select Ability ID<span className="text-blue-500"></span>
                  </label>
                  <p className="text-gray-400 text-sm mb-2">
                  Figma ipsum component variant main layer.
                  </p>
                  <select
                  value={abilityId}
                  onChange={(e) => setAbilityId(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg"
                >
                     <option>Id-1</option>
                     <option>Id-2</option>
                     <option>Id-3</option>
                     <option>Id-4</option>
                     <option>Id-5</option>
                    </select>
                </div>
      
              {/* Update Button*/}  
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

export default editability
