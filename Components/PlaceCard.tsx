import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import type { TouristPlace } from "../Data/Travel"

interface PlaceCardProps {
  place: TouristPlace
  darkMode: boolean
}

function PlaceCard({ place, darkMode }: PlaceCardProps) {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -8, boxShadow: "0 12px 25px rgba(0,0,0,0.15)" }}
      onClick={() => navigate(`/place/${place.id}`)}
      style={{
        background: darkMode ? "#2A1A0E" : "#FFFFFF",
        border: "1.5px solid #E9C46A",
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(198,93,58,0.10)",
        transition: "box-shadow 0.3s ease"
      }}>

      {/* Image */}
      <div style={{ position: "relative" }}>
        <img
          src={place.image}
          alt={place.name}
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
          onError={e => { e.currentTarget.src = "https://via.placeholder.com/600x300?text=No+Image" }}
        />

        {/* Category Badge — same as EventCard */}
        <span style={{
          position: "absolute", top: "10px", left: "10px",
          background: "rgba(198,93,58,0.90)", color: "#FAF7F2",
          fontSize: "11px", fontWeight: "700", padding: "3px 10px",
          borderRadius: "20px", letterSpacing: "0.5px"
        }}>
          Tourist Place
        </span>

        {/* Rating — same position as heart in EventCard */}
        <span style={{
          position: "absolute", top: "10px", right: "10px",
          background: "rgba(250,247,242,0.92)",
          color: "#C65D3A", fontSize: "12px", fontWeight: "700",
          padding: "4px 10px", borderRadius: "20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          display: "flex", alignItems: "center", gap: "3px"
        }}>
          ⭐ {place.rating}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "16px" }}>
        <h2 style={{
          fontSize: "16px", fontWeight: "700", marginBottom: "4px",
          color: darkMode ? "#FAF7F2" : "#2B2B2B"
        }}>
          {place.name}
        </h2>

        {/* City + Tag — same as city + date row in EventCard */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontSize: "12px", color: "#C65D3A", fontWeight: "600" }}>
            📍 {place.city}
          </span>
          <span style={{ fontSize: "12px", color: "#6D8B74", fontWeight: "600" }}>
            🏷️ {place.tag}
          </span>
        </div>

        <p style={{
          fontSize: "13px", color: darkMode ? "#C8B8A8" : "#666666",
          marginBottom: "14px", lineHeight: "1.5",
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden"
        }}>
          {place.description}
        </p>

        {/* Same two-button layout as EventCard */}
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={(e) => e.stopPropagation()}
            style={{
              flex: 1, padding: "8px", borderRadius: "10px",
              border: "1.5px solid #E9C46A", background: "transparent",
              color: darkMode ? "#E9C46A" : "#C65D3A",
              fontSize: "12px", fontWeight: "600", cursor: "pointer"
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(233,196,106,0.15)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
            🤍 Save
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(`/place/${place.id}`) }}
            style={{
              flex: 1, padding: "8px", borderRadius: "10px",
              border: "none", background: "#C65D3A",
              color: "#FAF7F2", fontSize: "12px",
              fontWeight: "600", cursor: "pointer"
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

export default PlaceCard