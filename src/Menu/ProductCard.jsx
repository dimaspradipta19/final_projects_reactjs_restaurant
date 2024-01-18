import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  VStack,
} from "@chakra-ui/react";
import { storeCartData } from "../Redux/ReduxSlices";
import { rupiah } from "../utils/currencyConvert";

export default function ProductCard({ cardContent }) {
  const dispatch = useDispatch();
  const getCartData = useSelector((state) => state.pizza.cartData);

  const addToCart = (pizzaName, quantity, price) => {
    const existingItem = getCartData.find(
      (item) => item.pizzaName === pizzaName
    );

    if (existingItem) {
      // If item already exists, increment its quantity:
      return;
    } else {
      // If item doesn't exist, add it to the cart:
      const newItem = {
        pizzaName,
        quantity,
        price,
        notes: "",
      };

      dispatch(storeCartData([...getCartData, newItem]));
    }
  };

  return (
    <Card maxW="sm" height="100%">
      <CardBody>
        <Stack>
          <Image
            width="100%" // Ensure image fills the HStack for proper centering
            style={{ objectFit: "cover" }} // Maintain aspect ratio while covering
            src={cardContent.img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Stack>
        <Stack mt="6" spacing="3">
          <Heading size="md">{cardContent.pizzaName}</Heading>
          <Text>{cardContent.pizzaDescription}</Text>
        </Stack>
      </CardBody>
      <CardFooter width="100%">
        <VStack width="100%">
          <Text color="red.600" fontSize="2xl" fontWeight="bold" mb={5}>
            {rupiah(cardContent.pizzaPrice)}
          </Text>
          <Button
            width="100%"
            colorScheme="blue"
            onClick={() =>
              addToCart(
                cardContent.pizzaName,
                1,
                cardContent.pizzaPrice,
                cardContent.img
              )
            }
          >
            Add to cart
          </Button>
        </VStack>
      </CardFooter>
    </Card>
  );
}

//richie
