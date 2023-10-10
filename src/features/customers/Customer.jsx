import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  return (
    <h2 className="relative text-3xl font-semibold border-b-2 border-blue-300/40 shadow-xl hover:scale-110 duration-1000">
      {" "}
      Welcome, {customer}!
    </h2>
  );
}

export default Customer;
