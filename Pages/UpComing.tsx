import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import festivals from "../Data/Festivals"
import { useFavorites } from "../hooks/UseFav"

function UpcomingPage({ darkMode }: { darkMode: boolean }) {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()

  const bg = darkMode ? "#1C1008" : "#FAF7F2"
  const cardBg = darkMode ? "#2A1A0E" : "#FFFFFF"
  const text = darkMode ? "#FAF7F2" : "#2B2B2B"
  const muted = darkMode ? "#C8B8A8" : "#666"

  // Sort by month order
  const monthOrder = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  const sorted = [...festivals].sort((a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month))

  // Group by month
  const grouped: Record<string, typeof festivals> = {}
  sorted.forEach((f) => {
    if (!grouped[f.month]) grouped[f.month] = []
    grouped[f.month].push(f)
  })

  return (
    <div style={{ minHeight: "100vh", background: bg }}>

      {/* Header */}
      <div style={{
        padding: "32px clamp(12px, 4vw, 32px) 20px",
        borderBottom: "1px solid rgba(233,196,106,0.2)"
      }}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
          <span style={{ fontSize: "28px" }}>📅</span>
          <h1 style={{
            fontSize: "clamp(20px, 4vw, 28px)",
            fontWeight: "800", margin: 0, color: text
          }}>
            Upcoming Festivals
          </h1>
        </motion.div>
        <p style={{ color: muted, fontSize: "14px", margin: 0 }}>
          Plan your visits — all {festivals.length} festivals for 2026
        </p>
      </div>

      {/* Year Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        style={{
          margin: "24px clamp(12px, 4vw, 32px)",
          padding: "16px 24px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #C65D3A, #A64B2A)",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: "10px"
        }}>
        <div>
          <p style={{ color: "rgba(250,247,242,0.7)", fontSize: "12px", margin: "0 0 2px", letterSpacing: "1px", textTransform: "uppercase" }}>
            Festival Calendar
          </p>
          <p style={{ color: "#FAF7F2", fontSize: "22px", fontWeight: "800", margin: 0 }}>
            Rajasthan 2026
          </p>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          {[
            { label: "Festivals", value: festivals.length },
            { label: "Cities", value: new Set(festivals.map(f => f.city)).size },
            { label: "Months", value: Object.keys(grouped).length }
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{ color: "#E9C46A", fontSize: "22px", fontWeight: "800" }}>{stat.value}</div>
              <div style={{ color: "rgba(250,247,242,0.7)", fontSize: "11px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <div style={{ padding: "0 clamp(12px, 4vw, 32px) 40px" }}>
        {Object.entries(grouped).map(([month, fests], groupIndex) => (
          <motion.div
            key={month}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIndex * 0.1 }}
            style={{ marginBottom: "32px" }}>

            {/* Month Label */}
            <div style={{
              display: "flex", alignItems: "center", gap: "12px",
              marginBottom: "16px"
            }}>
              <div style={{
                background: "#C65D3A", color: "#FAF7F2",
                padding: "5px 16px", borderRadius: "20px",
                fontSize: "13px", fontWeight: "700"
              }}>
                {month}
              </div>
              <div style={{ flex: 1, height: "1px", background: "rgba(233,196,106,0.3)" }} />
            </div>

            {/* Festival Cards in this month */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {fests.map((festival, i) => (
                <motion.div
                  key={festival.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: groupIndex * 0.1 + i * 0.07 }}
                  style={{
                    display: "flex", gap: "0",
                    alignItems: "stretch"
                  }}>

                  {/* Timeline dot */}
                  <div style={{
                    display: "flex", flexDirection: "column",
                    alignItems: "center", marginRight: "16px", paddingTop: "4px"
                  }}>
                    <div style={{
                      width: "12px", height: "12px",
                      borderRadius: "50%", background: "#E9C46A",
                      border: "2px solid #C65D3A", flexShrink: 0
                    }} />
                    {i < fests.length - 1 && (
                      <div style={{
                        width: "2px", flex: 1,
                        background: "rgba(233,196,106,0.25)",
                        marginTop: "4px"
                      }} />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    onClick={() => navigate(`/festival/${festival.slug}`)}
                    style={{
                      flex: 1, background: cardBg,
                      border: "1.5px solid rgba(233,196,106,0.35)",
                      borderRadius: "16px", overflow: "hidden",
                      cursor: "pointer", display: "flex",
                      transition: "all 0.25s",
                      boxShadow: "0 2px 8px rgba(198,93,58,0.08)"
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"
                      ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 20px rgba(198,93,58,0.15)"
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"
                      ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(198,93,58,0.08)"
                    }}>

                    {/* Image */}
                    <img
                      src={festival.image}
                      alt={festival.name}
                      style={{
                        width: "clamp(80px, 18vw, 120px)",
                        objectFit: "cover", flexShrink: 0
                      }}
                    />

                    {/* Info */}
                    <div style={{ padding: "14px 16px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                          <h3 style={{
                            fontSize: "clamp(13px, 2vw, 16px)",
                            fontWeight: "700", margin: "0 0 4px", color: text
                          }}>
                            {festival.name}
                          </h3>
                          {/* Heart */}
                          <button
                            onClick={(e) => { e.stopPropagation(); toggleFavorite(festival.id) }}
                            style={{
                              background: "none", border: "none",
                              cursor: "pointer", fontSize: "16px",
                              padding: "0", flexShrink: 0
                            }}>
                            {isFavorite(festival.id) ? "❤️" : "🤍"}
                          </button>
                        </div>
                        <p style={{ fontSize: "12px", color: muted, margin: "0 0 8px", lineHeight: "1.4" }}>
                          {festival.description}
                        </p>
                      </div>

                      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                        <span style={{
                          fontSize: "11px", color: "#C65D3A",
                          fontWeight: "600", display: "flex", alignItems: "center", gap: "4px"
                        }}>
                          📍 {festival.city}
                        </span>
                        <span style={{
                          fontSize: "11px", color: "#6D8B74",
                          fontWeight: "600", display: "flex", alignItems: "center", gap: "4px"
                        }}>
                          📅 {festival.date}
                        </span>
                        <span style={{
                          fontSize: "11px", background: "rgba(198,93,58,0.1)",
                          color: "#C65D3A", padding: "2px 8px",
                          borderRadius: "10px", fontWeight: "600"
                        }}>
                          {festival.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingPage