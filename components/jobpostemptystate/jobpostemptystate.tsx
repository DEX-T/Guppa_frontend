import React from 'react'

export default function jobpostemptystate() {
  return (
<>

<div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4">
  <div className="title">
    <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Job Posts</h2>
    <p className="text-gray-500 text-sm whitespace-nowrap">A List of all Jobs Posted By You</p>
  </div>
</div>

<div className="text-center mt-10 md:mt-20 px-4">
  <img
    src="/empty_state.png"
    alt="Empty State"
    className="mx-auto mb-4"
    width={248}
    height={248}
  />
  <h3 className="text-gray-500 text-sm whitespace-nowrap">You currently have no job posts</h3>
  <button className="mt-4 bg-[#3498DB] text-white px-4 py-2 rounded-lg">
    Post a Job
  </button>
</div>


</>
 
  )
}
