import festivals from '../Data/Festivals'
import EventCard from '../components/EventCards'

interface HomePageProps {
  selectedCity: string
  darkMode: boolean
}

function HomePage({ selectedCity, darkMode }: HomePageProps) {
  const filtered = selectedCity === "All"
    ? festivals
    : festivals.filter((f) => f.city === selectedCity)

  return (
    <div className="min-h-screen" style={{ background: darkMode ? "#0A1628" : "#F0F4FF" }}>

      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden">
        <img
          src="/rajasthan.jpg"
          alt="Rajasthan"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ background: "rgba(10, 22, 40, 0.65)" }}>
          <h1 className="text-5xl font-bold text-white mb-3">
            🏰 Rajasthan Festivals
          </h1>
          <p className="text-lg" style={{ color: "#D4AF37" }}>
            Discover the colors, culture & traditions of Rajasthan
          </p>
        </div>
      </div>

      {/* Festival Cards */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6"
          style={{ color: darkMode ? "#D4AF37" : "#1A3A6B" }}>
          {selectedCity === "All" ? "🎉 All Festivals" : `📍 Festivals in ${selectedCity}`}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {filtered.map((festival) => (
            <EventCard key={festival.id} festival={festival} darkMode={darkMode} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default HomePage