import festivals from '../data/festivals'
import EventCard from '../Components/EventCards'

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-orange-500">
        🎉 Indian Festivals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {festivals.map((festival) => (
          <EventCard key={festival.id} festival={festival} />
        ))}
      </div>
    </div>
  )
}

export default HomePage