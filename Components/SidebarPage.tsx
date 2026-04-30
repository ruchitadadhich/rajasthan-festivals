import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import {
  Home, CalendarDays, Heart, Clock,
  MapPin, Moon, Sun, Menu,
  LayoutGrid, Landmark, Star, Music, PersonStanding,
  UtensilsCrossed, FerrisWheel, Palette, ChevronDown,
  MapPinned, Castle, Globe, Building2, Waves, Sunset,
  TreePalm, PawPrint, Mountain
} from "lucide-react"

const cities = ["All", "Jaipur", "Jodhpur", "Udaipur", "Jaisalmer", "Pushkar", "Bikaner", "Dungarpur"]

const categories = [
  { label: "All",            icon: <LayoutGrid      size={15} /> },
  { label: "Tourist Places", icon: <MapPinned       size={15} /> },
  { label: "Cultural",       icon: <Landmark        size={15} /> },
  { label: "Religious",      icon: <Star            size={15} /> },
  { label: "Music",          icon: <Music           size={15} /> },
  { label: "Dance",          icon: <PersonStanding  size={15} /> },
  { label: "Food",           icon: <UtensilsCrossed size={15} /> },
  { label: "Fair / Mela",    icon: <FerrisWheel     size={15} /> },
  { label: "Art & Craft",    icon: <Palette         size={15} /> },
]

// Tourist place cities with lucide icons
const touristPlaceCities = [
  { label: "All Places", icon: <Globe      size={14} /> },
  { label: "Jaipur",     icon: <Castle     size={14} /> },
  { label: "Jodhpur",    icon: <Building2  size={14} /> },
  { label: "Udaipur",    icon: <Waves      size={14} /> },
  { label: "Jaisalmer",  icon: <Sunset     size={14} /> },
  { label: "Pushkar",    icon: <TreePalm   size={14} /> },
  { label: "Bikaner",    icon: <PawPrint   size={14} /> },
  { label: "Dungarpur",  icon: <Mountain   size={14} /> },
]

interface SidebarProps {
  selectedCity: string
  setSelectedCity: (city: string) => void
  selectedCategory: string
  setSelectedCategory: (cat: string) => void
  selectedPlaceCity: string
  setSelectedPlaceCity: (city: string) => void
  darkMode: boolean
  setDarkMode: (val: boolean) => void
}

const navItems: { label: string; path: string; icon: React.ReactNode; city?: string }[] = [
  { label: "Home",       path: "/",            icon: <Home         size={16} /> },
  { label: "All Events", path: "/#all-events", icon: <CalendarDays size={16} />, city: "All" },
  { label: "Favorites",  path: "/favorites",   icon: <Heart        size={16} /> },
  { label: "Upcoming",   path: "/upcoming",    icon: <Clock        size={16} /> },
]

function Sidebar({
  selectedCity, setSelectedCity,
  selectedCategory, setSelectedCategory,
  selectedPlaceCity, setSelectedPlaceCity,
  darkMode, setDarkMode,
}: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const [cityOpen,  setCityOpen]  = useState(true)
  const [catOpen,   setCatOpen]   = useState(true)
  const [placeOpen, setPlaceOpen] = useState(true)

  const sectionHeaderStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    marginBottom: "6px",
    padding: "2px 4px",
    borderRadius: "6px",
    userSelect: "none",
  }

  const sectionLabelStyle: React.CSSProperties = {
    color: "rgba(233,196,106,0.7)",
    fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  }

  return (
    <div style={{
      width: "220px",
      height: "100vh",
      overflowY: "auto",
      overflowX: "hidden",
      padding: "16px 12px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      background: darkMode
        ? "linear-gradient(180deg, #2A1008 0%, #1C0A04 100%)"
        : "linear-gradient(180deg, #C65D3A 0%, #A64B2A 100%)",
      borderRight: "1px solid #E9C46A",
      boxShadow: "2px 0 12px rgba(198,93,58,0.15)",
      boxSizing: "border-box",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    }}>

      <style>{`div::-webkit-scrollbar { display: none; }`}</style>

      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "8px", cursor: "pointer", flexShrink: 0 }}>
        <div style={{
          width: "34px", height: "34px", borderRadius: "10px",
          background: "rgba(233,196,106,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
        }}>
          <Menu size={18} color="#E9C46A" />
        </div>
        <span style={{ color: "#FAF7F2", fontSize: "16px", fontWeight: "800", letterSpacing: "0.3px", whiteSpace: "nowrap" }}>
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
          outline: "none", boxSizing: "border-box", flexShrink: 0
        }}
      />

      {/* Navigation */}
      <div style={{ flexShrink: 0 }}>
        <p style={{
          color: "rgba(233,196,106,0.7)", fontSize: "10px", fontWeight: "700",
          letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 6px 4px"
        }}>Menu</p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
          {navItems.map((item) => {
            const isHomePath = item.path === "/" && location.pathname === "/" && !location.hash
            const active = isHomePath || (location.pathname === item.path.split("#")[0] && location.hash === (item.path.includes("#") ? `#${item.path.split("#")[1]}` : ""))
            return (
              <li
                key={item.label}
                onClick={() => { if (item.city !== undefined) setSelectedCity(item.city); navigate(item.path) }}
                style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "9px 12px", borderRadius: "10px",
                  cursor: "pointer", fontSize: "13px", fontWeight: "500",
                  color: active ? "#E9C46A" : "#FAF7F2",
                  background: active ? "rgba(233,196,106,0.15)" : "transparent",
                  borderLeft: active ? "3px solid #E9C46A" : "3px solid transparent",
                  transition: "all 0.2s", whiteSpace: "nowrap", overflow: "hidden",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(233,196,106,0.15)")}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent" }}>
                <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>{item.icon}</span>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{item.label}</span>
              </li>
            )
          })}
        </ul>
      </div>

      {/* ── City Dropdown ── */}
      <div style={{ flexShrink: 0 }}>
        <div
          style={sectionHeaderStyle}
          onClick={() => setCityOpen(o => !o)}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(233,196,106,0.08)")}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          <span style={sectionLabelStyle}>City</span>
          <ChevronDown
            size={13}
            color="rgba(233,196,106,0.7)"
            style={{ transition: "transform 0.25s", transform: cityOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>

        <div style={{
          overflow: "hidden",
          maxHeight: cityOpen ? `${cities.length * 42}px` : "0px",
          transition: "max-height 0.3s ease",
        }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
            {cities.map((city) => (
              <li
                key={city}
                onClick={() => { setSelectedCity(city); navigate("/") }}
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "9px 12px", borderRadius: "10px",
                  cursor: "pointer", fontSize: "13px",
                  fontWeight: selectedCity === city ? "700" : "500",
                  color: selectedCity === city ? "#2B2B2B" : "#FAF7F2",
                  background: selectedCity === city ? "#E9C46A" : "transparent",
                  borderLeft: selectedCity === city ? "3px solid #A64B2A" : "3px solid transparent",
                  transition: "all 0.2s", whiteSpace: "nowrap", overflow: "hidden",
                }}
                onMouseEnter={e => { if (selectedCity !== city) e.currentTarget.style.background = "rgba(233,196,106,0.15)" }}
                onMouseLeave={e => { if (selectedCity !== city) e.currentTarget.style.background = "transparent" }}>
                <MapPin size={14} style={{ flexShrink: 0, opacity: 0.85 }} />
                <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{city}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Category Dropdown ── */}
      <div style={{ flexShrink: 0 }}>
        <div
          style={sectionHeaderStyle}
          onClick={() => setCatOpen(o => !o)}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(233,196,106,0.08)")}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          <span style={sectionLabelStyle}>Category</span>
          <ChevronDown
            size={13}
            color="rgba(233,196,106,0.7)"
            style={{ transition: "transform 0.25s", transform: catOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>

        <div style={{
          overflow: "hidden",
          maxHeight: catOpen ? `${categories.length * 42}px` : "0px",
          transition: "max-height 0.3s ease",
        }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
            {categories.map(({ label, icon }) => {
              const active = selectedCategory === label
              return (
                <li
                  key={label}
                  onClick={() => { setSelectedCategory(label); navigate("/") }}
                  style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    padding: "8px 10px", borderRadius: "10px",
                    cursor: "pointer", fontSize: "13px",
                    fontWeight: active ? "700" : "500",
                    color: active ? "#2B2B2B" : "#FAF7F2",
                    background: active ? "#E9C46A" : "transparent",
                    borderLeft: active ? "3px solid #A64B2A" : "3px solid transparent",
                    transform: active ? "translateX(4px)" : "translateX(0)",
                    transition: "all 0.2s",
                    boxShadow: active ? "0 2px 8px rgba(233,196,106,0.35)" : "none",
                    minWidth: 0, boxSizing: "border-box", width: "100%",
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.background = "rgba(233,196,106,0.15)" }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent" }}>
                  <span style={{ flexShrink: 0, display: "flex", alignItems: "center", color: active ? "#2B2B2B" : "#FAF7F2" }}>
                    {icon}
                  </span>
                  <span style={{
                    flex: 1, minWidth: 0,
                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    color: active ? "#2B2B2B" : "#FAF7F2",
                  }}>
                    {label}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* ── Tourist Places Dropdown ── NEW SECTION ── */}
      <div style={{ flexShrink: 0 }}>
        <div
          style={sectionHeaderStyle}
          onClick={() => setPlaceOpen(o => !o)}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(233,196,106,0.08)")}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Castle size={11} color="rgba(233,196,106,0.7)" />
            <span style={sectionLabelStyle}>Tourist Places</span>
          </div>
          <ChevronDown
            size={13}
            color="rgba(233,196,106,0.7)"
            style={{ transition: "transform 0.25s", transform: placeOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>

        <div style={{
          overflow: "hidden",
          maxHeight: placeOpen ? `${touristPlaceCities.length * 42}px` : "0px",
          transition: "max-height 0.3s ease",
        }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
            {touristPlaceCities.map(({ label, icon }) => {
              const active = selectedPlaceCity === label
              return (
                <li
                  key={label}
                  onClick={() => { setSelectedPlaceCity(label); navigate("/") }}
                  style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    padding: "8px 10px", borderRadius: "10px",
                    cursor: "pointer", fontSize: "13px",
                    fontWeight: active ? "700" : "500",
                    color: active ? "#2B2B2B" : "#FAF7F2",
                    background: active ? "#E9C46A" : "transparent",
                    borderLeft: active ? "3px solid #A64B2A" : "3px solid transparent",
                    transform: active ? "translateX(4px)" : "translateX(0)",
                    transition: "all 0.2s",
                    boxShadow: active ? "0 2px 8px rgba(233,196,106,0.35)" : "none",
                    minWidth: 0, boxSizing: "border-box", width: "100%",
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.background = "rgba(233,196,106,0.15)" }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent" }}>
                  <span style={{ flexShrink: 0, display: "flex", alignItems: "center", color: active ? "#2B2B2B" : "#FAF7F2" }}>{icon}</span>
                  <span style={{
                    flex: 1, minWidth: 0,
                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    color: active ? "#2B2B2B" : "#FAF7F2",
                  }}>
                    {label}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div style={{ marginTop: "auto", flexShrink: 0 }}>
        <div
          onClick={() => setDarkMode(!darkMode)}
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "10px 12px", borderRadius: "12px",
            background: "rgba(250,247,242,0.10)",
            border: "1px solid rgba(233,196,106,0.2)",
            cursor: "pointer"
          }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {darkMode ? <Moon size={15} color="#FAF7F2" /> : <Sun size={15} color="#FAF7F2" />}
            <span style={{ color: "#FAF7F2", fontSize: "12px", fontWeight: "500", whiteSpace: "nowrap" }}>
              {darkMode ? "Dark Mode" : "Light Mode"}
            </span>
          </div>
          <div style={{
            width: "36px", height: "20px", borderRadius: "20px",
            background: darkMode ? "#6D8B74" : "rgba(233,196,106,0.5)",
            position: "relative", transition: "background 0.3s", flexShrink: 0
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