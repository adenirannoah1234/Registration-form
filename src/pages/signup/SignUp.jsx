import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  FormLabel,
  FormControl,
  Checkbox,
  VStack,
  InputGroup,
  InputRightElement,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import useFormValidation from '../../hooks/useFormValidation';
import usePasswordToggle from '../../hooks/usePasswordToggle';
import ICON from '../../assets/Icons.png';

const SignUp = () => {
  const { showPassword, togglePasswordVisibility } = usePasswordToggle();

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // validation rules
  const validationRules = {
    firstName: (value) => value.trim().length > 0,
    lastName: (value) => value.trim().length > 0,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    fullName: (value) => value.length >= 8,
    password: (value) => value.length >= 8,
    whatsAppNumber: (value) => value.length >= 11,
  };

  // error messages to be displayed at the ui
  const errorMessages = {
    firstName: 'First name is Required',
    lastName: 'Last name is Required',
    email: 'Email is Required',
    password: 'Must be at least 8 characters long',
    whatsAppNumber: 'Number must 11 digit',
  };

  const { values, handleChange, errors, validateForm } = useFormValidation(
    {
      firstName: '',
      lastName: '',
      email: '',
      fullName: '',
      password: '',
      whatsAppNumber: '',
    },
    validationRules,
    errorMessages
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSuccessModalOpen(true);
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
          h="55rem"
          bg="white"
        >
          <VStack gap={'1.5rem'} justify={'center'} h="100%">
            <Heading as="h1" size="lg" textAlign="center" fontSize="20px">
              Create an Account
            </Heading>

            <Flex
              justify="center"
              border="1px solid #6e30b0 "
              py="1rem"
              borderRadius={5}
              w="100%"
            >
              <img src={ICON} alt="google image" width={25} height={10} />
              <Text ml={2} color="#6e30b0">
                Sign up with Google
              </Text>
            </Flex>

            <VStack as={'form'} onSubmit={handleSubmit} w="100%" gap="1rem">
              <FormControl
                id="firstName"
                isInvalid={!!errors.firstName}
                w="100%"
              >
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
                    type={showPassword ? 'text' : 'password'} // Set type dynamically
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
                // onClick={onSuccessOpen}
              >
                Create Account
              </Button>
            </VStack>
            <Text textAlign="center" w="100%" fontSize="12px" color="#544f4c">
              Already have an account?{' '}
              <Link
                href="#"
                style={{ textDecoration: 'underline', color: '#6e30b0' }}
              >
                Sign in here
              </Link>
            </Text>
          </VStack>
        </Box>
      </Center>
      {/* <Success isOpen={isSuccessOpen} onClose={onSuccessClose} /> */}
    </VStack>
  );
};

export default SignUp;
