import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'

const ProductPages = () => {
  const { handle } = useParams()

  const { fetchProductWithHandle, addItemToCheckout, product } =
    useContext(ShopContext)

  useEffect(() => {
    fetchProductWithHandle(handle)
  }, [fetchProductWithHandle, handle])

  return (
    <Box p='2em'>
      {!product.title ? (
        <Text>Loading</Text>
      ) : (
        <Grid m='auto' templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}>
          <Flex justifyContent='center' alignItems='center'>
            <Image src={product.images[0].src} />
          </Flex>
          <Flex
            pl='2em'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <Heading pb='2rem'>{product.title}</Heading>
            <Text pb='2rem'>€{product.variants[0].price}</Text>
            <Text pb='2rem'>{product.description}</Text>
            <Button
              colorScheme='pink'
              onClick={() => addItemToCheckout(product.variants[0].id, 1)}
            >
              Add To Cart
            </Button>
          </Flex>
        </Grid>
      )}
    </Box>
  )
}

export default ProductPages
