interface Festival {
  id: number
  name: string
  city: string
  date: string
  image: string
  description: string
}

function EventCard({ festival }: { festival: Festival }) {
  return (
    <div className="rounded-xl overflow-hidden transition-transform hover:scale-105 cursor-pointer"
      style={{ background: "#1E293B", border: "1px solid #334155" }}>
      <img src={festival.image} alt={festival.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1" style={{ color: "#F8FAFC" }}>{festival.name}</h2>
        <p className="text-sm mb-1" style={{ color: "#94A3B8" }}>📍 {festival.city}</p>
        <p className="text-sm font-medium mb-3"
          style={{ background: "linear-gradient(to right, #F97316, #EC4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          📅 {festival.date}
        </p>
        <button className="w-full py-2 rounded-lg text-sm font-semibold text-white"
          style={{ background: "linear-gradient(to right, #F97316, #EC4899, #8B5CF6)" }}>
          View Details
        </button>
      </div>
    </div>
  )
}

export default EventCard