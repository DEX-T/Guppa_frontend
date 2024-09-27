import React from 'react'
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import AdminSidebar from "@/components/adminsidebar/adminsidebar"; // Correct the import path
import AdminHeader from "@/components/adminheader/adminheader"; // Correct the import path
import RoleConfiguration from "@/components/configuration/roleconfiguration"
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
       
       <RoleConfiguration />
       
        <div className="flex flex-col lg:flex-row gap-4 p-4">
          <div className="flex-1 min-w-0">
         </div>
       <div className="flex-1 min-w-0">
        
       </div>
        <div className="flex-1 min-w-0">
        
        </div>
       </div>
       
      </main>
    </div>
  </div>
        )   
  
}
