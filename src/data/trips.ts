export interface Trip {
  id: string;
  title: string;
  slug: string;
  price: string;
  duration: string;
  dates: string;
  mainImage: string;
  thumbnail: string;
  highlights: string[];
  itinerary: { day: number; title: string; activities: string[] }[];
  inclusions: string[];
  exclusions: string[];
}

export const trips: Trip[] = [
  {
    id: "1",
    title: "Spiti Valley Expedition",
    slug: "spiti-valley",
    price: "₹18,500",
    duration: "7 Days / 6 Nights",
    dates: "June - September",
    mainImage: "https://picsum.photos/seed/spiti/1920/1080",
    thumbnail: "https://picsum.photos/seed/spiti-thumb/600/800",
    highlights: ["Highest post office", "Monastery stay", "Stargazing", "River crossing"],
    itinerary: [
      { day: 1, title: "Delhi to Shimla", activities: ["Arrival in Delhi", "Overnight journey to Shimla", "Group introduction"] },
      { day: 2, title: "Shimla to Kalpa", activities: ["Scenic drive through Kinnaur", "Visit Kalpa monastery", "Valley views"] },
      { day: 3, title: "Kalpa to Kaza", activities: ["Enter Spiti Valley", "Nako village visit", "Kaza stay"] },
      { day: 4, title: "Sightseeing in Kaza", activities: ["Key Monastery", "Kibber village", "Highest Post Office at Hikkim"] },
      { day: 5, title: "Kaza to Chandratal", activities: ["Drive to the Moon Lake", "Camping at 14,000 ft", "Evening by the lake"] },
      { day: 6, title: "Return Journey", activities: ["Drive back via Rohtang", "Reach Manali", "Free time in Manali"] },
      { day: 7, title: "Arrival Delhi", activities: ["Morning in Manali", "Bus to Delhi", "Departure"] }
    ],
    inclusions: ["All transportation", "Camping & Hotel stays", "Breakfast & Dinner", "Oxygen cylinders", "Trip Leader"],
    exclusions: ["Lunches", "Personal expenses", "Travel insurance", "Anything not mentioned above"]
  },
  {
    id: "2",
    title: "Kashmir: The Heaven on Earth",
    slug: "kashmir",
    price: "₹21,000",
    duration: "6 Days / 5 Nights",
    dates: "All Year Round",
    mainImage: "https://picsum.photos/seed/kashmir/1920/1080",
    thumbnail: "https://picsum.photos/seed/kashmir-thumb/600/800",
    highlights: ["Houseboat stay", "Gondola ride", "Saffron fields", "Shikara ride"],
    itinerary: [
      { day: 1, title: "Arrival Srinagar", activities: ["Pick up from airport", "Check-in at Houseboat", "Sunset Shikara ride"] },
      { day: 2, title: "Srinagar to Gulmarg", activities: ["Drive to Gulmarg", "Gondola Ride", "Snow activities"] },
      { day: 3, title: "Gulmarg to Pahalgam", activities: ["Visit Saffron fields", "Betaab Valley", "Aru Valley sightseeing"] },
      { day: 4, title: "Pahalgam Exploration", activities: ["Mini Switzerland hike", "Lidder river walk", "Local market"] },
      { day: 5, title: "Return to Srinagar", activities: ["Mughal Gardens", "Dal Lake exploration", "Shopping at Lal Chowk"] },
      { day: 6, title: "Departure", activities: ["Airport drop", "Farewell"] }
    ],
    inclusions: ["Airport pickups", "Houseboat & Hotel stay", "Private taxi", "All breakfasts", "Dedicated Trip Host"],
    exclusions: ["Flights", "Lunch & Dinner", "Gondola tickets", "Pony rides"]
  },
  {
    id: "3",
    title: "Meghalaya: Abode of Clouds",
    slug: "meghalaya",
    price: "₹16,800",
    duration: "6 Days / 5 Nights",
    dates: "October - April",
    mainImage: "https://picsum.photos/seed/meghalaya/1920/1080",
    thumbnail: "https://picsum.photos/seed/meghalaya-thumb/600/800",
    highlights: ["Double decker root bridge", "Crystal clear river", "Caving expedition", "Cliff jumping"],
    itinerary: [
      { day: 1, title: "Guwahati to Shillong", activities: ["Pick up in Guwahati", "Umiam Lake stop", "Cafe hopping in Shillong"] },
      { day: 2, title: "Shillong to Cherrapunji", activities: ["Elephant Falls", "Garden of Caves", "Nohkalikai Falls"] },
      { day: 3, title: "Double Decker Hike", activities: ["Trek to Nongriat", "Rainbow falls hike", "Village stay"] },
      { day: 4, title: "Cherrapunji to Shnongpdeng", activities: ["Drive to Dawki", "Boating in Umngot river", "Riverside camping"] },
      { day: 5, title: "Krangsuri & Jowai", activities: ["Krangsuri falls", "Cliff jumping", "Back to Shillong"] },
      { day: 6, title: "Return to Guwahati", activities: ["Morning in Shillong", "Drive to Airport/Railway station"] }
    ],
    inclusions: ["All group transport", "Unique stays", "Breakfasts", "Hike guides", "Equipments for cliff jumping"],
    exclusions: ["Personal drinks", "Flight tickets", "Entry fees of parks", "Medical emergencies"]
  },
  {
    id: "4",
    title: "Gokarna-Goa Coastal Trail",
    slug: "gokarna-goa",
    price: "₹12,500",
    duration: "5 Days / 4 Nights",
    dates: "October - March",
    mainImage: "https://picsum.photos/seed/goa/1920/1080",
    thumbnail: "https://picsum.photos/seed/goa-thumb/600/800",
    highlights: ["Beach trekking", "Hippie vibes", "Secret waterfalls", "Night markets"],
    itinerary: [
      { day: 1, title: "Arrival Gokarna", activities: ["Check-in at Beach Hut", "Visit Om Beach", "Sunset trek to Half Moon Beach"] },
      { day: 2, title: "Beach Trekking", activities: ["Visit Paradise Beach", "Cliff jumping (seasonal)", "Evening hippie drum circle"] },
      { day: 3, title: "Gokarna to South Goa", activities: ["Drive to Canacona", "Palolem beach sunset", "Cabo de Rama fort visit"] },
      { day: 4, title: "South Goa Exploration", activities: ["Butterfly Beach boat trip", "Cola Beach lagoon", "Night market"] },
      { day: 5, title: "Farewell", activities: ["Lazy breakfast", "Drive to airport/station", "End of trip"] }
    ],
    inclusions: ["Stay in beach huts", "Vehicle for transfers", "Breakfast", "Trip guide", "First aid"],
    exclusions: ["Bike rentals", "Water sports", "Lunches & Dinners"]
  }
];
