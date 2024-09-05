"use client";
import React from 'react'
import  { useState } from 'react';
// import { Clock, X } from 'lucide-react';
import { Clock, X } from "react-feather";



interface Ticket {
  id: number;
  date: string;
  issue: string;
  author: string;
  timeAgo: string;
}

const tickets: Ticket[] = [
  {
    id: 1,
    date: "1, November 2024",
    issue: "Having an issue with our payment, please sort out",
    author: "Ikechukwu Iban",
    timeAgo: "10 mins ago",
  },
  {
    id: 2,
    date: "1, November 2024",
    issue: "Having an issue with our payment, please sort out",
    author: "Ikechukwu Iban",
    timeAgo: "10 mins ago",
  },
  // Add more tickets as needed
];

function support() {
  const [showAll, setShowAll] = useState(false);
 
  return (
    <div className="bg-white rounded-lg shadow p-6 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-1">
        <h2 className="text-xl font-bold text-gray-900">Support</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-gray-500 hover:text-blue-600 focus:outline-none"
        >
          See All
        </button>
      </div>

      {/* Ticket List */}
      <div className="mt-4 space-y-4">
        {tickets.slice(0, showAll ? tickets.length : 2).map((ticket) => (
          <div
            key={ticket.id}
            className="bg-gray-50 rounded-lg p-4 flex flex-col h-full"
          >
            <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-fit mb-2">
              {ticket.date}
            </div>
            <p className="text-gray-900 font-semibold mb-2 flex-grow">
              {ticket.issue}
            </p>
            <div className="flex justify-between items-start text-gray-500 text-sm">
              <div className="flex items-center">
                <span className="mr-2">{ticket.author}</span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>{ticket.timeAgo}</span>
                </span>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-3 rounded text-sm">
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See All Tab */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-gray-100 p-6 transform transition-transform duration-300 ease-in-out ${
          showAll ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">All Support Tickets</h3>
          <button
            onClick={() => setShowAll(false)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>
        <div className="overflow-y-auto h-full space-y-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white rounded-lg p-4 shadow-sm"
            >
              <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-fit mb-2">
                {ticket.date}
              </div>
              <p className="text-gray-900 font-semibold mb-2">
                {ticket.issue}
              </p>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <div className="flex items-center">
                  <span className="mr-2">{ticket.author}</span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{ticket.timeAgo}</span>
                  </span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-3 rounded text-sm">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default support

