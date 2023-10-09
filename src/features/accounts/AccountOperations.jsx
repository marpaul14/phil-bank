import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");

  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPupose] = useState("");
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
    setLoanPupose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div>
      <h2 className="py-3 text-xl px-2">Account Operations</h2>
      <div>
        <div className="py-3 px-5 space-x-4">
          <label>Deposit :</label>
          <input
            className="border-2 border-black"
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            className="border-2 border-black py-[0.20rem]"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <button
            className="border-2 border-black px-5"
            onClick={handleDeposit}
            disabled={isLoading}
          >
            {isLoading ? "Converting... " : "Deposit"}
          </button>
        </div>

        <div className="py-2 px-1 space-x-4">
          <label>Withdraw :</label>
          <input
            className="border-2 border-black"
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button
            className="border-2 border-black px-4"
            onClick={handleWithdrawal}
          >
            Withdraw
          </button>
        </div>

        <div className="py-2 px-1 space-x-4">
          <label>Request Loan :</label>
          <input
            className="border-2 border-black"
            type="number"
            placeholder="Loan Amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
          />
          <input
            className="border-2 border-black"
            placeholder="Loan Purpose"
            value={loanPurpose}
            onChange={(e) => setLoanPupose(e.target.value)}
          />
          <button
            className="border-2 border-black mt-4 px-4"
            onClick={handleRequestLoan}
          >
            Request Loan
          </button>
        </div>

        {currentLoan > 0 && (
          <div>
            <span>
              Pay back ${currentLoan}({currentLoanPurpose})
            </span>
            <button className="border-2 border-black" onClick={handlePayLoan}>
              Pay loan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
