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

const px = (id: number | string, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

const IMGS = {
  dancer_vibrant:   px(14106732),
  dancer_jewelry:   px(20134508),
  dancer_bharatna:  px(34717651),
  dancer_graceful:  px(30481578),
  dancer_beach:     px(14106717),
  camel_man_fair:   px(35026811),
  camel_birds_dawn: px(21300377),
  camel_closeup:    px(4455719),
  camel_blue_sky:   px(7567474),
  camel_decorated:  px(29536909),
  camel_man_rope:   px(21300373),
  camel_desert_sun: px(26824002),
  mehrangarh_arch:  px(36470621),
  mehrangarh_city:  px(797824),
  mehrangarh_view:  px(36470626),
  jodhpur_palace:   px(36213405),
  udaipur_lake:     px(35455626),
  udaipur_arch:     px(35086309),
  udaipur_aerial:   px(35422755),
  udaipur_door:     px(33625234),
  jaisalmer_court:  px(33672506),
  jaisalmer_hall:   px(33726144),
  jaisalmer_arches: px(33726340),
  jaisalmer_stairs: px(33672501),
  jaipur_city:      px(16534739),
  rajasthan_gen:    px(34548994),

  // ✅ Local dal bati images — exactly as named in public folder
  dal_bati_main:    "/dal bati.webp",
  dal_bati_1:       "/dal bati1.webp",
  dal_bati_2:       "/dal batgit2.jpg",
  dal_bati_3:       "/dal bati3.jpg",

  jaipur_city_main:    "/jaipur.avif",
  jaipur_city_1:       "/jaipur1.webp",
  jaipur_city_2:       "/jaipur2.webp",
  jaipur_city_3:       "/jaipur3.jpg",
}

const festivals: Festival[] = [

  // ── RELIGIOUS ──
  {
    id: 1, slug: "gangaur", name: "Gangaur Festival", city: "Jaipur",
    date: "10 April 2026", month: "April", category: "Religious",
    image: IMGS.dancer_vibrant,
    gallery: [IMGS.dancer_jewelry, IMGS.dancer_graceful, IMGS.dancer_bharatna],
    description: "Celebration of love, marriage & womanhood.",
    fullStory: "Gangaur is one of Rajasthan's most beloved festivals, celebrated by women with great devotion. Lasting 18 days, it honors Goddess Gauri — an incarnation of Parvati — as a symbol of marital bliss and feminine power. Women dress in vibrant traditional attire, carry clay idols of Gauri on their heads, and sing folk songs as they walk in procession to the nearest lake or river. The festival begins on the first day of Chaitra (March–April) and the rituals involve fasting, prayers, and colorful mehndi. The royal procession in Jaipur, starting from City Palace, is a grand spectacle drawing thousands.",
    bestTime: "March – April (Chaitra month)", duration: "18 Days",
    highlights: ["Royal procession from City Palace", "Women in traditional Rajasthani attire", "Clay idol immersion ceremony", "Folk songs & dance performances", "Mehndi & jewelry markets"],
    location: "City Palace, Jaipur, Rajasthan", mapUrl: "https://maps.google.com/?q=City+Palace+Jaipur",
  },
  {
    id: 2, slug: "teej-festival", name: "Teej Festival", city: "Jaipur",
    date: "26 Jul 2026", month: "July", category: "Religious",
    image: IMGS.dancer_graceful,
    gallery: [IMGS.dancer_vibrant, IMGS.dancer_beach, IMGS.jaipur_city],
    description: "Monsoon festival of swings, prayer & vibrant sisterhood.",
    fullStory: "Teej is a vibrant monsoon festival celebrated with great enthusiasm across Rajasthan, especially in Jaipur. Women don green attire symbolizing nature's renewal, sing folk songs, and dance the traditional Ghoomar. Colorful swings hung from neem trees are decorated with marigolds and roses. The grand Teej procession through Jaipur's streets features elaborately decorated elephants, camels, folk dancers, and musicians carrying the idol of Goddess Teej.",
    bestTime: "July – August (Monsoon season, Shravan Tritiya)", duration: "3 Days",
    highlights: ["Ghoomar & Teej folk dance", "Swing celebrations under neem trees", "Grand procession through Pink City", "Traditional green attire & jewelry", "Mehndi & bangles markets"],
    location: "Jaipur Old City, Rajasthan", mapUrl: "https://maps.google.com/?q=Jaipur+Teej+Festival",
  },
  {
    id: 3, slug: "karni-mata-fair", name: "Karni Mata Fair", city: "Bikaner",
    date: "7 Oct 2026", month: "October", category: "Religious",
    image: IMGS.mehrangarh_city,
    gallery: [IMGS.mehrangarh_arch, IMGS.mehrangarh_view, IMGS.jodhpur_palace],
    description: "The mystical rat temple fair — a unique expression of devotion.",
    fullStory: "The Karni Mata Fair at Deshnok near Bikaner is one of India's most extraordinary religious gatherings. Held twice a year at the famous Karni Mata Temple — home to over 20,000 revered rats called 'kabbas' — the fair draws hundreds of thousands of devotees who believe the rats are reincarnations of Karni Mata's storytellers. Spotting a white rat among the thousands is considered an extraordinary blessing.",
    bestTime: "March–April & September–October (Navratri periods)", duration: "9 Days",
    highlights: ["20,000+ sacred rats at the temple", "Silver gate & marble carvings", "White rat sighting — rare blessing", "Massive devotee processions", "Traditional bhajans & aarti"],
    location: "Karni Mata Temple, Deshnok, Bikaner, Rajasthan", mapUrl: "https://maps.google.com/?q=Karni+Mata+Temple+Deshnok+Bikaner",
  },
  {
    id: 4, slug: "ramdevra-fair", name: "Ramdevra Fair", city: "Jaisalmer",
    date: "10 Sep 2026", month: "September", category: "Religious",
    image: IMGS.camel_desert_sun,
    gallery: [IMGS.camel_man_rope, IMGS.camel_blue_sky, IMGS.camel_birds_dawn],
    description: "Rajasthan's largest religious fair — a spiritual desert pilgrimage.",
    fullStory: "The Ramdevra Fair, held at the village of Ramdevra near Jaisalmer, is one of the largest religious fairs in Rajasthan, drawing devotees from across India and even Pakistan. The fair honors Baba Ramdev — a 14th-century saint-warrior revered by both Hindus and Muslims — making it a rare symbol of communal harmony. Pilgrims walk barefoot for days across the desert to reach the shrine, singing devotional 'Ramdevji ke Bhajan'.",
    bestTime: "August – September (Bhadra Shukla Dvitiya to Ekadashi)", duration: "5 Days",
    highlights: ["Barefoot pilgrimage across the desert", "Ramdevji ke Bhajan — devotional songs", "Hindu–Muslim communal harmony", "Sacred samadhi ceremony", "Desert fair with handicraft stalls"],
    location: "Ramdevra Village, near Jaisalmer, Rajasthan", mapUrl: "https://maps.google.com/?q=Ramdevra+Jaisalmer+Rajasthan",
  },

  // ── CULTURAL ──
  {
    id: 5, slug: "desert-festival", name: "Desert Festival", city: "Jaisalmer",
    date: "15 Feb 2026", month: "February", category: "Cultural",
    image: IMGS.camel_closeup,
    gallery: [IMGS.camel_decorated, IMGS.camel_blue_sky, IMGS.camel_birds_dawn],
    description: "Golden dunes, camel races & folk music under open skies.",
    fullStory: "Held against the majestic backdrop of the Sam Sand Dunes, the Jaisalmer Desert Festival is a three-day extravaganza that brings the culture of the Thar Desert alive. It showcases the finest folk musicians, dancers, camel decorators, and turban-tying champions from across Rajasthan. The highlight is the Mr. Desert competition — a search for the most traditionally dressed man with the longest moustache!",
    bestTime: "February (3 days before full moon)", duration: "3 Days",
    highlights: ["Camel races on Sam Sand Dunes", "Mr. Desert & longest moustache contest", "Turban tying competition", "Folk music under the stars", "Traditional puppet shows"],
    location: "Sam Sand Dunes, Jaisalmer, Rajasthan", mapUrl: "https://maps.google.com/?q=Sam+Sand+Dunes+Jaisalmer",
  },
  {
    id: 6, slug: "marwar-festival", name: "Marwar Festival", city: "Jodhpur",
    date: "5 Oct 2026", month: "October", category: "Cultural",
    image: IMGS.mehrangarh_arch,
    gallery: [IMGS.mehrangarh_city, IMGS.mehrangarh_view, IMGS.jodhpur_palace],
    description: "A cultural tribute to the heroes of Marwar under moonlit skies.",
    fullStory: "The Marwar Festival, held in Jodhpur every October, is a tribute to the folk heroes and warriors of the Marwar region. Set against the stunning backdrop of Mehrangarh Fort, the two-day festival features soulful performances of Rajasthani folk music — particularly the haunting melodies of Langas and Manganiyars. The festival also includes camel tattoo shows and polo matches.",
    bestTime: "October (Sharad Purnima — full moon night)", duration: "2 Days",
    highlights: ["Folk concerts at Mehrangarh Fort", "Langa & Manganiyar music performances", "Camel tattoo parade", "Polo match at Polo Ground", "Moonlight cultural evening"],
    location: "Mehrangarh Fort, Jodhpur, Rajasthan", mapUrl: "https://maps.google.com/?q=Mehrangarh+Fort+Jodhpur",
  },
  {
    id: 7, slug: "mewar-festival", name: "Mewar Festival", city: "Udaipur",
    date: "9 April 2026", month: "April", category: "Cultural",
    image: IMGS.udaipur_lake,
    gallery: [IMGS.udaipur_arch, IMGS.udaipur_door, IMGS.udaipur_aerial],
    description: "Procession of Goddess Gauri on the shimmering lakes of Udaipur.",
    fullStory: "The Mewar Festival marks the arrival of spring in Udaipur and is celebrated with extraordinary grace. The main event is the shobhayatra — a royal procession in which women carry beautifully adorned clay idols of Gangaur through the old city, before immersing them in the waters of Lake Pichola. The backdrop of whitewashed havelis, floating palaces, and shimmering lake waters makes this one of the most visually spectacular events in India.",
    bestTime: "March – April (Spring, Chaitra month)", duration: "3 Days",
    highlights: ["Gangaur shobhayatra on Lake Pichola", "Traditional dance at City Palace", "Boat procession on the lake", "Folk music & cultural evenings", "Illuminated City Palace at night"],
    location: "City Palace & Lake Pichola, Udaipur, Rajasthan", mapUrl: "https://maps.google.com/?q=Lake+Pichola+Udaipur",
  },
  {
    id: 8, slug: "camel-festival-bikaner", name: "Camel Festival Bikaner", city: "Bikaner",
    date: "11 Jan 2026", month: "January", category: "Cultural",
    image: IMGS.camel_decorated,
    gallery: [IMGS.camel_man_fair, IMGS.camel_closeup, IMGS.camel_blue_sky],
    description: "Rajasthan's most spectacular salute to the ship of the desert.",
    fullStory: "The Bikaner Camel Festival is a two-day celebration of Rajasthan's most iconic animal — the camel — organized by the Rajasthan Tourism Department every January. Bikaner is home to the National Research Centre on Camel, the only one of its kind in Asia. The festival opens with a grand camel pageant where hundreds of decorated camels parade through the city. Events include camel races, beauty pageants, camel milk tasting, fire dances, and breathtaking camel acrobatics.",
    bestTime: "January (post-Makar Sankranti)", duration: "2 Days",
    highlights: ["Grand camel parade & beauty contest", "Camel races & acrobatics", "Camel milk & camel hair products", "Fire dance performances", "Folk music & puppet shows"],
    location: "Dr. Karni Singh Stadium, Bikaner, Rajasthan", mapUrl: "https://maps.google.com/?q=Bikaner+Camel+Festival+Rajasthan",
  },
  {
    id: 23, slug: "jaipur-literature-festival", name: "Jaipur Literature Festival", city: "Jaipur",
    date: "22 Jan 2026", month: "January", category: "Cultural",
    image: IMGS.jaipur_city,
    gallery: [IMGS.rajasthan_gen, IMGS.mehrangarh_city, IMGS.jodhpur_palace],
    description: "World's largest free literary festival at Diggi Palace.",
    fullStory: "The Jaipur Literature Festival is the world's largest free literary festival, held annually at the stunning Diggi Palace in Jaipur. Drawing over 250,000 visitors and featuring more than 300 speakers including Nobel laureates, Booker Prize winners, and thought leaders from across the globe, JLF has earned the title 'The Greatest Literary Show on Earth'.",
    bestTime: "January", duration: "5 Days",
    highlights: ["300+ international speakers", "Nobel & Booker laureates", "Free entry for all", "Music & film sessions", "200+ languages celebrated"],
    location: "Diggi Palace, Jaipur, Rajasthan", mapUrl: "https://maps.google.com/?q=Diggi+Palace+Jaipur",
  },
  {
    id: 24, slug: "kite-festival", name: "Makar Sankranti Kite Festival", city: "Jaipur",
    date: "14 Jan 2026", month: "January", category: "Cultural",
    image: IMGS.rajasthan_gen,
    gallery: [IMGS.jaipur_city, IMGS.mehrangarh_view, IMGS.mehrangarh_city],
    description: "Skies ablaze with thousands of colorful kites over Pink City.",
    fullStory: "Makar Sankranti in Rajasthan is celebrated with unmatched enthusiasm, especially in Jaipur where the skies fill with thousands of colorful kites from dawn to dusk. Rooftops across the city transform into battlegrounds as families compete in kite-cutting contests. The air echoes with shouts of 'Kai Po Che!' The festival marks the sun's transition into Capricorn and is celebrated with sesame sweets, tilgul, and feasts.",
    bestTime: "January 14 (Makar Sankranti)", duration: "1 Day",
    highlights: ["Kite flying from rooftops", "Kite cutting competitions", "Sesame & jaggery sweets", "Evening kite-light show", "Bonfire celebrations"],
    location: "Jaipur Rooftops & Open Grounds, Rajasthan", mapUrl: "https://maps.google.com/?q=Jaipur+Kite+Festival",
  },

  // ── MUSIC ──
  {
    id: 9, slug: "riff-festival", name: "RIFF — Rajasthan International Folk Festival", city: "Jodhpur",
    date: "2 Oct 2026", month: "October", category: "Music",
    image: IMGS.mehrangarh_city,
    gallery: [IMGS.mehrangarh_arch, IMGS.mehrangarh_view, IMGS.jodhpur_palace],
    description: "World-class folk music inside Mehrangarh Fort's ancient walls.",
    fullStory: "The Rajasthan International Folk Festival (RIFF) at Mehrangarh Fort, Jodhpur is one of Asia's most celebrated world music festivals. RIFF brings together folk, roots, and world music artists from Rajasthan and across the globe for five days of extraordinary music-making. The festival is rooted in the traditional music of Rajasthan's Langa, Manganiyar, and Kalbeliya communities. Sunrise concerts on the fort ramparts and full-moon night performances under the stars are highlights that leave audiences spellbound.",
    bestTime: "October (Gandhi Jayanti week, near full moon)", duration: "5 Days",
    highlights: ["Mehrangarh Fort sunrise concerts", "Manganiyar & Langa musicians", "International world music artists", "Full-moon night performances", "Dawn aarti at Chamunda Mata temple"],
    location: "Mehrangarh Fort, Jodhpur, Rajasthan", mapUrl: "https://maps.google.com/?q=Mehrangarh+Fort+Jodhpur",
  },
  {
    id: 10, slug: "udaipur-world-music-festival", name: "Udaipur World Music Festival", city: "Udaipur",
    date: "20 Feb 2026", month: "February", category: "Music",
    image: IMGS.udaipur_lake,
    gallery: [IMGS.udaipur_arch, IMGS.udaipur_door, IMGS.udaipur_aerial],
    description: "Global musicians perform against Udaipur's lake palace backdrop.",
    fullStory: "The Udaipur World Music Festival brings together musicians from across the globe to perform in one of India's most beautiful settings — the lakeside city of Udaipur. Artists from over 20 countries perform folk, classical, and world fusion music at multiple venues including the iconic Lake Pichola ghats and the City Palace grounds.",
    bestTime: "February", duration: "3 Days",
    highlights: ["Artists from 20+ countries", "Performances at Lake Pichola ghats", "City Palace evening concerts", "World fusion & folk music", "Sunrise acoustic sessions"],
    location: "Lake Pichola & City Palace, Udaipur, Rajasthan", mapUrl: "https://maps.google.com/?q=Udaipur+City+Palace",
  },
  {
    id: 11, slug: "folk-night-jaisalmer", name: "Folk Night Jaisalmer", city: "Jaisalmer",
    date: "21 Dec 2026", month: "December", category: "Music",
    image: IMGS.jaisalmer_court,
    gallery: [IMGS.jaisalmer_hall, IMGS.jaisalmer_arches, IMGS.jaisalmer_stairs],
    description: "Haunting desert melodies echoing off the golden fort at night.",
    fullStory: "Folk Night Jaisalmer is an intimate winter music series held at Jaisalmer's 12th-century golden sandstone fort and the Sam Sand Dunes, bringing the soulful folk traditions of the Thar Desert to life under the cold desert sky. Performances by Manganiyar musicians, Kalbeliya dancers, and Langa singers fill the fort courtyards with music that has been passed down for centuries.",
    bestTime: "December – January (winter evenings)", duration: "3 Days",
    highlights: ["Manganiyar & Kalbeliya performances", "Torchlit Jaisalmer Fort courtyard", "Sand dune bonfire concerts", "Traditional instruments: sarangi, khartal, morchang", "Star-gazing post-concert"],
    location: "Jaisalmer Fort & Sam Sand Dunes, Jaisalmer, Rajasthan", mapUrl: "https://maps.google.com/?q=Jaisalmer+Fort+Rajasthan",
  },
  {
    id: 12, slug: "mahindra-blues-festival", name: "Sufi Night Jodhpur", city: "Jodhpur",
    date: "15 Mar 2026", month: "March", category: "Music",
    image: IMGS.mehrangarh_view,
    gallery: [IMGS.mehrangarh_city, IMGS.mehrangarh_arch, IMGS.jodhpur_palace],
    description: "Sufi devotional music echoing through the Blue City's alleys.",
    fullStory: "The Sufi Night series in Jodhpur transforms the ancient havelis and stepwells of the Blue City into intimate concert halls. Sufi musicians from Rajasthan, Sindh, and Central Asia perform qawwali, masnavi, and devotional ragas through the night. The concerts begin at dusk at Toorji Ka Jhalra and continue until dawn at private haveli courtyards in the old city.",
    bestTime: "March & October", duration: "2 Days",
    highlights: ["All-night Sufi qawwali sessions", "Toorji Ka Jhalra stepwell concerts", "Blue City haveli courtyards", "Rajasthani & Sindhi Sufi traditions", "Dawn raga with morning chai"],
    location: "Toorji Ka Jhalra & Old City Havelis, Jodhpur, Rajasthan", mapUrl: "https://maps.google.com/?q=Toorji+Ka+Jhalra+Jodhpur",
  },

  // ── DANCE ──
  {
    id: 13, slug: "kalbelia-dance-festival", name: "Kalbeliya Dance Festival", city: "Jaisalmer",
    date: "18 Nov 2026", month: "November", category: "Dance",
    image: IMGS.dancer_jewelry,
    gallery: [IMGS.dancer_vibrant, IMGS.dancer_bharatna, IMGS.dancer_graceful],
    description: "UNESCO-listed snake charmer dance swirling on golden sand.",
    fullStory: "The Kalbeliya Dance Festival celebrates one of Rajasthan's most mesmerizing dance forms — the Kalbeliya, inscribed on UNESCO's Intangible Cultural Heritage list in 2010. The Kalbeliya people, traditionally snake charmers, perform this hypnotic dance on the Sam Sand Dunes of Jaisalmer. Dancers clad in swirling black skirts embroidered with mirrors spin in serpentine movements that mimic the undulation of snakes.",
    bestTime: "November – December", duration: "3 Days",
    highlights: ["UNESCO-listed Kalbeliya performances", "Sand dune stage at Sam", "Been & dholak live music", "Mirror-embroidered black costume tradition", "Dance workshops for visitors"],
    location: "Sam Sand Dunes, Jaisalmer, Rajasthan", mapUrl: "https://maps.google.com/?q=Sam+Sand+Dunes+Jaisalmer",
  },
  {
    id: 14, slug: "ghoomar-utsav", name: "Ghoomar Utsav", city: "Udaipur",
    date: "22 Aug 2026", month: "August", category: "Dance",
    image: IMGS.dancer_beach,
    gallery: [IMGS.udaipur_lake, IMGS.dancer_vibrant, IMGS.udaipur_arch],
    description: "Rajasthan's royal dance spinning in the City of Lakes.",
    fullStory: "Ghoomar Utsav in Udaipur celebrates the most iconic dance of Rajasthan — the Ghoomar, traditionally performed by Rajput women and now inscribed as part of India's cultural heritage. Held at the City Palace amphitheatre overlooking Lake Pichola, the festival gathers performers from different communities across Rajasthan who interpret this graceful spinning dance in their unique regional styles.",
    bestTime: "August (Monsoon season)", duration: "2 Days",
    highlights: ["Ghoomar performances at City Palace", "Lake Pichola backdrop at night", "Multi-community dance showcase", "Traditional odhni & ghagra costumes", "Rajasthani folk music accompaniment"],
    location: "City Palace Amphitheatre, Udaipur, Rajasthan", mapUrl: "https://maps.google.com/?q=City+Palace+Udaipur",
  },

  // ── FAIR / MELA ──
  {
    id: 15, slug: "pushkar-fair", name: "Pushkar Fair", city: "Pushkar",
    date: "10 Nov 2026", month: "November", category: "Fair / Mela",
    image: IMGS.camel_man_fair,
    gallery: [IMGS.camel_birds_dawn, IMGS.camel_decorated, IMGS.camel_closeup],
    description: "World's largest camel fair — a riot of color, trade & faith.",
    fullStory: "The Pushkar Camel Fair is one of the world's most extraordinary gatherings — a collision of commerce, religion, and festivity that has been held annually for centuries. Over 50,000 camels, horses, and cattle are brought to Pushkar by traders from across Rajasthan and beyond. The fairgrounds transform into a city of their own with folk performances, hot air balloon rides, and the famous camel beauty contest.",
    bestTime: "November (Kartik Purnima — full moon)", duration: "5 Days",
    highlights: ["50,000+ camels at the fairgrounds", "Camel beauty & race competition", "Hot air balloon rides at sunrise", "Holy dip at Pushkar Lake", "Brahma Temple evening aarti"],
    location: "Pushkar Lake & Fairgrounds, Pushkar, Rajasthan", mapUrl: "https://maps.google.com/?q=Pushkar+Fair+Rajasthan",
  },
  {
    id: 16, slug: "nagaur-cattle-fair", name: "Nagaur Cattle Fair", city: "Jodhpur",
    date: "2 Feb 2026", month: "February", category: "Fair / Mela",
    image: IMGS.camel_desert_sun,
    gallery: [IMGS.camel_man_rope, IMGS.camel_blue_sky, IMGS.camel_closeup],
    description: "India's second largest cattle fair with folk music & camel trading.",
    fullStory: "The Nagaur Fair is India's second largest cattle fair after Pushkar, held every January-February in the historic city of Nagaur near Jodhpur. Thousands of cattle, camels, and horses are traded here by villagers from across Rajasthan. The fair is a vibrant showcase of rural Rajasthan with folk performances, puppet shows, and the famous Rajasthani cuisine stalls.",
    bestTime: "January – February", duration: "4 Days",
    highlights: ["Massive cattle & camel trading", "Bull and camel races", "Folk music & puppet shows", "Rajasthani food stalls", "Textile & handicraft markets"],
    location: "Nagaur Fort Grounds, Nagaur, Rajasthan", mapUrl: "https://maps.google.com/?q=Nagaur+Fair+Rajasthan",
  },
  {
    id: 17, slug: "baneshwar-fair", name: "Baneshwar Fair", city: "Dungarpur",
    date: "12 Feb 2026", month: "February", category: "Fair / Mela",
    image: IMGS.rajasthan_gen,
    gallery: [IMGS.jaipur_city, IMGS.mehrangarh_city, IMGS.udaipur_arch],
    description: "The tribal Kumbh Mela at the sacred confluence of three rivers.",
    fullStory: "The Baneshwar Fair is often called the 'Tribal Kumbh of Rajasthan', held at the sacred island of Baneshwar at the confluence of the Som, Mahi, and Jakham rivers in Dungarpur district. It is the largest tribal fair in Rajasthan, drawing over 300,000 Bhil and Garasia tribal people. The fair is an explosion of tribal color — women in vibrant silver jewellery and tattoos, traditional dances, and a marketplace unlike any other in India.",
    bestTime: "January – February (Magh Purnima)", duration: "5 Days",
    highlights: ["Sacred bath at three-river confluence", "Bhil tribal community gatherings", "Baneshwar Shiva temple rituals", "Tribal dance & music", "Silver jewellery & tribal craft market"],
    location: "Baneshwar Island, Dungarpur, Rajasthan", mapUrl: "https://maps.google.com/?q=Baneshwar+Fair+Dungarpur+Rajasthan",
  },
  {
    id: 18, slug: "ramdevra-fair-mela", name: "Ramdevra Mela", city: "Jaisalmer",
    date: "10 Sep 2026", month: "September", category: "Fair / Mela",
    image: IMGS.camel_man_rope,
    gallery: [IMGS.camel_desert_sun, IMGS.camel_birds_dawn, IMGS.camel_blue_sky],
    description: "Rajasthan's largest religious fair — a desert pilgrimage of millions.",
    fullStory: "The Ramdevra Mela is one of the largest fairs in Rajasthan, attracting over a million pilgrims to the desert village of Ramdevra near Jaisalmer. The fair is a spectacular collision of faith, folk art, commerce, and community. The nights are alive with devotional singing and fire dances.",
    bestTime: "August – September (Bhadrapada month)", duration: "10 Days",
    highlights: ["Barefoot pilgrimage caravans", "Night-long devotional singing", "Massive fair marketplace", "Hindu-Muslim communal harmony", "Fire dance & folk performances"],
    location: "Ramdevra, near Pokhran, Jaisalmer, Rajasthan", mapUrl: "https://maps.google.com/?q=Ramdevra+Village+Jaisalmer",
  },

  // ── FOOD ──
  {
    id: 19, slug: "rajasthan-food-festival", name: "Rajasthan Food Festival", city: "Udaipur",
    date: "15 Mar 2026", month: "March", category: "Food",
    // ✅ Local images — filenames exactly as in public folder
    image: IMGS.dal_bati_main,
    gallery: [IMGS.dal_bati_1, IMGS.dal_bati_2, IMGS.dal_bati_3],
    description: "Dal baati, ghewar & royal Rajasthani cuisine under the stars.",
    fullStory: "The Rajasthan Food Festival in Udaipur is a culinary celebration of the state's rich and diverse food traditions. From the iconic Dal Baati Churma and Laal Maas to royal Rajput delicacies, the festival brings together master chefs, street food artisans, and royal kitchen recipes in one spectacular lakeside setting.",
    bestTime: "March", duration: "2 Days",
    highlights: ["Dal Baati Churma live cooking", "Royal Rajput cuisine showcase", "Street food competitions", "Ghewar & sweets stalls", "Master chef demonstrations"],
    location: "Fateh Sagar Lake Gardens, Udaipur, Rajasthan", mapUrl: "https://maps.google.com/?q=Fateh+Sagar+Lake+Udaipur",
  },
  {
    id: 20, slug: "jaipur-street-food-carnival", name: "Jaipur Street Food Carnival", city: "Jaipur",
    date: "8 Feb 2026", month: "February", category: "Food",
    image: IMGS.jaipur_city,
    gallery: [IMGS.rajasthan_gen, IMGS.mehrangarh_city, IMGS.mehrangarh_arch],
    description: "Pyaaz kachori, lassi & street food magic in the Pink City.",
    fullStory: "The Jaipur Street Food Carnival at Jawahar Kala Kendra is a three-day celebration of the legendary street food culture of the Pink City. Jaipur is famous across India for its distinctive snacks — pyaaz ki kachori, mirchi bada, dal ki poori, and the iconic Jaipur lassi — and this festival brings the city's best vendors, home cooks, and restaurant chefs together in one glorious marketplace.",
    bestTime: "February", duration: "3 Days",
    highlights: ["Pyaaz kachori & mirchi bada stalls", "Lassi & rabri competitions", "Old city food history walks", "Ghewar-making championship", "Celebrity chef demonstrations"],
    location: "Jawahar Kala Kendra, Jaipur, Rajasthan", mapUrl: "https://maps.google.com/?q=Jawahar+Kala+Kendra+Jaipur",
  },
  {
    id: 21, slug: "udaipur-heritage-food-fest", name: "Udaipur Heritage Food Fest", city: "Udaipur",
    date: "12 Oct 2026", month: "October", category: "Food",
    image: IMGS.udaipur_arch,
    gallery: [IMGS.udaipur_lake, IMGS.udaipur_aerial, IMGS.udaipur_door],
    description: "Royal thalis and ancient recipes from Mewar's palace kitchens.",
    fullStory: "The Udaipur Heritage Food Festival is a unique culinary journey into the lost recipes of the Mewar royal kitchens. Held at heritage havelis and lake-view gardens across Udaipur, the festival invites the custodians of ancient royal recipes to recreate dishes that were once served to Maharanas.",
    bestTime: "October (post-monsoon, pleasant evenings)", duration: "4 Days",
    highlights: ["Royal Mewar thali experience", "Palace kitchen recipes showcase", "Lake Pichola dining under the stars", "Malpua & Feeni sweet-making classes", "Mewar food history talks"],
    location: "Heritage Havelis & Lake Pichola, Udaipur, Rajasthan", mapUrl: "https://maps.google.com/?q=Lake+Pichola+Udaipur",
  },

  // ── ART & CRAFT ──
  {
    id: 22, slug: "craft-mela-jaisalmer", name: "Desert Craft Mela", city: "Jaisalmer",
    date: "8 Dec 2026", month: "December", category: "Art & Craft",
    image: IMGS.jaisalmer_hall,
    gallery: [IMGS.jaisalmer_court, IMGS.jaisalmer_arches, IMGS.jaisalmer_stairs],
    description: "Master craftsmen showcase Rajasthan's finest handicrafts & textiles.",
    fullStory: "The Desert Craft Mela in Jaisalmer brings together the finest artisans of Rajasthan to showcase centuries-old craft traditions — from intricate camel leather work and mirror embroidery to blue pottery and block-printed textiles. Held at the foot of Jaisalmer Fort, the mela features over 500 craftspeople from across the state demonstrating their skills live.",
    bestTime: "December", duration: "4 Days",
    highlights: ["500+ artisans from across Rajasthan", "Live craft demonstrations", "Block printing workshops", "Camel leather & mirror work", "Evening puppet theatre"],
    location: "Jaisalmer Fort Grounds, Jaisalmer, Rajasthan", mapUrl: "https://maps.google.com/?q=Jaisalmer+Fort",
  },
]

export default festivals