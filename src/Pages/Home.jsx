import React from "react";
import LandingPage from "./Landingpages/LandingPage";
import { Box } from "@mui/material";

const Home = ({products}) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Fetch products
  //       const productsResponse = await axios.get("https://fakestoreapi.com/products");
  //       const productsData = productsResponse.data.map(item => ({
  //         ...item,
  //         type: "product"
  //       }));
  //       setProducts(productsData);
  //      }
  //      catch (error) {
  //       alert("Error fetching data: " + error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Box width="100%"  >
       <LandingPage/>
    </Box>
  );
};

export default Home;
