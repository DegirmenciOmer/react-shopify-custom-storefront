import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Box, Button, Grid, Heading, Image, Text } from '@chakra-ui/react'

const ProductPages = () => {
  const { handle } = useParams()

  const { fetchProductWithHandle, addItemToCheckout, product } =
    useContext(ShopContext)

  useEffect(() => {
    fetchProductWithHandle(handle)
  }, [fetchProductWithHandle, handle])

  return (
    <Box>
      {!product.title ? (
        <Text>Loading</Text>
      ) : (
        <Grid templateColumns='repeat(2,1fr)'>
          <Image src={product.images[0].src} />
          <Box>
            <Heading>{product.title}</Heading>
            <Text>€{product.variants[0].price}</Text>
            <Text>{product.description}</Text>
            <Button
              onClick={() => addItemToCheckout(product.variants[0].id, 1)}
            >
              Add To Cart
            </Button>
          </Box>
        </Grid>
      )}
    </Box>
  )
}

export default ProductPages
