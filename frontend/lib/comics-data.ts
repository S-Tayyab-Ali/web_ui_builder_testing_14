export interface Comic {
  id: string;
  title: string;
  coverImageUrl: string;
  description: string;
  price: number;
  isFree: boolean;
  genre: string;
  publicationYear: number;
  isBestseller: boolean;
  isFeatured: boolean;
  characterTags: string[];
  seriesName: string;
  issueNumber?: number;
  pageCount: number;
  rating: string;
}

export const comics: Comic[] = [
  // Batman - Featured & Bestsellers
  {
    id: "batman-1",
    title: "Batman: The Dark Knight Returns",
    coverImageUrl: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&h=600&fit=crop",
    description: "Frank Miller's legendary tale of an older Bruce Wayne coming out of retirement to save Gotham City one last time. A masterpiece that redefined the character.",
    price: 14.99,
    isFree: false,
    genre: "Superhero",
    publicationYear: 2024,
    isBestseller: true,
    isFeatured: true,
    characterTags: ["Batman", "Robin", "Joker"],
    seriesName: "Batman",
    issueNumber: 1,
    pageCount: 224,
    rating: "T+"
  },
  {
    id: "batman-2",
    title: "Batman: Year One",
    coverImageUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    description: "The definitive origin story of Batman by Frank Miller and David Mazzucchelli. Witness Bruce Wayne's first year as the Dark Knight.",
    price: 12.99,
    isFree: false,
    genre: "Superhero",
    publicationYear: 2024,
    isBestseller: true,
    isFeatured: true,
    characterTags: ["Batman", "Jim Gordon", "Catwoman"],
    seriesName: "Batman",
    issueNumber: 1,
    pageCount: 144,
    rating: "T"
  },
  {
    id: "batman-3",
    title: "Batman: The Killing Joke",
    coverImageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
    description: "Alan Moore and Brian Bolland's chilling exploration of the Joker's origin and his twisted relationship with Batman.",
    price: 11.99,
    isFree: true,
    genre: "Superhero",
    publicationYear: 2023,
    isBestseller: true,
    isFeatured: false,
    characterTags: ["Batman", "Joker", "Barbara Gordon"],
    seriesName: "Batman",
    pageCount: 64,
    rating: "M"
  },
  {
    id: "batman-4",
    title: "Batman: Hush",
    coverImageUrl: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400&h=600&fit=crop",
    description: "A mystery thriller featuring Batman's entire rogues gallery. Jim Lee's stunning artwork brings this story to life.",
    price: 16.99,
    isFree: false,
    genre: "Mystery",
    publicationYear: 2024,
    isBestseller: true,
    isFeatured: false,
    characterTags: ["Batman", "Catwoman", "Riddler"],
    seriesName: "Batman",
    pageCount: 320,
    rating: "T+"
  },

  // Superman - Featured & Bestsellers
  {
    id: "superman-1",
    title: "Superman: All-Star Superman",
    coverImageUrl: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?w=400&h=600&fit=crop",
    description: "Grant Morrison and Frank Quitely's love letter to Superman. The Man of Steel faces his greatest challenges in this heartfelt masterpiece.",
    price: 15.99,
    isFree: false,
    genre: "Superhero",
    publicationYear: 2024,
    isBestseller: true,
    isFeatured: true,
    characterTags: ["Superman", "Lois Lane", "Lex Luthor"],
    seriesName: "Superman",
    pageCount: 320,
    rating: "T"
  },
  {
    id: "superman-2",
    title: "Superman: Red Son",
    coverImageUrl: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&h=600&fit=crop",
    description: "What if Superman had landed in Soviet Russia instead of Kansas? A brilliant alternate reality tale.",
    price: 13.99,
    isFree: false,
    genre: "Superhero",
    publicationYear: 2023,
    isBestseller: true,
    isFeatured: false,
    characterTags: ["Superman", "Batman", "Wonder Woman"],
    seriesName: "Superman",
    pageCount: 168,
    rating: "T+"
  },
  {
    id: "superman-3",
    title: "Superman: For Tomorrow",
    coverImageUrl: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=600&fit=crop",
    description: "Superman searches for answers after millions mysteriously vanish. A deeply personal story exploring faith and loss.",
    price: 12.99,
    isFree: true,
    genre: "Superhero",
    publicationYear: 2024,
    isBestseller: false,
    isFeatured: false,
    characterTags: ["Superman", "Batman", "Wonder Woman"],
    seriesName: "Superman",
    pageCount: 240,
    rating: "T"
  },

  // Wonder Woman - Featured
  {
    id: "wonder-woman-1",
    title: "Wonder Woman: The Hiketeia",
    coverImageUrl: "https://images.unsplash.com/photo-1531346163669-b47c92ccd6fa?w=400&h=600&fit=crop",
    description: "Greg Rucka's tale of honor and duty as Wonder Woman must protect a fugitive from Batman, bound by ancient ritual.",
    price: 11.99,
    isFree: false,
    genre: "Superhero",
    publicationYear: 2024,
    isBestseller: true,
    isFeatured: true,
    characterTags: ["Wonder Woman", "Batman"],
    seriesName: "Wonder Woman",
    pageCount: 96,
    rating: "T+"
  },
  {
    id: "wonder-woman-2",
    title: "Wonder Woman: Earth One",
    coverImageUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    description: "Grant Morrison reimagines Wonder Woman's origin in this stunning graphic novel exploring Amazonian culture.",
    price: 14.99,
    isFree: false,
    genre: "Superhero",
    publicationYear: 2024,
    isBestseller: true,
    isFeatured: false,
    characterTags: ["Wonder Woman", "Steve Trevor"],
    seriesName: "Wonder Woman",
    pageCount: 144,
    rating: "T"
  },
  {
    id: "wonder-woman-3",
    title: "Wonder Woman: The Circle",
    coverImageUrl: "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=400&h=600&fit=crop",
    description: "Gail Simone's acclaimed run begins! Wonder Woman discovers a traitor among the Amazons.",
    price: 10.99,
    isFree: true,
    genre: "Action",
    publicationYear: 2023,
    isBestseller: false,
    isFeatured: false,
    characterTags: ["Wonder Woman"],
    seriesName: "Wonder Woman",
    pageCount: 128,
    rating: "T"
  },

  // Justice League - Featured
  {
    id: "justice-league-1",
    title: "Justice League: Origin",
    coverImageUrl: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=400&h=600&fit=crop",
    description: "Geoff Johns and Jim Lee unite DC's greatest heroes for the first time! The Justice League forms to face an alien invasion.",
    price: 16.99,
    isFree: false,
    genre: "Superhero",
    publicationYear: 2024,
    isBestseller: true,
    isFeatured: true,
    characterTags: ["Batman", "Superman", "Wonder Woman", "Flash", "Green Lantern"],
    seriesName: "Justice League",
    issueNumber: 1,
    pageCount: 192,
    rating: "T"
  },
  {
    id: "justice-league-2",
    title: "JLA: Tower of Babel",
    coverImageUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    description: "Ra's al Ghul steals Batman's contingency plans to defeat the Justice League. Trust is shattered.",
    price: 13.99,
    isFree: false,
    genre: "Superhero",
    publicationYear: 2023,
    isBestseller: true,
    isFeatured: false,
    characterTags: ["Batman", "Superman", "Wonder Woman", "Flash"],
    seriesName: "Justice League",
    pageCount: 144,
    rating: "T+"
  },
  {
    id: "justice-league-3",
    title: "Justice League: The Darkseid War",
    coverImageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
    description: "The Justice League is caught between Darkseid and the Anti-Monitor in this epic cosmic battle.",
    price: 17.99,
    isFree: false,
    genre: "Action",
    publicationYear: 2024,
    isBestseller: true,
    isFeatured: true,
    characterTags: ["Batman", "Superman", "Wonder Woman", "Flash", "Darkseid"],
    seriesName: "Justice League",
    pageCount: 368,
    rating: "T+"
  },

  // The Flash
  {
    id: "flash-1",
    title: "The Flash: Rebirth",
    coverImageUrl: "https://images.unsplash.com/photo-1608889825271-81147042e2ea?w=400&h=600&fit=crop",
    description: "Barry Allen returns! Geoff Johns explores the Speed Force and the legacy of the Flash.",
    price: 12.99,
    isFree: false,
    genre: "Superhero",
    publicationYear: 2024,
    isBestseller: true,
    isFeatured: false,
    characterTags: ["Flash", "Barry Allen"],
    seriesName: "The Flash",
    pageCount: 168,
    rating: "T"
  },
  {
    id: "flash-2",
    title: "The Flash: Flashpoint",
    coverImageUrl: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400&h=600&fit=crop",
    description: "Barry Allen wakes up in an altered timeline where he never became the Flash. The DC Universe will never be the same.",
    price: 15.99,
    isFree: true,
    genre: "Superhero",
    publicationYear: 2024,
    isBestseller: true,
    isFeatured: false,
    characterTags: ["Flash", "Batman", "Superman"],
    seriesName: "The Flash",
    pageCount: 176,
    rating: "T+"
  },

  // Green Lantern
  {
    id: "green-lantern-1",
    title: "Green Lantern: Rebirth",
    coverImageUrl: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?w=400&h=600&fit=crop",
    description: "Hal Jordan returns as Green Lantern in this epic story by Geoff Johns that redefined the mythos.",
    price: 13.99,
    isFree: false,
    genre: "Superhero",
    publicationYear: 2024,
    isBestseller: true,
    isFeatured: false,
    characterTags: ["Green Lantern", "Hal Jordan"],
    seriesName: "Green Lantern",
    pageCount: 168,
    rating: "T"
  },
  {
    id: "green-lantern-2",
    title: "Green Lantern: Sinestro Corps War",
    coverImageUrl: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&h=600&fit=crop",
    description: "The greatest Green Lantern story ever told! The Corps faces an army wielding the power of fear.",
    price: 18.99,
    isFree: false,
    genre: "Action",
    publicationYear: 2023,
    isBestseller: true,
    isFeatured: false,
    characterTags: ["Green Lantern", "Sinestro"],
    seriesName: "Green Lantern",
    pageCount: 304,
    rating: "T+"
  },

  // Aquaman
  {
    id: "aquaman-1",
    title: "Aquaman: The Trench",
    coverImageUrl: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=600&fit=crop",
    description: "Geoff Johns reinvents Aquaman as terrifying creatures emerge from the ocean depths.",
    price: 11.99,
    isFree: true,
    genre: "Action",
    publicationYear: 2024,
    isBestseller: false,
    isFeatured: false,
    characterTags: ["Aquaman", "Mera"],
    seriesName: "Aquaman",
    pageCount: 144,
    rating: "T"
  },

  // Teen Titans
  {
    id: "teen-titans-1",
    title: "Teen Titans: The Judas Contract",
    coverImageUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    description: "Marv Wolfman and George Pérez's classic tale of betrayal featuring Deathstroke and Terra.",
    price: 14.99,
    isFree: false,
    genre: "Superhero",
    publicationYear: 2023,
    isBestseller: true,
    isFeatured: false,
    characterTags: ["Robin", "Starfire", "Deathstroke"],
    seriesName: "Teen Titans",
    pageCount: 192,
    rating: "T+"
  },

  // Watchmen
  {
    id: "watchmen-1",
    title: "Watchmen",
    coverImageUrl: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&h=600&fit=crop",
    description: "Alan Moore's masterpiece. A deconstruction of the superhero genre that changed comics forever.",
    price: 19.99,
    isFree: false,
    genre: "Mystery",
    publicationYear: 2023,
    isBestseller: true,
    isFeatured: true,
    characterTags: ["Rorschach", "Dr. Manhattan", "Nite Owl"],
    seriesName: "Watchmen",
    pageCount: 416,
    rating: "M"
  },

  // Harley Quinn
  {
    id: "harley-quinn-1",
    title: "Harley Quinn: Hot in the City",
    coverImageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
    description: "Harley Quinn breaks out on her own! A wild, hilarious adventure through Gotham's underworld.",
    price: 12.99,
    isFree: false,
    genre: "Action",
    publicationYear: 2024,
    isBestseller: true,
    isFeatured: false,
    characterTags: ["Harley Quinn", "Poison Ivy"],
    seriesName: "Harley Quinn",
    pageCount: 144,
    rating: "T+"
  },

  // Nightwing
  {
    id: "nightwing-1",
    title: "Nightwing: Leaping into the Light",
    coverImageUrl: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400&h=600&fit=crop",
    description: "Dick Grayson returns to Blüdhaven to protect his city and forge his own legacy beyond Batman.",
    price: 11.99,
    isFree: false,
    genre: "Superhero",
    publicationYear: 2024,
    isBestseller: false,
    isFeatured: false,
    characterTags: ["Nightwing", "Batman"],
    seriesName: "Nightwing",
    pageCount: 144,
    rating: "T"
  },

  // Shazam
  {
    id: "shazam-1",
    title: "Shazam!: Origins",
    coverImageUrl: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?w=400&h=600&fit=crop",
    description: "Billy Batson discovers the magic word that transforms him into Earth's Mightiest Mortal!",
    price: 10.99,
    isFree: true,
    genre: "Superhero",
    publicationYear: 2024,
    isBestseller: false,
    isFeatured: false,
    characterTags: ["Shazam", "Black Adam"],
    seriesName: "Shazam",
    pageCount: 128,
    rating: "E"
  },

  // Green Arrow
  {
    id: "green-arrow-1",
    title: "Green Arrow: The Longbow Hunters",
    coverImageUrl: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&h=600&fit=crop",
    description: "Mike Grell's gritty reinvention of Green Arrow. A mature, street-level take on the Emerald Archer.",
    price: 13.99,
    isFree: false,
    genre: "Action",
    publicationYear: 2023,
    isBestseller: false,
    isFeatured: false,
    characterTags: ["Green Arrow", "Black Canary"],
    seriesName: "Green Arrow",
    pageCount: 144,
    rating: "M"
  },

  // The Joker
  {
    id: "joker-1",
    title: "The Joker: A Celebration of 75 Years",
    coverImageUrl: "https://images.unsplash.com/photo-1608889825271-81147042e2ea?w=400&h=600&fit=crop",
    description: "The greatest Joker stories from across the decades. Witness the evolution of Batman's greatest foe.",
    price: 16.99,
    isFree: false,
    genre: "Mystery",
    publicationYear: 2023,
    isBestseller: true,
    isFeatured: false,
    characterTags: ["Joker", "Batman"],
    seriesName: "The Joker",
    pageCount: 400,
    rating: "M"
  },

  // Crisis Events
  {
    id: "crisis-1",
    title: "Crisis on Infinite Earths",
    coverImageUrl: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=400&h=600&fit=crop",
    description: "The epic crossover that changed everything! The DC Multiverse faces its greatest threat.",
    price: 19.99,
    isFree: false,
    genre: "Superhero",
    publicationYear: 2023,
    isBestseller: true,
    isFeatured: false,
    characterTags: ["Superman", "Batman", "Wonder Woman", "Flash"],
    seriesName: "Crisis",
    pageCount: 368,
    rating: "T+"
  },
  {
    id: "crisis-2",
    title: "Infinite Crisis",
    coverImageUrl: "https://images.unsplash.com/photo-1531346163669-b47c92ccd6fa?w=400&h=600&fit=crop",
    description: "The sequel to the legendary Crisis! Heroes and villains from across realities collide.",
    price: 17.99,
    isFree: false,
    genre: "Action",
    publicationYear: 2023,
    isBestseller: true,
    isFeatured: false,
    characterTags: ["Superman", "Batman", "Wonder Woman"],
    seriesName: "Crisis",
    pageCount: 264,
    rating: "T+"
  },

  // Catwoman
  {
    id: "catwoman-1",
    title: "Catwoman: When in Rome",
    coverImageUrl: "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=400&h=600&fit=crop",
    description: "Jeph Loeb and Tim Sale reunite for this Catwoman mystery set during the Dark Victory storyline.",
    price: 12.99,
    isFree: false,
    genre: "Mystery",
    publicationYear: 2024,
    isBestseller: false,
    isFeatured: false,
    characterTags: ["Catwoman", "Riddler"],
    seriesName: "Catwoman",
    pageCount: 144,
    rating: "T+"
  }
];

export const genres = ["Superhero", "Action", "Mystery", "Adventure"];

export const years = [2023, 2024];
