import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import festivals from "../Data/Festivals"
import { useFavorites } from "../hooks/UseFav"

function FestivalDetail({ darkMode }: { darkMode: boolean }) {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()

  const festival = festivals.find((f) => f.slug === slug)

  if (!festival) return (
    <div style={{ padding: "60px 20px", textAlign: "center", color: darkMode ? "#FAF7F2" : "#2B2B2B" }}>
      <p style={{ fontSize: "48px" }}>😕</p>
      <p style={{ fontSize: "20px", marginBottom: "16px" }}>Festival not found</p>
      <button onClick={() => navigate("/")}
        style={{ padding: "10px 24px", background: "#C65D3A", color: "#FAF7F2", border: "none", borderRadius: "10px", cursor: "pointer", fontSize: "15px" }}>
        ← Back to Home
      </button>
    </div>
  )

  const bg = darkMode ? "#1C1008" : "#FAF7F2"
  const cardBg = darkMode ? "#2A1A0E" : "#FFFFFF"
  const text = darkMode ? "#FAF7F2" : "#2B2B2B"
  const muted = darkMode ? "#C8B8A8" : "#666666"

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: "100vh", background: bg }}>

      {/* ── Hero ── */}
      <div style={{ position: "relative", height: "clamp(220px, 45vw, 400px)", overflow: "hidden" }}>
        <motion.img
          initial={{ scale: 1.08 }} animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          src={festival.image} alt={festival.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(28,10,8,0.3) 0%, rgba(28,10,8,0.80) 100%)"
        }} />

        {/* Back */}
        <button onClick={() => navigate(-1)} style={{
          position: "absolute", top: "14px", left: "14px",
          background: "rgba(250,247,242,0.15)",
          border: "1px solid rgba(250,247,242,0.3)",
          color: "#FAF7F2", padding: "7px 14px",
          borderRadius: "10px", cursor: "pointer",
          fontSize: "12px", fontWeight: "600"
        }}>
          ← Back
        </button>

        {/* Favorite */}
        <motion.button whileTap={{ scale: 1.2 }}
          onClick={() => toggleFavorite(festival.id)}
          style={{
            position: "absolute", top: "14px", right: "14px",
            background: "rgba(250,247,242,0.15)",
            border: "1px solid rgba(250,247,242,0.3)",
            color: "#FAF7F2", padding: "7px 14px",
            borderRadius: "10px", cursor: "pointer",
            fontSize: "12px", fontWeight: "600"
          }}>
          {isFavorite(festival.id) ? "❤️ Saved" : "🤍 Save"}
        </motion.button>

        {/* Title */}
        <div style={{ position: "absolute", bottom: "20px", left: "16px", right: "16px" }}>
          <span style={{
            background: "#C65D3A", color: "#FAF7F2",
            fontSize: "10px", fontWeight: "700", padding: "3px 10px",
            borderRadius: "20px", letterSpacing: "1px"
          }}>
            {festival.category}
          </span>
          <h1 style={{
            color: "#FAF7F2", fontWeight: "800",
            margin: "6px 0 4px", lineHeight: "1.2",
            fontSize: "clamp(20px, 5vw, 36px)"
          }}>
            {festival.name}
          </h1>
          <p style={{ color: "#E9C46A", fontSize: "clamp(11px, 2vw, 14px)", margin: 0, flexWrap: "wrap" }}>
            📍 {festival.city} &nbsp;•&nbsp; 📅 {festival.date} &nbsp;•&nbsp; ⏱ {festival.duration}
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{
        maxWidth: "900px", margin: "0 auto",
        padding: "clamp(16px, 4vw, 40px) clamp(12px, 4vw, 24px)",
        display: "flex", flexDirection: "column", gap: "20px"
      }}>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
          {[
            { label: "City", value: festival.city, icon: "📍" },
            { label: "Best Time", value: festival.bestTime, icon: "🌤" },
            { label: "Duration", value: festival.duration, icon: "⏱" }
          ].map((stat) => (
            <div key={stat.label} style={{
              background: cardBg, borderRadius: "14px",
              border: "1.5px solid #E9C46A",
              padding: "clamp(10px, 2vw, 16px)",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "18px", marginBottom: "4px" }}>{stat.icon}</div>
              <div style={{ fontSize: "10px", color: "#C65D3A", fontWeight: "700", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: "2px" }}>
                {stat.label}
              </div>
              <div style={{ fontSize: "clamp(10px, 1.5vw, 13px)", fontWeight: "600", color: text }}>
                {stat.value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Full Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ background: cardBg, borderRadius: "20px", padding: "clamp(16px, 4vw, 28px)", border: "1px solid rgba(233,196,106,0.3)" }}>
          <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#C65D3A", marginBottom: "12px", marginTop: 0 }}>
            📖 The Story
          </h2>
          <p style={{ fontSize: "clamp(13px, 2vw, 15px)", lineHeight: "1.8", color: muted, margin: 0 }}>
            {festival.fullStory}
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ background: cardBg, borderRadius: "20px", padding: "clamp(16px, 4vw, 28px)", border: "1px solid rgba(233,196,106,0.3)" }}>
          <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#C65D3A", marginBottom: "14px", marginTop: 0 }}>
            ✨ Highlights
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {festival.highlights.map((h, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}
                style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "10px 12px", borderRadius: "10px",
                  background: darkMode ? "rgba(233,196,106,0.08)" : "rgba(198,93,58,0.06)"
                }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#C65D3A", flexShrink: 0 }} />
                <span style={{ fontSize: "clamp(12px, 2vw, 14px)", color: text }}>{h}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}>
          <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#C65D3A", marginBottom: "14px" }}>
            🖼 Gallery
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
            {festival.gallery.map((img, i) => (
              <motion.img key={i} whileHover={{ scale: 1.03 }}
                src={img} alt={`${festival.name} ${i + 1}`}
                style={{ width: "100%", height: "clamp(80px, 18vw, 160px)", objectFit: "cover", borderRadius: "12px", border: "1.5px solid #E9C46A" }}
              />
            ))}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ background: cardBg, borderRadius: "20px", padding: "clamp(16px, 4vw, 28px)", border: "1px solid rgba(233,196,106,0.3)" }}>
          <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#C65D3A", marginBottom: "8px", marginTop: 0 }}>
            📍 Location
          </h2>
          <p style={{ fontSize: "14px", color: muted, marginBottom: "14px" }}>{festival.location}</p>
          <a href={festival.mapUrl} target="_blank" rel="noreferrer"
            style={{
              display: "inline-block", padding: "10px 20px",
              background: "#6D8B74", color: "#FAF7F2",
              borderRadius: "10px", fontSize: "13px",
              fontWeight: "700", textDecoration: "none"
            }}>
            Open in Google Maps →
          </a>
        </motion.div>

        {/* Related Festivals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}>
          <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#C65D3A", marginBottom: "14px" }}>
            🎉 Related Festivals
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(160px, 100%), 1fr))", gap: "12px" }}>
            {festivals.filter((f) => f.id !== festival.id).slice(0, 3).map((f) => (
              <motion.div key={f.id} whileHover={{ y: -4 }}
                onClick={() => navigate(`/festival/${f.slug}`)}
                style={{ background: cardBg, borderRadius: "14px", border: "1.5px solid #E9C46A", overflow: "hidden", cursor: "pointer" }}>
                <img src={f.image} alt={f.name}
                  style={{ width: "100%", height: "clamp(70px, 15vw, 110px)", objectFit: "cover" }} />
                <div style={{ padding: "10px" }}>
                  <p style={{ fontWeight: "700", fontSize: "12px", color: text, margin: "0 0 2px" }}>{f.name}</p>
                  <p style={{ fontSize: "11px", color: "#C65D3A", margin: 0 }}>📍 {f.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default FestivalDetail