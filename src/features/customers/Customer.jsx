import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  return (
    <h2 className="text-2xl py-2 font-semibold">👋 Welcome, {customer}!</h2>
  );
}

export default Customer;
