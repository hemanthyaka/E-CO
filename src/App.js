import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import CartPage from "./Pages/AddedCartDetails";
import FullCardPage from "./Pages/CardFullDetails";
import axios from "axios";
import "./Redux/Store";
import "./App.css";
import CartNotificationBar from "./Pages/AddtocartBar";
import Products from "./Pages/Products";
import Users from "./Pages/Users/Users";
import PaymentPage from "./Pages/PaymentPage";
import Loader from "./Components/Loader";

const App = () => {
  return (
    <Router>
      <Box minWidth="500px">
        <Navbar />
        <MainContent /> {/* Move all routes into a separate component */}
        <Footer />
      </Box>
    </Router>
  );
}

const MainContent = () => {
  const [loading, setLoading] = useState(true); // Loader state
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [notificationBarVisible, setNotificationBarVisible] = useState(false);

  const location = useLocation(); // Now `useLocation` is safely within Router context

  useEffect(() => {
    // Show loader for 3 seconds on route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data.map(item => ({ ...item, type: "product" })));
        console.log(response.data);
      } catch (error) {
        alert("Error fetching products: " + error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data.map(user => ({ ...user, type: "user" })));
      } catch (error) {
        alert("Error fetching users: " + error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="*" element={<Home products={products} />} />
          <Route path="/cart" element={<CartPage setNotificationBarVisible={setNotificationBarVisible} />} />
          <Route path="/product/:id" element={<FullCardPage products={products} setNotificationBarVisible={setNotificationBarVisible} />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/users" element={<Users user={users} />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      )}
      {notificationBarVisible && <CartNotificationBar />}
    </>
  );
};

export default App;
