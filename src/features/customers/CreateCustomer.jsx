import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalId || createdAt) return;
    dispatch(createCustomer(fullName, nationalId, createdAt));
  }

  return (
    <div className="bg-[#f1ebeb] mx-20">
      <h2 className="text-xl font-semibold flex justify-center items-center py-5">
        Create New Customer
      </h2>
      <div>
        <div className="flex justify-center items-center space-y-3 flex-col mx-auto ">
          <div>
            <label className="px-5 font-semibold">Customer Full Name :</label>
            <input
              className="border-2 border-black"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div>
            <label className="pl-6 font-semibold">National ID :</label>
            <input
              className="border-2 border-black ml-[5rem]"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
            />
          </div>
        </div>
        <span className="flex justify-center items-center py-5">
          <button
            onClick={handleClick}
            className="border-2 border-black py- px-2"
          >
            Proceed...
          </button>
        </span>
      </div>
    </div>
  );
}

export default Customer;
