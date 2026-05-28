import { Route, Routes } from "react-router-dom";
import Home from "./pages/public/Home";
import Shop from "./pages/public/Shop";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Shop/>}/>
      </Routes>
    </>
  );
}

export default App;