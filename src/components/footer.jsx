import { Center, HStack, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { backgroundAnimation } from './backgroundAnimation';

export default function Footer() {
  return (
    <Center
      minH="20vh"
      bgGradient="linear(to-r, gray.600, gray.700, gray.800)"
      color="gray.50"
      bgSize="400%"
      animation={`${backgroundAnimation} 30s infinite alternate`}
    >
      <HStack spacing={4}>
        <Link href="https://github.com/MartinLingeri" isExternal>
          <Icon as={FaGithub} boxSize={16} />
        </Link>
        <Link href="https://ar.linkedin.com/in/martin-lingeri" isExternal>
          <Icon as={FaLinkedin} boxSize={16} />
        </Link>
      </HStack>
    </Center>
  );
}
