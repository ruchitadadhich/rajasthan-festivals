import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import festivals from "../Data/Festivals"
import touristPlaces from "../Data/Travel"
import { useFavorites } from "../hooks/UseFav"

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } }
}

function FavoritesPage({ darkMode }: { darkMode: boolean }) {
  const navigate = useNavigate()
  const {
    favorites, toggleFavorite, isFavorite,
    placeFavorites, togglePlaceFavorite, isPlaceFavorite
  } = useFavorites()

  const [activeTab, setActiveTab] = useState<"festivals" | "places">("festivals")

  const bg     = darkMode ? "#1C1008" : "#FAF7F2"
  const cardBg = darkMode ? "#2A1A0E" : "#FFFFFF"
  const text   = darkMode ? "#FAF7F2" : "#2B2B2B"
  const muted  = darkMode ? "#C8B8A8" : "#666666"

  // ── Saved festivals & places ──
  const savedFestivals = festivals.filter(f => favorites.includes(f.id))
  const savedPlaces    = touristPlaces.filter(p => placeFavorites.includes(p.id))

  // ── Tab button style helper ──
  const tabStyle = (tab: "festivals" | "places"): React.CSSProperties => ({
    flex: 1,
    padding: "10px 0",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "700",
    transition: "all 0.2s",
    background: activeTab === tab ? "#C65D3A" : "transparent",
    color:      activeTab === tab ? "#FAF7F2"  : (darkMode ? "#C8B8A8" : "#888888"),
    boxShadow:  activeTab === tab ? "0 4px 12px rgba(198,93,58,0.3)" : "none",
  })

  return (
    <div style={{ minHeight: "100vh", background: bg }}>

      {/* ── Header ── */}
      <div style={{
        padding: "clamp(20px, 4vw, 40px) clamp(16px, 4vw, 32px) 0",
        maxWidth: "960px", margin: "0 auto"
      }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "transparent", border: "none",
            color: "#C65D3A", fontSize: "13px", fontWeight: "600",
            cursor: "pointer", padding: "0 0 16px 0", display: "flex",
            alignItems: "center", gap: "4px"
          }}>
          ← Back to Home
        </button>

        <h1 style={{
          fontSize: "clamp(20px, 4vw, 28px)", fontWeight: "800",
          color: darkMode ? "#E9C46A" : "#C65D3A", margin: "0 0 6px"
        }}>
          ❤️ My Wishlist
        </h1>
        <p style={{ fontSize: "13px", color: muted, margin: "0 0 24px" }}>
          {savedFestivals.length} festival{savedFestivals.length !== 1 ? "s" : ""} &nbsp;•&nbsp;
          {savedPlaces.length} tourist place{savedPlaces.length !== 1 ? "s" : ""} saved
        </p>

        {/* ── Tabs ── */}
        <div style={{
          display: "flex", gap: "6px",
          background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
          borderRadius: "14px", padding: "4px",
          marginBottom: "28px"
        }}>
          <button style={tabStyle("festivals")} onClick={() => setActiveTab("festivals")}>
            🎉 Festivals ({savedFestivals.length})
          </button>
          <button style={tabStyle("places")} onClick={() => setActiveTab("places")}>
            🏰 Tourist Places ({savedPlaces.length})
          </button>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{
        maxWidth: "960px", margin: "0 auto",
        padding: "0 clamp(16px, 4vw, 32px) clamp(32px, 6vw, 60px)"
      }}>
        <AnimatePresence mode="wait">

          {/* ── FESTIVALS TAB ── */}
          {activeTab === "festivals" && (
            <motion.div
              key="festivals"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>

              {savedFestivals.length === 0 ? (
                <EmptyState
                  icon="🎉"
                  title="No festivals saved yet"
                  message="Go explore and save festivals you love!"
                  darkMode={darkMode}
                  onBrowse={() => navigate("/")}
                />
              ) : (
                <motion.div
                  variants={containerVariants} initial="hidden" animate="show"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
                    gap: "clamp(12px, 3vw, 20px)"
                  }}>
                  {savedFestivals.map(f => (
                    <motion.div key={f.id} variants={cardVariants}>
                      <FestivalWishCard
                        festival={f}
                        darkMode={darkMode}
                        cardBg={cardBg}
                        text={text}
                        muted={muted}
                        isFavorite={isFavorite}
                        onToggle={toggleFavorite}
                        onNavigate={() => navigate(`/festival/${f.slug}`)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}

          {/* ── TOURIST PLACES TAB ── */}
          {activeTab === "places" && (
            <motion.div
              key="places"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>

              {savedPlaces.length === 0 ? (
                <EmptyState
                  icon="🏰"
                  title="No tourist places saved yet"
                  message="Explore Rajasthan and save places you want to visit!"
                  darkMode={darkMode}
                  onBrowse={() => navigate("/")}
                />
              ) : (
                <motion.div
                  variants={containerVariants} initial="hidden" animate="show"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
                    gap: "clamp(12px, 3vw, 20px)"
                  }}>
                  {savedPlaces.map(p => (
                    <motion.div key={p.id} variants={cardVariants}>
                      <PlaceWishCard
                        place={p}
                        darkMode={darkMode}
                        cardBg={cardBg}
                        text={text}
                        muted={muted}
                        isPlaceFavorite={isPlaceFavorite}
                        onToggle={togglePlaceFavorite}
                        onNavigate={() => navigate(`/place/${p.id}`)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}

// ── Festival Wishlist Card ──
function FestivalWishCard({ festival, darkMode: _darkMode, cardBg, text, muted, isFavorite, onToggle, onNavigate }: any) {
  const saved = isFavorite(festival.id)
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 12px 28px rgba(0,0,0,0.13)" }}
      onClick={onNavigate}
      style={{
        background: cardBg, border: "1.5px solid #E9C46A",
        borderRadius: "20px", overflow: "hidden",
        cursor: "pointer", boxShadow: "0 4px 12px rgba(198,93,58,0.10)",
        transition: "box-shadow 0.3s"
      }}>
      <div style={{ position: "relative" }}>
        <img src={festival.image} alt={festival.name}
          style={{ width: "100%", height: "170px", objectFit: "cover" }}
          onError={e => { e.currentTarget.src = "https://via.placeholder.com/600x300?text=No+Image" }} />
        <span style={{
          position: "absolute", top: "10px", left: "10px",
          background: "rgba(198,93,58,0.90)", color: "#FAF7F2",
          fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "20px"
        }}>{festival.category}</span>
        <motion.button
          whileTap={{ scale: 1.2 }}
          onClick={e => { e.stopPropagation(); onToggle(festival.id) }}
          style={{
            position: "absolute", top: "10px", right: "10px",
            background: "rgba(250,247,242,0.92)", border: "none",
            borderRadius: "50%", width: "32px", height: "32px",
            cursor: "pointer", fontSize: "15px",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
          }}>
          {saved ? "❤️" : "🤍"}
        </motion.button>
      </div>
      <div style={{ padding: "14px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: "700", color: text, margin: "0 0 4px" }}>
          {festival.name}
        </h3>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontSize: "12px", color: "#C65D3A", fontWeight: "600" }}>📍 {festival.city}</span>
          <span style={{ fontSize: "12px", color: muted }}>📅 {festival.date}</span>
        </div>
        <p style={{
          fontSize: "12px", color: muted, margin: "0 0 12px", lineHeight: "1.5",
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden"
        }}>{festival.description}</p>
        <button
          onClick={e => { e.stopPropagation(); onNavigate() }}
          style={{
            width: "100%", padding: "8px", borderRadius: "10px",
            border: "none", background: "#C65D3A",
            color: "#FAF7F2", fontSize: "12px", fontWeight: "600", cursor: "pointer"
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#A64B2A")}
          onMouseLeave={e => (e.currentTarget.style.background = "#C65D3A")}>
          View Details →
        </button>
      </div>
    </motion.div>
  )
}

// ── Tourist Place Wishlist Card ──
function PlaceWishCard({ place, darkMode, cardBg, text, muted, isPlaceFavorite, onToggle, onNavigate }: any) {
  const saved = isPlaceFavorite(place.id)
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 12px 28px rgba(0,0,0,0.13)" }}
      onClick={onNavigate}
      style={{
        background: cardBg, border: "1.5px solid #E9C46A",
        borderRadius: "20px", overflow: "hidden",
        cursor: "pointer", boxShadow: "0 4px 12px rgba(198,93,58,0.10)",
        transition: "box-shadow 0.3s"
      }}>
      <div style={{ position: "relative" }}>
        <img src={place.image} alt={place.name}
          style={{ width: "100%", height: "170px", objectFit: "cover" }}
          onError={e => { e.currentTarget.src = "https://via.placeholder.com/600x300?text=No+Image" }} />
        <span style={{
          position: "absolute", top: "10px", left: "10px",
          background: "rgba(198,93,58,0.90)", color: "#FAF7F2",
          fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "20px"
        }}>Tourist Place</span>
        <span style={{
          position: "absolute", top: "10px", right: "10px",
          background: "rgba(250,247,242,0.92)", color: "#C65D3A",
          fontSize: "12px", fontWeight: "700", padding: "4px 10px", borderRadius: "20px",
          display: "flex", alignItems: "center", gap: "3px"
        }}>⭐ {place.rating}</span>
        <motion.button
          whileTap={{ scale: 1.2 }}
          onClick={e => { e.stopPropagation(); onToggle(place.id) }}
          style={{
            position: "absolute", bottom: "10px", right: "10px",
            background: "rgba(250,247,242,0.92)", border: "none",
            borderRadius: "50%", width: "32px", height: "32px",
            cursor: "pointer", fontSize: "15px",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
          }}>
          {saved ? "❤️" : "🤍"}
        </motion.button>
      </div>
      <div style={{ padding: "14px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: "700", color: text, margin: "0 0 4px" }}>
          {place.name}
        </h3>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontSize: "12px", color: "#C65D3A", fontWeight: "600" }}>📍 {place.city}</span>
          <span style={{ fontSize: "12px", color: "#6D8B74", fontWeight: "600" }}>🏷️ {place.tag}</span>
        </div>
        <p style={{
          fontSize: "12px", color: muted, margin: "0 0 12px", lineHeight: "1.5",
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden"
        }}>{place.description}</p>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={e => { e.stopPropagation(); onToggle(place.id) }}
            style={{
              flex: 1, padding: "8px", borderRadius: "10px",
              border: "1.5px solid #E9C46A", background: "transparent",
              color: darkMode ? "#E9C46A" : "#C65D3A",
              fontSize: "12px", fontWeight: "600", cursor: "pointer"
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(233,196,106,0.15)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
            {saved ? "❤️ Saved" : "🤍 Save"}
          </button>
          <button
            onClick={e => { e.stopPropagation(); onNavigate() }}
            style={{
              flex: 1, padding: "8px", borderRadius: "10px",
              border: "none", background: "#C65D3A",
              color: "#FAF7F2", fontSize: "12px", fontWeight: "600", cursor: "pointer"
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#A64B2A")}
            onMouseLeave={e => (e.currentTarget.style.background = "#C65D3A")}>
            Explore →
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// ── Empty State ──
function EmptyState({ icon, title, message, darkMode, onBrowse }: {
  icon: string; title: string; message: string; darkMode: boolean; onBrowse: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      style={{ textAlign: "center", padding: "60px 20px" }}>
      <p style={{ fontSize: "52px", marginBottom: "12px" }}>{icon}</p>
      <h3 style={{ fontSize: "18px", fontWeight: "700", color: darkMode ? "#FAF7F2" : "#2B2B2B", marginBottom: "8px" }}>
        {title}
      </h3>
      <p style={{ fontSize: "13px", color: darkMode ? "#C8B8A8" : "#888888", marginBottom: "24px" }}>
        {message}
      </p>
      <button
        onClick={onBrowse}
        style={{
          padding: "10px 28px", background: "#C65D3A",
          color: "#FAF7F2", border: "none", borderRadius: "12px",
          fontSize: "13px", fontWeight: "700", cursor: "pointer"
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "#A64B2A")}
        onMouseLeave={e => (e.currentTarget.style.background = "#C65D3A")}>
        Browse Now →
      </button>
    </motion.div>
  )
}

export default FavoritesPage