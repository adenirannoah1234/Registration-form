// useFormValidation.js
import { useState } from 'react';

const useFormValidation = (initialState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  // Defined the validation rules
  const validationRules = {
    firstName: (value) => value.trim().length > 0,
    lastName: (value) => value.trim().length > 0,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    password: (value) => value.length >= 8,
    whatsAppNumber: (value) => value.length >= 11,
  };

  // Defined the error messages
  const errorMessages = {
    firstName: 'First name is Required',
    lastName: 'Last name is Required',
    email: 'Email is Required',
    password: 'Must be at least 8 characters long',
    whatsAppNumber: 'Number must 11 digit',
  };

  // handling changes in form input boxes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // validating the form based on the defined rules
  const validateForm = () => {
    let newErrors = {};
    for (const [key, rule] of Object.entries(validationRules)) {
      if (!rule(values[key])) {
        newErrors[key] = errorMessages[key] || 'Required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { values, handleChange, errors, validateForm };
};

export default useFormValidation;
