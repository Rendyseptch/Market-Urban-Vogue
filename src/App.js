import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> Halaman Home */}
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 Not Found!!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// ini adalah menamvah sesuatu