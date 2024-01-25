import { Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  VStack,
  Box,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import IMAGE from "../../assets/NoResults.png";
import { rupiah } from "../../utils/currencyConvert";

export default function OrderHistory() {
  const getOrderData = useSelector((state) => state.pizza.orderPlace);
  const imageSource = IMAGE;

  const sortedOrderData = getOrderData
    .slice()
    .sort((a, b) => b.orderId - a.orderId);

  return (
    <>
      <VStack spacing={4} align="center">
        <Button
          leftIcon={<ArrowBackIcon />}
          alignSelf={"flex-start"}
          backgroundColor={"#9736D9"}
          color={"white"}
        >
          <ReactRouterLink style={{ color: "white" }} to="/">
            Back to menu
          </ReactRouterLink>
        </Button>

        {getOrderData.length <= 0 ? (
          <VStack h="full" justifyContent={"center"} height="100%">
            <img src={imageSource} style={{ height: 200 }}></img>

            <Text color="gray.400" width="325px">
              Tidak ada history tersedia, yuk belanja dulu
            </Text>
          </VStack>
        ) : (
          sortedOrderData.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <Accordion allowToggle width="full">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Order Number #ID{data["orderId"]}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <TableContainer>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th minW="250px">Nama Makanan</Th>
                          <Th maxW="">Jumlah Pesanan</Th>
                          <Th>Notes</Th>
                          <Th isNumeric>Price</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data.cartData // Create a new array before sorting
                          .map((item) => (
                            <Tr key={item.id}>
                              <Td>{item.remboelanName}</Td>
                              <Td>{item.quantity}</Td>
                              <Td>{item.notes}</Td>
                              <Td isNumeric>{`${rupiah(
                                item.price * item.quantity
                              )}`}</Td>
                            </Tr>
                          ))}
                        <Tr>
                          <Th></Th>
                          <Th></Th>
                          <Th>PPN</Th>
                          <Td textAlign="right">{rupiah(data.ppn)}</Td>
                        </Tr>
                        <Tr>
                          <Th></Th>
                          <Th></Th>
                          <Th>Service</Th>
                          <Td textAlign="right">{rupiah(data.service)}</Td>
                        </Tr>
                        <Tr>
                          <Th></Th>
                          <Th></Th>
                          <Th>Total Price</Th>
                          <Th textAlign="right" fontSize={18}>
                            {rupiah(data.totalPrice)}
                          </Th>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))
        )}
      </VStack>
    </>
  );
}
