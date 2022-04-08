import {
  Stack,
  Heading,
  Text,
  Center,
  Button,
} from '@chakra-ui/react';
import { FaArrowDown } from 'react-icons/fa';
import { backgroundAnimation } from './backgroundAnimation';
import {Link} from 'react-scroll';


export default function Head() {
  return (
    <Center
      minH="100vh"
      bgGradient="linear(to-r, gray.600, gray.700, gray.800)"
      color="gray.50"
      bgSize="400%"
      animation={`${backgroundAnimation} 30s infinite alternate`}
      id="head"
    >
      <Stack align="center" spacing={8}>
        <Heading as="h1" fontSize={{ base: '3xl', xl: '5xl' }}>
          Hi! I'm{' '}
          <Text
            d="inline-block"
            bgGradient="linear(to-l, orange.500, red.500)"
            bgClip="text"
            fontWeight="extrabold"
            p={2}
          >
            Martin Lingeri
          </Text>
        </Heading>
        <Heading as="h2" fontSize={{ base: '2xl', xl: '3xl' }} color="gray.200">
          I'm a Frontend Developer
        </Heading>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          <Button
            rightIcon={<FaArrowDown />}
            color="red.500"
            borderColor="red.500"
            variant="outline"
            size="lg"
            _hover={{
              transform: 'scale(1.1)',
              transition: 'transform 200ms ease-out',
            }}
            _active={{ bg: 'none', opacity: '0.8' }}
          >
            See my projects
          </Button>
        </Link>
      </Stack>
    </Center>
  );
}
