import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react'

const Cart = () => {
  const { isCartOpen, checkout, closeCart, removeLineItem } =
    useContext(ShopContext)

  return (
    <>
      <Drawer isOpen={isCartOpen} placement='right' onClose={closeCart}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>

          <DrawerBody>Your Cart</DrawerBody>

          <DrawerFooter>
            <Button>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
