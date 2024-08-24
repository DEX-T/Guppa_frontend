import React from 'react'
import SuccessfullInvite from "@/components/successinvite/successinvite"; // Correct the import path



export default function page() {
  return (
    <div className="flex-1 p-6 bg-gray-100">
    {/* Sidebar */}
    <SuccessfullInvite />
  </div>
  )
}
