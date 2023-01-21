import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
import { Box, Grid, Image, Text } from '@chakra-ui/react'
import ImageWithText from '../components/ImageWithText'
import RichText from '../components/RichText'

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])
  return (
    <Box>
      <RichText
        description='Enjoy your Bath Bombs with a fun, relaxing and colorful night.'
        heading='The relaxation you have been waiting for.'
      />
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}>
        {products?.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box
              _hover={{ opacity: '80%' }}
              textAlign='center'
              position='relative'
              boxShadow='1px 2px 5px black'
              borderRadius='25% 10%'
              m='1.5em'
              mt='1em'
            >
              <Image borderRadius='25% 10%' src={product.images[0].src} />
              <Text fontWeight='bold' position='absolute' bottom='15%' w='100%'>
                {product.title}
              </Text>
              <Text color='gray.500' position='absolute' bottom='5%' w='100%'>
                ${product.variants[0].price}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <RichText heading='Treat yourself!' />
      <ImageWithText
        button
        text='Indulge in a luxurious spa experience with the invigorating scent of green tea and the soothing properties of eucalyptus. Our bath bomb is made with all natural ingredients and is perfect for unwinding after a long day. Not only will it leave your skin feeling soft and moisturized, but the essential oils used in the bomb will help to clear your mind and leave you feeling refreshed and rejuvenated. Perfect for a relaxing soak in the tub or for a fun night in with friends. Try the Green Blast Bath Bomb today and treat yourself to a little bit of luxury.'
        heading='Luxurious spa experience'
        image='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758'
      />
      <ImageWithText
        button
        text='Made with all natural ingredients, this bath bomb will transport you to a state of ultimate relaxation. The green blast scent will invigorate your senses and leave your skin feeling refreshed and rejuvenated. Perfect for winding down after a long day, the Green Blast Bath Bomb is the ultimate in self-care. So why not treat yourself to the ultimate bath experience? Order your Green Blast Bath Bomb today!'
        reverse
        heading='Perfect for winding down after a long day'
        image='/bathbombs1.jpg'
      />
    </Box>
  )
}

export default Home
