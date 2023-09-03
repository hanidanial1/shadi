import "bootstrap/dist/css/bootstrap.min.css";
import GridBasicExample from "./Components/OldForm";
import NewForm from "./Components/NewForm";

function App() {
  return (
    <>
      <div className="bg-success p-3  text-center">
        <img
          src="https://res.cloudinary.com/ddcbxytoh/image/upload/v1693723748/logo-white_ywl9wj.png"
          className="img-fluid w-50"
          alt="..."
        />
        <h3 className=" mx-2 text-light  mt-2 ">Silicone Calc</h3>
      </div>
      <div className="mt-2">
        <GridBasicExample />
        <div>
          <hr className="w-75 m-auto mb-3 mt-3"/>
        </div>
        <NewForm />
      </div>
    </>
  );
}

export default App;
