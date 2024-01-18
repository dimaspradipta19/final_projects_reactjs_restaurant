import React from "react";
import Card from "./ProductCard";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Menu() {
  const getSearchKeyword = useSelector((state) => state.pizza.searchKeyword);
  const pizzaData = [
    {
      img: "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=213/https://static-cdn-ph.pizzahut.co.id/uploads/temp/sku-smoked-beef-topshot-final-1-1703057377215.png",
      pizzaName: "Deluxe Spicy Beef",
      pizzaPrice: 73000,
      pizzaDescription:
        "Burger Sapi, Potongan Tomat, Keju Mozzarella, Saus Chili Tomato dan Ekstra Saus Spicy Mayo",
    },
    {
      img: "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=213/https://static-cdn-dev-temp.pizzahut.co.id/uploads/temp/chicken-lovers-1687316598030.png",
      pizzaName: "Deluxe Smoked Beef",
      pizzaPrice: 80000,
      pizzaDescription:
        "Daging Sapi Asap, Onion, Keju Mozzarella dan Ekstra Saus Mayonnaise",
    },
    {
      img: "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=213/https://static-cdn-ph.pizzahut.co.id/uploads/temp/sku-spicy-beef-topshot-final-1-1703057248329.png",
      pizzaName: "Deluxe Chicken Pizza",
      pizzaPrice: 120000,
      pizzaDescription:
        "Daging Ayam Asap, Jagung, Keju Mozzarella, Saus Honey Mustard dan Ekstra Saus Mayonnaise",
    },
    {
      img: "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=213/https://static-cdn-dev-temp.pizzahut.co.id/uploads/temp/super-supreme-1687316488517.png",
      pizzaName: "Super Supreme",
      pizzaPrice: 56000,
      pizzaDescription:
        "Daging Ayam Asap, Daging Asap & Burger Sapi, Jamur, Onion, Nanas, Paprika, Keju Mozzarella",
    },
    {
      img: "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=213/https://static-cdn-dev-temp.pizzahut.co.id/uploads/temp/american-favourite-1687316388794.png",
      pizzaName: "American Favourite",
      pizzaPrice: 250000,
      pizzaDescription:
        "Pepperoni, beef topping, jamur, keju mozzarella, onion, saus pizza spesial",
    },
    {
      img: "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=213/https://static-cdn-ph.pizzahut.co.id/uploads/temp/splitzaremovebgpreview-1690827127217.png",
      pizzaName: "Splitza Meat Lovers",
      pizzaPrice: 125000,
      pizzaDescription:
        "American Favourite Pizza dengan 2 Topping : Meat Lovers dan American Favourite",
    },
    {
      img: "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=213/https://static-cdn-dev-temp.pizzahut.co.id/uploads/temp/cheese-overload-224x224-1689317783619.png",
      pizzaName: "Cheese Overload",
      pizzaPrice: 100000,
      pizzaDescription:
        "Keju Mozzarella, String Cheese, Cream Mayo, Keju Parmesan, White Cheese",
    },
    {
      img: "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=213/https://static-cdn-dev-temp.pizzahut.co.id/uploads/temp/veggie-garden-1687316778696.png",
      pizzaName: "Veggie Garden",
      pizzaPrice: 325000,
      pizzaDescription:
        "Jamur, paprika merah & hijau, nanas, jagung dan keju mozzarella",
    },
    {
      img: "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=213/https://static-cdn-dev-temp.pizzahut.co.id/uploads/temp/tuna-melt-1687316973619.png",
      pizzaName: "Tuna Melt",
      pizzaPrice: 40000,
      pizzaDescription: "Tuna, Jagung, Keju Mozzarella",
    },
    {
      img: "https://static-cdn-ph.pizzahut.co.id/cdn-cgi/image/quality=100,format=auto,width=213/https://static-cdn-dev-temp.pizzahut.co.id/uploads/temp/pepperoni-1687316848318.png",
      pizzaName: "Pepperoni",
      pizzaPrice: 75000,
      pizzaDescription: "Pepperoni, keju mozzarella, saus pizza spesial",
    },
  ];
  return (
    <SimpleGrid columns={3} spacing={5} w="75vw">
      {pizzaData
        .filter((data) =>
          data.pizzaName.toLowerCase().includes(getSearchKeyword.toLowerCase())
        )
        .map((pizza) => (
          <Box>
            <Card cardContent={pizza}></Card>
          </Box>
        ))}
    </SimpleGrid>
  );
}
