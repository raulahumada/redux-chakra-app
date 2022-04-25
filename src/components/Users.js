import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  Center,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Avatar,
  Heading,
  Button,
  Grid,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react';

import { getAllUsers } from '../store/slices/users';

const Users = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  let colorFollow = useColorModeValue('blue.100', 'blue.400');
  let colorLetters = useColorModeValue('black', 'white');
  return (
    <div>
      <Flex
        direction="column"
        justifyContent="center"
        maxW={{ xl: '1920px' }}
        m="0 auto"
        minH="100vh"
      >
        <Grid
          w="full"
          gridGap="4"
          templateRows="repeat(6, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
          gap={4}
        >
          {list.map((user, index) => (
            <Center>
              <GridItem colSpan={1}>
                <div key={index}>
                  <Center py={6}>
                    <Box boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
                      <Image
                        h={'120px'}
                        w={'full'}
                        src={
                          'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                        }
                        objectFit={'cover'}
                      />
                      <Flex justify={'center'} mt={-12}>
                        <Avatar
                          size={'xl'}
                          src={user.avatar}
                          alt={'Author'}
                          css={{
                            border: '2px solid white',
                          }}
                        />
                      </Flex>

                      <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                          <Heading
                            fontSize={'2xl'}
                            fontWeight={'bold'}
                            fontFamily={'body'}
                          >
                            {user.first_name} {user.last_name}
                          </Heading>
                          <Text color={'gray.500'}>Frontend Developer</Text>
                        </Stack>

                        <Stack direction={'row'} justify={'center'} spacing={6}>
                          <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>23k</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                              Followers
                            </Text>
                          </Stack>
                          <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>23k</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                              Following
                            </Text>
                          </Stack>
                        </Stack>

                        <Button
                          w={'full'}
                          mt={8}
                          color={colorLetters}
                          bg={colorFollow}
                          rounded={'md'}
                          _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                          }}
                        >
                          Follow
                        </Button>
                      </Box>
                    </Box>
                  </Center>
                </div>
              </GridItem>
            </Center>
          ))}
        </Grid>
      </Flex>
    </div>
  );
};

export default Users;
