"use client";
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';


export default function postjob() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [jobType, setJobType] = useState('');
  const [maxHours, setMaxHours] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ jobTitle, jobDescription, skills, jobType, maxHours });
  };

  return (


    <div className="container mx-auto p-4">

<div className="p-4 sm:p-6 md:p-8">
      {/* Title */}
      <h1 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
        Post a Job
      </h1>
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center mt-2 sm:mt-4">
        <Link href="/dashboard"><span className="text-sm sm:text-base text-gray-500">Dashboard</span></Link>
        <span className="mx-1 sm:mx-2 text-gray-500">{'>'}</span>
        <span className="text-sm sm:text-base text-blue-500 font-medium">
          Post a Job
        </span>
      </div>
    </div>

      <div className="max-w-full mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-xl md:text-2 font-semibold mb-2 whitespace-nowrap">Create A Job Post</h1>
        <p className="text-gray-500 mb-6">
          Figma ipsum component variant main layer. Slice draft horizontal image undo flatten pen pen rotate create. Star plugin content polygon font link library prototype.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">

        {/* Job Title */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Job Title <span className="text-blue-500">ℹ️</span>
          </label>
          <p className="text-gray-400 text-sm mb-2">
            Let your recruiter know a bit more about you and what you do
          </p>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg"
            placeholder="Enter Job Title"
          />
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Job Description <span className="text-blue-500">ℹ️</span>
          </label>
          <p className="text-gray-400 text-sm mb-2">
            Let your recruiter know a bit more about you and what you do
          </p>
          <textarea
            className="w-full h-40 border border-gray-300 p-3 rounded-lg"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Enter Job Description"
          ></textarea>
        </div>

        {/* Select Freelancer Skill */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Select Freelancer Skill <span className="text-blue-500">ℹ️</span>
          </label>
          <p className="text-gray-400 text-sm mb-2">
            Let your recruiter know a bit more about you and what you do
          </p>
          <select
           className="w-full border border-gray-300 p-3 rounded-lg"
           value={skills}
           onChange={(e) => setSkills(e.target.value)}
           >
            <option>Select Multiple</option>
            <option>Select Multiple</option>
            <option>Select Multiple</option>
            <option>Select Multiple</option>
            <option>Select Multiple</option>
            {/* Add your options here */}
          </select>
        </div>

        {/* Row with Job Type and Maximum Hours */}
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

          {/* Maximum Hours Per Week */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Maximum Hours Per Week <span className="text-blue-500">ℹ️</span>
            </label>
            <p className="text-gray-400 text-sm mb-2">
              Let your recruiter know a bit more about you and what you do
            </p>
            <input
              type="number"
              value={maxHours}
             onChange={(e) => setMaxHours(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg"
              placeholder="/Hr"
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
  );
}
