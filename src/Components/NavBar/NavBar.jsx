import { HStack, Image, Input, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {useSelector} from "react-redux";
import { storeSearchKeyword } from "../../Data/Redux/ReduxSlices";
import IMAGE2 from "../../assets/avatar.png";
import IMAGE1 from "../../assets/logo.png";

export default function NavBar() {
  const dispatch = useDispatch();
  const imgSource1 = IMAGE1;
  const imgSource2 = IMAGE2;
  return (
    <>
      <HStack px={25} py={2} justifyContent={"space-between"}>
        <Image src={imgSource1} height={"70px"} marginRight={"10px"} />
        <Input
          placeholder="Search for your favorite TG-Pizza!"
          width={"50%"}
          onChange={(e) => dispatch(storeSearchKeyword(e.target.value))}
        ></Input>

        <HStack>
          <Button colorScheme="orange">
            <ReactRouterLink style={{ color: "white" }} to="/history">
              Order History
            </ReactRouterLink>
          </Button>
          <Image
            src="https://cdn.icon-icons.com/icons2/881/PNG/512/Paprika_icon-icons.com_68715.png"
            height={"36px"}
            marginRight={"10px"}
          />
          <Image src={imgSource2} height={"40px"} marginRight={"10px"} />
          <p>Halo! Dimas Pradipta</p>
        </HStack>
      </HStack>
    </>
  );
}
