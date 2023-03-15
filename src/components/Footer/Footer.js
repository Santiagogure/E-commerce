import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/DataProvider";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

function redirect(url) {
  window.location = url;
}

const footer = [
  {
    tittle: "GureShop Service",
    services: [
      "GureShop Credit Card",
      "GureShop Pay",
      "Weekly Ad",
      "Other Services",
    ],
  },
  {
    tittle: "GureShop Service",
    services: [
      "Afforbable Credit Card",
      "Afforbable Pay",
      "Weekly Ad",
      "Other Services",
    ],
  },
  {
    tittle: "GureShop Service",
    services: [
      "GureShop Credit Card",
      "GureShop Pay",
      "Weekly Ad",
      "Other Services",
    ],
  },
  {
    tittle: "GureShop Service",
    services: [
      "GureShop Credit Card",
      "GureShop Pay",
      "Weekly Ad",
      "Other Services",
    ],
  },
  {
    tittle: "GureShop Service",
    services: [
      "GureShop Credit Card",
      "GureShop Pay",
      "Weekly Ad",
      "Other Services",
    ],
  },
];

const Footer = () => {
  const { displayFooter, setDisplayFooter } = useContext(AppContext);

  return (
    <>
      {displayFooter ? (
        <footer className="bg-primary text-white lg:mt-28">
          <div
            className="cursor-pointer bg-tertiary py-4 text-center"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <button>BACK TO TOP</button>
          </div>
          <div className="border-b border-tertiary bg-secondary">
            <div className="mx-auto max-w-[105rem] px-3">
              <div className="grid grid-cols-1  gap-4 px-4  py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {footer.map((col, i) => (
                  <div key={i}>
                    <h3 className="mb-10 text-xl font-medium">{col.tittle}</h3>
                    <ul className="flex flex-col gap-2">
                      {col.services.map((link, i) => (
                        <li key={i}>
                          <Link
                            to="/"
                            className="text-sm transition-all hover:text-blue-600"
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-20 bg-secondary py-12">
            <div>
              <div className="flex items-center justify-center space-x-5">
                <AiOutlineLinkedin
                  className="cursor-pointer"
                  onClick={() =>
                    redirect("https://www.linkedin.com/in/santiago-gurevich/")
                  }
                  size={"2rem"}
                />
                <AiOutlineGithub
                  className="cursor-pointer"
                  onClick={() => redirect("https://github.com/Santiagogure")}
                  size={"2rem"}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-[105rem] px-3">
            <div className="flex items-center justify-between py-4">
              <div>GurevichSantiago@gmail.com</div>
              <div>Copyright © 2023 Santiago Gurevich</div>
            </div>
          </div>
        </footer>
      ) : (
        ""
      )}
    </>
  );
};

export default Footer;
