import Card from "./UI/Card";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Employee {
  id: number;
  name: string;
  email: string;
  workStart: string;
  workEnd: string;
}

type Props = {
  action: string;
  title: string;
};

const EmployeeForm = ({ action, title }: Props) => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [validateNameValue, setValidateNameValue] = useState(false);
  const [validateEmailValue, setValidateEmailValue] = useState(false);
  const [validateDate, setValidateDate] = useState(false);
  const { id } = useParams();

  const num: number = typeof id === "string" ? parseInt(id) : Date.now();
  const nameRegex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+ [a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  useEffect(() => {
    if (action === "edit") {
      const fetchEmployee = async () => {
        const response = await fetch(`http://localhost:3001/employees/${id}`);
        const employee: Employee = await response.json();
        setNameValue(employee.name);
        setEmailValue(employee.email);
      };
      fetchEmployee();
    } else {
      return;
    }
  }, [id]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const modifiedEmployee: Employee = {
      id: num,
      name: nameValue,
      email: emailValue,
      workStart: startDate,
      workEnd: endDate,
    };
    if (action === "edit") {
      fetch(`http://localhost:3001/employees/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedEmployee),
      });
    } else {
      fetch("http://localhost:3001/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedEmployee),
      });
    }
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const startDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const endDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const validateNameHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!nameRegex.test(e.target.value)) {
      setValidateNameValue(true);
    } else {
      setValidateNameValue(false);
    }
  };

  const validateEmailHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!emailRegex.test(e.target.value)) {
      setValidateEmailValue(true);
    } else {
      setValidateEmailValue(false);
    }
  };

  const validateDateHandler = () => {
    const start: Date = new Date(startDate);
    const end: Date = new Date(endDate);
    if (start < end) {
      setValidateDate(false);
    } else {
      setValidateDate(true);
    }
  };

  return (
    <Card>
      <div className=" flex w-full items-center justify-between py-10 sm-mobile:px-4 mobile:px-8 sm:px-12 md:px-[68px]">
        <div className="text-4xl font-semibold">{title}</div>
      </div>
      <form
        className="w-full pb-10 sm-mobile:px-4 mobile:px-8 sm:px-12 md:px-[68px]"
        onSubmit={submitHandler}
      >
        <label htmlFor="full-name" className="font-semibold text-baseDark">
          Full name *
        </label>
        <div className="relative flex flex-col pb-8 pt-2 text-left">
          <input
            id="full-name"
            className={`h-10 border pl-1 text-baseDark ${
              validateNameValue
                ? "border-2 border-validationRed outline-validationRed"
                : "border-baseDark"
            }`}
            type="text"
            name="name"
            onChange={nameHandler}
            defaultValue={nameValue}
            onBlur={validateNameHandler}
            required
          />
          {validateNameValue && (
            <span className="absolute top-4 right-3">
              <svg
                className=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 23C5.9 23 1 18.1 1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12C23 18.1 18.1 23 12 23ZM12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3ZM13 12V8C13 7.4 12.6 7 12 7C11.4 7 11 7.4 11 8V12C11 12.6 11.4 13 12 13C12.6 13 13 12.6 13 12ZM13 16C13 15.4 12.6 15 12 15C11.4 15 11 15.4 11 16C11 16.6 11.5 17 12 17C12.5 17 13 16.6 13 16Z"
                  fill="#A3270C"
                />
              </svg>
            </span>
          )}
          {validateNameValue && (
            <p className="text-validationRed">This field is required</p>
          )}
        </div>
        <label htmlFor="email" className="font-semibold text-baseDark">
          Email address *
        </label>
        <div className="relative flex flex-col pb-8 pt-2 text-left">
          <input
            id="email"
            className={`h-10 border pl-1 text-baseDark ${
              validateEmailValue
                ? "border-2 border-validationRed outline-validationRed"
                : "border-baseDark"
            }`}
            type="text"
            name="email"
            onChange={emailHandler}
            defaultValue={emailValue}
            onBlur={validateEmailHandler}
            required
          />
          {validateEmailValue && (
            <span className="absolute top-4 right-3">
              <svg
                className=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 23C5.9 23 1 18.1 1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12C23 18.1 18.1 23 12 23ZM12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3ZM13 12V8C13 7.4 12.6 7 12 7C11.4 7 11 7.4 11 8V12C11 12.6 11.4 13 12 13C12.6 13 13 12.6 13 12ZM13 16C13 15.4 12.6 15 12 15C11.4 15 11 15.4 11 16C11 16.6 11.5 17 12 17C12.5 17 13 16.6 13 16Z"
                  fill="#A3270C"
                />
              </svg>
            </span>
          )}
          {validateEmailValue && (
            <p className="text-validationRed">This field is required</p>
          )}
        </div>
        <div className="flex w-full pb-8 sm-mobile:flex-col sm-mobile:space-x-0 sm:flex-row sm:space-x-2 ">
          <div className=" flex w-1/2 flex-col sm-mobile:w-full sm-mobile:pb-8 ">
            <label
              htmlFor="work-start"
              className="pb-2 font-semibold text-baseDark"
            >
              Work start *
            </label>
            <div className="relative flex items-center justify-between">
              <input
                className="h-10 w-full border border-baseDark pl-1 uppercase text-lightGray"
                type="date"
                name=""
                id="work-start"
                onChange={startDateHandler}
                required
              />
              <span className="pointer-events-none absolute top-0 right-0 flex h-10 w-10 items-center justify-center  border-l border-baseDark  ">
                <svg
                  className="inline"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 1C8.55228 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3H19C20.6569 3 22 4.34315 22 6V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V6C2 4.34315 3.34315 3 5 3H7V2C7 1.44772 7.44772 1 8 1ZM7 5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44772 19.5523 5 19 5H17V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V5ZM20 11H4V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V11Z"
                    fill="#222222"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex w-1/2 flex-col sm-mobile:w-full sm-mobile:pb-8">
            <label
              htmlFor="work-end"
              className="pb-2 font-semibold text-baseDark "
            >
              Work end *
            </label>
            <div className="relative flex items-center justify-between">
              <input
                className={`h-10 w-full border pl-1 uppercase text-lightGray ${
                  validateDate
                    ? "border-2 border-validationRed outline-validationRed"
                    : "border-baseDark"
                }`}
                type="date"
                name=""
                id="work-end"
                onChange={endDateHandler}
                onBlur={validateDateHandler}
                required
              />
              <span className="pointer-events-none absolute top-0 right-0 flex h-10 w-10 items-center justify-center  border-l border-baseDark  ">
                <svg
                  className="inline"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 1C8.55228 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3H19C20.6569 3 22 4.34315 22 6V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V6C2 4.34315 3.34315 3 5 3H7V2C7 1.44772 7.44772 1 8 1ZM7 5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44772 19.5523 5 19 5H17V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V5ZM20 11H4V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V11Z"
                    fill="#222222"
                  />
                </svg>
              </span>
              {validateDate && (
                <span className="absolute top-2 right-[52px]">
                  <svg
                    className=""
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 23C5.9 23 1 18.1 1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12C23 18.1 18.1 23 12 23ZM12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3ZM13 12V8C13 7.4 12.6 7 12 7C11.4 7 11 7.4 11 8V12C11 12.6 11.4 13 12 13C12.6 13 13 12.6 13 12ZM13 16C13 15.4 12.6 15 12 15C11.4 15 11 15.4 11 16C11 16.6 11.5 17 12 17C12.5 17 13 16.6 13 16Z"
                      fill="#A3270C"
                    />
                  </svg>
                </span>
              )}
            </div>
            {validateDate && (
              <p className="text-validationRed">This date is not correct</p>
            )}
          </div>
        </div>
        <button
          disabled={validateNameValue || validateEmailValue || validateDate}
          type="submit"
          className="bg-baseDark py-3 text-lg text-grayishWhite duration-1000 hover:scale-90 sm-mobile:px-10 mobile:px-12 sm:px-14 xl:px-28"
        >
          Submit
        </button>
      </form>
    </Card>
  );
};

export default EmployeeForm;
