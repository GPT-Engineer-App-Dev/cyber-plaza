import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: "$999",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    price: "$199",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$299",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="brand.700" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link to="/">ElectroShop</Link>
        </Heading>
        <Box>
          <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
          <Link to="/products">Products</Link>
        </Box>
      </Flex>
      <VStack spacing={8} mt={8}>
        <Heading as="h2" size="xl">Welcome to ElectroShop</Heading>
        <Text fontSize="lg">Your one-stop shop for the latest electronics</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {sampleProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.imageUrl} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                <Text mb={2}>{product.description}</Text>
                <Text fontWeight="bold">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;