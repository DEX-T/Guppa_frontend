"use client";
import React from 'react'
import  { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';


const UserList = ({ users, onClose }:any) => (
  <div className={`fixed inset-y-0 right-0 w-full max-w-md bg-gray-100 p-6 transform transition-transform duration-300 ease-in-out z-50 ${
    onClose ? "translate-x-0" : "translate-x-full"
  }`}>
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Users</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      <ul className="space-y-4">
        {users.map((user:any, index:any) => (
          <li key={index} className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <Image
                src={user.image}
                alt={user.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="flex-grow">
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">{user.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);


function recentusers() {

  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const users = [
    { name: 'Jennifer Udu', role: 'Freelancer', image: '/landscape-placeholder.svg' },
    { name: 'Lucas Jacobs', role: 'Freelancer', image: '/landscape-placeholder.svg' },
    { name: 'Richard Jeff', role: 'Freelancer', image: '/landscape-placeholder.svg' },
    { name: 'Emma Watson', role: 'Designer', image: '/landscape-placeholder.svg' },
    { name: 'John Smith', role: 'Developer', image: '/landscape-placeholder.svg' },
    { name: 'Dexree Robert', role: 'Developer', image: '/landscape-placeholder.svg' },
    // Add more users as needed
  ];

  const recentUsers = users.slice(0, 5);

  return (
    <div>
        <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto">
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">Recent Users</h3>
          
          <button 
            className="text-gray-500 hover:text-blue-600"
            onClick={() => setIsTrayOpen(true)}
          >
            See All
          </button>
        </div>
      <ul className="space-y-4">
          {recentUsers.map((user, index) => (
         <li key={index} className="flex items-center justify-between ">
          <div className="flex items-center space-x-3">
          <div className="w-10 h-10 relative">
          <Image
            src={user.image}
            alt={''}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <p className="font-medium break-words">{user.name}</p>
      </div>
      <p className="text-sm text-gray-500">{user.role}</p>
    </li>
  ))}
</ul>
        </div>
        <div className="flex justify-end mt-4">
  <button 
    className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition-colors"
    onClick={() => setIsTrayOpen(true)}
  >
    View All Users
  </button>
</div>
  
      {isTrayOpen && <UserList users={users} onClose={() => setIsTrayOpen(false)} />}
    </div>
    </div>
      
  )
}

export default recentusers
