import festivals from '../data/festivals'
import EventCard from '../Components/EventCards'

interface HomePageProps {
  selectedCity: string
  darkMode: boolean
}

function HomePage({ selectedCity, darkMode }: HomePageProps) {
  const filtered = selectedCity === "All"
    ? festivals
    : festivals.filter((f) => f.city === selectedCity)

  return (
    <div className="min-h-screen p-8" style={{ background: darkMode ? "#0F172A" : "#F1F5F9" }}>
      <h1 className="text-4xl font-bold text-center mb-10"
        style={{ background: "linear-gradient(to right, #F97316, #EC4899, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        🎉 Rajasthan Festivals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filtered.map((festival) => (
          <EventCard key={festival.id} festival={festival} />
        ))}
      </div>
    </div>
  )
}
export default HomePage