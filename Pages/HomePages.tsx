import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import festivals from "../Data/Festivals"
import EventCard from "../Components/EventCards"
import { useFavorites } from "../hooks/UseFav"

interface HomePageProps {
  selectedCity: string
  selectedCategory: string
  darkMode: boolean
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

function HomePage({ selectedCity, selectedCategory, darkMode }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const { toggleFavorite, isFavorite } = useFavorites()
  const location = useLocation()

  useEffect(() => {
    if (location.hash === "#all-events") {
      const el = document.getElementById("all-events")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }, [location])

  const filtered = festivals.filter((f) => {
    const matchCity     = selectedCity === "All"     || f.city === selectedCity
    const matchCategory = selectedCategory === "All" || f.category === selectedCategory
    const matchSearch   =
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.city.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCity && matchCategory && matchSearch
  })

  // Heading label
  const headingLabel = () => {
    if (selectedCity !== "All" && selectedCategory !== "All")
      return `📍 ${selectedCity} · ${selectedCategory}`
    if (selectedCity !== "All") return `📍 ${selectedCity}`
    if (selectedCategory !== "All") return `🏷️ ${selectedCategory}`
    return "🎉 All Festivals"
  }

  return (
    <div style={{ minHeight: "100vh", background: darkMode ? "#1C1008" : "#FAF7F2" }}>

      {/* ── Hero ── */}
      <div style={{ position: "relative", width: "100%", height: "clamp(280px, 50vw, 420px)", overflow: "hidden" }}>
        <img src="/rajasthan.jpg" alt="Rajasthan"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(28,10,8,0.55) 0%, rgba(166,75,42,0.75) 100%)"
        }} />
        <div style={{
          position: "absolute", inset: 0, display: "flex",
          flexDirection: "column", alignItems: "center",
          justifyContent: "center", gap: "12px", padding: "0 16px"
        }}>
          <motion.p
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: "#E9C46A", fontSize: "11px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase", margin: 0 }}>
            ✦ Explore Rajasthan ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              color: "#FAF7F2", fontWeight: "800", textAlign: "center",
              lineHeight: "1.2", margin: 0,
              fontSize: "clamp(22px, 5vw, 42px)"
            }}>
            Discover Rajasthan<br />Festivals
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              color: "rgba(250,247,242,0.80)", textAlign: "center",
              maxWidth: "380px", margin: 0,
              fontSize: "clamp(12px, 2vw, 15px)"
            }}>
            Colors, culture & centuries of tradition
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              display: "flex", marginTop: "4px",
              width: "100%", maxWidth: "460px",
              borderRadius: "14px", overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.25)"
            }}>
            <input
              type="text"
              placeholder="Search festival or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1, padding: "12px 16px",
                border: "none", outline: "none",
                fontSize: "14px", background: "#FAF7F2", color: "#2B2B2B",
                minWidth: 0
              }}
            />
            <button
              onClick={() => {
                const el = document.getElementById("all-events")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
              style={{
                padding: "12px 18px", background: "#C65D3A",
                color: "#FAF7F2", border: "none", cursor: "pointer",
                fontSize: "13px", fontWeight: "700", whiteSpace: "nowrap"
              }}>
              Explore →
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── Active Category Pill (agar All nahi) ── */}
      {selectedCategory !== "All" && (
        <div style={{
          padding: "12px clamp(12px, 4vw, 32px) 0",
          display: "flex", alignItems: "center", gap: "8px"
        }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            padding: "5px 14px", borderRadius: "20px",
            background: "#E9C46A", color: "#2B2B2B",
            fontSize: "12px", fontWeight: "700"
          }}>
            {selectedCategory}
            <span style={{ opacity: 0.6 }}>· {filtered.length} results</span>
          </span>
        </div>
      )}

      {/* ── Cards Section ── */}
      <div id="all-events" style={{ padding: "clamp(16px, 4vw, 40px) clamp(12px, 4vw, 32px)" }}>
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", marginBottom: "24px",
          flexWrap: "wrap", gap: "8px"
        }}>
          <h2 style={{
            fontSize: "clamp(16px, 3vw, 22px)", fontWeight: "700",
            color: darkMode ? "#E9C46A" : "#C65D3A", margin: 0
          }}>
            {headingLabel()}
          </h2>
          <span style={{ fontSize: "13px", color: darkMode ? "#C8B8A8" : "#888888" }}>
            {filtered.length} festival{filtered.length !== 1 ? "s" : ""} found
          </span>
        </div>

        {filtered.length > 0 ? (
          <motion.div
            key={`${selectedCity}-${selectedCategory}`}
            variants={containerVariants}
            initial="hidden" animate="show"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
              gap: "clamp(12px, 3vw, 24px)"
            }}>
            {filtered.map((festival) => (
              <EventCard
                key={festival.id}
                festival={festival}
                darkMode={darkMode}
                isFavorite={isFavorite(festival.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ textAlign: "center", padding: "60px 0", color: darkMode ? "#C8B8A8" : "#999999" }}>
            <p style={{ fontSize: "40px", marginBottom: "12px" }}>🔍</p>
            <p style={{ fontSize: "16px" }}>
              No festivals found
              {selectedCategory !== "All" && <> in <strong>{selectedCategory}</strong></>}
              {selectedCity !== "All" && <> for <strong>{selectedCity}</strong></>}
              {searchQuery && <> matching "<strong>{searchQuery}</strong>"</>}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default HomePage