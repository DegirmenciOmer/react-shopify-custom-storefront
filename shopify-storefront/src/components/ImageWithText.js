import React from 'react'
import {
  Box,
  Flex,
  Button,
  Text,
  Image,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react'

const ImageWithText = ({ button, text, reverse, image, heading }) => {
  const isSmallScreen = useMediaQuery('(max-width: 480px)')

  return (
    <Box>
      <Flex
        w='100%'
        flexDir={[
          'column',
          isSmallScreen[0] ? 'column' : reverse ? 'row-reverse' : 'row',
        ]}
      >
        <Image objectFit='cover' w={['100%', '50%']} src={image} />
        <Flex
          justifyContent='center'
          alignItems='center'
          flexDir='column'
          w={['100%', '50%']}
          m='4'
        >
          <Heading>{heading && heading}</Heading>
          <Text my='10'>{text && text}</Text>
          {button ? (
            <Button
              w='10rem'
              backgroundColor='#FF38BD'
              color='white'
              _hover={{ opacity: '70%' }}
            >
              Buy Now
            </Button>
          ) : null}
        </Flex>
      </Flex>
    </Box>
  )
}

export default ImageWithText
