// Fashions

import men1 from "../assets/img/men-10000.jpg";
import men2 from "../assets/img/men-20000.jpg";
import men3 from "../assets/img/men-30000.jpg";
import men4 from "../assets/img/men-40000.jpg";
import women1 from "../assets/img/women-10000.jpg";
import women2 from "../assets/img/women-20000.jpg";
import women3 from "../assets/img/women-30000.jpg";
import sport1 from "../assets/img/sport-10000.jpg";
import sport4 from "../assets/img/sport-40000.jpg";
import sport5 from "../assets/img/sport-50000.jpg";
import sport6 from "../assets/img/sport-60000.jpg";

//Furniture
import kitchen1 from "../assets/img/Kitchen-10000.jpg";
import kitchen2 from "../assets/img/kitchen-20000.jpg";
import kitchen4 from "../assets/img/kitchen-40000.jpg";
import kitchen5 from "../assets/img/kitchen-50000.jpg";
import kitchen6 from "../assets/img/kitchen-60000.jpg";
import furniture1 from "../assets/img/furniture-10000.jpg";
import furniture2 from "../assets/img/furniture-20000.jpg";
import furniture3 from "../assets/img/furniture-30000.jpg";
import furniture4 from "../assets/img/furniture-40000.jpg";
import garden1 from "../assets/img/garden-10000.jpg";
import garden3 from "../assets/img/garden-30000.jpg";

//Electronic
import computer1 from "../assets/img/computer-10000.jpg";
import computer2 from "../assets/img/computer-20000.jpg";
import computer3 from "../assets/img/computer-30000.jpg";
import computer4 from "../assets/img/computer-40000.jpg";
import computer5 from "../assets/img/computer-50000.jpg";
import computer6 from "../assets/img/computer-60000.jpg";
import head1 from "../assets/img/head-10000.jpg";
import head2 from "../assets/img/head-20000.jpg";
import head3 from "../assets/img/head-30000.jpg";
import phone1 from "../assets/img/phone-10000.jpg";
import phone2 from "../assets/img/phone-20000.jpg";
import phone3 from "../assets/img/phone-30000.jpg";
import phone4 from "../assets/img/phone-40000.jpg";

//Vehicles
import car from "../assets/img/car-10000.jpg";
import car1 from "../assets/img/car-1.png";
import car2 from "../assets/img/Car-20000.jpg";
import car3 from "../assets/img/car-30000.jpg";
import car4 from "../assets/img/car-40000.jpg";
import motorbike1 from "../assets/img/motorbike-10000.jpg";
import motorbike2 from "../assets/img/motorbike-20000.jpg";
import motorbike3 from "../assets/img/motorbike-30000.jpg";
import motorbike4 from "../assets/img/motorbike-40000.jpg";
import bike from "../assets/img/bike-10000.jpg";
import bike2 from "../assets/img/bike-20000.jpg";
import bike3 from "../assets/img/bike-30000.jpg";

export const Data = {
  categories: [
    {
      id: 1,
      name: "Clothing",
      subcategories: [
        {
          id: 1,
          name: "Dresses",
          products: [
            {
              id: 1,
              name: "T-shirt",
              price: 250,
              image: men1,
              description: "A beautiful floral print maxi dress.",
              amount: 1,
              amountCart: 1,
              type: "Men's",
              category: "Dresses",
              rating: 4,
            },
            {
              id: 2,
              name: "Blouse",
              price: 120,
              image: men2,
              description:
                "A classic little black dress that never goes out of style.",
              amount: 1,
              amountCart: 1,
              type: "Men's",
              category: "Dresses",
              rating: 3,
            },
            {
              id: 3,
              name: "Pink T-Shirt",
              price: 90,
              image: men3,
              description:
                "A classic little black dress that never goes out of style.",
              amount: 1,
              amountCart: 1,
              type: "Men's",
              category: "Dresses",
              rating: 5,
            },
            {
              id: 4,
              name: "Manchester",
              price: 130,
              image: men4,
              description:
                "A classic little black dress that never goes out of style.",
              amount: 1,
              amountCart: 1,
              type: "Men's",
              category: "Dresses",
              rating: 4,
            },
            {
              id: 5,
              name: "Sky Dress",
              price: 150,
              image: women1,
              description:
                "A classic little black dress that never goes out of style.",
              amount: 1,
              amountCart: 1,
              type: "Women's",
              category: "Dresses",
              rating: 3.5,
            },
            {
              id: 6,
              name: "Sweatshirt",
              price: 150,
              image: women3,
              description:
                "A classic little black dress that never goes out of style.",
              amount: 1,
              amountCart: 1,
              type: "Women's",
              category: "Dresses",
              rating: 5,
            },
            {
              id: 8,
              name: "Skirt",
              price: 100,
              image: women2,
              description:
                "A classic little black dress that never goes out of style.",
              amount: 1,
              amountCart: 1,
              type: "Women's",
              category: "Dresses",
              rating: 4,
            },

            {
              id: 10,
              name: "Short",
              price: 100,
              image: sport1,
              description:
                "A classic little black dress that never goes out of style.",
              amount: 1,
              amountCart: 1,
              type: "Sport Gears",
              category: "Dresses",
              rating: 5,
            },
            {
              id: 11,
              name: "Hyper Short",
              price: 120,
              image: sport6,
              description:
                "A classic little black dress that never goes out of style.",
              amount: 1,
              amountCart: 1,
              type: "Sport Gears",
              category: "Dresses",
              rating: 4,
            },
            {
              id: 12,
              name: "White Jumpsuit",
              price: 150,
              image: sport4,
              description:
                "A classic little black dress that never goes out of style.",
              amount: 1,
              amountCart: 1,
              type: "Sport Gears",
              category: "Dresses",
              rating: 3.5,
            },
            {
              id: 13,
              name: "Black Jumpsuit",
              price: 150,
              image: sport5,
              description:
                "A classic little black dress that never goes out of style.",
              amount: 1,
              amountCart: 1,
              type: "Sport Gears",
              category: "Dresses",
              rating: 3.5,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Electronics",
      subcategories: [
        {
          id: 2,
          name: "Computers",
          products: [
            {
              id: 14,
              name: "Desktop Computer",
              price: 600,
              image: computer1,
              description: "A powerful laptop with a long battery life.",
              amount: 1,
              amountCart: 1,
              type: "Computer",
              category: "Computers",
              rating: 3.5,
            },
            {
              id: 15,
              name: "Base Computer",
              price: 800,
              image: computer2,
              description:
                "A high-performance desktop computer with a large screen.",
              amount: 1,
              amountCart: 1,
              type: "Computer",
              category: "Computers",
              rating: 4.5,
            },
            {
              id: 16,
              name: "Ultra PC Gamer",
              price: 2500,
              image: computer3,
              description:
                "A high-performance desktop computer with a large screen.",
              amount: 1,
              amountCart: 1,
              type: "Computer",
              category: "Computers",
              rating: 5,
            },
            {
              id: 17,
              name: "Basic PC Gamer",
              price: 1400,
              image: computer4,
              description:
                "A high-performance desktop computer with a large screen.",
              amount: 1,
              amountCart: 1,
              type: "Computer",
              category: "Computers",
              rating: 4,
            },
            {
              id: 18,
              name: "Gaming PC",
              price: 1800,
              image: computer5,
              description:
                "A high-performance desktop computer with a large screen.",
              amount: 1,
              amountCart: 1,
              type: "Computer",
              category: "Computers",
              rating: 4,
            },
            {
              id: 19,
              name: "PC Gamer",
              price: 1500,
              image: computer6,
              description:
                "A high-performance desktop computer with a large screen.",
              amount: 1,
              amountCart: 1,
              type: "Computer",
              category: "Computers",
              rating: 3,
            },
            {
              id: 20,
              name: "Smartphone XL",
              price: 1200,
              image: phone1,
              description:
                "A high-performance desktop computer with a large screen.",
              amount: 1,
              amountCart: 1,
              type: "Smartphone",
              category: "Computers",
              rating: 5,
            },
            {
              id: 21,
              name: " Yellow IPhone",
              price: 1300,
              image: phone2,
              description:
                "A high-performance desktop computer with a large screen.",
              amount: 1,
              amountCart: 1,
              type: "Smartphone",
              category: "Computers",
              rating: 4,
            },
            {
              id: 22,
              name: "Violet Smartphone",
              price: 1000,
              image: phone3,
              description:
                "A high-performance desktop computer with a large screen.",
              amount: 1,
              amountCart: 1,
              type: "Smartphone",
              category: "Computers",
              rating: 3.5,
            },
            {
              id: 23,
              name: "Smartwatch",
              price: 1200,
              image: phone4,
              description:
                "A high-performance desktop computer with a large screen.",
              amount: 1,
              amountCart: 1,
              type: "Smartphone",
              category: "Computers",
              rating: 5,
            },
            {
              id: 24,
              name: "Headphones",
              price: 400,
              image: head1,
              description:
                "A high-performance desktop computer with a large screen.",
              amount: 1,
              amountCart: 1,
              type: "Games",
              category: "Computers",
              rating: 4,
            },
            {
              id: 25,
              name: "Gaming headset",
              price: 500,
              image: head2,
              description:
                "A high-performance desktop computer with a large screen.",
              amount: 1,
              amountCart: 1,
              type: "Games",
              category: "Computers",
              rating: 3,
            },
            {
              id: 26,
              name: "Mega headset",
              price: 600,
              image: head3,
              description:
                "A high-performance desktop computer with a large screen.",
              amount: 1,
              amountCart: 1,
              type: "Games",
              category: "Computers",
              rating: 5,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Home",
      subcategories: [
        {
          id: 3,
          name: "Furniture",
          products: [
            {
              id: 29,
              name: "Freezer",
              price: 950,
              image: kitchen1,
              description:
                "A high-performance desktop computer with a large screen.",
              amount: 1,
              amountCart: 1,
              type: "Kitchen",
              category: "Home",
              rating: 3,
            },
            {
              id: 30,
              name: "HD Freezer",
              price: 1000,
              image: kitchen2,
              description: "A beautiful dining table that seats six.",
              amount: 1,
              amountCart: 1,
              type: "Kitchen",
              category: "Home",
              rating: 5,
            },

            {
              id: 32,
              name: "MicroWave",
              price: 700,
              image: kitchen4,
              description: "A beautiful dining table that seats six.",
              amount: 1,
              amountCart: 1,
              type: "Kitchen",
              category: "Home",
              rating: 4.5,
            },
            {
              id: 33,
              name: "Floor MicroWave",
              price: 700,
              image: kitchen5,
              description: "A comfortable sofa with a modern design.",
              amount: 1,
              amountCart: 1,
              type: "Kitchen",
              category: "Home",
              rating: 3.5,
            },
            {
              id: 34,
              name: "Oven",
              price: 1000,
              image: kitchen6,
              description: "A beautiful dining table that seats six.",
              amount: 1,
              amountCart: 1,
              type: "Kitchen",
              category: "Home",
              rating: 4.5,
            },
            {
              id: 35,
              name: "Chair",
              price: 450,
              image: furniture1,
              description: "A beautiful dining table that seats six.",
              amount: 1,
              amountCart: 1,
              type: "Bed Room",
              category: "Home",
              rating: 5,
            },
            {
              id: 36,
              name: "Dining chair",
              price: 500,
              image: furniture2,
              description: "A beautiful dining table that seats six.",
              amount: 1,
              amountCart: 1,
              type: "Bed Room",
              category: "Home",
              rating: 4.5,
            },
            {
              id: 37,
              name: "Rocking chair",
              price: 530,
              image: furniture3,
              description: "A beautiful dining table that seats six.",
              amount: 1,
              amountCart: 1,
              type: "Bed Room",
              category: "Home",
              rating: 4.5,
            },
            {
              id: 38,
              name: "Armchair",
              price: 580,
              image: furniture4,
              description: "A beautiful dining table that seats six.",
              amount: 1,
              amountCart: 1,
              type: "Bed Room",
              category: "Home",
              rating: 5,
            },
            {
              id: 40,
              name: "Grass Cutter",
              price: 1000,
              image: garden1,
              description: "A beautiful dining table that seats six.",
              amount: 1,
              amountCart: 1,
              type: "Garden",
              category: "Home",
              rating: 4,
            },
            {
              id: 41,
              name: "Modern Grass Cutter",
              price: 1100,
              image: garden3,
              description: "A beautiful dining table that seats six.",
              amount: 1,
              amountCart: 1,
              type: "Garden",
              category: "Home",
              rating: 5,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Vehicle",
      subcategories: [
        {
          id: 4,
          name: "Cars",
          products: [
            {
              id: 45,
              name: "Car battery",
              price: 30000,
              image: car,
              description: "A reliable sedan with great gas mileage.",
              amount: 1,
              amountCart: 1,
              type: "Cars",
              category: "Home",
              rating: 3,
            },
            {
              id: 46,
              name: "Sports Car",
              price: 50000,
              image: car2,
              description:
                "A sleek and fast sports car for the ultimate driving experience.",
              amount: 1,
              amountCart: 1,
              type: "Cars",
              category: "Home",
              rating: 4.5,
            },
            {
              id: 47,
              name: "Car Jack",
              price: 24000,
              image: car3,
              description: "A reliable sedan with great gas mileage.",
              amount: 1,
              amountCart: 1,
              type: "Cars",
              category: "Home",
              rating: 5,
            },
            {
              id: 48,
              name: "Hatchback",
              price: 40000,
              image: car4,
              description:
                "A sleek and fast sports car for the ultimate driving experience.",
              amount: 1,
              amountCart: 1,
              type: "Cars",
              category: "Home",
              rating: 4,
            },
            {
              id: 49,
              name: "Cruiser",
              price: 20000,
              image: motorbike1,
              description:
                "A sleek and fast sports car for the ultimate driving experience.",
              amount: 1,
              amountCart: 1,
              type: "Motorbike",
              category: "Home",
              rating: 5,
            },
            {
              id: 50,
              name: "Scooter",
              price: 22000,
              image: motorbike2,
              description:
                "A sleek and fast sports car for the ultimate driving experience.",
              amount: 1,
              amountCart: 1,
              type: "Motorbike",
              category: "Home",
              rating: 4,
            },
            {
              id: 51,
              name: "Chopper",
              price: 18400,
              image: motorbike3,
              description:
                "A sleek and fast sports car for the ultimate driving experience.",
              amount: 1,
              amountCart: 1,
              type: "Motorbike",
              category: "Home",
              rating: 3.5,
            },
            {
              id: 52,
              name: "Touring bike",
              price: 25000,
              image: motorbike4,
              description:
                "A sleek and fast sports car for the ultimate driving experience.",
              amount: 1,
              amountCart: 1,
              type: "Motorbike",
              category: "Home",
              rating: 5,
            },
            {
              id: 53,
              name: "Sportbike",
              price: 15000,
              image: bike,
              description:
                "A sleek and fast sports car for the ultimate driving experience.",
              amount: 1,
              amountCart: 1,
              type: "Bikes",
              category: "Home",
              rating: 4,
            },
            {
              id: 54,
              name: "Folding bike",
              price: 12000,
              image: bike2,
              description:
                "A sleek and fast sports car for the ultimate driving experience.",
              amount: 1,
              amountCart: 1,
              type: "Bikes",
              category: "Home",
              rating: 3.5,
            },
            {
              id: 55,
              name: "Hybrid bike",
              price: 20000,
              image: bike3,
              description:
                "A sleek and fast sports car for the ultimate driving experience.",
              amount: 1,
              amountCart: 1,
              type: "Bikes",
              category: "Home",
              rating: 4.5,
            },
          ],
        },
      ],
    },
  ],
  cart: [],
};
