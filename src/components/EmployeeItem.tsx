import { NavLink } from "react-router-dom";
import { Context } from "../store/ContextProvider";
import { useContext } from "react";

interface Props {
  id: number;
  name: string;
  email: string;
}

const EmployeeItem = ({ name, email, id }: Props) => {
  const context = useContext(Context);
  return (
    <li className="flex items-center justify-between gap-2 border-[2px] border-transparent bg-itemEven px-6 py-3 duration-200 ease-out hover:border-baseDark sm-mobile:flex-col  md:flex-row">
      <div className="flex w-full items-center sm-mobile:flex-col sm:flex-row sm:justify-center sm:gap-2 md:justify-start">
        <span className="text-left text-lg font-medium text-baseDark">
          {name}
        </span>
        <span className="text-md font-semibold text-lightGray">
          {`(${email})`}
        </span>
      </div>
      <NavLink to={`/employees/${id}`} onClick={context.changeNavigationStatus}>
        <div className="flex gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21H12C11.4 21 11 20.6 11 20C11 19.4 11.4 19 12 19H21C21.6 19 22 19.4 22 20C22 20.6 21.6 21 21 21ZM3.20002 21L7.20002 20C7.40002 20 7.50002 19.9 7.70002 19.7L20.2 7.2C20.5 6.9 20.7 6.6 20.9 6.2C21 5.8 21.1 5.4 21.1 5C21.1 4.6 21 4.2 20.9 3.8C20.8 3.4 20.5 3.1 20.2 2.8C19.9 2.5 19.6 2.3 19.2 2.1C18.1 1.6 16.7 1.9 15.8 2.8L3.30002 15.3C3.20002 15.4 3.10002 15.6 3.00002 15.8L2.00002 19.8C1.90002 20.1 2.00002 20.5 2.30002 20.7C2.50002 20.9 2.70002 21 3.00002 21C3.10002 21 3.20002 21 3.20002 21ZM17.2 4.2C17.5 3.9 18 3.8 18.4 4C18.5 4.1 18.7 4.1 18.8 4.2C18.9 4.3 19 4.4 19 4.6C19.1 4.7 19.1 4.9 19.1 5C19.1 5.1 19.1 5.3 19 5.4C18.9 5.5 18.9 5.7 18.8 5.8L6.50002 18.1L4.40002 18.6L4.90002 16.5L17.2 4.2Z"
              fill="#222222"
            />
          </svg>
          <span className="font-semibold text-baseDark">Edit</span>
        </div>
      </NavLink>
    </li>
  );
};

export default EmployeeItem;
