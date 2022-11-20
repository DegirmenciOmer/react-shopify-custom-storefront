import { Badge, Box, Flex, Icon, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { MdMenu, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
//src={`${process.env.PUBLIC_URL}/images/cig_kofte.jpeg`}

const Navbar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);
  return (
    <Flex
      backgroundColor="#ffa8e2"
      p="2rem"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Icon
        onClick={() => openMenu()}
        cursor="pointer"
        fill="#fff"
        w={30}
        h={30}
        as={MdMenu}
      />

      <Link to={"/"}>
        <Image
          src={
            "https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
          }
          w={100}
          h={100}
        />
      </Link>
      <Box>
        <Icon
          onClick={() => openCart()}
          cursor="pointer"
          fill="#fff"
          w={30}
          h={30}
          as={MdShoppingBasket}
        />
        <Badge
          style={{
            position: "relative",
            top: "-15px",
          }}
          borderRadius="50%"
          backgroundColor="#ff38bd"
        >
          {checkout?.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default Navbar;
