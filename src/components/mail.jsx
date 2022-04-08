import { useState } from 'react';
import {
  Flex,
  Center,
  Stack,
  HStack,
  Heading,
  Divider,
  FormControl,
  Input,
  Textarea,
  Button,
  useMediaQuery,
  chakra,
  useToast,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';

export default function Mail() {
  const [isLargerThan1420] = useMediaQuery('(min-width: 1420px)');
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const toast = useToast();

  const Iframe = chakra('iframe', {
    baseStyle: {
      display: 'block',
      margin: 'auto',
    },
  });

  function handleContactChange(e) {
    const { name, value } = e.target;
    setContact(prevInput => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_portfolio',
        'template_portfolio',
        e.target,
        'tNV-hywQiGXm8a7Wa'
      )
      .then(res => {
        setContact({ name: '', email: '', message: '' });
        toast({
          title: 'Email sended.',
          description: 'Your email has been send succesfully.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        console.log(res);
      })
      .catch(err => {
        toast({
          title: 'Email error.',
          description: "Your email hasn't been send.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        console.log(err);
      });
  }

  return (
    <Center
      minH="100vh"
      bgGradient="linear(to-r, blackAlpha.50, blackAlpha.100, blackAlpha.200)"
    >
      <Flex flexDirection={isLargerThan1420 ? 'row' : 'column'} gap={20}>
        <Center m={{base:"4rem auto 0 auto", lg:"auto",}} maxW="90vw">
          <Stack spacing={4}>
            <Heading color="blackAlpha.700">Contact</Heading>
            <Divider borderColor="blackAlpha.800" />
            <form onSubmit={sendEmail}>
              <HStack>
                <FormControl isRequired>
                  <Input
                    name="name"
                    onChange={handleContactChange}
                    value={contact.name}
                    variant="flushed"
                    placeholder="Name"
                    focusBorderColor="red.500"
                  />
                </FormControl>
                <FormControl isRequired>
                  <Input
                    onChange={handleContactChange}
                    value={contact.email}
                    name="email"
                    variant="flushed"
                    type="email"
                    placeholder="Email"
                    focusBorderColor="red.500"
                  />
                </FormControl>
              </HStack>
              <FormControl isRequired>
                <Textarea
                  name="message"
                  onChange={handleContactChange}
                  value={contact.message}
                  variant="flushed"
                  placeholder="Message"
                  focusBorderColor="red.500"
                  rows="6"
                  resize="none"
                />
              </FormControl>
              <Button
                type="submit"
                color="red.500"
                borderColor="red.500"
                variant="outline"
                size="lg"
                w="100%"
                mt={8}
                _hover={{
                  transform: 'scale(1.1)',
                  transition: 'transform 200ms ease-out',
                }}
                _active={{ bg: 'none', opacity: '0.8' }}
              >
                Submit
              </Button>
            </form>
          </Stack>
        </Center>
        <Iframe
          src="https://www.google.com/maps/d/embed?mid=1FyFXDdL8wJNX-joUEfYq34jfF4vQD7-2&ehbc=2E312F&z=12"
          frameBorder="0"
          boxSize={{ base: '100vw', sm: '90vw', lg: '80vw', xl: '100vh' }}
        ></Iframe>
      </Flex>
    </Center>
  );
}
