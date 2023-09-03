import "bootstrap/dist/css/bootstrap.min.css";
import GridBasicExample from "./Components/OldForm";
import NewForm from "./Components/NewForm";

function App() {
  return (
    <>
      <div className="bg-success p-3 ">
        <img
          src="./src/Components/logo-white.png"
          className="img-fluid w-50"
          alt="..."
        />
        <h3 className="w-50 mx-2 text-light  mt-2 ">Silicone Calc</h3>
      </div>
      <div className="mt-2">
        <GridBasicExample />
        <div>
          <hr></hr>
        </div>
        <NewForm />
      </div>
    </>
  );
}

export default App;
