// import React from "react";
import Card from "./ProductCard";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Menu() {
  const getSearchKeyword = useSelector((state) => state.pizza.searchKeyword);

  const remboelanData = [
    {
      img: "https://www.remboelan.com/thumb/menu/1602773687.jpg",
      pizzaName: "Bihun Kampung Gunung Tidar",
      pizzaPrice: 59000,
      pizzaDescription: "House special fried rice noodle",
    },
    {
      img: "https://www.remboelan.com/images/menu/1602407195.jpg",
      pizzaName: "Lontong Cap Gomeh",
      pizzaPrice: 80000,
      pizzaDescription:
        " Rice cake topped with chili bamboo shoot, sambal goreng ati, sweet slow cooked chicken, shredded chicken, serundeng, server with coconut chicken broth",
    },
    {
      img: "https://www.remboelan.com/thumb/menu/1602407254.jpg",
      pizzaName: "Mie Goreng Remboelan",
      pizzaPrice: 120000,
      pizzaDescription:
        "House special fried noodle served with pickles and prawn crackers",
    },
    {
      img: "https://www.remboelan.com/thumb/menu/1602407272.jpg",
      pizzaName: "Mie Rebus Pesisiran",
      pizzaPrice: 56000,
      pizzaDescription:
        "House special chicken noodle with special gravy sauce, served with pickles and prawn crackers",
    },
    {
      img: "https://www.remboelan.com/images/menu/1602406786.jpg",
      pizzaName: "Nasi Bakar Tongkol Asap Cabe Hijau",
      pizzaPrice: 90000,
      pizzaDescription:
        "Grilled lemon grass frangrance rice, wraped in banana leaf, stuffed with smoked Tongkol fish, house special balado ijo, and cassava leaves",
    },
    {
      img: "https://www.remboelan.com/images/menu/1602407314.jpg",
      pizzaName: "Nasi Goreng Remboelan",
      pizzaPrice: 125000,
      pizzaDescription:
        "House special fried rice cooked with house special smoked stingray and house made herbs, served with pickles and crackers",
    },
    {
      img: "https://www.remboelan.com/thumb/menu/1602407176.jpg",
      pizzaName: "Nasi Liwet",
      pizzaPrice: 100000,
      pizzaDescription:
        "Coconut rice with combination of shredded chicken, Pindang egg, sweetened bean curd, and vegetables squash",
    },
    {
      img: "https://www.remboelan.com/images/menu/1602407101.jpg",
      pizzaName: "Nasi Langgi",
      pizzaPrice: 325000,
      pizzaDescription:
        "White rice with combination of kering tempeh, green bean, glass noodle, shredded chicken, potato fritter, pindang egg, and serundeng",
    },
    {
      img: "https://www.remboelan.com/images/menu/1602407218.jpg",
      pizzaName: "Nasi Opor Sambal Goreng",
      pizzaPrice: 40000,
      pizzaDescription:
        "White rice topped with coconut chicken stew and chilly chicken liver and gizzard",
    },
    {
      img: "https://www.remboelan.com/images/menu/1602407355.jpg",
      pizzaName: "Nasi Goreng Kambing Menteng",
      pizzaPrice: 75000,
      pizzaDescription:
        "Lamb fried rice with hint of cloces, served with melinjo crackers, and pickles",
    },
  ];
  return (
    <SimpleGrid columns={3} spacing={5} w="75vw">
      {remboelanData
        .filter((data) =>
          data.pizzaName.toLowerCase().includes(getSearchKeyword.toLowerCase())
        )
        .map((pizza, index) => (
          <Box key={index}>
            <Card cardContent={pizza}></Card>
          </Box>
        ))}
    </SimpleGrid>
  );
}
