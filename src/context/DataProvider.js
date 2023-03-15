import React, { createContext, useEffect, useState } from "react";
import { Data } from "../Data/Data";
import { UseSearch } from "../helper/hook/UseSearch";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function DataProvider({ children }) {
  //Items:
  const [allProducts, setAllProducts] = useState([]);
  const [items, setItems] = useState([]);

  //Cart
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  //Use and display
  const [displayHeader, setDisplayHeader] = useState(true);
  const [displayFooter, setDisplayFooter] = useState(true);
  const [showMessageError, setShowMessageError] = useState(false);
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const navigate = useNavigate();

  //Login and user
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername && savedUsername !== "undefined") {
      setUserName(savedUsername);
      setIsLogin(true);
    }
  }, [userName, userPassword]);

  useEffect(() => {
    if (!isLogin) setCart([]);
  }, [isLogin]);

  /*Obtenemos toda la data*/

  useEffect(() => {
    // Obtener todas las categorías de la data
    const categories = Data.categories;

    // Si existen categorías, establecerlas como productos totales
    if (categories) {
      setAllProducts(categories);
    } else {
      // De lo contrario, establecer una matriz vacía
      setAllProducts([]);
    }

    // Obtener el carrito de la base de datos
    const cart = Data.cart;
    if (cart) {
      setCart(cart);
    } else {
      setCart([]);
    }
  }, []);

  // Obtenemos solo los productos

  useEffect(() => {
    let tempItems = [];
    allProducts.forEach((category) => {
      category.subcategories.forEach((subcategory) => {
        subcategory.products.forEach((product) => {
          tempItems.push(product);
        });
      });
    });
    setItems(tempItems);
  }, [allProducts]);

  // Filtrar los productos por categoría

  const dressesProducts =
    allProducts
      .find((category) => category.name === "Clothing")
      ?.subcategories.find((subcategory) => subcategory.name === "Dresses")
      ?.products || [];

  const electronicsProducts =
    allProducts
      .find((category) => category.name === "Electronics")
      ?.subcategories.find((subcategory) => subcategory.name === "Computers")
      ?.products || [];

  const homeProducts =
    allProducts
      .find((category) => category.name === "Home")
      ?.subcategories.find((subcategory) => subcategory.name === "Furniture")
      ?.products || [];

  const vehicleProducts =
    allProducts
      .find((category) => category.name === "Vehicle")
      ?.subcategories.find((subcategory) => subcategory.name === "Cars")
      ?.products || [];

  /*Funcionalidades de la aplicación */

  /* Search Navigate */
  const { valueSearch, onInputChange, onResetForm } = UseSearch({
    valueSearch: "",
  });

  const onSearchSubmit = (e) => {
    if (!valueSearch) {
      return;
    }
    e.preventDefault();
    navigate("search/product", {
      state: valueSearch,
    });
    onResetForm();
  };

  //Carrito:

  const addCart = (id) => {
    if (isLogin) {
      const check = cart.every((item) => {
        console.log("Error");
        return item.id !== id;
      });
      if (check) {
        const data = items.filter((producto) => {
          return producto.id == id;
        });
        setCart([...cart, ...data]);

        console.log("item añadido");
      } else {
        alert("El item fue añadido otra vez");
      }
    } else {
      setShowMessageError(true);
    }
  };

  const removeCart = (id) => {
    cart.map((item) => {
      if (item.id === id) {
        const data = cart.filter((item) => {
          return item.id !== id;
        });
        setCart([...data]);
        item.cantidad = 1;
      }
    });
  };

  const upQuantity = (id) => {
    items.forEach((item) => {
      if (item.id === id) {
        item.amount += 1;
        item.amountCart = item.amount;
        setCart([...cart]);
      }
    });
  };

  const substractQuantity = (id) => {
    items.forEach((item) => {
      if (item.id === id) {
        if (item.amount > 1) {
          item.amount -= 1;
          item.amountCart = item.amount;
          setCart([...cart]);
        }
      }
    });
  };

  const upCartQuantity = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.amountCart += 1;
        setCart([...cart]);
      }
    });
  };

  const substractCartQuantity = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        if (item.amountCart > 1) {
          item.amountCart -= 1;
          setCart([...cart]);
        }
      }
    });
  };

  /* Total */
  useEffect(() => {
    const result = cart.reduce((prevValue, item) => {
      return prevValue + item.price * item.amountCart;
    }, 0);
    setTotal(result);
  }, [cart]);

  const value = {
    allProducts,
    dressesProducts,
    homeProducts,
    electronicsProducts,
    vehicleProducts,
    items,
    cart,
    setCart,
    setItems,
    addCart,
    removeCart,
    upCartQuantity,
    substractCartQuantity,
    upQuantity,
    substractQuantity,
    total,
    valueSearch,
    onSearchSubmit,
    onInputChange,
    displayHeader,
    setDisplayHeader,
    displayFooter,
    setDisplayFooter,
    menuIsVisible,
    setMenuIsVisible,
    showMessageError,
    setShowMessageError,
    userName,
    setUserName,
    userPassword,
    setUserPassword,
    isLogin,
    setIsLogin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
