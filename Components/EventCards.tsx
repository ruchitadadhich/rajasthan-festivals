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
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-72">
      <img src={festival.image} alt={festival.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{festival.name}</h2>
        <p className="text-sm text-gray-500">{festival.city}</p>
        <p className="text-sm text-orange-500 font-medium">{festival.date}</p>
        <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg w-full">
          View Details
        </button>
      </div>
    </div>
  )
}

export default EventCard