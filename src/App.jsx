import CreateCustomer from "./features/customers/createCustomer";

function App() {
  return (
    <div className="bg-green-400 w-full h-screen pt-20">
      <div className="flex justify-center items-center py-8 ">
        <h1 className="text-4xl font-bold"> Phil-Bank 🏦</h1>
      </div>
      <CreateCustomer />
    </div>
  );
}

export default App;
