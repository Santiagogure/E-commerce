import { Link } from "react-router-dom";
import { SingUpTry } from "../../components/Authentication/SignUp";
const Signup = () => {
  return (
    <div className=" w-full  py-5 pt-10 ">
      <div className="mx-auto  max-w-[20rem] md:max-w-[24rem] lg:max-w-[28rem] ">
        <h2 className="mb-6 text-center text-[1.5rem] font-medium text-secondary lg:text-3xl">
          GureShop
        </h2>
        <div className="mb-8 border border-[#ddd] p-5 xl:p-8">
          <h3 className="mb-6 text-xl font-normal lg:text-2xl">
            Create Account
          </h3>
          <SingUpTry />
          <div className="mt-4 px-2 text-[10px] lg:mt-8 lg:text-xs">
            By continuing, you agree to GureShop's
            <a href="#sd" className="mx-1 text-blue-600">
              Conditions of Use
            </a>
            and Privacy Notice.
          </div>
          <div className="mt-2 text-sm lg:text-base">
            already have an account?
            <Link to="/login" className="ml-1 text-blue-600">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
