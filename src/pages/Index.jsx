import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Input, Button, Link, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} as="header">
        <Heading as="h1" size="2xl">
          Venture Capital Firm
        </Heading>
        <Text fontSize="xl">Investing in Tomorrow's Technology Today</Text>
      </VStack>

      <Box as="section" my={10}>
        <Heading as="h2" size="xl" mb={4}>
          Our Portfolio
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          <PortfolioItem title="Startup A" description="A leading AI solutions provider" imageSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" />
          <PortfolioItem title="Startup B" description="Revolutionizing blockchain technology" imageSrc="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" />
          <PortfolioItem title="Startup C" description="Innovative fintech services" imageSrc="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" />
        </SimpleGrid>
      </Box>

      <Box as="section" my={10}>
        <Heading as="h2" size="xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="lg">We are a venture capital firm focused on empowering technology startups with the resources they need to succeed. Our team of experienced investors and entrepreneurs believes in building strong partnerships and providing strategic guidance to our portfolio companies.</Text>
      </Box>

      <Box as="section" my={10}>
        <Heading as="h2" size="xl" mb={4}>
          Contact Us
        </Heading>
        <VStack spacing={3}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Button colorScheme="blue">Send Message</Button>
        </VStack>
      </Box>

      <Box as="footer" py={10}>
        <VStack spacing={3}>
          <Link href="https://www.linkedin.com" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
          <Text>
            <Icon as={FaMapMarkerAlt} /> 123 VC Street, Innovation City
          </Text>
          <Text>
            <Icon as={FaEnvelope} /> contact@vcfirm.com
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

const PortfolioItem = ({ title, description, imageSrc }) => (
  <VStack spacing={3} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
    <Image src={imageSrc} alt={title} boxSize="100%" objectFit="cover" />
    <Heading as="h3" size="md">
      {title}
    </Heading>
    <Text>{description}</Text>
  </VStack>
);

export default Index;
