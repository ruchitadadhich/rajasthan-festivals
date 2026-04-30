import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, MapPin, Clock, Ticket, Calendar } from "lucide-react"
import touristPlaces from "../Data/Travel"
import PlaceCard from "../Components/PlaceCard"

interface Props { darkMode: boolean }

function PlaceDetail({ darkMode }: Props) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedImg, setSelectedImg] = useState<string | null>(null)
  const [imgIndex, setImgIndex] = useState(0)

  const place = touristPlaces.find(p => p.id === Number(id))

  if (!place) return (
    <div style={{ padding: "60px 20px", textAlign: "center", color: darkMode ? "#FAF7F2" : "#2B2B2B" }}>
      <p style={{ fontSize: "48px" }}>😕</p>
      <p style={{ fontSize: "20px", marginBottom: "16px" }}>Place not found</p>
      <button onClick={() => navigate("/")}
        style={{ padding: "10px 24px", background: "#C65D3A", color: "#FAF7F2", border: "none", borderRadius: "10px", cursor: "pointer", fontSize: "15px" }}>
        ← Back to Home
      </button>
    </div>
  )

  const nearby = touristPlaces.filter(p => place.nearbyPlaces.includes(p.id))

  const bg     = darkMode ? "#1C1008" : "#FAF7F2"
  const cardBg = darkMode ? "#2A1A0E" : "#FFFFFF"
  const text   = darkMode ? "#FAF7F2" : "#2B2B2B"
  const muted  = darkMode ? "#C8B8A8" : "#666666"

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: "100vh", background: bg }}>

      {/* ── Lightbox ── */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            background: "rgba(0,0,0,0.88)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px"
          }}>
          <img
            src={selectedImg}
            alt="Gallery"
            style={{ maxWidth: "100%", maxHeight: "90vh", borderRadius: "16px", objectFit: "contain" }}
          />
          <button
            onClick={() => setSelectedImg(null)}
            style={{
              position: "absolute", top: "16px", right: "16px",
              background: "rgba(250,247,242,0.15)", border: "1px solid rgba(250,247,242,0.3)",
              color: "#FAF7F2", borderRadius: "50%", width: "36px", height: "36px",
              fontSize: "18px", cursor: "pointer"
            }}>✕</button>
        </div>
      )}

      {/* ── Hero ── */}
      <div style={{ position: "relative", height: "clamp(220px, 45vw, 400px)", overflow: "hidden" }}>
        <motion.img
          key={imgIndex}
          initial={{ scale: 1.08, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          src={place.gallery[imgIndex]}
          alt={place.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={e => { e.currentTarget.src = "https://via.placeholder.com/800x400?text=No+Image" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(28,10,8,0.3) 0%, rgba(28,10,8,0.80) 100%)"
        }} />

        {/* Back button */}
        <button onClick={() => navigate(-1)} style={{
          position: "absolute", top: "14px", left: "14px",
          background: "rgba(250,247,242,0.15)", border: "1px solid rgba(250,247,242,0.3)",
          color: "#FAF7F2", padding: "7px 14px", borderRadius: "10px",
          cursor: "pointer", fontSize: "12px", fontWeight: "600",
          display: "flex", alignItems: "center", gap: "6px"
        }}>
          <ArrowLeft size={14} /> Back
        </button>

        {/* Rating badge */}
        <span style={{
          position: "absolute", top: "14px", right: "14px",
          background: "rgba(250,247,242,0.15)", border: "1px solid rgba(250,247,242,0.3)",
          color: "#FAF7F2", padding: "7px 14px", borderRadius: "10px",
          fontSize: "12px", fontWeight: "700",
          display: "flex", alignItems: "center", gap: "5px"
        }}>
          ⭐ {place.rating}
        </span>

        {/* Title overlay */}
        <div style={{ position: "absolute", bottom: "20px", left: "16px", right: "16px" }}>
          <span style={{
            background: "#C65D3A", color: "#FAF7F2",
            fontSize: "10px", fontWeight: "700", padding: "3px 10px",
            borderRadius: "20px", letterSpacing: "1px"
          }}>
            Tourist Place
          </span>
          <h1 style={{
            color: "#FAF7F2", fontWeight: "800", margin: "6px 0 4px",
            lineHeight: "1.2", fontSize: "clamp(20px, 5vw, 36px)"
          }}>
            {place.name}
          </h1>
          <p style={{ color: "#E9C46A", fontSize: "clamp(11px, 2vw, 14px)", margin: 0 }}>
            📍 {place.city} &nbsp;•&nbsp; 🏷️ {place.tag} &nbsp;•&nbsp; {place.highlight}
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{
        maxWidth: "900px", margin: "0 auto",
        padding: "clamp(16px, 4vw, 40px) clamp(12px, 4vw, 24px)",
        display: "flex", flexDirection: "column", gap: "20px"
      }}>

        {/* Quick Stats — same 3-col grid as FestivalDetail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
          {[
            { label: "Location",  value: place.city,      icon: <MapPin    size={18} color="#C65D3A" /> },
            { label: "Best Time", value: place.bestTime,  icon: <Calendar  size={18} color="#C65D3A" /> },
            { label: "Timings",   value: place.timings,   icon: <Clock     size={18} color="#C65D3A" /> },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: cardBg, borderRadius: "14px",
              border: "1.5px solid #E9C46A",
              padding: "clamp(10px, 2vw, 16px)", textAlign: "center"
            }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "4px" }}>{stat.icon}</div>
              <div style={{ fontSize: "10px", color: "#C65D3A", fontWeight: "700", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: "2px" }}>
                {stat.label}
              </div>
              <div style={{ fontSize: "clamp(10px, 1.5vw, 13px)", fontWeight: "600", color: text }}>
                {stat.value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Entry Fee full-width card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{
            background: cardBg, borderRadius: "14px",
            border: "1.5px solid #E9C46A",
            padding: "14px 20px",
            display: "flex", alignItems: "center", gap: "12px"
          }}>
          <Ticket size={20} color="#C65D3A" />
          <div>
            <div style={{ fontSize: "10px", color: "#C65D3A", fontWeight: "700", letterSpacing: "0.5px", textTransform: "uppercase" }}>Entry Fee</div>
            <div style={{ fontSize: "14px", fontWeight: "600", color: text, marginTop: "2px" }}>{place.entryFee}</div>
          </div>
        </motion.div>

        {/* About / Full Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ background: cardBg, borderRadius: "20px", padding: "clamp(16px, 4vw, 28px)", border: "1px solid rgba(233,196,106,0.3)" }}>
          <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#C65D3A", marginBottom: "12px", marginTop: 0 }}>
            📖 About this Place
          </h2>
          <p style={{ fontSize: "clamp(13px, 2vw, 15px)", lineHeight: "1.8", color: muted, margin: 0 }}>
            {place.fullStory}
          </p>
        </motion.div>

        {/* Highlights — same as FestivalDetail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ background: cardBg, borderRadius: "20px", padding: "clamp(16px, 4vw, 28px)", border: "1px solid rgba(233,196,106,0.3)" }}>
          <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#C65D3A", marginBottom: "14px", marginTop: 0 }}>
            ✨ Highlights
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {place.highlights.map((h, i) => (
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

        {/* Gallery — same 3-col grid with lightbox */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}>
          <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#C65D3A", marginBottom: "14px" }}>
            🖼 Gallery
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
            {place.gallery.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                onClick={() => { setSelectedImg(img); setImgIndex(i) }}
                style={{ cursor: "zoom-in", borderRadius: "12px", overflow: "hidden", border: "1.5px solid #E9C46A" }}>
                <img
                  src={img}
                  alt={`${place.name} ${i + 1}`}
                  onError={e => { e.currentTarget.src = place.image }}
                  style={{ width: "100%", height: "clamp(80px, 18vw, 160px)", objectFit: "cover", display: "block" }}
                />
              </motion.div>
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
          <p style={{ fontSize: "14px", color: muted, marginBottom: "14px" }}>{place.location}</p>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(place.location)}`}
            target="_blank" rel="noreferrer"
            style={{
              display: "inline-block", padding: "10px 20px",
              background: "#6D8B74", color: "#FAF7F2",
              borderRadius: "10px", fontSize: "13px",
              fontWeight: "700", textDecoration: "none"
            }}>
            Open in Google Maps →
          </a>
        </motion.div>

        {/* Nearby Places — same as "Related Festivals" */}
        {nearby.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}>
            <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#C65D3A", marginBottom: "14px" }}>
              📍 Nearby Places
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))", gap: "12px" }}>
              {nearby.map(p => (
                <PlaceCard key={p.id} place={p} darkMode={darkMode} />
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </motion.div>
  )
}

export default PlaceDetail