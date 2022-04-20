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
import React, { useEffect } from 'react';

import { getAllUsers } from '../store/slices/users';
import { useDispatch, useSelector } from 'react-redux';

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
      <Grid
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        {list.map((user, index) => (
          <GridItem colSpan={1}>
            <div key={index}>
              <Center py={6}>
                <Box
                  maxW={'270px'}
                  w={'full'}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  overflow={'hidden'}
                >
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
                        fontWeight={500}
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
                          Followers
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
        ))}
      </Grid>
    </div>
  );
};

export default Users;
