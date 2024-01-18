import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Heading,
  StackDivider,
  Text,
  Center,
  VStack,
} from "@chakra-ui/react";
import CartItem from "./CartItem";

export default function Cart() {
  const getCartData = useSelector((state) => state.pizza.cartData);
  return (
    <Card ml={4} width="100%" minWidth="16rem" minHeight="10rem">
      <center>
        <CardHeader>
          <Heading size="100%">Cart</Heading>
          {getCartData.length <= 0 ? (
            <div>
              <img
                src="src/assets/NoItemsCart.png"
                style={{ height: 200 }}
              ></img>

              <p>
                Keranjang kamu masih kosong, yuk pilih pizzamu terlebih dahulu
              </p>
            </div>
          ) : (
            <div></div>
          )}
          {/* <div>
            <img src="src/assets/NoItemsCart.png" style={{ height: 200 }}></img>

            <p>
              Keranjang kamu masih kosong, yuk pilih pizzamu terlebih dahulu
            </p>
          </div> */}
          {/* <img src="src/assets/NoItemsCart.png" style={{ height: 200 }}></img>

          <p>Keranjang kamu masih kosong, yuk pilih pizzamu terlebih dahulu</p> */}
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
            // If cart is empty, render empty state message and image
            // <VStack>
            //   <Center>
            //     <img src="src/assets/NoItemsCart.png" style={{ height: 200 }} />
            //     <p>
            //       Keranjang kamu masih kosong, yuk pilih pizzamu terlebih dahulu
            //     </p>
            //   </Center>
            // </VStack>
          )}

          {/* {getCartData.map((item, index) => (
            <CartItem
              key={index}
              itemIndex={index}
              item={item}
              // itemName={item.pizzaName}
              // itemQty={item.quantity}
              // itemPrice={item.price}
              // ItemNotes
            ></CartItem>
          ))} */}
        </Stack>
      </CardBody>
    </Card>
  );
}
