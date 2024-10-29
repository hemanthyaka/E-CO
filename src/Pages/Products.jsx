import { Box } from "@mui/material";
import ResponsiveCard from "./Cards";
import CartNotificationBar from "./AddtocartBar";

const Products = ({ products }) => {
    return (
        <Box width="100%" minHeight="100vh" paddingTop="69px" pb="50px">
        {/* <Typography variant="h6" align="center" sx={{bgcolor:'#ffa726',p:2}}>PRODUCTS</Typography> */}
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} p={2}>
          {products.map((product, index) => (
            <ResponsiveCard key={index} data={product} />
          ))}
        </Box>
        <CartNotificationBar />
      </Box>
    )
};
export default Products;