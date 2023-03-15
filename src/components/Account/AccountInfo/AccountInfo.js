import React from "react";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import MyCart from "./MyCart";

const AccountInfo = () => {
  const params = useParams();

  let content = <p>{params.accountId}</p>;

  if (params.accountId === "profile") content = <Profile />;
  if (params.accountId === "cart") content = <MyCart />;

  return <>{content}</>;
};

export default AccountInfo;
