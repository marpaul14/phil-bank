import { useSelector } from "react-redux";
import CreateCustomer from "./features/customers/createCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <div className="bg-[#D3D3D3] w-full h-screen flex justify-center items-center text-base">
      <div className="absolute top-60">
        <h1 className="text-4xl font-bold"> Phil-Bank 🏦</h1>
      </div>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <div className="text-lg flex justify-center items-center flex-col sm:flex-row-2 bg-[#f1ebeb] mx-20 border-4 border-black">
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </div>
      )}
    </div>
  );
}

export default App;
