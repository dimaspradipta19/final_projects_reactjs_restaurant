import { useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Heading,
  StackDivider,
} from "@chakra-ui/react";
import CartItem from "./CartItem";
import IMAGE from "../../assets/bag.png";

export default function Cart() {
  const getCartData = useSelector((state) => state.pizza.cartData);
  const imageSource = IMAGE;
  return (
    <Card ml={4} width="100%" minWidth="16rem" minHeight="10rem">
      <center>
        <CardHeader>
          <Heading size="100%" marginBottom="24px">
            Cart
          </Heading>
          {getCartData.length <= 0 ? (
            <div>
              <img
                src={imageSource}
                style={{ height: 180, marginBottom: "24px" }}
              ></img>

              <p>
                Keranjang anda masih kosong, yuk pilih menu remboelannya terlebih dahulu
              </p>
            </div>
          ) : (
            <div></div>
          )}
        </CardHeader>
      </center>
      <CardBody maxWidth="25rem" minWidth="25rem">
        <Stack divider={<StackDivider />} spacing="4">
          {getCartData.length > 0 ? (
            // If cart is not empty, render CartItem components
            getCartData.map((item, index) => (
              <CartItem key={index} itemIndex={index} item={item}></CartItem>
            ))
          ) : (
            <div></div>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
}
//xyz
