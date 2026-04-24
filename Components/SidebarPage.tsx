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
    <div className="w-56 min-h-screen p-4 flex flex-col gap-5 border-r"
      style={{
        background: darkMode
          ? "linear-gradient(180deg, #2A1008 0%, #1C0A04 100%)"
          : "linear-gradient(180deg, #C65D3A 0%, #A64B2A 100%)",
        borderColor: "#E9C46A",
        boxShadow: "2px 0 12px rgba(198,93,58,0.15)"
      }}>

      {/* Logo */}
      <div className="text-xl font-bold pt-2" style={{ color: "#FAF7F2" }}>
        🎊 FestivalIndia
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search..."
        className="w-full px-3 py-2 rounded-lg text-sm focus:outline-none"
        style={{
          background: "rgba(250,247,242,0.12)",
          color: "#FAF7F2",
          border: "1px solid rgba(233,196,106,0.5)"
        }}
      />

      {/* Navigation */}
      <div>
        <p className="text-xs font-semibold uppercase mb-2 tracking-wider" style={{ color: "#E9C46A" }}>Menu</p>
        <ul className="flex flex-col gap-1">
          {["🏠 Home", "🎉 All Events", "⭐ Favorites", "📅 Upcoming"].map((item) => (
            <li key={item}
              className="px-3 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all"
              style={{ color: "#FAF7F2" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(233,196,106,0.2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* City Filter */}
      <div>
        <p className="text-xs font-semibold uppercase mb-2 tracking-wider" style={{ color: "#E9C46A" }}>City</p>
        <ul className="flex flex-col gap-1">
          {cities.map((city) => (
            <li key={city} onClick={() => setSelectedCity(city)}
              className="px-3 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all"
              style={selectedCity === city
                ? { background: "#E9C46A", color: "#2B2B2B", fontWeight: "700", borderRadius: "10px" }
                : { color: "#FAF7F2" }}
              onMouseEnter={e => { if (selectedCity !== city) e.currentTarget.style.background = "rgba(233,196,106,0.2)" }}
              onMouseLeave={e => { if (selectedCity !== city) e.currentTarget.style.background = "transparent" }}>
              📍 {city}
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div>
        <p className="text-xs font-semibold uppercase mb-2 tracking-wider" style={{ color: "#E9C46A" }}>Category</p>
        <ul className="flex flex-col gap-1">
          {categories.map((cat) => (
            <li key={cat}
              className="px-3 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all"
              style={{ color: "#FAF7F2" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(233,196,106,0.2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
              🎭 {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Dark Mode Toggle */}
      <div className="mt-auto flex items-center justify-between px-3 py-2 rounded-xl"
        style={{ background: "rgba(250,247,242,0.10)", border: "1px solid rgba(233,196,106,0.2)" }}>
        <span className="text-xs" style={{ color: "#FAF7F2" }}>
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </span>
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-5 rounded-full cursor-pointer transition-all"
          style={{ background: "#6D8B74" }}>
        </div>
      </div>

    </div>
  )
}

export default Sidebar