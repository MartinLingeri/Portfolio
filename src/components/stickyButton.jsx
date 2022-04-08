import { useState } from 'react';
import { IconButton, useMediaQuery } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function StickyButton() {
  const [visible, setVisible] = useState(false);

  const [isLargerThan700] = useMediaQuery('(min-width:700px)');

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  }

  window.addEventListener('scroll', toggleVisible);

  return (
    <Link to="head" spy={true} smooth={true} duration={500}>
      <IconButton
        icon={<FaArrowUp />}
        zIndex="9999"
        p="auto"
        d={visible ? 'absolute' : 'none'}
        position="fixed"
        top="90vh"
        left={isLargerThan700?"90vw":"80vw"}
        color="red.500"
        borderColor="red.500"
        variant="outline"
        size="lg"
        _hover={{
          transform: 'scale(1.1)',
          transition: 'transform 200ms ease-out',
        }}
        _active={{ bg: 'none', opacity: '0.8' }}
      />
    </Link>
  );
}
