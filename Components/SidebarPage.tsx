import { useNavigate, useLocation } from "react-router-dom"
import {
  Home, CalendarDays, Heart, Clock,
  MapPin, Tag, Moon, Sun, Menu
} from "lucide-react"

const cities = ["All", "Jaipur", "Jodhpur", "Udaipur", "Jaisalmer", "Pushkar"]
const categories = ["All", "Cultural", "Religious", "Music", "Fair / Mela"]

interface SidebarProps {
  selectedCity: string
  setSelectedCity: (city: string) => void
  darkMode: boolean
  setDarkMode: (val: boolean) => void
}

const navItems: { label: string; path: string; icon: React.ReactNode; city?: string }[] = [
  { label: "Home",       path: "/",            icon: <Home size={16} /> },
  { label: "All Events", path: "/#all-events", icon: <CalendarDays size={16} />, city: "All" },
  { label: "Favorites",  path: "/favorites",   icon: <Heart size={16} /> },
  { label: "Upcoming",   path: "/upcoming",    icon: <Clock size={16} /> },
]

function Sidebar({ selectedCity, setSelectedCity, darkMode, setDarkMode }: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div style={{
      width: "220px", minHeight: "100vh",
      padding: "16px 12px",
      display: "flex", flexDirection: "column", gap: "20px",
      background: darkMode
        ? "linear-gradient(180deg, #2A1008 0%, #1C0A04 100%)"
        : "linear-gradient(180deg, #C65D3A 0%, #A64B2A 100%)",
      borderRight: "1px solid #E9C46A",
      boxShadow: "2px 0 12px rgba(198,93,58,0.15)"
    }}>

      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        style={{
          display: "flex", alignItems: "center", gap: "10px",
          paddingTop: "8px", cursor: "pointer"
        }}>
        <div style={{
          width: "34px", height: "34px", borderRadius: "10px",
          background: "rgba(233,196,106,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <Menu size={18} color="#E9C46A" />
        </div>
        <span style={{ color: "#FAF7F2", fontSize: "16px", fontWeight: "800", letterSpacing: "0.3px" }}>
          FestivalIndia
        </span>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        style={{
          width: "100%", padding: "9px 12px",
          borderRadius: "10px", fontSize: "13px",
          background: "rgba(250,247,242,0.12)",
          color: "#FAF7F2", border: "1px solid rgba(233,196,106,0.4)",
          outline: "none", boxSizing: "border-box"
        }}
      />

      {/* Navigation */}
      <div>
        <p style={{
          color: "rgba(233,196,106,0.7)", fontSize: "10px", fontWeight: "700",
          letterSpacing: "1.5px", textTransform: "uppercase",
          marginBottom: "6px", paddingLeft: "4px"
        }}>
          Menu
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path.split("#")[0] && location.hash === (item.path.includes("#") ? `#${item.path.split("#")[1]}` : "")
            const isHomePath = item.path === "/" && location.pathname === "/" && !location.hash

            return (
              <li
                key={item.label}
                onClick={() => {
                  if (item.city !== undefined) setSelectedCity(item.city)
                  navigate(item.path)
                }}
                style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "9px 12px", borderRadius: "10px",
                  cursor: "pointer", fontSize: "13px", fontWeight: "500",
                  color: (isActive || isHomePath) ? "#E9C46A" : "#FAF7F2",
                  background: (isActive || isHomePath) ? "rgba(233,196,106,0.15)" : "transparent",
                  borderLeft: (isActive || isHomePath) ? "3px solid #E9C46A" : "3px solid transparent",
                  transition: "all 0.2s"
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(233,196,106,0.15)")}
                onMouseLeave={e => {
                  if (!(isActive || isHomePath)) e.currentTarget.style.background = "transparent"
                }}>
                <span style={{ opacity: 0.9 }}>{item.icon}</span>
                {item.label}
              </li>
            )
          })}
        </ul>
      </div>

      {/* City Filter */}
      <div>
        <p style={{
          color: "rgba(233,196,106,0.7)", fontSize: "10px", fontWeight: "700",
          letterSpacing: "1.5px", textTransform: "uppercase",
          marginBottom: "6px", paddingLeft: "4px"
        }}>
          City
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
          {cities.map((city) => (
            <li
              key={city}
              onClick={() => { setSelectedCity(city); navigate("/") }}
              style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "9px 12px", borderRadius: "10px",
                cursor: "pointer", fontSize: "13px",
                fontWeight: selectedCity === city ? "700" : "500",
                color: selectedCity === city ? "#2B2B2B" : "#FAF7F2",
                background: selectedCity === city ? "#E9C46A" : "transparent",
                borderLeft: selectedCity === city ? "3px solid #A64B2A" : "3px solid transparent",
                transition: "all 0.2s"
              }}
              onMouseEnter={e => { if (selectedCity !== city) e.currentTarget.style.background = "rgba(233,196,106,0.15)" }}
              onMouseLeave={e => { if (selectedCity !== city) e.currentTarget.style.background = "transparent" }}>
              <MapPin size={14} style={{ flexShrink: 0, opacity: 0.85 }} />
              {city}
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div>
        <p style={{
          color: "rgba(233,196,106,0.7)", fontSize: "10px", fontWeight: "700",
          letterSpacing: "1.5px", textTransform: "uppercase",
          marginBottom: "6px", paddingLeft: "4px"
        }}>
          Category
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
          {categories.map((cat) => (
            <li
              key={cat}
              style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "9px 12px", borderRadius: "10px",
                cursor: "pointer", fontSize: "13px", fontWeight: "500",
                color: "#FAF7F2", transition: "all 0.2s"
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(233,196,106,0.15)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
              <Tag size={14} style={{ flexShrink: 0, opacity: 0.85 }} />
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Dark Mode Toggle */}
      <div style={{ marginTop: "auto" }}>
        <div
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "10px 12px", borderRadius: "12px",
            background: "rgba(250,247,242,0.10)",
            border: "1px solid rgba(233,196,106,0.2)",
            cursor: "pointer"
          }}
          onClick={() => setDarkMode(!darkMode)}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {darkMode
              ? <Moon size={15} color="#FAF7F2" />
              : <Sun size={15} color="#FAF7F2" />}
            <span style={{ color: "#FAF7F2", fontSize: "12px", fontWeight: "500" }}>
              {darkMode ? "Dark Mode" : "Light Mode"}
            </span>
          </div>
          <div style={{
            width: "36px", height: "20px", borderRadius: "20px",
            background: darkMode ? "#6D8B74" : "rgba(233,196,106,0.5)",
            position: "relative", transition: "background 0.3s"
          }}>
            <div style={{
              position: "absolute", top: "3px",
              left: darkMode ? "18px" : "3px",
              width: "14px", height: "14px",
              borderRadius: "50%", background: "#FAF7F2",
              transition: "left 0.3s"
            }} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar