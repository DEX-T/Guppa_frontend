"use client";
import React, { useState } from "react";
import Link from "next/link";


const UpdatePrefix = () => {
  const [prefixId, setPrefixId] = useState("");
  const [prefix, setPrefix] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    if (!prefix || !prefixId) {
      setError("Both Prefix ID and Prefix are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/updateprefix", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prefix: prefix,
          prefix_id: prefixId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Prefix updated successfully!");
        setPrefix("");
        setPrefixId("");
      } else {
        setError(data.message || "Error updating Prefix.");
      }
    } catch (error: any) {
      setError("Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (

    <div>

    <h1 className="text-base md:text-2xl font-semibold mb-2 text-gray-800 ">
    Prefixes
     </h1>

     <div className="flex items-center mb-6 sm:mt-4">
          <Link href="/createprefix">
            <span className="text-sm sm:text-base text-gray-400">Create</span>
          </Link>
          <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
          <Link href="/viewprefix">
            <span className="text-sm sm:text-base text-gray-400">View</span>
          </Link>
          <span className="mx-1 sm:mx-2 text-gray-400">{'>'}</span>
          <span className="text-2xl sm:text-base text-blue-500 font-medium whitespace-nowrap">
             Update Prefixes
          </span>
        </div>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-lg shadow-lg">
      <h1 className="text-1g font-bold text-gray-800 mb-6 text-center">
        Update Prefix
      </h1>

      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
          {successMessage}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{error}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Prefix ID
          </label>
          <input
            type="text"
            value={prefixId}
            onChange={(e) => setPrefixId(e.target.value)}
            placeholder="Enter Prefix ID"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Prefix
          </label>
          <input
            type="text"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            placeholder="Enter New Prefix"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Prefix"}
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdatePrefix;
