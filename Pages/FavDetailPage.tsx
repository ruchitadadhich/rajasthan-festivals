import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import festivals from "../Data/Festivals"
import { useFavorites } from "../hooks/UseFav"
import EventCard from "../Components/EventCards"

function FavoritesPage({ darkMode }: { darkMode: boolean }) {
  const navigate = useNavigate()
  const { favorites, isFavorite, toggleFavorite } = useFavorites()

  const favFestivals = festivals.filter((f) => favorites.includes(f.id))

  const bg = darkMode ? "#1C1008" : "#FAF7F2"

  return (
    <div style={{ minHeight: "100vh", background: bg }}>

      {/* Header */}
      <div style={{
        padding: "32px clamp(12px, 4vw, 32px) 0",
        borderBottom: "1px solid rgba(233,196,106,0.2)",
        paddingBottom: "20px"
      }}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
          <span style={{ fontSize: "28px" }}>❤️</span>
          <h1 style={{
            fontSize: "clamp(20px, 4vw, 28px)",
            fontWeight: "800", margin: 0,
            color: darkMode ? "#FAF7F2" : "#2B2B2B"
          }}>
            My Favorites
          </h1>
        </motion.div>
        <p style={{ color: darkMode ? "#C8B8A8" : "#888", fontSize: "14px", margin: 0 }}>
          {favFestivals.length > 0
            ? `${favFestivals.length} festival${favFestivals.length > 1 ? "s" : ""} saved`
            : "No favorites yet"}
        </p>
      </div>

      <div style={{ padding: "28px clamp(12px, 4vw, 32px)" }}>

        {/* Empty State */}
        {favFestivals.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: "center", padding: "80px 20px" }}>
            <div style={{ fontSize: "64px", marginBottom: "16px" }}>🤍</div>
            <h2 style={{
              fontSize: "20px", fontWeight: "700", marginBottom: "10px",
              color: darkMode ? "#FAF7F2" : "#2B2B2B"
            }}>
              No favorites saved yet
            </h2>
            <p style={{ color: darkMode ? "#C8B8A8" : "#888", marginBottom: "24px", fontSize: "15px" }}>
              Browse festivals and tap the heart icon to save them here
            </p>
            <button
              onClick={() => navigate("/")}
              style={{
                padding: "12px 28px", background: "#C65D3A",
                color: "#FAF7F2", border: "none", borderRadius: "12px",
                cursor: "pointer", fontSize: "14px", fontWeight: "700"
              }}>
              Explore Festivals →
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
              gap: "clamp(12px, 3vw, 24px)"
            }}>
            {favFestivals.map((festival, i) => (
              <motion.div
                key={festival.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}>
                <EventCard
                  festival={festival}
                  darkMode={darkMode}
                  isFavorite={isFavorite(festival.id)}
                  onToggleFavorite={toggleFavorite}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default FavoritesPage