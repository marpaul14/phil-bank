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
    <div className="bg-white h-[55%] w-[70%] flex flex-col justify-center items-center rounded-3xl shadow-lg shadow-blue-300/70">
      <div className="absolute top-60 text-center">
        <h1 className="text-4xl font-bold border-b border-black hover:text-[#888585] cursor-default hover:border-[#888585] duration-300">
          Phil-Bank
        </h1>
      </div>
      <h2 className="text-xl font-semibold flex justify-center items-center py-5">
        Create New Customer
      </h2>

      <div className="relative grid place-content-around h-40">
        <div>
          <label className="px-5 font-semibold">Customer Full Name :</label>
          <input
            className="bg-zinc-200 w-[90%] rounded-lg text-center p-[0.5em] border-none focus:outline-[#888585]"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div>
          <label className="px-5 font-semibold">National ID :</label>
          <input
            className="bg-zinc-200 w-[90%] rounded-lg text-center p-[0.5em] border-none focus:outline-[#888585]"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
      </div>
      <span className="flex justify-center items-center py-5">
        <button
          onClick={handleClick}
          className="border-2 px-2 py-1 rounded-lg cursor-default delay-200 bg-zinc-200/50 hover:bg-zinc-400 focus:outline-[#888585]"
        >
          Proceed...
        </button>
      </span>
    </div>
  );
}

export default Customer;
