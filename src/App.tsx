import { Route, Routes } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/public/Home";
import Shop from "./pages/public/Shop";
import Categories from "./pages/public/Categories";
import Deals from "./pages/public/Deals";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";


const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/deals" element={<Deals/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;