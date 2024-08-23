import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
// import Home from "./components/Home";
// import Register from "./components/Register";
// import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Cart />
      <Footer />
    </>
  );
}

export default App;
