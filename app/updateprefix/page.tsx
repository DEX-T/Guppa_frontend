import React from 'react'
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import AdminSidebar from "@/components/adminsidebar/adminsidebar"; // Correct the import path
import AdminHeader from "@/components/adminheader/adminheader"; // Correct the import path
import RoleConfiguration from "@/components/configuration/roleconfiguration";
import UpdatePrefix from "@/components/prefix/updateprefix";
import PrefixPreview from "@/components/prefix/prefixpreview";
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
       
        <div className="flex flex-col lg:flex-row gap-4 pt-2">
            <UpdatePrefix />
          <div className="flex-1 min-w-0">
         </div>
       <div className="flex-1 min-w-[20rem] pt-14">
            <PrefixPreview />
       </div>
        <div className="flex-1 min-w-0">
        
        </div>
       </div>
       
      </main>
    </div>
  </div>
        )   
  
}
