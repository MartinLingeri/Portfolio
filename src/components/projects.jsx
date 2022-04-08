import { useState, useEffect } from 'react';
import {
  Center,
  Heading,
  Divider,
  Wrap,
  WrapItem,
  Stack,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import { backgroundAnimation } from './backgroundAnimation';
import Papa from 'papaparse';


export default function Projects() {
  const [projects, setProjects] = useState([]);
  const linkBoxColors = [
    'pink.500',
    'pink.700',
    'purple.500',
    'purple.700',
    'blue.500',
    'blue.700',
    'green.600',
    'teal.500',
    'teal.700',
    'red.500',
    'red.700',
    'orange.500',
    'orange.700',
    'yellow.500',
  ];

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    await Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4-a5igove-BAlz5nxdnI9-aCpnK2Vxi2BVTok0_jzcExFZ0zI72p-aZoWijm4PYeDiN9TuKiKyn4H/pub?output=csv',
      {
        download: true,
        header: true,
        complete: results => {
          setProjects(results.data);
        },
      }
    );
  }

  return (
    <Center
      minH="100vh"
      bgGradient="linear(to-l,  gray.500, gray.600, gray.700)"
      color="gray.50"
      bgSize="400%"
      animation={`${backgroundAnimation} 30s infinite alternate`}
      id="projects"
      alignItems="start"
    >
      <Stack marginBlock={16} spacing={8}>
        <Heading>Projects</Heading>
        <Divider borderColor="gray.50" />
        <Wrap justify="center" spacing={4} maxW="90vw">
          {projects.map((project, index) => (
            <WrapItem key={index}>
              <LinkBox
                as="article"
                w={{ base: 'xs', lg: 'sm' }}
                minH="8rem"
                p="5"
                borderWidth="1px"
                rounded="md"
                _hover={{ opacity: '0.8' }}
                bgColor={
                  linkBoxColors[
                    Math.floor(Math.random() * linkBoxColors.length)
                  ]
                }
              >
                <LinkOverlay href={`${project.link}`} isExternal>
                  <Heading>{project.nombre}</Heading>
                  <Text>{project.descripcion}</Text>
                </LinkOverlay>
              </LinkBox>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>
    </Center>
  );
}
