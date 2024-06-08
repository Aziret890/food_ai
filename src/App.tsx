import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AllPages from "./components/AllPages";
import Test from "./components/Test";
import Order from "./components/order/Order";
import Faq from "./components/footer/faq/Faq";
import Adresses from "./components/footer/Adresses";
import Contacts from "./components/footer/Contacts";
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<AllPages />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/menu" element={<Test />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/adresses" element={<Adresses />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;