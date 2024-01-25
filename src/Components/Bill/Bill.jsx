import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { rupiah } from "../../utils/currencyConvert";
import { storeOrderPlace } from "../../Data/Redux/ReduxSlices";
import {
  Table,
  Button,
  Tr,
  Td,
  VStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function Bill() {
  const dispatch = useDispatch();
  const getCartData = useSelector((state) => state.pizza.cartData);
  const price = getCartData.reduce((acc, pizza) => {
    const itemTotalPrice = pizza.price * pizza.quantity;
    return acc + itemTotalPrice;
  }, 0);

  const ppn = (price * 10) / 100;
  const service = (price * 5) / 100;
  const totalPrice = price + ppn + service;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return getCartData.length !== 0 ? (
    <VStack ml={4}>
      <Table variant={"unstyled"} size={"sm"}>
        <Tr>
          <Td>Price</Td>
          <Td>:</Td>
          <Td>{rupiah(price)}</Td>
        </Tr>
        <Tr>
          <Td>PPN</Td>
          <Td>:</Td>
          <Td>{rupiah((price * 10) / 100)}</Td>
        </Tr>
        <Tr>
          <Td>Service Charge</Td>
          <Td>:</Td>
          <Td>{rupiah((price * 5) / 100)}</Td>
        </Tr>
        <Tr>
          <Td>
            <b>Total Price</b>
          </Td>
          <Td>:</Td>
          <Td>
            {" "}
            <b>{rupiah(totalPrice)}</b>
          </Td>
        </Tr>
      </Table>
      <Button colorScheme="green" width="100%" mt={4} onClick={onOpen}>
        Place order
      </Button>
      <AlertDialog
        motionPreset="scale"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Please confirm your purchase</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>Are you sure to order?</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} colorScheme="red">
              No
            </Button>
            <Button
              colorScheme="green"
              ml={3}
              onClick={() => {
                dispatch(
                  storeOrderPlace({
                    cartData: [...getCartData],
                    ppn: ppn,
                    service: service,
                    totalPrice: totalPrice,
                  })
                );
              }}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </VStack>
  ) : (
    ""
  );
}
