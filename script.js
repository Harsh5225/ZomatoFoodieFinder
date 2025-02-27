const restaurant = [
  {
    image: "nine",
    name: "The Dining Den",
    rating: 2,
    food_type: "Mexican",
    price_for_two: 857,
    location: "Purana Qila",
    distance_from_Customer_house: "2.8",
    offers: 1,
    alcohol: false,
    restaurant_open_time: 23,
    restaurant_close_time: 11,
  },
  {
    image: "First",
    name: "The Rustic Spoon",
    rating: 3,
    food_type: "Thai",
    price_for_two: 585,
    location: "Safdarjung Tomb",
    distance_from_Customer_house: "6.0",
    offers: 30,
    alcohol: false,
    restaurant_open_time: 14,
    restaurant_close_time: 2,
  },
  {
    image: "First",
    name: "Bistro Bliss",
    rating: 2,
    food_type: "Mexican",
    price_for_two: 1216,
    location: "Lodi Gardens",
    distance_from_Customer_house: "9.7",
    offers: 5,
    alcohol: false,
    restaurant_open_time: 3,
    restaurant_close_time: 15,
  },
  {
    image: "seventh",
    name: "The Hungry Fork",
    rating: 5,
    food_type: "Japanese",
    price_for_two: 1110,
    location: "India Gate",
    distance_from_Customer_house: "3.5",
    offers: 6,
    alcohol: false,
    restaurant_open_time: 3,
    restaurant_close_time: 15,
  },
  {
    image: "nine",
    name: "Gourmet Delight",
    rating: 2,
    food_type: "Thai",
    price_for_two: 1521,
    location: "Chandni Chowk",
    distance_from_Customer_house: "6.0",
    offers: 12,
    alcohol: false,
    restaurant_open_time: 12,
    restaurant_close_time: 0,
  },
  {
    image: "fifth",
    name: "The Dining Den",
    rating: 1,
    food_type: "Japanese",
    price_for_two: 743,
    location: "Dilli Haat",
    distance_from_Customer_house: "2.2",
    offers: 9,
    alcohol: false,
    restaurant_open_time: 3,
    restaurant_close_time: 15,
  },
  {
    image: "tenth",
    name: "Zesty Bites",
    rating: 3,
    food_type: "Thai",
    price_for_two: 1955,
    location: "Hauz Khas Village",
    distance_from_Customer_house: "4.2",
    offers: 26,
    alcohol: false,
    restaurant_open_time: 20,
    restaurant_close_time: 8,
  },
  {
    image: "third",
    name: "The Culinary Table",
    rating: 4,
    food_type: "Chinese",
    price_for_two: 1967,
    location: "Akshardham Temple",
    distance_from_Customer_house: "1.9",
    offers: 20,
    alcohol: false,
    restaurant_open_time: 7,
    restaurant_close_time: 19,
  },
  {
    image: "nine",
    name: "The Dining Den",
    rating: 2,
    food_type: "Indian",
    price_for_two: 2392,
    location: "Dilli Haat",
    distance_from_Customer_house: "8.1",
    offers: 14,
    alcohol: true,
    restaurant_open_time: 12,
    restaurant_close_time: 0,
  },
  {
    image: "nine",
    name: "Flavor Junction",
    rating: 4,
    food_type: "Mexican",
    price_for_two: 190,
    location: "Red Fort",
    distance_from_Customer_house: "9.8",
    offers: 10,
    alcohol: false,
    restaurant_open_time: 23,
    restaurant_close_time: 11,
  },
  {
    image: "nine",
    name: "Zesty Bites",
    rating: 2,
    food_type: "Indian",
    price_for_two: 1768,
    location: "Hauz Khas Village",
    distance_from_Customer_house: "9.0",
    offers: 2,
    alcohol: false,
    restaurant_open_time: 21,
    restaurant_close_time: 9,
  },
  {
    image: "Eigth",
    name: "Savory Spot",
    rating: 1,
    food_type: "Indian",
    price_for_two: 367,
    location: "Raj Ghat",
    distance_from_Customer_house: "6.2",
    offers: 4,
    alcohol: true,
    restaurant_open_time: 16,
    restaurant_close_time: 4,
  },
  {
    image: "sixth",
    name: "Spice Symphony",
    rating: 3,
    food_type: "Japanese",
    price_for_two: 1855,
    location: "ISKCON Temple",
    distance_from_Customer_house: "7.3",
    offers: 17,
    alcohol: false,
    restaurant_open_time: 0,
    restaurant_close_time: 12,
  },
  {
    image: "nine",
    name: "Crispy Corner",
    rating: 5,
    food_type: "Chinese",
    price_for_two: 976,
    location: "Humayun's Tomb",
    distance_from_Customer_house: "7.2",
    offers: 29,
    alcohol: false,
    restaurant_open_time: 3,
    restaurant_close_time: 15,
  },
  {
    image: "seventh",
    name: "Gourmet Delight",
    rating: 5,
    food_type: "Indian",
    price_for_two: 509,
    location: "Red Fort",
    distance_from_Customer_house: "5.7",
    offers: 1,
    alcohol: false,
    restaurant_open_time: 22,
    restaurant_close_time: 10,
  },
  {
    image: "Eigth",
    name: "The Foodie's Hub",
    rating: 5,
    food_type: "Indian",
    price_for_two: 1780,
    location: "ISKCON Temple",
    distance_from_Customer_house: "2.3",
    offers: 7,
    alcohol: false,
    restaurant_open_time: 8,
    restaurant_close_time: 20,
  },
  {
    image: "Eigth",
    name: "Spice Symphony",
    rating: 2,
    food_type: "Italian",
    price_for_two: 2097,
    location: "Hauz Khas Village",
    distance_from_Customer_house: "3.4",
    offers: 19,
    alcohol: false,
    restaurant_open_time: 17,
    restaurant_close_time: 5,
  },
  {
    image: "Eigth",
    name: "Sizzle & Spice",
    rating: 4,
    food_type: "Mexican",
    price_for_two: 437,
    location: "Jama Masjid",
    distance_from_Customer_house: "1.9",
    offers: 17,
    alcohol: false,
    restaurant_open_time: 18,
    restaurant_close_time: 6,
  },
  {
    image: "second",
    name: "Spice Symphony",
    rating: 3,
    food_type: "Thai",
    price_for_two: 1173,
    location: "National Museum",
    distance_from_Customer_house: "9.5",
    offers: 22,
    alcohol: false,
    restaurant_open_time: 23,
    restaurant_close_time: 11,
  },
  {
    image: "fifth",
    name: "Urban Eatery",
    rating: 4,
    food_type: "Thai",
    price_for_two: 950,
    location: "Chandni Chowk",
    distance_from_Customer_house: "7.6",
    offers: 10,
    alcohol: true,
    restaurant_open_time: 5,
    restaurant_close_time: 17,
  },
  {
    image: "seventh",
    name: "Sizzle & Spice",
    rating: 3,
    food_type: "Mexican",
    price_for_two: 153,
    location: "Lodi Gardens",
    distance_from_Customer_house: "7.2",
    offers: 28,
    alcohol: false,
    restaurant_open_time: 9,
    restaurant_close_time: 21,
  },
  {
    image: "First",
    name: "The Rustic Spoon",
    rating: 2,
    food_type: "Indian",
    price_for_two: 1999,
    location: "India Gate",
    distance_from_Customer_house: "2.4",
    offers: 22,
    alcohol: false,
    restaurant_open_time: 5,
    restaurant_close_time: 17,
  },
  {
    image: "First",
    name: "Savory Spot",
    rating: 5,
    food_type: "Chinese",
    price_for_two: 463,
    location: "Qutub Minar",
    distance_from_Customer_house: "8.2",
    offers: 13,
    alcohol: true,
    restaurant_open_time: 20,
    restaurant_close_time: 8,
  },
  {
    image: "nine",
    name: "Fusion Feast",
    rating: 5,
    food_type: "Japanese",
    price_for_two: 1690,
    location: "Red Fort",
    distance_from_Customer_house: "7.0",
    offers: 16,
    alcohol: false,
    restaurant_open_time: 14,
    restaurant_close_time: 2,
  },
  {
    image: "Eigth",
    name: "Golden Plate",
    rating: 2,
    food_type: "Mexican",
    price_for_two: 1657,
    location: "Connaught Place",
    distance_from_Customer_house: "1.3",
    offers: 0,
    alcohol: false,
    restaurant_open_time: 20,
    restaurant_close_time: 8,
  },
  {
    image: "seventh",
    name: "Tasty Treats",
    rating: 2,
    food_type: "Indian",
    price_for_two: 2399,
    location: "Gurudwara Bangla Sahib",
    distance_from_Customer_house: "9.5",
    offers: 11,
    alcohol: false,
    restaurant_open_time: 10,
    restaurant_close_time: 22,
  },
  {
    image: "First",
    name: "The Dining Den",
    rating: 1,
    food_type: "Thai",
    price_for_two: 483,
    location: "Lotus Temple",
    distance_from_Customer_house: "1.8",
    offers: 27,
    alcohol: false,
    restaurant_open_time: 5,
    restaurant_close_time: 17,
  },
  {
    image: "fourth",
    name: "Taste Haven",
    rating: 3,
    food_type: "Indian",
    price_for_two: 1105,
    location: "Connaught Place",
    distance_from_Customer_house: "3.4",
    offers: 8,
    alcohol: false,
    restaurant_open_time: 22,
    restaurant_close_time: 10,
  },
  {
    image: "nine",
    name: "Tasty Treats",
    rating: 1,
    food_type: "Chinese",
    price_for_two: 1587,
    location: "Gurudwara Bangla Sahib",
    distance_from_Customer_house: "8.9",
    offers: 11,
    alcohol: false,
    restaurant_open_time: 16,
    restaurant_close_time: 4,
  },
  {
    image: "Eigth",
    name: "Sizzle & Spice",
    rating: 3,
    food_type: "Japanese",
    price_for_two: 441,
    location: "National Museum",
    distance_from_Customer_house: "8.1",
    offers: 26,
    alcohol: false,
    restaurant_open_time: 13,
    restaurant_close_time: 1,
  },
  {
    image: "fifth",
    name: "The Culinary Table",
    rating: 4,
    food_type: "Mexican",
    price_for_two: 1831,
    location: "India Gate",
    distance_from_Customer_house: "6.6",
    offers: 0,
    alcohol: true,
    restaurant_open_time: 4,
    restaurant_close_time: 16,
  },
  {
    image: "Eigth",
    name: "The Culinary Table",
    rating: 2,
    food_type: "Chinese",
    price_for_two: 964,
    location: "Gurudwara Bangla Sahib",
    distance_from_Customer_house: "4.9",
    offers: 24,
    alcohol: false,
    restaurant_open_time: 23,
    restaurant_close_time: 11,
  },
  {
    image: "fourth",
    name: "Wholesome Cravings",
    rating: 3,
    food_type: "Indian",
    price_for_two: 2128,
    location: "Lodi Gardens",
    distance_from_Customer_house: "9.2",
    offers: 1,
    alcohol: true,
    restaurant_open_time: 5,
    restaurant_close_time: 17,
  },
  {
    image: "tenth",
    name: "Epicurean Escape",
    rating: 3,
    food_type: "Japanese",
    price_for_two: 493,
    location: "Akshardham Temple",
    distance_from_Customer_house: "9.4",
    offers: 16,
    alcohol: false,
    restaurant_open_time: 23,
    restaurant_close_time: 11,
  },
  {
    image: "sixth",
    name: "Tasty Treats",
    rating: 2,
    food_type: "Japanese",
    price_for_two: 553,
    location: "Purana Qila",
    distance_from_Customer_house: "6.7",
    offers: 17,
    alcohol: true,
    restaurant_open_time: 17,
    restaurant_close_time: 5,
  },
  {
    image: "Eigth",
    name: "The Hungry Fork",
    rating: 5,
    food_type: "Japanese",
    price_for_two: 1805,
    location: "Hauz Khas Village",
    distance_from_Customer_house: "2.7",
    offers: 24,
    alcohol: false,
    restaurant_open_time: 21,
    restaurant_close_time: 9,
  },
  {
    image: "tenth",
    name: "Golden Plate",
    rating: 2,
    food_type: "Chinese",
    price_for_two: 2346,
    location: "Connaught Place",
    distance_from_Customer_house: "9.1",
    offers: 8,
    alcohol: true,
    restaurant_open_time: 23,
    restaurant_close_time: 11,
  },
  {
    image: "First",
    name: "Taste Haven",
    rating: 4,
    food_type: "Chinese",
    price_for_two: 339,
    location: "Safdarjung Tomb",
    distance_from_Customer_house: "4.6",
    offers: 25,
    alcohol: false,
    restaurant_open_time: 15,
    restaurant_close_time: 3,
  },
  {
    image: "fourth",
    name: "Crispy Corner",
    rating: 2,
    food_type: "Italian",
    price_for_two: 2430,
    location: "Raj Ghat",
    distance_from_Customer_house: "5.5",
    offers: 7,
    alcohol: true,
    restaurant_open_time: 22,
    restaurant_close_time: 10,
  },
  {
    image: "fifth",
    name: "Flavor Junction",
    rating: 1,
    food_type: "Mexican",
    price_for_two: 566,
    location: "Safdarjung Tomb",
    distance_from_Customer_house: "1.4",
    offers: 1,
    alcohol: false,
    restaurant_open_time: 10,
    restaurant_close_time: 22,
  },
  {
    image: "second",
    name: "Wholesome Cravings",
    rating: 4,
    food_type: "Chinese",
    price_for_two: 2055,
    location: "Lodi Gardens",
    distance_from_Customer_house: "4.3",
    offers: 17,
    alcohol: false,
    restaurant_open_time: 16,
    restaurant_close_time: 4,
  },
  {
    image: "fourth",
    name: "Tasty Treats",
    rating: 1,
    food_type: "Mexican",
    price_for_two: 393,
    location: "Red Fort",
    distance_from_Customer_house: "1.7",
    offers: 22,
    alcohol: false,
    restaurant_open_time: 17,
    restaurant_close_time: 5,
  },
  {
    image: "fifth",
    name: "The Hungry Fork",
    rating: 5,
    food_type: "Italian",
    price_for_two: 1524,
    location: "Khan Market",
    distance_from_Customer_house: "0.4",
    offers: 9,
    alcohol: false,
    restaurant_open_time: 11,
    restaurant_close_time: 23,
  },
  {
    image: "seventh",
    name: "Epicurean Escape",
    rating: 3,
    food_type: "Japanese",
    price_for_two: 1888,
    location: "Akshardham Temple",
    distance_from_Customer_house: "1.6",
    offers: 16,
    alcohol: false,
    restaurant_open_time: 0,
    restaurant_close_time: 12,
  },
  {
    image: "sixth",
    name: "Flavor Junction",
    rating: 3,
    food_type: "Thai",
    price_for_two: 1138,
    location: "Raj Ghat",
    distance_from_Customer_house: "8.2",
    offers: 1,
    alcohol: true,
    restaurant_open_time: 12,
    restaurant_close_time: 0,
  },
  {
    image: "nine",
    name: "Sizzle & Spice",
    rating: 1,
    food_type: "Indian",
    price_for_two: 1981,
    location: "Qutub Minar",
    distance_from_Customer_house: "9.0",
    offers: 26,
    alcohol: false,
    restaurant_open_time: 4,
    restaurant_close_time: 16,
  },
  {
    image: "nine",
    name: "Gourmet Delight",
    rating: 2,
    food_type: "Japanese",
    price_for_two: 1039,
    location: "Gurudwara Bangla Sahib",
    distance_from_Customer_house: "3.8",
    offers: 23,
    alcohol: true,
    restaurant_open_time: 4,
    restaurant_close_time: 16,
  },
  {
    image: "second",
    name: "The Culinary Table",
    rating: 4,
    food_type: "Chinese",
    price_for_two: 2380,
    location: "National Museum",
    distance_from_Customer_house: "9.0",
    offers: 12,
    alcohol: false,
    restaurant_open_time: 2,
    restaurant_close_time: 14,
  },
  {
    image: "sixth",
    name: "Savory Spot",
    rating: 2,
    food_type: "Thai",
    price_for_two: 1874,
    location: "Gurudwara Bangla Sahib",
    distance_from_Customer_house: "1.2",
    offers: 17,
    alcohol: false,
    restaurant_open_time: 11,
    restaurant_close_time: 23,
  },
  {
    image: "fourth",
    name: "The Foodie's Hub",
    rating: 4,
    food_type: "Thai",
    price_for_two: 1999,
    location: "Gurudwara Bangla Sahib",
    distance_from_Customer_house: "2.0",
    offers: 15,
    alcohol: false,
    restaurant_open_time: 15,
    restaurant_close_time: 3,
  },
  {
    image: "nine",
    name: "Zesty Bites",
    rating: 5,
    food_type: "Chinese",
    price_for_two: 1479,
    location: "Khan Market",
    distance_from_Customer_house: "6.6",
    offers: 28,
    alcohol: true,
    restaurant_open_time: 4,
    restaurant_close_time: 16,
  },
  {
    image: "First",
    name: "The Foodie's Hub",
    rating: 1,
    food_type: "Chinese",
    price_for_two: 627,
    location: "Hauz Khas Village",
    distance_from_Customer_house: "6.2",
    offers: 11,
    alcohol: false,
    restaurant_open_time: 9,
    restaurant_close_time: 21,
  },
  {
    image: "third",
    name: "Golden Plate",
    rating: 2,
    food_type: "Japanese",
    price_for_two: 2463,
    location: "Lotus Temple",
    distance_from_Customer_house: "7.7",
    offers: 20,
    alcohol: false,
    restaurant_open_time: 14,
    restaurant_close_time: 2,
  },
  {
    image: "sixth",
    name: "Savory Spot",
    rating: 3,
    food_type: "Mexican",
    price_for_two: 1145,
    location: "Raj Ghat",
    distance_from_Customer_house: "0.1",
    offers: 19,
    alcohol: false,
    restaurant_open_time: 21,
    restaurant_close_time: 9,
  },
  {
    image: "third",
    name: "Tasty Treats",
    rating: 1,
    food_type: "Mexican",
    price_for_two: 581,
    location: "Khan Market",
    distance_from_Customer_house: "2.4",
    offers: 8,
    alcohol: false,
    restaurant_open_time: 18,
    restaurant_close_time: 6,
  },
  {
    image: "second",
    name: "Bistro Bliss",
    rating: 2,
    food_type: "Indian",
    price_for_two: 128,
    location: "Raj Ghat",
    distance_from_Customer_house: "8.3",
    offers: 13,
    alcohol: true,
    restaurant_open_time: 16,
    restaurant_close_time: 4,
  },
  {
    image: "Eigth",
    name: "Spice Symphony",
    rating: 5,
    food_type: "Indian",
    price_for_two: 1527,
    location: "Humayun's Tomb",
    distance_from_Customer_house: "6.4",
    offers: 26,
    alcohol: false,
    restaurant_open_time: 2,
    restaurant_close_time: 14,
  },
  {
    image: "Eigth",
    name: "The Culinary Table",
    rating: 4,
    food_type: "Italian",
    price_for_two: 1421,
    location: "Gurudwara Bangla Sahib",
    distance_from_Customer_house: "5.2",
    offers: 21,
    alcohol: false,
    restaurant_open_time: 22,
    restaurant_close_time: 10,
  },
  {
    image: "sixth",
    name: "The Culinary Table",
    rating: 4,
    food_type: "Thai",
    price_for_two: 1126,
    location: "Dilli Haat",
    distance_from_Customer_house: "3.0",
    offers: 14,
    alcohol: false,
    restaurant_open_time: 3,
    restaurant_close_time: 15,
  },
  {
    image: "fourth",
    name: "The Hungry Fork",
    rating: 2,
    food_type: "Japanese",
    price_for_two: 831,
    location: "Lotus Temple",
    distance_from_Customer_house: "5.3",
    offers: 2,
    alcohol: false,
    restaurant_open_time: 22,
    restaurant_close_time: 10,
  },
  {
    image: "Eigth",
    name: "Taste Haven",
    rating: 5,
    food_type: "Italian",
    price_for_two: 1450,
    location: "ISKCON Temple",
    distance_from_Customer_house: "3.8",
    offers: 9,
    alcohol: false,
    restaurant_open_time: 0,
    restaurant_close_time: 12,
  },
  {
    image: "tenth",
    name: "Fusion Feast",
    rating: 1,
    food_type: "Chinese",
    price_for_two: 1802,
    location: "Gurudwara Bangla Sahib",
    distance_from_Customer_house: "3.7",
    offers: 14,
    alcohol: false,
    restaurant_open_time: 11,
    restaurant_close_time: 23,
  },
  {
    image: "Eigth",
    name: "Spice Symphony",
    rating: 1,
    food_type: "Indian",
    price_for_two: 530,
    location: "Hauz Khas Village",
    distance_from_Customer_house: "1.7",
    offers: 3,
    alcohol: false,
    restaurant_open_time: 1,
    restaurant_close_time: 13,
  },
  {
    image: "third",
    name: "Spice Symphony",
    rating: 4,
    food_type: "Mexican",
    price_for_two: 859,
    location: "India Gate",
    distance_from_Customer_house: "8.5",
    offers: 6,
    alcohol: true,
    restaurant_open_time: 17,
    restaurant_close_time: 5,
  },
  {
    image: "First",
    name: "Urban Eatery",
    rating: 5,
    food_type: "Chinese",
    price_for_two: 101,
    location: "Khan Market",
    distance_from_Customer_house: "9.1",
    offers: 5,
    alcohol: true,
    restaurant_open_time: 4,
    restaurant_close_time: 16,
  },
  {
    image: "fourth",
    name: "The Dining Den",
    rating: 5,
    food_type: "Mexican",
    price_for_two: 316,
    location: "Dilli Haat",
    distance_from_Customer_house: "2.3",
    offers: 27,
    alcohol: true,
    restaurant_open_time: 13,
    restaurant_close_time: 1,
  },
  {
    image: "third",
    name: "The Dining Den",
    rating: 2,
    food_type: "Chinese",
    price_for_two: 1994,
    location: "Dilli Haat",
    distance_from_Customer_house: "9.8",
    offers: 27,
    alcohol: false,
    restaurant_open_time: 5,
    restaurant_close_time: 17,
  },
  {
    image: "seventh",
    name: "The Hungry Fork",
    rating: 3,
    food_type: "Indian",
    price_for_two: 784,
    location: "India Gate",
    distance_from_Customer_house: "4.1",
    offers: 25,
    alcohol: false,
    restaurant_open_time: 12,
    restaurant_close_time: 0,
  },
  {
    image: "fifth",
    name: "Sizzle & Spice",
    rating: 2,
    food_type: "Italian",
    price_for_two: 486,
    location: "Khan Market",
    distance_from_Customer_house: "5.4",
    offers: 26,
    alcohol: false,
    restaurant_open_time: 14,
    restaurant_close_time: 2,
  },
  {
    image: "nine",
    name: "The Culinary Table",
    rating: 3,
    food_type: "Chinese",
    price_for_two: 2480,
    location: "Humayun's Tomb",
    distance_from_Customer_house: "3.9",
    offers: 3,
    alcohol: false,
    restaurant_open_time: 1,
    restaurant_close_time: 13,
  },
  {
    image: "First",
    name: "Fusion Feast",
    rating: 3,
    food_type: "Italian",
    price_for_two: 926,
    location: "Jama Masjid",
    distance_from_Customer_house: "0.2",
    offers: 5,
    alcohol: false,
    restaurant_open_time: 9,
    restaurant_close_time: 21,
  },
  {
    image: "fourth",
    name: "Crispy Corner",
    rating: 4,
    food_type: "Chinese",
    price_for_two: 1079,
    location: "Qutub Minar",
    distance_from_Customer_house: "0.2",
    offers: 15,
    alcohol: true,
    restaurant_open_time: 18,
    restaurant_close_time: 6,
  },
  {
    image: "fourth",
    name: "Tasty Treats",
    rating: 3,
    food_type: "Italian",
    price_for_two: 649,
    location: "Connaught Place",
    distance_from_Customer_house: "0.3",
    offers: 4,
    alcohol: false,
    restaurant_open_time: 18,
    restaurant_close_time: 6,
  },
  {
    image: "tenth",
    name: "Epicurean Escape",
    rating: 1,
    food_type: "Japanese",
    price_for_two: 2402,
    location: "ISKCON Temple",
    distance_from_Customer_house: "1.4",
    offers: 24,
    alcohol: false,
    restaurant_open_time: 13,
    restaurant_close_time: 1,
  },
  {
    image: "second",
    name: "Epicurean Escape",
    rating: 3,
    food_type: "Italian",
    price_for_two: 614,
    location: "Lotus Temple",
    distance_from_Customer_house: "6.4",
    offers: 18,
    alcohol: false,
    restaurant_open_time: 8,
    restaurant_close_time: 20,
  },
  {
    image: "First",
    name: "Golden Plate",
    rating: 5,
    food_type: "Thai",
    price_for_two: 811,
    location: "Akshardham Temple",
    distance_from_Customer_house: "6.8",
    offers: 10,
    alcohol: false,
    restaurant_open_time: 13,
    restaurant_close_time: 1,
  },
  {
    image: "sixth",
    name: "Crispy Corner",
    rating: 4,
    food_type: "Japanese",
    price_for_two: 2055,
    location: "Chandni Chowk",
    distance_from_Customer_house: "1.7",
    offers: 8,
    alcohol: false,
    restaurant_open_time: 3,
    restaurant_close_time: 15,
  },
  {
    image: "fourth",
    name: "Crispy Corner",
    rating: 4,
    food_type: "Italian",
    price_for_two: 891,
    location: "Purana Qila",
    distance_from_Customer_house: "2.4",
    offers: 5,
    alcohol: false,
    restaurant_open_time: 5,
    restaurant_close_time: 17,
  },
  {
    image: "fourth",
    name: "The Foodie's Hub",
    rating: 1,
    food_type: "Italian",
    price_for_two: 2078,
    location: "Chandni Chowk",
    distance_from_Customer_house: "4.5",
    offers: 30,
    alcohol: true,
    restaurant_open_time: 21,
    restaurant_close_time: 9,
  },
  {
    image: "sixth",
    name: "Urban Eatery",
    rating: 4,
    food_type: "Italian",
    price_for_two: 1069,
    location: "Dilli Haat",
    distance_from_Customer_house: "0.9",
    offers: 0,
    alcohol: true,
    restaurant_open_time: 11,
    restaurant_close_time: 23,
  },
  {
    image: "nine",
    name: "Crispy Corner",
    rating: 1,
    food_type: "Thai",
    price_for_two: 1872,
    location: "Humayun's Tomb",
    distance_from_Customer_house: "6.5",
    offers: 29,
    alcohol: false,
    restaurant_open_time: 19,
    restaurant_close_time: 7,
  },
  {
    image: "fourth",
    name: "Taste Haven",
    rating: 3,
    food_type: "Thai",
    price_for_two: 427,
    location: "Chandni Chowk",
    distance_from_Customer_house: "1.7",
    offers: 24,
    alcohol: true,
    restaurant_open_time: 7,
    restaurant_close_time: 19,
  },
  {
    image: "second",
    name: "Urban Eatery",
    rating: 4,
    food_type: "Italian",
    price_for_two: 2167,
    location: "Dilli Haat",
    distance_from_Customer_house: "3.2",
    offers: 3,
    alcohol: false,
    restaurant_open_time: 12,
    restaurant_close_time: 0,
  },
  {
    image: "First",
    name: "Sizzle & Spice",
    rating: 4,
    food_type: "Thai",
    price_for_two: 1115,
    location: "Raj Ghat",
    distance_from_Customer_house: "5.1",
    offers: 10,
    alcohol: false,
    restaurant_open_time: 0,
    restaurant_close_time: 12,
  },
  {
    image: "fifth",
    name: "Fusion Feast",
    rating: 1,
    food_type: "Italian",
    price_for_two: 2098,
    location: "Lotus Temple",
    distance_from_Customer_house: "4.7",
    offers: 25,
    alcohol: false,
    restaurant_open_time: 6,
    restaurant_close_time: 18,
  },
  {
    image: "Eigth",
    name: "Sizzle & Spice",
    rating: 3,
    food_type: "Thai",
    price_for_two: 117,
    location: "Lotus Temple",
    distance_from_Customer_house: "2.9",
    offers: 2,
    alcohol: true,
    restaurant_open_time: 22,
    restaurant_close_time: 10,
  },
  {
    image: "fifth",
    name: "Crispy Corner",
    rating: 5,
    food_type: "Indian",
    price_for_two: 1924,
    location: "Safdarjung Tomb",
    distance_from_Customer_house: "6.2",
    offers: 25,
    alcohol: false,
    restaurant_open_time: 12,
    restaurant_close_time: 0,
  },
  {
    image: "second",
    name: "The Hungry Fork",
    rating: 5,
    food_type: "Indian",
    price_for_two: 2382,
    location: "Hauz Khas Village",
    distance_from_Customer_house: "7.3",
    offers: 22,
    alcohol: true,
    restaurant_open_time: 2,
    restaurant_close_time: 14,
  },
  {
    image: "fourth",
    name: "The Culinary Table",
    rating: 2,
    food_type: "Mexican",
    price_for_two: 1421,
    location: "India Gate",
    distance_from_Customer_house: "6.6",
    offers: 10,
    alcohol: false,
    restaurant_open_time: 3,
    restaurant_close_time: 15,
  },
  {
    image: "tenth",
    name: "Spice Symphony",
    rating: 1,
    food_type: "Chinese",
    price_for_two: 2058,
    location: "National Museum",
    distance_from_Customer_house: "2.5",
    offers: 1,
    alcohol: false,
    restaurant_open_time: 9,
    restaurant_close_time: 21,
  },
  {
    image: "sixth",
    name: "Golden Plate",
    rating: 2,
    food_type: "Italian",
    price_for_two: 1084,
    location: "Qutub Minar",
    distance_from_Customer_house: "10.0",
    offers: 23,
    alcohol: false,
    restaurant_open_time: 2,
    restaurant_close_time: 14,
  },
  {
    image: "tenth",
    name: "Tasty Treats",
    rating: 2,
    food_type: "Indian",
    price_for_two: 575,
    location: "India Gate",
    distance_from_Customer_house: "1.3",
    offers: 14,
    alcohol: false,
    restaurant_open_time: 19,
    restaurant_close_time: 7,
  },
  {
    image: "Eigth",
    name: "The Dining Den",
    rating: 5,
    food_type: "Mexican",
    price_for_two: 462,
    location: "Safdarjung Tomb",
    distance_from_Customer_house: "1.0",
    offers: 15,
    alcohol: true,
    restaurant_open_time: 7,
    restaurant_close_time: 19,
  },
  {
    image: "First",
    name: "Bistro Bliss",
    rating: 1,
    food_type: "Japanese",
    price_for_two: 766,
    location: "National Museum",
    distance_from_Customer_house: "5.8",
    offers: 19,
    alcohol: false,
    restaurant_open_time: 23,
    restaurant_close_time: 11,
  },
  {
    image: "fifth",
    name: "Gourmet Delight",
    rating: 1,
    food_type: "Thai",
    price_for_two: 2227,
    location: "Akshardham Temple",
    distance_from_Customer_house: "6.0",
    offers: 27,
    alcohol: true,
    restaurant_open_time: 3,
    restaurant_close_time: 15,
  },
  {
    image: "second",
    name: "Golden Plate",
    rating: 4,
    food_type: "Thai",
    price_for_two: 728,
    location: "Akshardham Temple",
    distance_from_Customer_house: "0.1",
    offers: 17,
    alcohol: false,
    restaurant_open_time: 20,
    restaurant_close_time: 8,
  },
  {
    image: "seventh",
    name: "Fusion Feast",
    rating: 3,
    food_type: "Mexican",
    price_for_two: 806,
    location: "Purana Qila",
    distance_from_Customer_house: "9.9",
    offers: 4,
    alcohol: false,
    restaurant_open_time: 8,
    restaurant_close_time: 20,
  },
  {
    image: "seventh",
    name: "The Rustic Spoon",
    rating: 3,
    food_type: "Thai",
    price_for_two: 2472,
    location: "Qutub Minar",
    distance_from_Customer_house: "9.8",
    offers: 29,
    alcohol: true,
    restaurant_open_time: 21,
    restaurant_close_time: 9,
  },
  {
    image: "second",
    name: "The Hungry Fork",
    rating: 5,
    food_type: "Chinese",
    price_for_two: 1635,
    location: "ISKCON Temple",
    distance_from_Customer_house: "7.2",
    offers: 17,
    alcohol: true,
    restaurant_open_time: 1,
    restaurant_close_time: 13,
  },
  {
    image: "tenth",
    name: "Taste Haven",
    rating: 4,
    food_type: "Italian",
    price_for_two: 537,
    location: "ISKCON Temple",
    distance_from_Customer_house: "4.4",
    offers: 30,
    alcohol: false,
    restaurant_open_time: 9,
    restaurant_close_time: 21,
  },
];


function showFilterPopup() {
  console.log("hello")
  document.getElementById('filterPopup').classList.remove('hidden');
}

// Function to hide the filter popup
function hideFilterPopup() {
  document.getElementById('filterPopup').classList.add('hidden');
}
const restaurant_grid=document.getElementById('restaurantGrid')
function getRestaurants(restaurant) {

  restaurant.forEach((element) => {
    // create a card div
    // 1.image div
    // 2.content div
    // i:Card_header(Name and rating)
    // ii: Card_footer(Food_type and price)
    // iii: card_locatopn (restaurant location,distance)

    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = `Images/${element.image}.jpeg`;
    image.classList.add("restaurant-image");

    const cardContent = document.createElement("div");



    cardContent.classList.add("card-content");

    //Card header
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
   

    const h3span=document.createElement('span')
    h3span.textContent=`${element.name}`
    const rate=document.createElement('span')
    rate.textContent="Rating "+`${element.rating}`
    rate.classList.add('rating');

    cardHeader.appendChild(h3span);
    cardHeader.appendChild(rate);



    //card footer
    const cardFooter = document.createElement("div");
    cardHeader.classList.add("card-footer");

    const foot=document.createElement('span');
    foot.textContent=element.food_type;
    const price=document.createElement('span');
    price.textContent= "₹"+element.price_for_two+" For Two";
    cardFooter.classList.add('card-footer')
   
    cardFooter.appendChild(foot);
    cardFooter.appendChild(price);



    //card_location
    const cardLocation = document.createElement("div");
    cardHeader.classList.add("card-location");

    const location=document.createElement('span');
    location.textContent=element.location;
    const distance=document.createElement('span');
    distance.textContent=element.distance_from_Customer_house+"km";

   cardLocation.classList.add('card-location')    
    cardLocation.appendChild(location)
    cardLocation.appendChild(distance);
    

    cardContent.appendChild(cardHeader)
    cardContent.appendChild(cardFooter)
    cardContent.appendChild(cardLocation);

    card.appendChild(image);
    card.appendChild(cardContent);

    restaurant_grid.appendChild(card)
  });
}

getRestaurants(restaurant);




  const filterButtons = document.querySelectorAll(".filters button");
  console.log(filterButtons)

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to the clicked button
      this.classList.add("active");
      
    });
  });



document.querySelector('.Alcohol').addEventListener('click',()=>{
  const filterAlcholres=restaurant.filter((value)=>(value.alcohol===true))
  hideFilterPopup();
restaurant_grid.innerHTML=""
  getRestaurants(filterAlcholres);
})


document.querySelector('.Rating').addEventListener('click',()=>{
  const filterdata=restaurant.filter((value)=>(value.rating>4.5))
// restaurant_grid.innerHTML=""
hideFilterPopup();
restaurant_grid.replaceChildren();
  getRestaurants(filterdata);
})


document.querySelector('.Open').addEventListener('click', () => {
  const currentTime = new Date().getHours(); 
  const filterdata = restaurant.filter((value) => {

    if (value.restaurant_close_time < value.restaurant_open_time) {
      return (
        currentTime >= value.restaurant_open_time ||
        currentTime < value.restaurant_close_time
      );
    } else {
      return (
        currentTime >= value.restaurant_open_time &&
        currentTime < value.restaurant_close_time
      );
    }
  });
  hideFilterPopup();
  restaurant_grid.replaceChildren(); 
  getRestaurants(filterdata); 
});


document.querySelector('.Offers').addEventListener('click',()=>{
  const filterdata=restaurant.sort((a,b)=>b.offers-a.offers)
// restaurant_grid.innerHTML=""
hideFilterPopup();
restaurant_grid.replaceChildren();
  getRestaurants(filterdata);
})


document.querySelector('.Filter').addEventListener('click',()=>{
  showFilterPopup();
})

document.getElementById('applyFilter').addEventListener('click',()=>{
  const element=document.querySelector('input[name="filterOption"]:checked');
  const ans=element.value;
  if(ans==="rating"){
    restaurant.sort((a,b)=>b.rating-a.rating);
  }
  else if(ans==="highLow"){
    restaurant.sort((a,b)=>b.price_for_two-a.price_for_two);
  }
  else if(ans==="costLowHigh"){
    restaurant.sort((a,b)=>a.price_for_two-b.price_for_two);
  }else if(ans==="distance"){
    restaurant.sort((a,b)=>a.distance_from_Customer_house-b.distance_from_Customer_house);
  }
  restaurant_grid.replaceChildren();
  const radioButtons = document.querySelectorAll('input[name="filterOption"]');
  radioButtons.forEach((radio) => (radio.checked = false));
  getRestaurants(restaurant);

})

document.getElementById("closeFilter").addEventListener('click',()=>{
  hideFilterPopup();
})