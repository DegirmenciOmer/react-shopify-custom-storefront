import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from '@chakra-ui/react'

const NavMenu = () => {
  const { closeMenu, isMenuOpen } = useContext(ShopContext)

  return (
    <Drawer isOpen={isMenuOpen} placement='left' onClose={closeMenu}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack>
              <Link to='/about'>About</Link>
              <Link to='/more'>Learn More</Link>
              <Link to='/contact'>Contact</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default NavMenu
