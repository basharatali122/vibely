import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Footer from './Components/Footer/Footer'
import CreatePost from './Components/CreatePost/CreatePost'
import Feed from './Pages/Feed/Feed'

const App = () => {

  const [selectedTab, setSelectedTab] = useState("CreatePost")


  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Body */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar className="w-64 bg-base-200" setSelectedTab={setSelectedTab} />

          {/* Main Content */}
          <main className="flex-1 p-4">
            {
              selectedTab === "CreatePost" ? <CreatePost /> : <Feed />
            }


          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>

    </>
  )
}

export default App
