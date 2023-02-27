import { useEffect, useState, useContext } from "react";
import Card from "../components/UI/Card";
import EmployeeItem from "../components/EmployeeItem";
import { NavLink } from "react-router-dom";
import { Context } from "../store/ContextProvider";

interface Employee {
  id: number;
  name: string;
  email: string;
  workStart: string;
  workEnd: string;
}

const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const context = useContext(Context);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch("http://localhost:3001/employees");
      const employees: Employee[] = await response.json();
      setEmployees(employees);
    };
    fetchEmployees();
  }, []);

  return (
    <Card>
      <div className="flex w-full py-10 sm-mobile:flex-col sm-mobile:px-4 mobile:px-8 sm:flex-row sm:items-center sm:justify-between sm:px-12 md:px-[68px]">
        <div className="text-4xl font-semibold sm-mobile:pb-4 sm:pb-0 ">
          Employees
        </div>
        <NavLink
          to={"/employees/addEmployee"}
          onClick={context.changeNavigationStatus}
          className="bg-baseDark px-8 py-3 text-lg text-grayishWhite duration-1000 hover:scale-90 mobile:text-center sm:text-start "
        >
          Add Employee
        </NavLink>
      </div>
      <ul className="w-full pb-20 text-center sm-mobile:px-4 mobile:px-8 sm:px-12 md:px-[68px] ">
        {employees.map((employee) => (
          <EmployeeItem
            key={employee.id}
            id={employee.id}
            name={employee.name}
            email={employee.email}
          />
        ))}
      </ul>
    </Card>
  );
};

export default EmployeeList;
