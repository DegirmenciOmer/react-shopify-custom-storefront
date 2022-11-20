import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import ImageWithText from "../components/ImageWithText";
import RichText from "../components/RichText";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);
  return (
    <Box>
      <RichText
        description="Enjoy your Bath Bombs with a fun, relaxing and colorful night."
        heading="The relaxation you have been waiting for."
      />
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}>
        {products?.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box
              _hover={{ opacity: "80%" }}
              textAlign="center"
              position="relative"
              boxShadow="1px 2px 5px black"
              borderRadius="25% 10%"
              m="1.5em"
              mt="1em"
            >
              <Image borderRadius="25% 10%" src={product.images[0].src} />
              <Text fontWeight="bold" position="absolute" bottom="15%" w="100%">
                {product.title}
              </Text>
              <Text color="gray.500" position="absolute" bottom="5%" w="100%">
                ${product.variants[0].price}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <RichText heading="Treat yourself!" />
      <ImageWithText
        button
        text="Lorem ipsum dolor sit amet"
        heading="Lorem ipsum"
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
      />
      <ImageWithText
        button
        text="Lorem ipsum dolor sit amet"
        reverse
        heading="Lorem ipsum"
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
      />
    </Box>
  );
};

export default Home;
