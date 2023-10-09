function AccountOperations() {
  return (
    <div>
      <h2>Your account operations</h2>
      <div>
        <input type="number" />
        <select>
          <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Pound</option>
        </select>
        <button>Deposit</button>
      </div>

      <div>
        <label>Withdraw</label>
        <input type="number" />
        <button>Withdraw</button>
      </div>

      <div>
        <label>Request Loan</label>
        <input type="number" placeholder="Loan Amount" />
        <input placeholder="Loan Purpose" />
        <button>Request Loan</button>
      </div>
    </div>
  );
}

export default AccountOperations;
