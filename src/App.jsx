import { useSelector } from "react-redux";
import CreateCustomer from "./features/customers/createCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <div className="bg-[#D3D3D3] w-full h-screen flex justify-center items-center text-base">
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <div className="bg-white h-[55%] w-[70%] rounded-3xl shadow-lg shadow-blue-300/70 relative flex flex-col justify-around items-center">
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </div>
      )}
    </div>
  );
}

export default App;
