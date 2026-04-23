interface Festival {
  id: number
  name: string
  city: string
  date: string
  image: string
  description: string
}

function EventCard({ festival, darkMode }: { festival: Festival, darkMode: boolean }) {
  return (
    <div className="rounded-xl overflow-hidden transition-transform hover:scale-105 cursor-pointer"
      style={{
        background: darkMode ? "#0F2545" : "#FFFFFF",
        border: "2px solid #D4AF37",
        boxShadow: "0 4px 15px rgba(26, 58, 107, 0.2)"
      }}>
      <img src={festival.image} alt={festival.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1"
          style={{ color: darkMode ? "#FFFFFF" : "#1A3A6B" }}>
          {festival.name}
        </h2>
        <p className="text-sm mb-1"
          style={{ color: darkMode ? "#93C5FD" : "#1A3A6B" }}>
          📍 {festival.city}
        </p>
        <p className="text-sm font-medium mb-3"
          style={{ color: "#D4AF37" }}>
          📅 {festival.date}
        </p>
        <button
          className="w-full py-2 rounded-lg text-sm font-semibold transition-all"
          style={{ background: "#1A3A6B", color: "#FFFFFF" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#D4AF37")}
          onMouseLeave={e => (e.currentTarget.style.background = "#1A3A6B")}>
          View Details
        </button>
      </div>
    </div>
  )
}

export default EventCard