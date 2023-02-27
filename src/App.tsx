import { Routes, Route, BrowserRouter } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import Navbar from "./components/UI/Navbar";
import ContextProvider from "./store/ContextProvider";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route
            path="/employees/addEmployee"
            element={<EmployeeForm action={"add"} title={"Add employee"} />}
          />
          <Route
            path="/employees/:id"
            element={<EmployeeForm action={"edit"} title={"Edit employee"} />}
          />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
