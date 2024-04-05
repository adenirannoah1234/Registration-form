import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Text,
  FormLabel,
  FormControl,
  Checkbox,
  VStack,
  InputGroup,
  InputRightElement,
  Icon,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import useFormValidation from '../../hooks/useFormValidation';
import usePasswordToggle from '../../hooks/usePasswordToggle';

const SignUp = () => {
  const { showPassword, togglePasswordVisibility } = usePasswordToggle();

  // destructuring the custom hooks
  const { values, handleChange, errors, validateForm } = useFormValidation({
    firstName: '',
    lastName: '',
    email: '',
    fullName: '',
    password: '',
    whatsAppNumber: '',
  });

  // validation
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
    } else {
      console.log('Validation errors:', errors);
    }
  };

  return (
    <VStack h={'100%'} justify={'center'} bg="#E6DCF1" py="2rem">
      <Box pos="relative" w="11.154rem" h="2.32rem">
        <Text as="h1" fontSize="2rem" color="#6e30b0">
          RICHFORTH
        </Text>
      </Box>
      <Center mt="10">
        <Box
          w={['100%', '27.25rem']}
          p={'2rem'}
          borderWidth={1}
          borderRadius={8}
          h="49rem"
          bg="white"
        >
          <VStack gap={'1.5rem'} justify={'center'} h="100%">
            <Heading as="h1" size="lg" textAlign="center" fontSize="20px">
              Create an Account
            </Heading>
            {/* form */}
            <VStack as={'form'} onSubmit={handleSubmit} w="100%" gap="1rem">
              <FormControl
                id="firstName"
                isInvalid={!!errors.firstName}
                w="100%"
              >
                {/* first name */}
                <FormLabel w="100%" fontSize="14px">
                  First Name
                </FormLabel>
                <Input
                  type="name"
                  placeholder="Enter your First Name"
                  _focus={{ borderColor: '#6e30b0' }}
                  border={'1px solid lightgrey'}
                  focusBorderColor="transparent"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  py="1.5rem"
                  px="1rem"
                  w="100%"
                  sx={{
                    '::placeholder': {
                      fontSize: '14px',
                      color: '#a89f98',
                    },
                  }}
                />
                <Text color="red.500" style={{ fontSize: '10px' }}>
                  {errors.firstName}
                </Text>
              </FormControl>

              {/* last name */}
              <FormControl id="lastName" isInvalid={!!errors.lastName} w="100%">
                <FormLabel w="100%" fontSize="14px">
                  Last Name
                </FormLabel>
                <Input
                  type="name"
                  placeholder="Enter your Last Name"
                  _focus={{ borderColor: '#6e30b0' }}
                  border={'1px solid lightgrey'}
                  focusBorderColor="transparent"
                  value={values.lastName}
                  onChange={handleChange}
                  name="lastName"
                  py="1.5rem"
                  px="1rem"
                  w="100%"
                  sx={{
                    '::placeholder': {
                      fontSize: '14px',
                      color: '#a89f98',
                    },
                  }}
                />
                <Text color="red.500" style={{ fontSize: '10px' }}>
                  {errors.lastName}
                </Text>
              </FormControl>

              {/* email */}
              <FormControl id="email" isInvalid={!!errors.email} w="100%">
                <FormLabel w="100%" fontSize="14px">
                  Email Address
                </FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your Email Address"
                  _focus={{ borderColor: '#6e30b0' }}
                  border={'1px solid lightgrey'}
                  focusBorderColor="transparent"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  py="1.5rem"
                  px="1rem"
                  w="100%"
                  sx={{
                    '::placeholder': {
                      fontSize: '14px',
                      color: '#a89f98',
                    },
                  }}
                />
                <Text color="red.500" style={{ fontSize: '10px' }}>
                  {errors.email}
                </Text>
              </FormControl>

              {/* whatsapp number */}
              <FormControl
                id="whatsAppNumber"
                isInvalid={!!errors.whatsAppNumber}
                w="100%"
              >
                <FormLabel w="100%" fontSize="14px">
                  Whatsapp Number
                </FormLabel>
                <Input
                  type="number"
                  placeholder="Enter your Whatsapp Number"
                  _focus={{ borderColor: '#6e30b0' }}
                  border={'1px solid lightgrey'}
                  focusBorderColor="transparent"
                  name="whatsAppNumber"
                  value={values.whatsAppNumber}
                  onChange={handleChange}
                  py="1.5rem"
                  px="1rem"
                  w="100%"
                  sx={{
                    '::placeholder': {
                      fontSize: '14px',
                      color: '#a89f98',
                    },
                  }}
                />
                <Text color="red.500" style={{ fontSize: '10px' }}>
                  {errors.whatsAppNumber}
                </Text>
              </FormControl>

              {/* password */}
              <FormControl id="password">
                <FormLabel fontSize="14px">Password</FormLabel>

                <InputGroup
                  width="100%"
                  height="3rem"
                  borderRadius="0.3rem"
                  paddingRight="0.6rem"
                  paddingLeft="0.6rem"
                  border={`${
                    !!errors.password ? '2px solid red' : '1px solid lightgrey'
                  }`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  _groupFocus={{
                    border: '1px solid #6e30b0',
                    outline: '1px solid #6e30b0',
                  }}
                >
                  <Input
                    w="100%"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter password"
                    border="none"
                    outline="none"
                    paddingRight="2.3rem"
                    _focus={{
                      outline: 'none',
                      border: 'none',
                    }}
                    _hover={{
                      outline: 'none',
                      border: 'none',
                    }}
                    focusBorderColor="transparent"
                    value={values.password}
                    onChange={handleChange}
                    sx={{
                      '::placeholder': {
                        fontSize: '14px',
                        color: '#a89f98',
                      },
                    }}
                  />

                  {/* toggling to show password and not to show password */}
                  <InputRightElement
                    border="none"
                    top="0.2rem"
                    paddingRight="0.6rem"
                    cursor="pointer"
                  >
                    {showPassword ? (
                      <Icon
                        as={BsEyeSlash}
                        onClick={togglePasswordVisibility}
                        style={{
                          fontWeight: 'light',
                          color: '#a89f98',
                          width: '1.5rem',
                          height: '1.5rem',
                        }}
                      />
                    ) : (
                      <Icon
                        as={BsEye}
                        onClick={togglePasswordVisibility}
                        style={{
                          fontWeight: 'light',
                          color: '#a89f98',
                          width: '1.5rem',
                          height: '1.5rem',
                        }}
                      />
                    )}
                  </InputRightElement>
                </InputGroup>
                <Text color="red.500" style={{ fontSize: '10px' }}>
                  {errors.password}
                </Text>
              </FormControl>

              <Flex alignItems="center" mt={3} w="100%" gap={2} fontSize="12px">
                <Checkbox colorScheme="purple" defaultChecked size="sm">
                  I agree with the
                </Checkbox>

                <Link
                  href="#"
                  style={{ textDecoration: 'underline', color: '#6e30b0' }}
                >
                  Terms & Conditions
                </Link>
              </Flex>

              <Button
                bg="#6e30b0"
                color="white"
                _hover={{ bg: '#6e30b0' }}
                type="submit"
                mt={3}
                w="100%"
                py="1.5rem"
              >
                Create Account
              </Button>
            </VStack>
          </VStack>
        </Box>
      </Center>
    </VStack>
  );
};

export default SignUp;
