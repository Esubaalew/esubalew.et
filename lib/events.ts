interface Event {
  id: number
  name: string
  year: number
  description: string
}

export function getEvents(): Event[] {
  return [
    {
      id: 1,
      name: "SIS Hackathon",
      year: 2023,
      description:
        "Participated in the SIS Hackathon, showcasing innovative solutions to real-world problems. Our team developed a mobile app for improving access to healthcare in rural areas.",
    },
    {
      id: 2,
      name: "Data Science Hackathon",
      year: 2025,
      description:
        "Took part in the Data Science Hackathon, applying advanced analytics and machine learning techniques to solve complex data challenges. Our team developed a predictive model for crop yield optimization in Ethiopian agriculture.",
    },
    {
      id: 3,
      name: "AfricaTech Conference",
      year: 2024,
      description:
        "Presented a keynote speech on 'The Role of AI in Solving African Challenges' at the annual AfricaTech Conference in Addis Ababa. Discussed the potential of AI in healthcare, education, and agriculture.",
    },
    {
      id: 4,
      name: "Ethiopian Developer Summit",
      year: 2026,
      description:
        "Organized and led the first Ethiopian Developer Summit, bringing together tech professionals from across the country to share knowledge, network, and collaborate on innovative projects.",
    },
  ]
}

