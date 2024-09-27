// pages/createAbility.js
"use client";
import { useState } from "react";
import axios from "axios";
import Link from 'next/link';
import React from 'react'

export default function CreateAbility() {
  const [roleId, setRoleId] = useState("");
  const [ability, setAbility] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("/api/createAbility", {
        role_id: roleId,
        ability,
      });
      setLoading(false);
      if (response.data.success) {
        setSuccess(null);
        setAbility("");
        setRoleId("");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      setError(null);
    }
  };

  return (

    <div>
    <div className="container mx-auto p-4 ">

    <div className="p-4 sm:p-6 md:p-8 -mt-8 ">
          {/* Title */}
          <h1 className="text-base md:text-2xl font-semibold mb-2 text-gray-800 ">
          Create
          </h1>
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center mb-10 sm:mt-4">
            <Link href="/updateability"><span className="text-sm sm:text-base text-gray-400">Edit</span></Link>
            <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
            <Link href="/viewabilities"><span className="text-sm sm:text-base text-gray-400">View</span></Link>
            <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
            <span className="text-2xl sm:text-base text-blue-500 font-medium whitespace-nowrap">
              Create Ability
            </span>
          </div>
        </div>
    
          <div className="max-w-full  bg-white p-6 shadow-lg rounded-lg -mt-10">
            <h1 className="text-xl md:text-2 font-semibold mb-2 whitespace-nowrap">Description</h1>
            <p className="text-gray-500 mb-6">
              Figma ipsum component variant main layer. Slice draft horizontal image undo flatten pen pen rotate create. Star plugin content polygon font link library prototype.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
    
            {/* role ID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Role Id <span className="text-blue-500"></span>
              </label>
              <p className="text-gray-400 text-sm mb-2">
                Input the role id For the ability
              </p>
              <input
                type="text"
                value={roleId}
                onChange={(e) => setRoleId(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg"
                placeholder="Role ID"
              />
            </div> 
              <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
               Ability <span className="text-blue-500"></span>
              </label>
              <p className="text-gray-400 text-sm mb-2">
              fill in the Ability
              </p>
              <input
                type="text"
                name="ability"  
                value={ability}
                onChange={(e) => setAbility(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
              {/* <option>User1</option>
              <option>User2</option>
              <option>User3</option>
              <option>User4</option>
              <option>User5</option>
            </select> */}
            </div>
           </div>

    
            <div className="flex flex-row justify-start">
            <div className="Create">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">Create</button> 
            </div>
    
            <div className="cancel">
            <button className="mt-4 bg-white text-gray-500 px-4 py-2 rounded-full">Cancel</button>
            </div>
            </div>
            
          </form>
          </div>
        </div>
    </div>

    // <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
    //   <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
    //     <h2 className="text-2xl font-semibold text-center mb-4">Create Ability</h2>
    //     {error && <p className="text-red-500 mb-4">{error}</p>}
    //     {success && <p className="text-green-500 mb-4">{success}</p>}

    //     <form onSubmit={handleSubmit} className="space-y-4">
    //       <div>
    //         <label htmlFor="roleId" className="block text-sm font-medium text-gray-700">
    //           Role ID
    //         </label>
    //         <input
    //           type="text"
    //           id="roleId"
    //           value={roleId}
    //           onChange={(e) => setRoleId(e.target.value)}
    //           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //           placeholder="Enter Role ID"
    //           required
    //         />
    //       </div>

    //       <div>
    //         <label htmlFor="ability" className="block text-sm font-medium text-gray-700">
    //           Ability
    //         </label>
    //         <input
    //           type="text"
    //           id="ability"
    //           value={ability}
    //           onChange={(e) => setAbility(e.target.value)}
    //           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //           placeholder="Enter Ability"
    //           required
    //         />
    //       </div>

    //       <div>
    //         <button
    //           type="submit"
    //           className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           disabled={loading}
    //         >
    //           {loading ? "Creating..." : "Create Ability"}
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}
