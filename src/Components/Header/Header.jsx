import logo from "../../assets/logo.png";
import { MdAccountCircle } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Tours Page</a>
              </li>
              <li>
                <a>News</a>
              </li>
              <li>
                <a>Page</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Tours Page</a>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
                <a>Page</a>
              </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end text-2xl  items-center ">
            <button><IoSearch /></button>
            <button className="ml-5 "><MdAccountCircle /></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
