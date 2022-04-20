import { Center, Container, Text } from '@chakra-ui/react';
import React from 'react';

const Projects = () => {
  return (
    <>
      <Center>
        <Text
          fontSize={'5xl'}
          fontFamily={'body'}
          // textAlign={'center'}
          fontWeight={'400'}
          paddingY={'15'}
          transform
          textTransform={'uppercase'}
        >
          Projects
        </Text>
      </Center>
    </>
  );
};

export default Projects;
