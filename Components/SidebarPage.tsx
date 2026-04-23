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
      style={{ background: darkMode ? "#0F172A" : "#F8FAFC", borderColor: "#1E293B" }}>

      {/* Logo */}
      <div className="text-2xl font-bold"
        style={{ background: "linear-gradient(to right, #F97316, #EC4899, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        🎊 FestivalIndia
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search events..."
        className="w-full px-3 py-2 rounded-lg text-sm focus:outline-none"
        style={{ background: darkMode ? "#1E293B" : "#F1F5F9", color: darkMode ? "#F8FAFC" : "#0F172A", border: "1px solid #334155" }}
      />

      {/* Navigation */}
      <div>
        <p className="text-xs font-semibold uppercase mb-2" style={{ color: "#64748B" }}>Navigation</p>
        <ul className="flex flex-col gap-1">
          {["🏠 Home", "🎉 All Events", "⭐ Favorites", "📅 Upcoming"].map((item) => (
            <li key={item}
              className="px-3 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all"
              style={{ color: darkMode ? "#F8FAFC" : "#0F172A" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#1E293B")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* City Filter */}
      <div>
        <p className="text-xs font-semibold uppercase mb-2" style={{ color: "#64748B" }}>City</p>
        <ul className="flex flex-col gap-1">
          {cities.map((city) => (
            <li key={city} onClick={() => setSelectedCity(city)}
              className="px-3 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all"
              style={selectedCity === city
                ? { background: "linear-gradient(to right, #F97316, #EC4899, #8B5CF6)", color: "#fff" }
                : { color: "#CBD5E1" }}
              onMouseEnter={e => { if (selectedCity !== city) e.currentTarget.style.background = "#1E293B" }}
              onMouseLeave={e => { if (selectedCity !== city) e.currentTarget.style.background = "transparent" }}>
              📍 {city}
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div>
        <p className="text-xs font-semibold uppercase mb-2" style={{ color: "#64748B" }}>Category</p>
        <ul className="flex flex-col gap-1">
          {categories.map((cat) => (
            <li key={cat}
              className="px-3 py-2 rounded-lg cursor-pointer text-sm font-medium"
              style={{ color: "#CBD5E1" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#1E293B")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
              🎭 {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Dark Mode Toggle */}
      <div className="mt-auto flex items-center justify-between px-3 py-2 rounded-lg"
        style={{ background: darkMode ? "#1E293B" : "#E2E8F0" }}>
        <span className="text-sm" style={{ color: darkMode ? "#F8FAFC" : "#0F172A" }}>
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </span>
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-5 rounded-full cursor-pointer transition-all"
          style={{ background: darkMode ? "linear-gradient(to right, #F97316, #8B5CF6)" : "#CBD5E1" }}>
        </div>
      </div>

    </div>
  )
}

export default Sidebar