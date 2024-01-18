import { useSelector } from "react-redux";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  TableContainer,
  Table,
  // TableCaption,
  Button,
  Thead,
  Tbody,
  Tr,
  Th,
  VStack,
  // Td,
} from "@chakra-ui/react";

export default function OrderHistory() {
  const getOrderData = useSelector((state) => state.pizza.orderPlace);

  // Sort the getOrderData array based on orderId in descending order
  const sortedOrderData = getOrderData
    .slice()
    .sort((a, b) => b.orderId - a.orderId);

  return (
    <>
      <VStack spacing={4} align="stretch">
        <Button colorScheme="orange">
          <ReactRouterLink style={{ color: "white" }} to="/">
            Back to menu
          </ReactRouterLink>
        </Button>

        <div>
          {sortedOrderData.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <Accordion allowToggle>
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
                          <Th>Nama Makanan</Th>
                          <Th>Jumlah Pesanan</Th>
                          <Th>Notes</Th>
                          <Th isNumeric>Price</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data.cartData // Create a new array before sorting
                          .map((item) => (
                            <Tr key={item.id}>
                              <Th>{item.pizzaName}</Th>
                              <Th>{item.quantity}</Th>
                              <Th>{item.notes}</Th>
                              <Th isNumeric>{item.price}</Th>
                            </Tr>
                          ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </VStack>
    </>
  );
}
