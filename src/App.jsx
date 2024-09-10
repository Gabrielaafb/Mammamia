import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Pizza from "./components/Pizza"
// import Cart from "./components/Cart";
//import Home from "./components/Home";
// import Register from "./components/Register";
// import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Pizza />
      {/*<Home />*/}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      <Footer />
    </>
  );
}

export default App;
