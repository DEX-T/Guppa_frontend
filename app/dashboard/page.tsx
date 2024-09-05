import React from 'react'
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import AdminSidebar from "@/components/adminsidebar/adminsidebar"; // Correct the import path
import AdminHeader from "@/components/adminheader/adminheader"; // Correct the import path
import AdminDashboard from "@/components/admindashboard/admindashboard"; // Correct the import path
import Support from "@/components/support/support"; // Correct the import path
import RecentUsers from "@/components/recentusers/recentusers"; // Correct the import path
import EmptyComponent from "@/components/emptycomponent/emptycomponent"; // Correct the import path
// import Header from "@/components/header/header";   // Correct the import path

const inter = Inter({ subsets: ['latin'] });


export default function page() {
  return (
    
    <div className="flex h-screen">
    {/* AdminSidebar */}
    <AdminSidebar />

    {/* Main Content Area */}
    <div className="flex-1 flex flex-col">
      {/* Header */}

      <AdminHeader />
     

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <AdminDashboard />
       
        <div className="flex flex-col lg:flex-row gap-4 p-4">
          <div className="flex-1 min-w-0">
            <Support />
         </div>
       <div className="flex-1 min-w-0">
        <RecentUsers />
       </div>
        <div className="flex-1 min-w-0">
        <EmptyComponent />
        </div>
       </div>
       
      </main>
    </div>
  </div>
        )   
  
}
