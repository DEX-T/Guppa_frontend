"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

// Sample prefixes data
const prefixes = [
  { id: 1, prefix: "PRE1", status: "Active" },
  { id: 2, prefix: "PRE2", status: "Deactivated" },
  { id: 3, prefix: "PRE3", status: "Active" },
  { id: 4, prefix: "PRE4", status: "Deactivated" },
  { id: 5, prefix: "PRE5", status: "Active" },
  { id: 6, prefix: "PRE6", status: "Deactivated" },
  { id: 7, prefix: "PRE7", status: "Active" },
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
      <div className="px-4 py-6 sm:px-6 lg:px-8 pt-0">
        <h1 className="text-base md:text-2xl font-semibold mb-2 text-gray-800 ">
          Prefixes
        </h1>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center mb-6 sm:mt-4">
          <Link href="/createprefix">
            <span className="text-sm sm:text-base text-gray-400">Create</span>
          </Link>
          <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
          <Link href="/editprefix">
            <span className="text-sm sm:text-base text-gray-400">Edit</span>
          </Link>
          <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
          <span className="text-2xl sm:text-base text-blue-500 font-medium whitespace-nowrap">
            View Prefixes
          </span>
        </div>

        {/* Search */}
        <div className="flex items-center mb-4 pb-5">
          <input
            type="text"
            className="border rounded-md px-4 py-2 w-full sm:w-1/3"
            placeholder="Search Prefix or ID"
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
              <th className="p-4">Prefix</th>
              <th className="p-4">Status</th>
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
                <td colSpan={4} className="p-4 text-center text-gray-500">
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

export default ViewPrefix;
