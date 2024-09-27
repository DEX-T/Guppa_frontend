"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

// Sample prefixes data
const prefixes = [
    { id: 1, prefix: "PRE1", status: "Active", date: "2023-09-01" },
    { id: 2, prefix: "PRE2", status: "Deactivated", date: "2023-09-02" },
    { id: 3, prefix: "PRE3", status: "Active", date: "2023-09-03" },
    { id: 4, prefix: "PRE4", status: "Deactivated", date: "2023-09-04" },
    { id: 5, prefix: "PRE5", status: "Active", date: "2023-09-05" },
    { id: 6, prefix: "PRE6", status: "Deactivated", date: "2023-09-06" },
    { id: 7, prefix: "PRE7", status: "Active", date: "2023-09-07" },
];

function ViewPrefix() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [prefixesPerPage] = useState(5);
  const [filteredPrefixes, setFilteredPrefixes] = useState(prefixes);

  // Search filter handler
  const handleSearch = () => {
    const searchResults = prefixes.filter((item) => {
      const searchLowerCase = searchTerm.toLowerCase();
      // Check if search term is a number or a string
      if (!isNaN(Number(searchTerm))) {
        // If it's a number, filter by ID
        return item.id === Number(searchTerm);
      } else {
        // If it's a string, filter by prefix
        return item.prefix.toLowerCase().includes(searchLowerCase);
      }
    });

    setFilteredPrefixes(searchResults);
    setCurrentPage(1); // Reset to the first page after search
  };

  // Effect to reset the list when search input is cleared
  useEffect(() => {
    if (searchTerm === "") {
      const indexOfLastPrefix = currentPage * prefixesPerPage;
      const indexOfFirstPrefix = indexOfLastPrefix - prefixesPerPage;
      const currentPrefixes = prefixes.slice(indexOfFirstPrefix, indexOfLastPrefix);
      setFilteredPrefixes(currentPrefixes);
    }
  }, [searchTerm, currentPage, prefixesPerPage]);

  // Pagination logic
  const indexOfLastPrefix = currentPage * prefixesPerPage;
  const indexOfFirstPrefix = indexOfLastPrefix - prefixesPerPage;
  const currentPrefixes = filteredPrefixes.slice(indexOfFirstPrefix, indexOfLastPrefix);

  const totalPages = Math.ceil(filteredPrefixes.length / prefixesPerPage);

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
    const updatedPrefixes = filteredPrefixes.filter((item) => item.id !== id);
    setFilteredPrefixes(updatedPrefixes);
  };

  return (
    <div>
      

      {/* Responsive Table */}
<div className="overflow-x-auto px-4 py-14 sm:px-6 lg:px-8 -mt-10 rounded-lg ml-auto">
  {/* Visible on larger screens */}
  <table className="min-w-full bg-white rounded-xl hidden md:table shadow-lg">
    <thead>
      <tr className="text-left text-gray-600">
        <th className="p-4">ID</th>
        <th className="p-4">Prefix</th>
        <th className="p-4">Status</th>
        <th className="p-4">Date</th> {/* New Date Column */}
        <th className="p-4">Action</th>
      </tr>
    </thead>
    <tbody>
      {currentPrefixes.length > 0 ? (
        currentPrefixes.map((prefix) => (
          <tr
            key={prefix.id}
            className="border-t hover:bg-gray-50 transition duration-200"
          >
            <td className="p-4">{prefix.id}</td>
            <td className="p-4">{prefix.prefix}</td>
            <td className="p-4">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  prefix.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {prefix.status}
              </span>
            </td>
            <td className="p-4">{prefix.date}</td> {/* Displaying the Date */}
            <td className="p-4">
              <button
                className="text-red-600 hover:text-red-800"
                onClick={() => handleDelete(prefix.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5} className="p-4 text-center text-gray-500">
            No prefixes found
          </td>
        </tr>
      )}
    </tbody>
  </table>

  {/* Mobile Responsive View */}
  <div className="md:hidden space-y-4">
    {currentPrefixes.length > 0 ? (
      currentPrefixes.map((prefix) => (
        <div
          key={prefix.id}
          className="bg-white border rounded-lg p-4 space-y-2"
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold">ID:</span>
            <span>{prefix.id}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Prefix:</span>
            <span>{prefix.prefix}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Status:</span>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                prefix.status === "Active"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {prefix.status}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Date:</span>
            <span>{prefix.date}</span>
          </div>
          <div className="flex justify-end">
            <button
              className="text-red-600 hover:text-red-800"
              onClick={() => handleDelete(prefix.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500">No prefixes found</p>
    )}
  </div>


        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
         
          <div className="space-x-2">
           
        <Link href="/viewprefix">
            <span className="text-sm sm:text-base text-gray-400">View more</span>
          </Link>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPrefix;
