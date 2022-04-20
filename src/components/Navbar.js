import React from 'react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useColorModeValue,
  useColorMode,
  useDisclosure,
  Image,
} from '@chakra-ui/react';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import logoLightMode from '../assets/Logo3.png';

const Links = ['Home', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    fontFamily={'heading'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
      transform: 'translateY(-2px)',
    }}
    href={'/' + children.toLowerCase()}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Image
              src={logoLightMode}
              _hover={{
                transform: 'scale(1.1)',
                cursor: 'pointer',
              }}
              width={100}
            />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              _hover={{
                transform: 'translateY(-2px)',
              }}
              onClick={toggleColorMode}
              size={'sm'}
              mr={4}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button
              variant={'solid'}
              colorScheme={'blue'}
              fontFamily={'heading'}
              color={'white'}
              fontWeight={'normal'}
              _hover={{
                transform: 'translateY(-4px)',
              }}
              size={'sm'}
              mr={4}
              leftIcon={<AiOutlineShoppingCart />}
            >
              Carrito
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
