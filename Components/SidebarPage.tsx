const cities = ["All", "Jaipur", "Jodhpur", "Udaipur", "Jaisalmer", "Pushkar"]
const categories = ["All", "Cultural", "Religious", "Music", "Fair / Mela"]

interface SidebarProps {
  selectedCity: string
  setSelectedCity: (city: string) => void
  darkMode: boolean
  setDarkMode: (val: boolean) => void
}

function Sidebar({ selectedCity, setSelectedCity, darkMode, setDarkMode }: SidebarProps) {
  return (
    <div className="w-64 min-h-screen p-5 flex flex-col gap-6 border-r"
      style={{ background: darkMode ? "#0A1628" : "#1A3A6B", borderColor: "#D4AF37" }}>

      {/* Logo */}
      <div className="text-2xl font-bold" style={{ color: "#D4AF37" }}>
        🎊 FestivalIndia
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search events..."
        className="w-full px-3 py-2 rounded-lg text-sm focus:outline-none"
        style={{ background: "#0F2545", color: "#FFFFFF", border: "1px solid #D4AF37" }}
      />

      {/* Navigation */}
      <div>
        <p className="text-xs font-semibold uppercase mb-2" style={{ color: "#D4AF37" }}>Navigation</p>
        <ul className="flex flex-col gap-1">
          {["🏠 Home", "🎉 All Events", "⭐ Favorites", "📅 Upcoming"].map((item) => (
            <li key={item}
              className="px-3 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all"
              style={{ color: "#FFFFFF" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#D4AF37")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* City Filter */}
      <div>
        <p className="text-xs font-semibold uppercase mb-2" style={{ color: "#D4AF37" }}>City</p>
        <ul className="flex flex-col gap-1">
          {cities.map((city) => (
            <li key={city} onClick={() => setSelectedCity(city)}
              className="px-3 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all"
              style={selectedCity === city
                ? { background: "#D4AF37", color: "#0A1628", fontWeight: "700" }
                : { color: "#FFFFFF" }}
              onMouseEnter={e => { if (selectedCity !== city) e.currentTarget.style.background = "#D4AF37" }}
              onMouseLeave={e => { if (selectedCity !== city) e.currentTarget.style.background = "transparent" }}>
              📍 {city}
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div>
        <p className="text-xs font-semibold uppercase mb-2" style={{ color: "#D4AF37" }}>Category</p>
        <ul className="flex flex-col gap-1">
          {categories.map((cat) => (
            <li key={cat}
              className="px-3 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all"
              style={{ color: "#FFFFFF" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#D4AF37")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
              🎭 {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Dark Mode Toggle */}
      <div className="mt-auto flex items-center justify-between px-3 py-2 rounded-lg"
        style={{ background: "#0F2545" }}>
        <span className="text-sm" style={{ color: "#FFFFFF" }}>
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </span>
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-5 rounded-full cursor-pointer transition-all"
          style={{ background: "#D4AF37" }}>
        </div>
      </div>

    </div>
  )
}

export default Sidebar