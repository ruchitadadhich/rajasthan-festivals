export interface Festival {
  id: number
  slug: string
  name: string
  city: string
  date: string
  month: string
  category: string
  image: string
  gallery: string[]
  description: string
  fullStory: string
  bestTime: string
  duration: string
  highlights: string[]
  location: string
  mapUrl: string
}

const festivals: Festival[] = [
  {
    id: 1,
    slug: "gangaur",
    name: "Gangaur Festival",
    city: "Jaipur",
    date: "10 April 2026",
    month: "April",
    category: "Religious",
    image: "/Gangaur.jpg",
    gallery: ["/Gangaur.jpg", "/Gangaur.jpg", "/Gangaur.jpg"],
    description: "Celebration of love, marriage & womanhood.",
    fullStory: "Gangaur is one of Rajasthan's most beloved festivals, celebrated by women with great devotion. Lasting 18 days, it honors Goddess Gauri — an incarnation of Parvati — as a symbol of marital bliss and feminine power. Women dress in vibrant traditional attire, carry clay idols of Gauri on their heads, and sing folk songs as they walk in procession to the nearest lake or river. The festival begins on the first day of Chaitra (March–April) and the rituals involve fasting, prayers, and colorful mehndi. The royal procession in Jaipur, starting from City Palace, is a grand spectacle drawing thousands.",
    bestTime: "March – April (Chaitra month)",
    duration: "18 Days",
    highlights: ["Royal procession from City Palace", "Women in traditional Rajasthani attire", "Clay idol immersion ceremony", "Folk songs & dance performances", "Mehndi & jewelry markets"],
    location: "City Palace, Jaipur, Rajasthan",
    mapUrl: "https://maps.google.com/?q=City+Palace+Jaipur"
  },
  {
    id: 2,
    slug: "desert-festival",
    name: "Desert Festival",
    city: "Jaisalmer",
    date: "15 Feb 2026",
    month: "February",
    category: "Cultural",
    image: "/deseart.jpg",
    gallery: ["/deseart.jpg", "/deseart.jpg", "/deseart.jpg"],
    description: "Golden dunes, camel races & folk music under open skies.",
    fullStory: "Held against the majestic backdrop of the Sam Sand Dunes, the Jaisalmer Desert Festival is a three-day extravaganza that brings the culture of the Thar Desert alive. It showcases the finest folk musicians, dancers, camel decorators, and turban-tying champions from across Rajasthan. The highlight is the Mr. Desert competition — a search for the most traditionally dressed man with the longest moustache! As night falls, the dunes glow with bonfires and the sound of folk instruments like the sarangi and khartal fills the crisp desert air. A truly magical experience under a blanket of stars.",
    bestTime: "February (3 days before full moon)",
    duration: "3 Days",
    highlights: ["Camel races on Sam Sand Dunes", "Mr. Desert & longest moustache contest", "Turban tying competition", "Folk music under the stars", "Traditional puppet shows"],
    location: "Sam Sand Dunes, Jaisalmer, Rajasthan",
    mapUrl: "https://maps.google.com/?q=Sam+Sand+Dunes+Jaisalmer"
  },
  {
    id: 3,
    slug: "marwar-festival",
    name: "Marwar Festival",
    city: "Jodhpur",
    date: "5 Oct 2026",
    month: "October",
    category: "Music",
    image: "/marwar.jpg",
    gallery: ["/marwar.jpg", "/marwar.jpg", "/marwar.jpg"],
    description: "A musical tribute to the heroes of Marwar under moonlit skies.",
    fullStory: "The Marwar Festival, held in Jodhpur every October, is a tribute to the folk heroes and warriors of the Marwar region. Set against the stunning backdrop of Mehrangarh Fort, the two-day festival features soulful performances of Rajasthani folk music — particularly the haunting melodies of Langas and Manganiyars, the traditional musician communities of Rajasthan. The festival also includes camel tattoo shows and polo matches, making it a perfect blend of art, culture, and sport. The evening candlelight concert at Osian or Mehrangarh is an unforgettable experience that leaves visitors spellbound.",
    bestTime: "October (Sharad Purnima — full moon night)",
    duration: "2 Days",
    highlights: ["Folk concerts at Mehrangarh Fort", "Langa & Manganiyar music performances", "Camel tattoo parade", "Polo match at Polo Ground", "Moonlight cultural evening"],
    location: "Mehrangarh Fort, Jodhpur, Rajasthan",
    mapUrl: "https://maps.google.com/?q=Mehrangarh+Fort+Jodhpur"
  },
  {
    id: 4,
    slug: "pushkar-fair",
    name: "Pushkar Fair",
    city: "Pushkar",
    date: "10 Nov 2026",
    month: "November",
    category: "Fair / Mela",
    image: "/puskar (2).jpg",
    gallery: ["/puskar (2).jpg", "/puskar (2).jpg", "/puskar (2).jpg"],
    description: "World's largest camel fair — a riot of color, trade & faith.",
    fullStory: "The Pushkar Camel Fair is one of the world's most extraordinary gatherings — a collision of commerce, religion, and festivity that has been held annually for centuries. Over 50,000 camels, horses, and cattle are brought to Pushkar by traders from across Rajasthan and beyond. The fairgrounds transform into a city of their own with folk performances, hot air balloon rides, and the famous camel beauty contest. The religious significance is equally profound — Pushkar is home to the only Brahma temple in the world, and thousands of pilgrims take a holy dip in Pushkar Lake during Kartik Purnima, believing it washes away all sins.",
    bestTime: "November (Kartik Purnima — full moon)",
    duration: "5 Days",
    highlights: ["50,000+ camels at the fairgrounds", "Camel beauty & race competition", "Hot air balloon rides at sunrise", "Holy dip at Pushkar Lake", "Brahma Temple evening aarti"],
    location: "Pushkar Lake & Fairgrounds, Pushkar, Rajasthan",
    mapUrl: "https://maps.google.com/?q=Pushkar+Fair+Rajasthan"
  },
  {
    id: 5,
    slug: "mewar-festival",
    name: "Mewar Festival",
    city: "Udaipur",
    date: "9 April 2026",
    month: "April",
    category: "Cultural",
    image: "/mewar.jpeg",
    gallery: ["/mewar.jpeg", "/mewar.jpeg", "/mewar.jpeg"],
    description: "Procession of Goddess Gauri on the shimmering lakes of Udaipur.",
    fullStory: "The Mewar Festival marks the arrival of spring in Udaipur and is celebrated with extraordinary grace. The main event is the shobhayatra — a royal procession in which women carry beautifully adorned clay idols of Gangaur (Goddess Gauri) through the old city, singing folk songs, before immersing them in the waters of Lake Pichola. The backdrop of whitewashed havelis, floating palaces, and shimmering lake waters makes this procession one of the most visually spectacular events in India. The evenings are filled with traditional dance performances and cultural programs organized by the royal family of Mewar at City Palace.",
    bestTime: "March – April (Spring, Chaitra month)",
    duration: "3 Days",
    highlights: ["Gangaur shobhayatra on Lake Pichola", "Traditional dance at City Palace", "Boat procession on the lake", "Folk music & cultural evenings", "Illuminated City Palace at night"],
    location: "City Palace & Lake Pichola, Udaipur, Rajasthan",
    mapUrl: "https://maps.google.com/?q=Lake+Pichola+Udaipur"
  }
]

export default festivals