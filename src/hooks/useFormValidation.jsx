import { useState } from 'react';

const useFormValidation = (initialState, validationRules, errorMessages) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

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
