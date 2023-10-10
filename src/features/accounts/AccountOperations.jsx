import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");

  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();

  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    balance,
    isLoading,
  } = useSelector((store) => store.account);
  console.log(balance);

  function handleDeposit() {
    if (!depositAmount) return;

    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("USD");
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;

    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;

    dispatch(requestLoan(loanAmount, loanPurpose));

    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div className="bg-white">
      <h2 className="py-3 text-xl px-2 text-center hover:scale-110 duration-500">
        Account Operations
      </h2>
      <div className="grid grid-row-3">
        <div className="px-4 space-x-3 space-y-2">
          <label>Deposit:</label>
          <input
            className="bg-zinc-200 w-[76%] rounded-lg text-center p-[0.5em] border-none focus:outline-[#888585]"
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <div className="flex justify-start pl-[3.5rem] space-x-3">
            <select
              className="border-2 px-2 py-1 rounded-lg cursor-default delay-200 bg-zinc-200/50 hover:bg-zinc-400 focus:outline-[#888585]"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">US Dollar</option>
              <option value="EUR">Euro</option>
              <option value="GBP">British Pound</option>
            </select>
            <button
              className="border-2 px-2 py-1 rounded-lg cursor-default delay-200 bg-zinc-200/50 hover:bg-zinc-400 focus:outline-[#888585]"
              onClick={handleDeposit}
              disabled={isLoading}
            >
              {isLoading ? "Converting... " : "Deposit"}
            </button>
          </div>
        </div>

        <div className="flex px-3 space-x-2 pt-4 items-center">
          <label>Withdraw:</label>
          <input
            className="bg-zinc-200 w-[90%] rounded-lg text-center p-[0.5em] border-none focus:outline-[#888585]"
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button
            className="border-2 px-2 py-1 rounded-lg cursor-default delay-200 bg-zinc-200/50 hover:bg-zinc-400 focus:outline-[#888585]"
            onClick={handleWithdrawal}
          >
            Withdraw
          </button>
        </div>

        <div className="flex flex-cols-2 py-3 px-3 space-x-2 items-center whitespace-nowrap">
          <label className="">Request Loan:</label>
          <input
            className="bg-zinc-200 w-[60%] rounded-lg text-center p-[0.5em] border-none focus:outline-[#888585]"
            type="number"
            placeholder="Loan Amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
          />

          <input
            className="bg-zinc-200 w-[60%] rounded-lg text-center p-[0.5em] border-none focus:outline-[#888585]"
            placeholder="Loan Purpose"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
          />
          <button
            className="border-2 px-2 py-1 rounded-lg cursor-default delay-200 bg-zinc-200/50 hover:bg-zinc-400 focus:outline-[#888585]"
            onClick={handleRequestLoan}
          >
            Request Loan
          </button>
        </div>

        {currentLoan > 0 && (
          <div className="py-4 px-1 space-x-5 indent-2">
            <span className="font-semibold">
              Pay back ${currentLoan}
              <span className="italic pl-2">({currentLoanPurpose})</span>
            </span>

            <button
              className="border-2 px-2 py-1 rounded-lg cursor-default delay-200 bg-zinc-200/50 hover:bg-zinc-400 focus:outline-[#888585]"
              onClick={handlePayLoan}
            >
              Pay loan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
