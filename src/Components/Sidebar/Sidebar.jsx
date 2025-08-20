import React from 'react'

const Sidebar = ({ setSelectedTab }) => {
  return (
    <div>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-base-300 p-4">
          <h2 className="text-xl font-bold mb-6"></h2>
          <ul className="menu bg-base-300 w-full rounded-box">
            <li ><a>🏠 Home</a></li>
            <li onClick={() => setSelectedTab("Feed")}><a>Feed</a></li>
            <li onClick={() => setSelectedTab("CreatePost")}><a>CreatePost</a></li>
            <li><a>Peoples</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
