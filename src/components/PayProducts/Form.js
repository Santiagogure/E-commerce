import React, { useContext, useState } from "react";
import { AppContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";
import CustomInput from "../Common/customInput";

export const Form = () => {
  const { total } = useContext(AppContext);

  const navigate = useNavigate();
  function redirect(url) {
    navigate(url);
  }

  const [formData, setFormData] = useState({
    paymentMethod: "",
    firstName: "",
    lastName: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [setFormErrors] = useState({
    paymentMethod: "",
    firstName: "",
    lastName: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // Función que se ejecuta cuando se cambia el valor de algún campo del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const formatCardNumber = (value) => {
    // Eliminar todos los caracteres que no sean números
    const onlyNums = value.replace(/[^\d]/g, "");

    // Dividir en grupos de 4 caracteres
    const groups = onlyNums.match(/.{1,4}/g) || [];

    // Agregar guiones después de cada grupo de 4 caracteres
    const formattedValue = groups.join("-").slice(0, 19);

    return formattedValue;
  };

  const formatExpiryDate = (value) => {
    // Eliminar todos los caracteres que no sean números
    const onlyNums = value.replace(/[^\d]/g, "");

    // Dividir la fecha en mes y año
    const month = onlyNums.slice(0, 2);
    const year = onlyNums.slice(2, 4);

    // Agregar la barra diagonal después del segundo dígito del mes
    const formattedValue = `${month}/${year}`;
    return formattedValue;
  };

  const handleExpiryDateChange = (e) => {
    const { name, value } = e.target;

    // Formatear el valor del input
    const formattedValue = formatExpiryDate(value);

    // Actualizar el estado del formulario con el valor formateado
    setFormData((formData) => ({
      ...formData,
      [name]: formattedValue,
    }));
  };

  const handleCardNumberChange = (e) => {
    const { name, value } = e.target;

    // Formatear el valor del input
    const formattedValue = formatCardNumber(value);

    // Actualizar el estado del formulario con el valor formateado
    setFormData((formData) => ({
      ...formData,
      [name]: formattedValue,
    }));
  };

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validamos los datos del formulario
    const errors = validate(formData);

    // Si no hay errores en el formulario, se procesa el pago
    if (Object.values(errors).every((error) => error === "")) {
      redirect("/cart/buyProducts/success");
    }
  };

  // Función que valida los datos del formulario y devuelve un objeto con los errores encontrados
  const validate = (formData) => {
    const errors = {
      paymentMethod: "",
      firstName: "",
      lastName: "",
      address: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    };

    // Validate paymentMethod
    if (!["creditCard", "paypal"].includes(formData.paymentMethod)) {
      errors.paymentMethod = "Please select a valid payment method";
    }

    if (!formData.firstName) {
      errors.firstName = "Please enter your first name";
    }

    if (!formData.lastName) {
      errors.lastName = "Please enter your last name";
    }

    if (!formData.address) {
      errors.address = "Please enter your address";
    }

    if (!formData.cardNumber) {
      errors.cardNumber = "Please enter your card number";
      console.log("cardError");
    }

    if (!formData.expiryDate) {
      errors.expiryDate = "Please enter the expiry date of your card";
      console.log("EXPI");
    }

    // Validate cvv
    if (!formData.cvv) {
      errors.cvv = "Please enter the CVV code of your card";
    } else if (isNaN(formData.cvv)) {
      errors.cvv = "CVV code must be a number";
    }

    return errors;
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-4 flex flex-col">
        <h1 className="relative mb-8 flex items-center  justify-center text-3xl font-bold text-[#0e5ec1] lg:bottom-10 lg:mb-0">
          Pay your products
        </h1>
        <label className="mb-2 text-lg font-bold" htmlFor="paymentMethod">
          Payment Method
        </label>
        <select
          className={`rounded-md border py-2 px-3 ${"border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"}`}
          name="paymentMethod"
          required
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option value="">Select payment method</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <div className="flex flex-col items-start lg:flex-row lg:items-center lg:space-x-10">
        <div className="mb-4">
          <CustomInput
            label="First Name"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <CustomInput
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-4">
        <CustomInput
          label="Address"
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="mb-2 block min-w-[300px] font-bold text-gray-700"
          htmlFor=""
        >
          Card Number
        </label>
        <input
          className={` w-full rounded-md border py-2 px-3 ${"border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"}`}
          required
          id=""
          type="text" // Cambiar a tipo de entrada de texto
          name="cardNumber"
          placeholder="7204-9383-2903-4820"
          value={formData.cardNumber}
          onChange={handleCardNumberChange}
          onKeyDown={(e) => {
            // Permitir solo números y teclas de control
            if (
              !/[\d\s]/.test(e.key) &&
              !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(
                e.key
              )
            ) {
              e.preventDefault();
            }
          }}
        />
      </div>

      <div className=" flex flex-col items-center lg:flex-row lg:space-x-10">
        <div className="mb-4">
          <CustomInput
            label="Expiry Date"
            type="text" // Cambiar a tipo de entrada de texto
            name="expiryDate"
            placeholder="MM/YY"
            value={formData.expiryDate}
            onChange={handleExpiryDateChange}
            maxLength="5"
            onKeyDown={(e) => {
              // Permitir solo números y teclas de control
              if (
                !/[\d\s]/.test(e.key) &&
                !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(
                  e.key
                )
              ) {
                e.preventDefault();
              }
            }}
          />
        </div>

        <div className="mb-4">
          <CustomInput
            label="CVV"
            type="number"
            name="cvv"
            placeholder="MM/YY"
            value={formData.cvv.slice(0, 3)}
            onChange={handleChange}
            maxLength="3"
          />
        </div>
      </div>
      <div className="flex items-center ">
        <button
          type="submit"
          onSubmit={handleSubmit}
          className="min-w-[90px] rounded-md bg-secondary py-2 px-4 text-white hover:bg-primary"
        >
          Buy
        </button>
        <h1 className="ml-5">Total: ${total}</h1>
      </div>
    </form>
  );
};
