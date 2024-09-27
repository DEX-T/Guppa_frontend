import React from 'react'
import { Inter } from "next/font/google";

import AdminSidebar from "@/components/adminsidebar/adminsidebar"; // Correct the import path
import AdminHeader from "@/components/adminheader/adminheader"; 
import AdminUsers from "@/components/adminusers/adminusers"; 


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
        <AdminUsers />
       
        
       
      </main>
    </div>
  </div>
        )   
  
}

