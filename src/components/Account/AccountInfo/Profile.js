import axios from "axios";
import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/DataProvider";

const PersonalInfo = () => {
  const { setIsLogin, userName, setUserName, setUserPassword } =
    useContext(AppContext);

  //
  const [personalInfoShow, setPersonalInfoShow] = useState(false);
  const [passShown, setPassShown] = useState(false);
  const [formIsShown, setFormIsShown] = useState(false);
  const [showResponse, setShowResponse] = useState("");

  //Inputs
  const [currUser, setCurrUser] = useState("");
  const [newUser, setNewUSer] = useState("");
  const [currUserPassword, setCurrUserPassword] = useState("");
  const [newPassword, setNewUserPassword] = useState("");

  function redirect() {
    window.location = "/";
  }

  // Función para actualizar el username de un usuario existente
  const handleUpdateUsername = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `http://localhost:4000/${userName}/update/${userName}/update`,
        {
          username: newUser,
        }
      );
      localStorage.setItem("username", newUser);
      setCurrUser(newUser);
      setUserName(newUser);
      setPersonalInfoShow(false);
    } catch (error) {
      console.log("Bad Answer:" + error);
    }
  };

  // Función para actualizar el password de un usuario existente
  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `http://localhost:4000/${userName}/password/update/${userName}/password/update`,
        {
          password: newPassword,
        }
      );
      setCurrUserPassword(newPassword);
      setUserPassword(newPassword);
      setPersonalInfoShow(false);
      redirect();
    } catch (error) {
      console.log(error);
    }
  };

  //Funcion para eliminar un usuario
  const handleDeleteUser = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(
        `http://localhost:4000/${userName}/delete/${userName}/delete`
      );
      localStorage.clear();
      setIsLogin(false);
      redirect();
      setPersonalInfoShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mb-8 border-b border-customBorder ">
        <h1>Personal Information</h1>
        <div className="mb-4 flex gap-12 border-b border-customBorder pb-4"></div>
        {!personalInfoShow && (
          <div className="mb-2 pb-4">
            {!personalInfoShow && (
              <div className="flew-row mb-4 flex justify-between border-b border-customBorder pb-4">
                <h3 className="text-xl">Name</h3>
                {!personalInfoShow && (
                  <button
                    className="cursor-pointer text-blue-500"
                    onClick={() => setPersonalInfoShow(true)}
                  >
                    Change Name
                  </button>
                )}
              </div>
            )}
            <div className="max-w-[15rem] border border-loginBorder bg-backg py-6 px-6 opacity-70"></div>
          </div>
        )}

        {personalInfoShow && (
          <form className="" onSubmit={handleUpdateUsername}>
            <div className="mb-6 flex flex-col gap-2">
              <label htmlFor="name">Current Name</label>

              <input
                className="max-w-[15rem] bg-backg px-4 py-2 focus:outline-none"
                type="text"
                id="name"
                name="name"
                value={currUser}
                onChange={(event) => setCurrUser(event.target.value)}
              />
              <label htmlFor="name"> New Name</label>
              <input
                className="max-w-[15rem] bg-backg px-4 py-2 focus:outline-none"
                type="text"
                id="name"
                name="name"
                value={newUser}
                onChange={(event) => setNewUSer(event.target.value)}
              />
            </div>
            <button
              type="submit"
              className="rounded-sm bg-secondary py-1 px-4 text-white"
            >
              save
            </button>
          </form>
        )}
      </div>
      <div className="mb-8 border-b border-customBorder pb-4">
        <div className="flew-row mb-4 flex justify-between border-b border-customBorder pb-4">
          <h3 className="text-xl">Password</h3>
          {!passShown && (
            <button
              className="cursor-pointer text-blue-500"
              onClick={() => setPassShown(true)}
            >
              Change Password
            </button>
          )}
        </div>

        {!passShown && (
          <div className="max-w-[15rem] border border-loginBorder bg-backg py-3 px-3 opacity-70">
            ***************
          </div>
        )}

        {passShown && (
          <form className=" p-3" onSubmit={handleUpdatePassword}>
            <div className="mb-6 flex flex-col gap-2">
              <label htmlFor="passCurrent">Current Password</label>
              <input
                className="max-w-[15rem] bg-backg px-4 py-2 focus:outline-none"
                type="password"
                id="passCurrent"
                name="passCurrent"
                value={currUserPassword}
                onChange={(event) => setCurrUserPassword(event.target.value)}
              />
            </div>
            <div className="mb-6 flex flex-col gap-2">
              <label htmlFor="passNew">New Password</label>
              <input
                className="max-w-[15rem] bg-backg px-4 py-2 focus:outline-none"
                type="password"
                id="passNew"
                value={newPassword}
                onChange={(event) => setNewUserPassword(event.target.value)}
              />
            </div>

            <div className="flex items-center gap-6">
              <button
                type="submit"
                className="rounded-sm bg-secondary py-1 px-4 text-white"
              >
                Update
              </button>
              <p className="text-green-600">{showResponse}</p>
            </div>
          </form>
        )}
      </div>

      <>
        <button
          className="mb-7 cursor-pointer text-blue-500"
          onClick={() => setFormIsShown(true)}
        >
          Delete Your Account
        </button>
        {formIsShown && (
          <form className=" p-3" onSubmit={handleDeleteUser}>
            <div className="mb-6 flex flex-col gap-2">
              <label htmlFor="deleteAcc">Please provide your password</label>
              <input
                className="max-w-[15rem] bg-backg px-4 py-2 focus:outline-none"
                type="password"
                id="deleteAcc"
                name="deleteAcc"
                value={currUserPassword}
                onChange={(event) => setCurrUserPassword(event.target.value)}
              />
            </div>

            <div className="flex items-center gap-6">
              <button
                type="submit"
                className="rounded-sm bg-secondary py-1 px-4 text-white"
              >
                Confirm Delete
              </button>
              <p className="text-green-600">{showResponse}</p>
            </div>
          </form>
        )}
      </>
    </>
  );
};

const Profile = () => {
  return (
    <div className=" rounded-sm border-t-2  bg-white p-8 pr-4 shadow-sm sm:pr-[25vw]">
      <PersonalInfo />
    </div>
  );
};

export default Profile;
