import MainHeader from "../../components/Header/MainHeader";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import CustoMessage from "../../components/Common/CustomMessage";

const Main = () => {
  return (
    <>
      <MainHeader />
      <CustoMessage message="You Must Be Registered To Do This" />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
