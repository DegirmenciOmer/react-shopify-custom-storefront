import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import { MdMenu, MdShoppingBasket } from 'react-icons/md'

const Navbar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext)
  return (
    <Flex
      backgroundColor='#ffa8e2'
      p='2rem'
      flexDir='row'
      justifyContent='space-between'
    >
      <Icon cursor='pointer' fill='#fff' w={30} h={30} as={MdMenu} />
      <Image
        src='https://cdn.shopify.com/s/files/1/0472/5705/9406/files/Logologo_1.svg?v=1610055540'
        w={100}
        h={100}
      />
      <Icon
        onClick={() => openCart()}
        cursor='pointer'
        fill='#fff'
        w={30}
        h={30}
        as={MdShoppingBasket}
      />
    </Flex>
  )
}

export default Navbar
