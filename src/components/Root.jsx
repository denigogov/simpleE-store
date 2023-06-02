import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo-svgrepo-com.svg";
import shoppingCardIcon from "../assets/shopping-card-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";

const Root = ({ totalItems }) => {
  const navigator = useNavigate();

  return (
    <div className="mb-6 relative  ">
      <p className="lg:hidden xl:hidden md:hidden">toggle icon!</p>
      <nav className="hidden xl:flex lg:flex, md:flex justify-center items-center lg:justify-between xl:justify-between bg-primaryBackground p-4  sticky top-0 ">
        <img
          className="w-10 max-w-screen-xl	cursor-pointer "
          src={logo}
          alt="website logo"
          onClick={() => navigator("/")}
        />
        <ul className="flex flex-row gap-10 justify-end text-subTitlePrimaryLight	">
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-titlePrimaryDark font-medium"
                  : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-titlePrimaryDark font-medium"
                  : ""
              }
              to="card"
            >
              Card
            </NavLink>
          </li>
          <li>placeholder</li>
          <li>placeholder1</li>

          <li>
            {" "}
            <div
              onClick={() => navigator("card")}
              className="flex gap-2 items-center text-subTitlePrimaryLight cursor-pointer	"
            >
              <img
                className="w-7 	 max-w-screen-xl"
                src={shoppingCardIcon}
                alt="shoppingCard icon"
              />
              <p className="text-titlePrimaryDark">{`${totalItems.length} items`}</p>
            </div>
          </li>
        </ul>
      </nav>

      <div
        onClick={() => navigator("card")}
        className="flex gap-2 items-center text-subTitlePrimaryLight cursor-pointer 2xl:hidden xl:hidden, lg:hidden	md:hidden"
      >
        <img
          className="w-7 	 max-w-screen-xl"
          src={shoppingCardIcon}
          alt="shoppingCard icon"
        />
        <p className="text-titlePrimaryDark">{`${totalItems.length} items`}</p>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
