"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const roles = [
  { id: 1, role: "Freelancer", date: "10/09/2024", status: "Active" },
  { id: 2, role: "Freelancer", date: "10/09/2024", status: "Active" },
  { id: 3, role: "Freelancer", date: "10/09/2024", status: "Active" },
  { id: 4, role: "Freelancer", date: "10/09/2024", status: "Active" },
  { id: 5, role: "Freelancer", date: "10/09/2024", status: "Active" },
  { id: 6, role: "Freelancer", date: "10/09/2024", status: "Active" },
  { id: 7, role: "Recruiter", date: "10/09/2024", status: "Deactivated" },
  { id: 8, role: "Recruiter", date: "10/09/2024", status: "Deactivated" },
  { id: 9, role: "Freelancer", date: "10/09/2024", status: "Active" },
  { id: 10, role: "Freelancer", date: "10/09/2024", status: "Active" },
  { id: 11, role: "Freelancer", date: "10/09/2024", status: "Active" },
  { id: 12, role: "Freelancer", date: "10/09/2024", status: "Active" },
];

function ViewRoles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rolesPerPage] = useState(5);
  const [filteredRoles, setFilteredRoles] = useState(roles);

  // Search filter handler
  const handleSearch = () => {
    const searchResults = roles.filter((role) =>
      role.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRoles(searchResults);
    setCurrentPage(1); // Reset to the first page after search
  };

  // Pagination logic
  const indexOfLastRole = currentPage * rolesPerPage;
  const indexOfFirstRole = indexOfLastRole - rolesPerPage;
  const currentRoles = filteredRoles.slice(indexOfFirstRole, indexOfLastRole);

  const totalPages = Math.ceil(filteredRoles.length / rolesPerPage);

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

  const handleDelete = (id:any) => {
    const updatedRoles = filteredRoles.filter((role) => role.id !== id);
    setFilteredRoles(updatedRoles);
  };

  return (
    <div>
      <div className="px-4 py-6 sm:px-6 lg:px-8 pt-0">
        <h1 className="text-base md:text-2xl font-semibold mb-2 text-gray-800 ">
          Roles
        </h1>
        {/* Breadcrumb Navigation */}
        <div className="flex items-center mb-6 sm:mt-4 ">
          <Link href="/createroles">
            <span className="text-sm sm:text-base text-gray-400">Create</span>
          </Link>
          <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
          <Link href="/editroles">
            <span className="text-sm sm:text-base text-gray-400">Edit</span>
          </Link>
          <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
          <span className="text-2xl sm:text-base text-blue-500 font-medium whitespace-nowrap">
            View Roles
          </span>
        </div>

        <div className="flex items-center mb-4 pb-5">
          <input
            type="text"
            className="border rounded-md px-4 py-2 w-full sm:w-1/3"
            placeholder="Search Role"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Search
          </button>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto px-4 py-6 sm:px-6 lg:px-8 -mt-10">
        {/* Visible on larger screens */}
        <table className="min-w-full bg-white border rounded-lg hidden md:table">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="p-4">Role ID</th>
              <th className="p-4">Role</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRoles.length > 0 ? (
              currentRoles.map((role) => (
                <tr
                  key={role.id}
                  className="border-t hover:bg-gray-50 transition duration-200"
                >
                  <td className="p-4">{role.id}</td>
                  <td className="p-4">{role.role}</td>
                  <td className="p-4">{role.date}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        role.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {role.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDelete(role.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No roles found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Mobile Responsive View */}
        <div className="md:hidden space-y-4">
          {currentRoles.length > 0 ? (
            currentRoles.map((role) => (
              <div
                key={role.id}
                className="bg-white border rounded-lg p-4 space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Role ID:</span>
                  <span>{role.id}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Role:</span>
                  <span>{role.role}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Date:</span>
                  <span>{role.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Status:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      role.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {role.status}
                  </span>
                </div>
                <div className="flex justify-end">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(role.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No roles found</p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`text-gray-600 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            ← Previous
          </button>
          <div className="space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => goToPage(index + 1)}
                className={`px-3 py-1 text-gray-600 border rounded-md ${
                  currentPage === index + 1 ? "bg-gray-200" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`text-gray-600 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewRoles;
