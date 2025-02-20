import RouteApp from "./router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <RouteApp/>
    </div>
  );
}

export default App;
