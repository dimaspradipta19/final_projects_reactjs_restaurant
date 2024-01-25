// import React from "react";
import Card from "./ProductCard";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Menu() {
  const getSearchKeyword = useSelector((state) => state.pizza.searchKeyword);

  const remboelanData = [
    {
      img: "https://www.remboelan.com/thumb/menu/1602773687.jpg",
      remboelanName: "Bihun Kampung Gunung Tidar",
      remboelanPrice: 59000,
      remboelanDescription: "House special fried rice noodle",
    },
    {
      img: "https://www.remboelan.com/images/menu/1602407195.jpg",
      remboelanName: "Lontong Cap Gomeh",
      remboelanPrice: 80000,
      remboelanDescription:
        " Rice cake topped with chili bamboo shoot, sambal goreng ati, sweet slow cooked chicken, shredded chicken, serundeng, server with coconut chicken broth",
    },
    {
      img: "https://www.remboelan.com/thumb/menu/1602407254.jpg",
      remboelanName: "Mie Goreng Remboelan",
      remboelanPrice: 120000,
      remboelanDescription:
        "House special fried noodle served with pickles and prawn crackers",
    },
    {
      img: "https://www.remboelan.com/thumb/menu/1602407272.jpg",
      remboelanName: "Mie Rebus Pesisiran",
      remboelanPrice: 56000,
      remboelanDescription:
        "House special chicken noodle with special gravy sauce, served with pickles and prawn crackers",
    },
    {
      img: "https://www.remboelan.com/images/menu/1602406786.jpg",
      remboelanName: "Nasi Bakar Tongkol Asap Cabe Hijau",
      remboelanPrice: 90000,
      remboelanDescription:
        "Grilled lemon grass frangrance rice, wraped in banana leaf, stuffed with smoked Tongkol fish, house special balado ijo, and cassava leaves",
    },
    {
      img: "https://www.remboelan.com/images/menu/1602407314.jpg",
      remboelanName: "Nasi Goreng Remboelan",
      remboelanPrice: 125000,
      remboelanDescription:
        "House special fried rice cooked with house special smoked stingray and house made herbs, served with pickles and crackers",
    },
    {
      img: "https://www.remboelan.com/thumb/menu/1602407176.jpg",
      remboelanName: "Nasi Liwet",
      remboelanPrice: 100000,
      remboelanDescription:
        "Coconut rice with combination of shredded chicken, Pindang egg, sweetened bean curd, and vegetables squash",
    },
    {
      img: "https://www.remboelan.com/images/menu/1602407101.jpg",
      remboelanName: "Nasi Langgi",
      remboelanPrice: 325000,
      remboelanDescription:
        "White rice with combination of kering tempeh, green bean, glass noodle, shredded chicken, potato fritter, pindang egg, and serundeng",
    },
    {
      img: "https://www.remboelan.com/images/menu/1602407218.jpg",
      remboelanName: "Nasi Opor Sambal Goreng",
      remboelanPrice: 40000,
      remboelanDescription:
        "White rice topped with coconut chicken stew and chilly chicken liver and gizzard",
    },
    {
      img: "https://www.remboelan.com/images/menu/1602407355.jpg",
      remboelanName: "Nasi Goreng Kambing Menteng",
      remboelanPrice: 75000,
      remboelanDescription:
        "Lamb fried rice with hint of cloces, served with melinjo crackers, and pickles",
    },
  ];
  return (
    <SimpleGrid columns={3} spacing={5} w="75vw">
      {remboelanData
        .filter((data) =>
          data.remboelanName.toLowerCase().includes(getSearchKeyword.toLowerCase())
        )
        .map((pizza, index) => (
          <Box key={index}>
            <Card cardContent={pizza}></Card>
          </Box>
        ))}
    </SimpleGrid>
  );
}
