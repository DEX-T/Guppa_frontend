"use client";
import React, { useState } from "react";
import {useEffect} from 'react';

import Link from "next/link";

// Sample abilities data
const abilities = [
  { id: 1, ability: "manage_users", roleId: 1, date: "2023-09-01", status: "Active" },
  { id: 2, ability: "edit_posts", roleId: 2, date: "2023-09-02", status: "Active" },
  { id: 3, ability: "delete_posts", roleId: 3, date: "2023-09-03", status: "Active" },
  { id: 4, ability: "view_reports", roleId: 4, date: "2023-09-04", status: "Active" },
  { id: 5, ability: "manage_roles", roleId: 5, date: "2023-09-05", status: "Active" },
  { id: 6, ability: "edit_profile", roleId: 6, date: "2023-09-06", status: "Active" },
  { id: 7, ability: "delete_account", roleId: 7, date: "2023-09-07", status: "Deactivated" },
];

function ViewAbility() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [abilitiesPerPage] = useState(5);
  const [filteredAbilities, setFilteredAbilities] = useState(abilities);

  // Search filter handler
  const handleSearch = () => {
    const searchResults = abilities.filter((item) => {
      const searchLowerCase = searchTerm.toLowerCase();
      // Check if search term is a number or a string
      if (!isNaN(Number(searchTerm))) {
        // If it's a number, filter by ID
        return item.id === Number(searchTerm);
      } else {
        // If it's a string, filter by ability name
        return item.ability.toLowerCase().includes(searchLowerCase);
      }
    });

    setFilteredAbilities(searchResults);
    setCurrentPage(1); // Reset to the first page after search
  };

  // Effect to reset the list when search input is cleared
  useEffect(() => {
    if (searchTerm === "") {
      const indexOfLastAbility = currentPage * abilitiesPerPage;
      const indexOfFirstAbility = indexOfLastAbility - abilitiesPerPage;
      const currentAbilities = abilities.slice(indexOfFirstAbility, indexOfLastAbility);
      setFilteredAbilities(currentAbilities);
    }
  }, [searchTerm, currentPage, abilitiesPerPage]);

  // Pagination logic
  const indexOfLastAbility = currentPage * abilitiesPerPage;
  const indexOfFirstAbility = indexOfLastAbility - abilitiesPerPage;
  const currentAbilities = filteredAbilities.slice(indexOfFirstAbility, indexOfLastAbility);

  const totalPages = Math.ceil(filteredAbilities.length / abilitiesPerPage);

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

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = (id: number) => {
    const updatedAbilities = filteredAbilities.filter((item) => item.id !== id);
    setFilteredAbilities(updatedAbilities);
  };

  return (
    <div>
      <div className="px-4 py-6 sm:px-6 lg:px-8 pt-0">
        <h1 className="text-base md:text-2xl font-semibold mb-2 text-gray-800 ">
          Abilities
        </h1>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center mb-6 sm:mt-4">
          <Link href="/createability">
            <span className="text-sm sm:text-base text-gray-400">Create</span>
          </Link>
          <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
          <Link href="/editability">
            <span className="text-sm sm:text-base text-gray-400">Edit</span>
          </Link>
          <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
          <span className="text-2xl sm:text-base text-blue-500 font-medium whitespace-nowrap">
            View Abilities
          </span>
        </div>

        {/* Search */}
        <div className="flex items-center mb-4 pb-5">
          <input
            type="text"
            className="border rounded-md px-4 py-2 w-full sm:w-1/3"
            placeholder="Search Ability or ID"
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
              <th className="p-4">ID</th>
              <th className="p-4">Ability</th>
              <th className="p-4">Role ID</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentAbilities.length > 0 ? (
              currentAbilities.map((ability) => (
                <tr
                  key={ability.id}
                  className="border-t hover:bg-gray-50 transition duration-200"
                >
                  <td className="p-4">{ability.id}</td>
                  <td className="p-4">{ability.ability}</td>
                  <td className="p-4">{ability.roleId}</td>
                  <td className="p-4">{ability.date}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        ability.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {ability.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDelete(ability.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  No abilities found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Mobile Responsive View */}
        <div className="md:hidden space-y-4">
          {currentAbilities.length > 0 ? (
            currentAbilities.map((ability) => (
              <div
                key={ability.id}
                className="bg-white border rounded-lg p-4 space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">ID:</span>
                  <span>{ability.id}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Role ID:</span>
                  <span>{ability.roleId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Ability:</span>
                  <span>{ability.ability}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Date:</span>
                  <span>{ability.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Status:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      ability.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {ability.status}
                  </span>
                </div>
                <div className="flex justify-end">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(ability.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No abilities found</p>
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

export default ViewAbility;
