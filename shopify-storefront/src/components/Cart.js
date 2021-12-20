import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import { CloseIcon } from '@chakra-ui/icons'
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
} from '@chakra-ui/react'

const Cart = () => {
  const [lineItems, setLineItems] = useState([])
  const { isCartOpen, checkout, closeCart, removeLineItem } =
    useContext(ShopContext)
  console.log({ checkout })
  console.log(checkout.webUrl)
  //console.log({ checkout })
  // {lineItems.length === 0
  //   ? 'Your cart is empty'
  //   : lineItems.map((lineItem) => <Text>{lineItem.title}</Text>)}

  return (
    <>
      <Drawer isOpen={isCartOpen} placement='right' onClose={closeCart}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems &&
              checkout.lineItems.map((lineItem) => (
                <Grid
                  templateColumns='repeat(5, 1fr)'
                  gap={1}
                  key={lineItem.id}
                >
                  <Flex alignItems='center' justifyContent='center'>
                    <Button
                      onClick={() => removeLineItem(lineItem.id, checkout.id)}
                      variant='ghost'
                    >
                      <CloseIcon />
                    </Button>
                  </Flex>
                  <Flex alignItems='center' justifyContent='center'>
                    <Image src={lineItem.variant.image.src} />
                  </Flex>
                  <Flex alignItems='center' justifyContent='center'>
                    {lineItem.title}
                  </Flex>
                  <Flex alignItems='center' justifyContent='center'>
                    X {lineItem.quantity}
                  </Flex>
                  <Flex alignItems='center' justifyContent='center'>
                    <Text>{lineItem.variant.price}</Text>
                  </Flex>
                </Grid>
              ))}
          </DrawerBody>

          <DrawerFooter>
            {checkout.webUrl ? (
              <Link href={checkout.webUrl}>
                <Button>Checkout</Button>
              </Link>
            ) : (
              <Button disabled>Checkout</Button>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
