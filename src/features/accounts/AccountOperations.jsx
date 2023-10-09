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
      <h2>Your account operations</h2>
      <div>
        <label>Deposit</label>
        <input
          type="number"
          value={depositAmount}
          onChange={(e) => setDepositAmount(+e.target.value)}
        />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Pound</option>
        </select>
        <button onClick={handleDeposit} disabled={isLoading}>
          {isLoading ? "Converting... " : `Deposit ${depositAmount}`}
        </button>
      </div>

      <div>
        <label>Withdraw</label>
        <input
          type="number"
          value={withdrawalAmount}
          onChange={(e) => setWithdrawalAmount(+e.target.value)}
        />
        <button onClick={handleWithdrawal}>Withdraw {withdrawalAmount}</button>
      </div>

      <div>
        <label>Request Loan</label>
        <input
          type="number"
          placeholder="Loan Amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(+e.target.value)}
        />
        <input
          placeholder="Loan Purpose"
          value={loanPurpose}
          onChange={(e) => setLoanPupose(e.target.value)}
        />
        <button onClick={handleRequestLoan}>Request Loan</button>
      </div>

      {currentLoan > 0 && (
        <div>
          <span>
            Pay back ${currentLoan}({currentLoanPurpose})
          </span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      )}
    </div>
  );
}

export default AccountOperations;
