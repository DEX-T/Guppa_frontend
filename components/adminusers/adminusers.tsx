"use client";
import React from 'react'
import { useState, useEffect } from 'react';


const users = [
    { name: 'AJ Wilson', role: 'Freelancer', location: 'Nigeria', gigs: 21, status: 'Active' },
    { name: 'AJ Wilson', role: 'Freelancer', location: 'Nigeria', gigs: 21, status: 'Active' },
    { name: 'AJ Wilson', role: 'Freelancer', location: 'Nigeria', gigs: 21, status: 'Active' },
    { name: 'AJ Wilson', role: 'Freelancer', location: 'Nigeria', gigs: 21, status: 'Active' },
    { name: 'AJ Wilson', role: 'Freelancer', location: 'Nigeria', gigs: 21, status: 'Active' },
    { name: 'AJ Wilson', role: 'Freelancer', location: 'Nigeria', gigs: 21, status: 'Active' },
    { name: 'AJ Wilson', role: 'Recruiter', location: 'Nigeria', gigs: 21, status: 'Deactivated' },
    { name: 'AJ Wilson', role: 'Recruiter', location: 'Nigeria', gigs: 21, status: 'Deactivated' },
    { name: 'AJ Wilson', role: 'Freelancer', location: 'Nigeria', gigs: 21, status: 'Active' },
    { name: 'AJ Wilson', role: 'Freelancer', location: 'Nigeria', gigs: 21, status: 'Active' },
    { name: 'AJ Wilson', role: 'Freelancer', location: 'Nigeria', gigs: 21, status: 'Active' },
    { name: 'AJ Wilson', role: 'Freelancer', location: 'Nigeria', gigs: 21, status: 'Active' },

    // ... Add more users here
  ];

function adminusers() {
    
      
        const [searchTerm, setSearchTerm] = useState('');
        const [currentPage, setCurrentPage] = useState(1);
        const [usersPerPage] = useState(5);
        const [filteredUsers, setFilteredUsers] = useState(users);
      
        // Handle search filtering
        useEffect(() => {
          const searchResults = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredUsers(searchResults);
          setCurrentPage(1); // Reset to the first page after search
        }, [searchTerm]);
      
        // Pagination logic
        const indexOfLastUser = currentPage * usersPerPage;
        const indexOfFirstUser = indexOfLastUser - usersPerPage;
        const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
      
        const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
      
        const handleNextPage = () => {
          if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
          }
        };
      
        const handlePreviousPage = () => {
          if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
          }
        };
      
        const goToPage = (pageNumber:any) => {
          setCurrentPage(pageNumber);
        };
  return (
    <div>
            <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="border rounded-md px-4 py-2 w-full sm:w-1/3"
          placeholder="Search User"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="p-4">User</th>
              <th className="p-4">Role</th>
              <th className="p-4">Location</th>
              <th className="p-4">Total Gigs</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user, index) => (
                <tr key={index} className="border-t hover:bg-gray-50 transition duration-200">
                  <td className="p-4 flex items-center space-x-3">
                    <img
                      src="/avatar-placeholder.png" // Replace with user image path
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{user.name}</span>
                  </td>
                  <td className="p-4">{user.role}</td>
                  <td className="p-4">{user.location}</td>
                  <td className="p-4">{user.gigs}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        user.status === 'Active'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12m-6-6v12" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`text-gray-600 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          ← Previous
        </button>
        <div className="space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => goToPage(index + 1)}
              className={`px-3 py-1 text-gray-600 border rounded-md ${
                currentPage === index + 1 ? 'bg-gray-200' : ''
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`text-gray-600 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next →
        </button>
      </div>
    </div>
    </div>
  )
}
export default adminusers
