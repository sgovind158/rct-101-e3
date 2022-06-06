import "./App.css";
import {Route, Routes,} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { Product } from "./components/Products/Product";
import RequiredAuth from "./hoc/RequiredAuth";
function App() {
  return (
    <div className="App">
      {
        // Code here
        <>
        <Navbar/>
        <Routes>
          <Route path ="/" element = {<Home/>} />
          <Route  Routh path ="/login" element = {<Login/>} />

          <Route  Routh path ="/produts" element = {
           < RequiredAuth>
            <Products/>
             </RequiredAuth>
          } />
          <Route  Routh path ="/product" element = {
            < RequiredAuth>
          <Product/>
          </RequiredAuth>
          } />
        </Routes>
        </>
      }
    </div>
   
  );
}

export default App;
