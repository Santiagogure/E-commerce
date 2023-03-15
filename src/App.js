import { Fragment, React } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Signup from "./pages/Login/SignUp";
import Account from "./pages/Account/Account";
import SearchCategoryType from "./pages/SearchCategory/SearchCategoryType";
import ProductDetails from "./pages/productDetails/ProductDetails";
import CartPage from "./pages/CartPage/CartPage";
import MainBody from "./components/MainBody/MainBody";
import AccountInfo from "./components/Account/AccountInfo/AccountInfo";
import Profile from "./components/Account/AccountInfo/Profile";
import SearchCategories from "./pages/SearchCategory/SearchCategory";
import { BuyProducts } from "./pages/BuyProducts/BuyProducts";
import { SearchPage } from "./pages/Search/SearchPage";
import Success from "./components/PayProducts/success";
import DataProvider from "./context/DataProvider";
import PrivateBuy from "./helper/routes/privateBuy";
import PrivateProfile from "./helper/routes/privateProfile";

export default function App() {
  return (
    <Fragment>
      <DataProvider>
        <div>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<MainBody />} />

              <Route
                path="/users/:username/username"
                element={
                  <PrivateProfile>
                    <Account />
                  </PrivateProfile>
                }
              >
                <Route index element={<Profile />} />
                <Route path=":accountId" element={<AccountInfo />} />
              </Route>
              <Route
                path="category/:categories"
                element={<SearchCategories />}
              ></Route>

              <Route path="search/product" element={<SearchPage />}></Route>
              <Route
                path="category/type/:categories"
                element={<SearchCategoryType />}
              ></Route>
              <Route
                path="/:category/:productname"
                element={<ProductDetails />}
              ></Route>
              <Route
                path="cart"
                element={
                  <PrivateProfile>
                    <CartPage />
                  </PrivateProfile>
                }
              ></Route>
              <Route
                path="/cart/buyProducts"
                element={
                  <PrivateBuy>
                    <BuyProducts />
                  </PrivateBuy>
                }
              ></Route>
              <Route
                path="/cart/buyProducts/success"
                element={<Success />}
              ></Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<div>Invalid route</div>} />
          </Routes>
        </div>
      </DataProvider>
    </Fragment>
  );
}
