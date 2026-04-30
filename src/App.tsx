import { useState } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Sidebar from "../Components/SidebarPage"
import HomePage from "../Pages/HomePages"
import PlaceDetail from "../Pages/PageDetail"
import FestivalDetail from "../Pages/FetivalDetailPage"
import FavoritesPage from "../Pages/FavDetailPage"
import UpcomingPage from "../Pages/UpComing"

function AppInner() {
  const [selectedCity, setSelectedCity] = useState("All")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPlaceCity, setSelectedPlaceCity] = useState("All Places") // 👈 NEW
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const location = useLocation()
  const isHomePage = location.pathname === "/"

  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "flex-start" }}>

      {/* ── DESKTOP SIDEBAR ── */}
      {isHomePage && (
        <div
          className="desktop-sidebar"
          style={{ position: "sticky", top: 0, height: "100vh", flexShrink: 0, alignSelf: "flex-start" }}
        >
          <Sidebar
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedPlaceCity={selectedPlaceCity}         // 👈 NEW
            setSelectedPlaceCity={setSelectedPlaceCity}   // 👈 NEW
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>
      )}

      {/* ── MOBILE: overlay + drawer ── */}
      {isHomePage && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 40 }}
        />
      )}
      {isHomePage && (
        <div
          className="mobile-sidebar"
          style={{
            position: "fixed", top: 0, left: 0,
            height: "100vh", zIndex: 50,
            transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s ease"
          }}>
          <Sidebar
            selectedCity={selectedCity}
            setSelectedCity={(city) => { setSelectedCity(city); setSidebarOpen(false) }}
            selectedCategory={selectedCategory}
            setSelectedCategory={(cat) => { setSelectedCategory(cat); setSidebarOpen(false) }}
            selectedPlaceCity={selectedPlaceCity}                                          // 👈 NEW
            setSelectedPlaceCity={(city) => { setSelectedPlaceCity(city); setSidebarOpen(false) }} // 👈 NEW
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>
      )}

      {/* ── MAIN CONTENT ── */}
      <div style={{ flex: 1, minWidth: 0, minHeight: "100vh" }}>

        {/* Mobile navbar */}
        {isHomePage && (
          <div className="mobile-navbar" style={{
            alignItems: "center", justifyContent: "space-between",
            padding: "12px 16px",
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
        )}

        <Routes>
          <Route path="/" element={
            <HomePage
              selectedCity={selectedCity}
              selectedCategory={selectedCategory}
              selectedPlaceCity={selectedPlaceCity}   // 👈 NEW
              darkMode={darkMode}
            />
          } />
          <Route path="/festival/:slug" element={<FestivalDetail darkMode={darkMode} />} />
          <Route path="/favorites"      element={<FavoritesPage  darkMode={darkMode} />} />
          <Route path="/upcoming"       element={<UpcomingPage   darkMode={darkMode} />} />
          <Route path="/place/:id"      element={<PlaceDetail    darkMode={darkMode} />} />
        </Routes>
      </div>

      <style>{`
        .desktop-sidebar { display: block; }
        .mobile-sidebar  { display: none;  }
        .mobile-navbar   { display: none !important; }

        @media (max-width: 768px) {
          .desktop-sidebar { display: none !important; }
          .mobile-sidebar  { display: block; }
          .mobile-navbar   { display: flex !important; }
        }
      `}</style>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}

export default App