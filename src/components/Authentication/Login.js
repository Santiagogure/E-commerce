import React, { useContext, useState } from "react";
import { Bars } from "react-loader-spinner";
import { AppContext } from "../../context/DataProvider";
import axios from "axios";

export const LoginForm = () => {
  const { setUserPassword, setUserName } = useContext(AppContext);

  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [successful, setSuccessful] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function redirect() {
    window.location = "/";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/login", { username, password })
      .then((response) => {
        console.log(response);
        localStorage.setItem("username", response.data.username);
        setUserName(response.data.username);
        setUserPassword(password);
        redirect();
      })
      .catch((error) => {
        console.log("Se presento el error" + error);
        setError("There was an error with the username or password");
      });
  };

  return (
    <form className="custom-form flex flex-col gap-3 shadow-md 2xl:gap-4 ">
      <div className="flex flex-col text-sm lg:text-base">
        <label htmlFor="text">Your name</label>
        <input
          autoFocus
          type="text"
          id="text"
          name="name"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="mt-2 rounded-lg border border-loginBorder p-2 text-xs lg:text-base"
        />
      </div>

      <div className="flex flex-col text-sm lg:text-base">
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="mt-2 rounded-lg border border-loginBorder p-2 text-xs lg:text-base"
        />
      </div>

      <div className="form-actions">
        <button
          type="button"
          onClick={handleSubmit}
          className={`mt-2 w-full justify-center rounded-lg  border  py-1 text-sm lg:mt-4 lg:py-2  lg:text-base ${
            isLoading
              ? "flex cursor-not-allowed border-[#ccc] bg-[#ccc]"
              : "border-loginBorder bg-gradient-to-b from-gradientFrom to-gradientTo"
          }`}
        >
          {isLoading ? (
            <Bars
              height="24"
              width="80"
              // color="#4fa94d"
              color="#21dd1e"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            "Log-in"
          )}
        </button>
      </div>

      {error && (
        <p className="flex w-fit gap-2 bg-red-50 px-3 text-sm text-red-600">
          <span>
            <ion-icon name="warning-outline"></ion-icon>
          </span>
          <span>{error}</span>
        </p>
      )}

      {error && (
        <p className=" absolute top-0 left-0 flex w-full justify-center gap-2 bg-red-500 px-3 py-2 text-xs text-white md:text-sm lg:text-lg">
          <span className="translate-y-[2px]">
            <ion-icon name="warning-outline"></ion-icon>
          </span>
          <span>{error}</span>
        </p>
      )}
      {successful && (
        <p className=" absolute top-0 left-0 flex w-full justify-center gap-2 bg-green-500 px-3 py-2  text-xs text-white md:text-sm lg:text-lg">
          <span className="translate-y-[2px]">✔</span>
          <span>{successful}</span>
        </p>
      )}
    </form>
  );
};