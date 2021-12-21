import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const RichText = ({ heading, description }) => {
  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      mt='1em'
      mb='1em'
    >
      <Heading p='.5em'>{heading && heading} </Heading>
      <Text p='.5em'>{description && description}</Text>
    </Flex>
  )
}

export default RichText
