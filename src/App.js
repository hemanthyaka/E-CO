import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import CartPage from "./Pages/AddedCartDetails"; // Import the CartPage
import FullCardPage from "./Pages/CardFullDetails"; // Import the FullCardPage
import axios from "axios"; // Import axios
import './Redux/Store';
import './App.css';
import CartNotificationBar from "./Pages/AddtocartBar";
import Products from "./Pages/Products";
import PaymentForm from "./Pages/Payment";
import UserCard from "./Pages/Users/UserCard";
import Users from "./Pages/Users/Users";
// import LandingPage from "./Pages/LandingPage";

const App = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [notificationBarVisible, setNotificationBarVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get("https://fakestoreapi.com/products");
        const productsData = productsResponse.data.map(item => ({
          ...item,
          type: "product"
        }));
        setProducts(productsData);
        console.log(productsData);
      } catch (error) {
        alert("Error fetching data: " + error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
        const usersData = usersResponse.data.map(user => ({
          ...user,
          type: "user"
        }));
        setUsers(usersData);
        console.log(usersData);
      } catch (error) {
        alert("Error fetching data: " + error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Box minWidth={'500px'} >
        <Navbar />
        <Routes>
          <Route path="*" element={<Home products={products} />} />
          {/* <Route path="/home" element={<Home products={products} />} /> Pass products to Home */}
          <Route path="/cart" element={<CartPage setNotificationBarVisible={setNotificationBarVisible}  />} /> {/* Route for CartPage */}
          <Route path="/product/:id" element={<FullCardPage products={products}  setNotificationBarVisible={setNotificationBarVisible} />} /> {/* Pass products to FullCardPage */}
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/users" element={<Users user={users} />} />
        <Route path="/payment" element={<PaymentForm />} />
        </Routes>
        {notificationBarVisible && <CartNotificationBar />}
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
