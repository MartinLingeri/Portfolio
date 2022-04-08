import {
  Center,
  Box,
  Wrap,
  WrapItem,
  Image,
  Heading,
  Text,
  Stack,
  Divider,
  Grid,
  GridItem,
  chakra,
} from '@chakra-ui/react';
import Yo from '../images/Yo.jpeg';

export default function About() {
  const Svg = chakra('svg', {
    baseStyle: {
      display: 'block',
      margin: 'auto',
      width: '4rem',
    },
  });

  return (
    <Center
      minH="100vh"
      bgGradient="linear(to-r, blackAlpha.50, blackAlpha.100, blackAlpha.200)"
    >
      <Box marginBlock={16}>
        <Wrap justify="center" spacing={8} maxW="90vw">
          <WrapItem>
            <Stack align="center" spacing={8}>
              <Image
                borderRadius="md"
                boxSize="200px"
                boxShadow="0 2px 10px 2px #E53E3E"
                src={Yo}
                alt="Martin Lingeri"
              ></Image>
              <Text
                textAlign="center"
                color="blackAlpha.700"
                fontWeight="bold"
                fontSize="lg"
                maxW="50ch"
              >
                I'm a information systems engineer student at UTN in Buenos
                Aires, Argentina. I'm a frontend developer. I'm curious,
                ambitious, assiduous, patient, meticulous, organized and i love
                learning new things.
              </Text>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack align="center">
              <Heading color="blackAlpha.700">Languages and Techs</Heading>
              <Divider borderColor="blackAlpha.800" maxW="80%" />
              <Grid
                textAlign="center"
                templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }}
                gap={6}
                fontSize="xl"
              >
                <GridItem>
                  HTML
                  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
                    <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
                    <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                    <path
                      fill="#ecedee"
                      d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
                    />
                    <path
                      fill="#fff"
                      d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
                    />
                  </Svg>
                </GridItem>
                <GridItem>
                  CSS
                  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
                    <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
                    <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
                    <path
                      fill="#ecedee"
                      d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"
                    />
                    <path
                      fill="#fff"
                      d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
                    />
                  </Svg>
                </GridItem>
                <GridItem>
                  JAVASCRIPT
                  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
                    <rect width="630" height="630" fill="#f7df1e" />
                    <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
                  </Svg>
                </GridItem>
                <GridItem>
                  REACT
                  <Svg
                    width="5rem"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-11.5 -10.23174 23 20.46348"
                  >
                    <title>React Logo</title>
                    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                    <g stroke="#61dafb" strokeWidth="1" fill="none">
                      <ellipse rx="11" ry="4.2" />
                      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                  </Svg>
                </GridItem>
                <GridItem>
                  BOOTSTRAP
                  <Svg
                    width="5rem"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 520 400"
                  >
                    <defs>
                      <linearGradient
                        id="bs-logo-a"
                        x1="76.079"
                        x2="523.48"
                        y1="10.798"
                        y2="365.945"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9013fe" />
                        <stop offset="1" stopColor="#6610f2" />
                      </linearGradient>
                      <linearGradient
                        id="bs-logo-b"
                        x1="193.508"
                        x2="293.514"
                        y1="109.74"
                        y2="278.872"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset="1" stopColor="#f1e5fc" />
                      </linearGradient>
                      <filter
                        xmlns="http://www.w3.org/2000/svg"
                        id="bs-logo-c"
                        width="197"
                        height="249"
                        x="161.901"
                        y="83.457"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="8" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                      </filter>
                    </defs>
                    <path
                      fill="url(#bs-logo-a)"
                      d="M56.481 53.32C55.515 25.58 77.128 0 106.342 0h299.353c29.214 0 50.827 25.58 49.861 53.32-.928 26.647.277 61.165 8.964 89.31 8.715 28.232 23.411 46.077 47.48 48.37v26c-24.069 2.293-38.765 20.138-47.48 48.37-8.687 28.145-9.892 62.663-8.964 89.311.966 27.739-20.647 53.319-49.861 53.319H106.342c-29.214 0-50.827-25.58-49.86-53.319.927-26.648-.278-61.166-8.966-89.311C38.802 237.138 24.07 219.293 0 217v-26c24.069-2.293 38.802-20.138 47.516-48.37 8.688-28.145 9.893-62.663 8.965-89.31z"
                    />
                    <path
                      fill="url(#bs-logo-b)"
                      filter="url(#bs-logo-c)"
                      stroke="#fff"
                      d="M267.103 312.457c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217h89.202zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67v-64.814zm0 161.961v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941h-47.605z"
                    />
                  </Svg>
                </GridItem>
                <GridItem>
                  CHAKRA UI
                  <Svg
                    width="4rem"
                    height="4rem"
                    viewBox="0 0 582 582"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="582"
                      height="582"
                      rx="291"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      d="M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="291"
                        y1="0"
                        x2="291"
                        y2="582"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#7BCBD4" />
                        <stop offset="1" stopColor="#29C6B7" />
                      </linearGradient>
                    </defs>
                  </Svg>
                </GridItem>
              </Grid>
            </Stack>
          </WrapItem>
        </Wrap>
      </Box>
    </Center>
  );
}
