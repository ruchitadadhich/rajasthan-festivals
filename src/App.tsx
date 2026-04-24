import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "../Components/SidebarPage"
import HomePage from "../Pages/HomePages"
import FestivalDetail from "../Pages/FetivalDetailPage"
import FavoritesPage from "../Pages/FavDetailPage"
import UpcomingPage from "../Pages/UpComing"

function App() {
  const [selectedCity, setSelectedCity] = useState("All")
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <BrowserRouter>
      <div style={{ display: "flex", minHeight: "100vh", position: "relative" }}>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div onClick={() => setSidebarOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 40 }} />
        )}

        {/* Mobile drawer */}
        <div style={{
          position: "fixed", top: 0, left: 0, height: "100vh", zIndex: 50,
          transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease"
        }} className="sidebar-wrapper">
          <Sidebar
            selectedCity={selectedCity}
            setSelectedCity={(city) => { setSelectedCity(city); setSidebarOpen(false) }}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>

        {/* Desktop sidebar */}
        <div className="desktop-sidebar">
          <Sidebar
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>

        {/* Main */}
        <div className="main-content" style={{ flex: 1, overflow: "auto" }}>

          {/* Mobile navbar */}
          <div className="mobile-navbar" style={{
            display: "none", alignItems: "center",
            justifyContent: "space-between", padding: "12px 16px",
            background: darkMode ? "#2A1A0E" : "#C65D3A",
            position: "sticky", top: 0, zIndex: 30
          }}>
            <button onClick={() => setSidebarOpen(true)} style={{
              background: "rgba(250,247,242,0.15)",
              border: "1px solid rgba(250,247,242,0.3)",
              color: "#FAF7F2", borderRadius: "8px",
              padding: "6px 12px", cursor: "pointer", fontSize: "18px"
            }}>☰</button>
            <span style={{ color: "#FAF7F2", fontWeight: "700", fontSize: "16px" }}>🎊 FestivalIndia</span>
            <button onClick={() => setDarkMode(!darkMode)} style={{
              background: "rgba(250,247,242,0.15)",
              border: "1px solid rgba(250,247,242,0.3)",
              color: "#FAF7F2", borderRadius: "8px",
              padding: "6px 10px", cursor: "pointer", fontSize: "14px"
            }}>
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>

          <Routes>
            <Route path="/" element={<HomePage selectedCity={selectedCity} darkMode={darkMode} />} />
            <Route path="/festival/:slug" element={<FestivalDetail darkMode={darkMode} />} />
            <Route path="/favorites" element={<FavoritesPage darkMode={darkMode} />} />
            <Route path="/upcoming" element={<UpcomingPage darkMode={darkMode} />} />
          </Routes>
        </div>
      </div>

      <style>{`
        .desktop-sidebar { display: flex; }
        .mobile-navbar { display: none !important; }

        @media (max-width: 768px) {
          .desktop-sidebar { display: none !important; }
          .mobile-navbar { display: flex !important; }
        }
      `}</style>
    </BrowserRouter>
  )
}

export default App