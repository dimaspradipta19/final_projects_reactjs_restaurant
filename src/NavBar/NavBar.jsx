import { HStack, Image, Input, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeSearchKeyword } from "../Redux/ReduxSlices";
// import { Link } from "@chakra-ui/react";

export default function NavBar() {
  const getSearchKeyword = useSelector((state) => state.pizza.searchKeyword);

  const dispatch = useDispatch();
  return (
    <>
      <HStack px={25} py={25} justifyContent={"space-between"}>
        <Image
          src="src/assets/RichieLogo.png"
          height={"50px"}
          marginRight={"10px"}
        />
        <Input
          placeholder="Search for pizzas!"
          width={"50%"}
          onChange={(e) => dispatch(storeSearchKeyword(e.target.value))}
        >
          {console.log(getSearchKeyword)}
        </Input>

        <HStack>
          <Button colorScheme="orange">
            <ReactRouterLink style={{ color: "black" }} to="/history">
              Order History
            </ReactRouterLink>
          </Button>
          <Image
            src="https://cdn.icon-icons.com/icons2/2807/PNG/512/notification_bell_icon_178938.png"
            height={"24px"}
            marginRight={"10px"}
          />
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Nz4D-zzClf4w18aEET9wAGiNKuq6UNFpjZUmX0Kp-5JRT-HqHOGVkUBWwfbumKHK_z4&usqp=CAU"
            height={"40px"}
            marginRight={"10px"}
          />
          {/* <p>Richie Martin </p> */}
        </HStack>
      </HStack>
    </>
  );
}
