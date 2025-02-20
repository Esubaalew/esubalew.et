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
  ]
}

