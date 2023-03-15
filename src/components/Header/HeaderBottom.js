import { Link } from "react-router-dom";
import { HeaderNav } from "./Links";

const HeaderBottom = () => {
  return (
    <div className=" mx-auto max-w-st bg-secondary px-4 md:px-5 ">
      <nav>
        <ul className="flex gap-4 xl:gap-8">
          {HeaderNav.map((parentLink, i) => (
            <Link to={`/category/${parentLink.name}`}>
              <WrapperLi
                key={i}
                parentLink={parentLink}
                classCustom={"text-white"}
              >
                <Sublink
                  parentLink={parentLink}
                  classSub={
                    "absolute left-[5%] grid-cols-2 w-[90%] gap-8 rounded-b-lg cursor-pointer shadow-lg px-8 py-4 pt-12 group-hover:grid xl:grid-cols-4 hidden z-50 bg-white"
                  }
                />
              </WrapperLi>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export const WrapperLi = (props) => {
  return (
    <li className={`group`}>
      <div
        className={`flex cursor-pointer items-center gap-2 py-2 ${props.classCustom}`}
        id={props.id}
      >
        {props.parentLink.name}

        {props.parentLink.sublinkArr || props.parentLink.sublinks ? (
          <ion-icon name="chevron-down-outline"></ion-icon>
        ) : (
          ""
        )}
      </div>
      {props.children}
    </li>
  );
};

export const Sublink = ({ parentLink, classSub }) => {
  return (
    <>
      {parentLink.sublinks && (
        <div
          className={`text-black transition-all duration-1000  ${classSub} `}
        >
          {parentLink.sublinks.map((links, i) => (
            <div key={i} className="p-3 group-hover:block">
              <h2 className="mb-6 border-b-[1px] border-blue-200 pb-2 text-2xl font-medium">
                {links.title || links}
              </h2>
              <ul className="flex flex-col gap-4">
                {links.title &&
                  links.links.map((singleEl, i) => (
                    <li key={i} className="transition-all hover:text-blue-400">
                      <Link to={`/category/type/${singleEl}`}> {singleEl}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
          {parentLink.image && (
            <div className="relative">
              <img src={parentLink.image.location} alt={parentLink.image.alt} />
              {parentLink.extrainfo && (
                <div className="absolute top-[30%] left-[5%] text-secondary">
                  <p>{parentLink.extrainfo.heading}</p>
                  <p className="my-4 text-2xl">{parentLink.extrainfo.title}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default HeaderBottom;
