/* eslint-disable react/prop-types */
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
import { storeCartData } from "../../Data/Redux/ReduxSlices";
import { rupiah } from "../../utils/currencyConvert";

export default function ProductCard({ cardContent }) {
  const dispatch = useDispatch();
  const getCartData = useSelector((state) => state.pizza.cartData);

  const addToCart = (remboelanName, quantity, price) => {
    const existingItem = getCartData.find(
      (item) => item.remboelanName === remboelanName
    );

    if (existingItem) {
      // If item already exists, increment its quantity:

      return;
    } else {
      // If item doesn't exist, add it to the cart:
      const newItem = {
        remboelanName,
        quantity,
        price,
        notes: "",
      };

      dispatch(storeCartData([...getCartData, newItem]));
    }
  };

  return (
    <Card maxW="sm" height="100%">
      <CardBody
      backgroundColor={"#F8F8F8"}>
        <Stack>
          <Image
            width="100%" // Ensure image fills the HStack for proper centering
            style={{ objectFit: "cover" }} // Maintain aspect ratio while covering
            src={cardContent.img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            backgroundColor={"#F8F8F8"}
          />
        </Stack>
        <Stack mt="6" spacing="3">
          <Heading size="md">{cardContent.remboelanName}</Heading>
          <Text>{cardContent.remboelanDescription}</Text>
        </Stack>
      </CardBody>
      <CardFooter width="100%" backgroundColor={"#F8F8F8"}>
        <VStack width="100%">
          <Text color="red.600" fontSize="2xl" fontWeight="bold" mb={5}>
            {rupiah(cardContent.remboelanPrice)}
          </Text>
          <Button
            width="100%"
            backgroundColor={"#9736D9"}
            color={"white"}
            onClick={() =>
              addToCart(
                cardContent.remboelanName,
                1,
                cardContent.remboelanPrice,
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
