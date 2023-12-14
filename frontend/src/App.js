import logo from './logo.svg';
import Navbar from "./components/Navbar";
import './App.css';
import './styles/Global.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Profile from "./pages/profile";
import CreateProduct from './pages/createProduct';
function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/shop" element={ <Shop/> }/>
          <Route path="/profile" element={ <Profile/> }/>
          <Route path="/createProduct" element={ <CreateProduct/> }/>
        </Routes>
      </main>
      <section>
        <h1>Welcome</h1>
      </section>
    </div>
  );
}

export default App;
