import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function JobPostCard() {
  return (
<>
<div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 mb-10">
  <div className="title mb-4 md:mb-0">
    <h2 className="text-xl md:text-2xl font-semibold mb-2">Job Posts</h2>
    <p className="text-gray-500 text-sm whitespace-nowrap">A List of all Jobs Posted By You</p>
  </div>
  <div className="flex justify-end w-full md:w-auto">
    <button className="bg-[#3498DB] text-white py-2 px-4 rounded w-full md:w-auto">
      + Post a Job
    </button>
  </div>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <div className="bg-white shadow rounded-lg p-4">
      <p className="text-gray-500 text-sm mb-2">Posted 2hrs Ago</p>
      <h3 className="text-black font-semibold text-lg mb-2">Searching for a Vetted UI/UX Designer for a short task</h3>
      <p className="text-gray-500 text-sm mb-4">
        Figma ipsum component variant main layer. Slice draft horizontal image undo flatten pen pen rotate create. 
        Star plugin content polygon font link library prototype....
      </p>
      <div className="flex items-center mb-4">
        <div className="flex -space-x-2">
          <img className="w-8 h-8 rounded-full border-2 border-white" src="/avatar1.jpg" alt="" />
          <img className="w-8 h-8 rounded-full border-2 border-white" src="/avatar2.jpg" alt="" />
          <img className="w-8 h-8 rounded-full border-2 border-white" src="/avatar3.jpg" alt="" />
          <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-sm font-medium text-gray-100">
            +3
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-800 font-semibold">$500</span>
        <button className="text-blue-500 font-semibold">View Post</button>
      </div>
    </div>
   
    <div className="bg-white shadow rounded-lg p-4">
      <p className="text-gray-500 text-sm mb-2">Posted 2hrs Ago</p>
      <h3 className="text-black font-semibold text-lg mb-2">Searching for a Vetted UI/UX Designer for a short task</h3>
      <p className="text-gray-500 text-sm mb-4">
        Figma ipsum component variant main layer. Slice draft horizontal image undo flatten pen pen rotate create. 
        Star plugin content polygon font link library prototype....
      </p>
      <div className="flex items-center mb-4">
        <div className="flex -space-x-2">
          <img className="w-8 h-8 rounded-full border-2 border-white" src="/avatar1.jpg" alt="" />
          <img className="w-8 h-8 rounded-full border-2 border-white" src="/avatar2.jpg" alt="" />
          <img className="w-8 h-8 rounded-full border-2 border-white" src="/avatar3.jpg" alt="" />
          <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-sm font-medium text-gray-100">
            +3
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-800 font-semibold">$500</span>
        <button className="text-blue-500 font-semibold">View Post</button>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg p-4">
      <p className="text-gray-500 text-sm mb-2">Posted 2hrs Ago</p>
      <h3 className="text-black font-semibold text-lg mb-2">Searching for a Vetted UI/UX Designer for a short task</h3>
      <p className="text-gray-500 text-sm mb-4">
        Figma ipsum component variant main layer. Slice draft horizontal image undo flatten pen pen rotate create. 
        Star plugin content polygon font link library prototype....
      </p>
      <div className="flex items-center mb-4">
        <div className="flex -space-x-2">
          <img className="w-8 h-8 rounded-full border-2 border-white" src="/avatar1.jpg" alt="" />
          <img className="w-8 h-8 rounded-full border-2 border-white" src="/avatar2.jpg" alt="" />
          <img className="w-8 h-8 rounded-full border-2 border-white" src="/avatar3.jpg" alt="" />
          <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-sm font-medium text-gray-100">
            +3
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-800 font-semibold">$500</span>
        <button className="text-blue-500 font-semibold">View Post</button>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg p-4">
      <p className="text-gray-500 text-sm mb-2">Posted 2hrs Ago</p>
      <h3 className="text-black font-semibold text-lg mb-2">Searching for a Vetted UI/UX Designer for a short task</h3>
      <p className="text-gray-500 text-sm mb-4">
        Figma ipsum component variant main layer. Slice draft horizontal image undo flatten pen pen rotate create. 
        Star plugin content polygon font link library prototype....
      </p>
      <div className="flex items-center mb-4">
        <div className="flex -space-x-2">
          <img className="w-8 h-8 rounded-full border-2 border-white" src="/avatar1.jpg" alt="" />
          <img className="w-8 h-8 rounded-full border-2 border-white" src="/avatar2.jpg" alt="" />
          <img className="w-8 h-8 rounded-full border-2 border-white" src="/avatar3.jpg" alt="" />
          <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-sm font-medium text-gray-100">
            +3
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-800 font-semibold">$500</span>
        <button className="text-blue-500 font-semibold">View Post</button>
      </div>
    </div>

  </div>

    </>
);
};
   


