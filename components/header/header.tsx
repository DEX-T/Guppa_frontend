import React from 'react'
import Image from 'next/image'; 

export default function header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left Section: Bid Points */}
      <div className="flex items-center">
        <Image
          src="/path-to-bid-points-icon.png" // Replace with the actual path
          alt="Bid Points"
          width={24}
          height={24}
          className="mr-2"
        />
        <span className="text-gray-700 font-medium">0 Bid Points</span>
      </div>

      {/* Right Section: Notifications and User Info */}
      <div className="flex items-center">
        {/* Notification Bell */}
        <div className="relative">
          <Image
            src="/path-to-notification-icon.png" // Replace with the actual path
            alt="Notifications"
            width={24}
            height={24}
            className="mr-6"
          />
          <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span>
        </div>

        {/* User Avatar and Status */}
        <div className="flex items-center">
          <Image
            src="/path-to-user-avatar.png" // Replace with the actual path
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="ml-2">
            <span className="text-gray-800 font-semibold">John Doe</span>
            <div className="flex items-center">
              <span className="text-sm text-gray-500">Online</span>
              <span className="ml-1 w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Dropdown Arrow */}
        <div className="ml-2">
          <Image
            src="/path-to-dropdown-arrow.png" // Replace with the actual path
            alt="Dropdown"
            width={12}
            height={12}
          />
        </div>
      </div>
    </header>
  )
}
