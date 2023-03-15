import React, { useEffect, useState } from "react";

export const UseSearch = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  useEffect(() => {}, [formState]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialState);
  };

  return {
    ...formState,
    onInputChange,
    onResetForm,
  };
};
