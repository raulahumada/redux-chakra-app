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
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
  Icon,
} from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { BsCheckCircleFill } from 'react-icons/bs';
import logoLightMode from '../assets/Logo3.png';
import { isMobile } from 'react-device-detect';

const Links = ['Home', 'Projects', 'Team', 'Products'];

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
  console.log(isMobile);

  <HStack spacing={3} as="nav">
    <RouteLink to="/">
      <NavLink text="Home" />
    </RouteLink>
    <RouteLink to="/about">
      <NavLink text="About" />
    </RouteLink>
  </HStack>;
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} width="100%" px={4}>
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
            {isMobile === false ? (
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
            ) : (
              <Button
                size={'sm'}
                mr={4}
                variant={'solid'}
                colorScheme={'blue'}
                color="white"
                fontFamily={'heading'}
                fontWeight={'normal'}
              >
                <AiOutlineShoppingCart />
              </Button>
            )}
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src="https://lh3.googleusercontent.com/a-/AOh14GhEXxAVkjYef_-6fFehU88Qghhd_zEU4APgrDX3=s96-c"
                />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'2xl'}
                    src="https://lh3.googleusercontent.com/a-/AOh14GhEXxAVkjYef_-6fFehU88Qghhd_zEU4APgrDX3=s96-c"
                  />
                </Center>
                <br />
                <Center margin={2}>
                  rahumada00
                  <Icon
                    marginLeft={2}
                    as={BsCheckCircleFill}
                    color="blue.300"
                  />
                </Center>
                <Center margin={2}>
                  <p>rahumada@gmail.com</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>
                  <Center alignContent="center">
                    Logout
                    <Icon marginLeft={150} as={BiLogOut} />{' '}
                  </Center>
                </MenuItem>
              </MenuList>
            </Menu>
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
