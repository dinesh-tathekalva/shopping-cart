import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductDetail from './containers/productDetail';
import ProductListing from './containers/ProductListing';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <ProductDetail /> */}
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route>404 Page Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
