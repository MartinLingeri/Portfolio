import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import 'focus-visible/dist/focus-visible';

import Head from './components/head';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';
import Mail from './components/mail';
import StickyButton from './components/stickyButton';

import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Head />
      <StickyButton />
      <About />
      <Projects />
      <Mail />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
