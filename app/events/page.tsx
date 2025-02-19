import { getEvents } from "@/lib/events"

export default function Events() {
  const events = getEvents()

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Events</h1>
      <div className="decorative-line w-32 mb-6"></div>
      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">{event.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{event.year}</p>
            <p className="text-lg">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

