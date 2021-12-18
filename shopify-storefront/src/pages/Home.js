import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
import { Box, Grid, Image, Text } from '@chakra-ui/react'

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])
  console.log(products)
  return (
    <Box>
      <Grid templateColumns='repeat(3, 1fr)'>
        {products.length === 0 ? (
          <div>Loading...</div>
        ) : (
          products.map((product) => (
            <Link key={product.id} to={`/products/${product.handle}`}>
              <Box textAlign='center' _hover={{ opacity: '80%' }}>
                <Image src={product.images[0].src} />
                <Text>{product.title}</Text>
                <Text>${product.variants[0].price}</Text>
              </Box>
            </Link>
          ))
        )}{' '}
      </Grid>
    </Box>
  )
}

export default Home
