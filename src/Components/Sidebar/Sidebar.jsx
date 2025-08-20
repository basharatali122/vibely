import React from 'react'

const Sidebar = () => {
  return (
    <div>
     <div className="flex h-screen">
  {/* Sidebar */}
  <div className="w-64 bg-base-300 p-4">
    <h2 className="text-xl font-bold mb-6">Sidebar</h2>
    <ul className="menu bg-base-300 w-full rounded-box">
      <li><a>🏠 Home</a></li>
      <li><a>Feed</a></li>
      <li><a>CreatePost</a></li>
      <li><a>Peoples</a></li>
    </ul>
  </div>

  {/* Main Content */}
  <div className="flex-1 bg-base-100 p-6">
    <h1 className="text-2xl font-bold">Main Content</h1>
    <p className="mt-4">This is where your page content goes.</p>
  </div>
</div>

    </div>
  )
}

export default Sidebar
