import { Route, Routes } from "react-router-dom"
import Products from "./components/Products"
import CreateProduct from "./components/CreateProduct"
import ProductDetails from "./components/ProductDetails"
import EditProduct from "./components/EditProduct"

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Products />}
      />
      <Route
        path="/product-create"
        element={<CreateProduct />}
      />
      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />
      <Route
        path="/product/edit/:id"
        element={<EditProduct />}
      />
    </Routes>
  )
}

export default App
