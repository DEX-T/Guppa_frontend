import React from 'react'
import Sidebar from "@/components/sidebar/sidebar"; // Correct the import path
import Header from "@/components/header/header";   // Correct the import path
import PostJob from "@/components/postjob/postjob";

export default function page() {
  return (
    <div className="flex h-screen">
    {/* Sidebar */}
      <Sidebar /> 

    {/* Main Content Area */}
    <div className="flex-1 flex flex-col">
      {/* Header */}
       <Header /> 

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {/* PostJob */}
      <PostJob />
        
      </main>
    </div>
  </div>
  )
}
