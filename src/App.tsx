import { useState } from 'react'
import HomePage from '../Pages/HomePages'
import Sidebar from '../Components/SidebarPage'

function App() {
  const [selectedCity, setSelectedCity] = useState("All")
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className="flex min-h-screen" style={{ background: darkMode ? "#0F172A" : "#F8FAFC" }}>
      <Sidebar
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="flex-1">
        <HomePage selectedCity={selectedCity} darkMode={darkMode} />
      </main>
    </div>
  )
}

export default App