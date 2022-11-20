import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Grid,
  Flex,
  Image,
  Link,
} from "@chakra-ui/react";

const Cart = () => {
  const { isCartOpen, checkout, closeCart, removeLineItem } =
    useContext(ShopContext);

  return (
    <>
      <Drawer
        size="sm"
        isOpen={isCartOpen}
        placement="right"
        onClose={closeCart}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout?.lineItems?.length > 0 ? (
              checkout.lineItems.map((lineItem) => (
                <Grid
                  templateColumns="repeat(5, 1fr)"
                  gap={1}
                  key={lineItem.id}
                >
                  <Flex alignItems="center" justifyContent="center">
                    <Button
                      onClick={() => removeLineItem(lineItem.id, checkout.id)}
                      variant="ghost"
                    >
                      <CloseIcon />
                    </Button>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Image src={lineItem.variant.image.src} />
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    {lineItem.title}
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    X {lineItem.quantity}
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Text>{lineItem.variant.price}</Text>
                  </Flex>
                </Grid>
              ))
            ) : (
              <Flex h="100%" justifyContent="center" alignItems="center">
                <Text color="red">Your cart is empty.</Text>
              </Flex>
            )}
          </DrawerBody>

          <DrawerFooter>
            {checkout?.webUrl ? (
              <Link href={checkout?.webUrl}>
                <Button disabled={checkout?.lineItems.length === 0}>
                  Checkout
                </Button>
              </Link>
            ) : (
              <Button disabled>Checkout</Button>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
