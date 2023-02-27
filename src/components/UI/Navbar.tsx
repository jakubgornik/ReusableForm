import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../store/ContextProvider";
import React from "react";

const Navbar = React.memo(() => {
  const context = useContext(Context);

  return (
    <div className="container mx-auto mt-8 sm-mobile:max-w-[85%] sm:max-w-[70%] lg:max-w-[60%]">
      <nav className="w-full sm-mobile:px-4 mobile:px-8 sm:px-12 md:px-[68px]">
        {context.isNavigationVisible && (
          <NavLink
            to="/"
            className="flex items-center gap-2"
            onClick={context.changeNavigationStatus}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289Z"
                fill="#222222"
              />
            </svg>
            <span className="font-semibold text-baseDark"> Back to list</span>
          </NavLink>
        )}
      </nav>
    </div>
  );
});
export default Navbar;
