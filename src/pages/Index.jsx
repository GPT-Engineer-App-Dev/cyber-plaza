import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, VStack, Input, Select, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: 699,
    imageUrl: "https://via.placeholder.com/150",
    category: "Electronics",
    brand: "BrandA",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: 999,
    imageUrl: "https://via.placeholder.com/150",
    category: "Electronics",
    brand: "BrandB",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    price: 199,
    imageUrl: "https://via.placeholder.com/150",
    category: "Accessories",
    brand: "BrandA",
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: 299,
    imageUrl: "https://via.placeholder.com/150",
    category: "Accessories",
    brand: "BrandC",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleBrandChange = (value) => {
    setSelectedBrands(value);
  };

  const handlePriceRangeChange = (event) => {
    const [min, max] = event.target.value.split("-");
    setPriceRange([parseInt(min), parseInt(max)]);
  };

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesBrand = selectedBrands.length > 0 ? selectedBrands.includes(product.brand) : true;
    const matchesPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];

    return matchesSearchQuery && matchesCategory && matchesBrand && matchesPriceRange;
  });

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
        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          mb={4}
        />
        <Flex width="100%" justifyContent="space-between" mb={4}>
          <Select placeholder="Select category" onChange={handleCategoryChange} width="30%">
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
          </Select>
          <CheckboxGroup colorScheme="green" onChange={handleBrandChange}>
            <Stack spacing={5} direction="row">
              <Checkbox value="BrandA">BrandA</Checkbox>
              <Checkbox value="BrandB">BrandB</Checkbox>
              <Checkbox value="BrandC">BrandC</Checkbox>
            </Stack>
          </CheckboxGroup>
          <Select placeholder="Select price range" onChange={handlePriceRangeChange} width="30%">
            <option value="0-200">$0 - $200</option>
            <option value="200-500">$200 - $500</option>
            <option value="500-1000">$500 - $1000</option>
          </Select>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.imageUrl} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                <Text mb={2}>{product.description}</Text>
                <Text fontWeight="bold">${product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;