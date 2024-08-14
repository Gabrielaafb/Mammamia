import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
{/*import Home from "./components/Home";*/}
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <>
      <Navbar/>
      {/* <Home /> */}
      <Register/>
      <Login/>
      <Footer/>
    </>
  );
}

export default App;

