 "use client";
import React from 'react'
import  { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';


const UserList = ({ users, onClose }:any) => (
  <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl z-50 overflow-y-auto">
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
    { name: '', role: '', image: '' },
    { name: '', role: '', image: '' },
    { name: '', role: '', image: '' },
    { name: '', role: '', image: '' },
    { name: '', role: '', image: '' },
    { name: '', role: '', image: '' },
    // Add more users as needed
  ];

  const recentUsers = users.slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto h-80"></div>

      
  )
}

export default recentusers
