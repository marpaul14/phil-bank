import { useSelector } from "react-redux";
import CreateCustomer from "./features/customers/createCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <div className="bg-green-400 w-full h-screen pt-20">
      <div className="flex justify-center items-center py-8 ">
        <h1 className="text-4xl font-bold"> Phil-Bank 🏦</h1>
      </div>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <div className="text-lg flex justify-center items-center flex-col bg-[#f1ebeb] mx-20">
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </div>
      )}
    </div>
  );
}

export default App;
