import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return (
    <div className="flex justify-center items-center space-x-4">
      <span>Account Balance:</span>
      <div className="py-1 px-3 my-2 rounded-2xl shadow-lg border-2 hover:cursor-default hover:scale-110">
        {formatCurrency(balance)}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);
