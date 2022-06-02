import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import StorefrontIcon from "@mui/icons-material/Storefront";
const Overview = [
  {
    avatar: (
      <MonetizationOnIcon
        style={{
          background: "#DAD7FE",
          fontSize: "3rem",
          color: "#6960F5",
          borderRadius: "50%",
        }}
      />
    ),
    price: "N1,200,430",
    description: "Total Sales",
    profit: "N180,560 (15.6%)",
  },
  {
    avatar: (
      <ProductionQuantityLimitsIcon
        style={{
          background: "#FFF5CC",
          fontSize: "3rem",
          color: "#FFB200",
          borderRadius: "50%",
        }}
      />
    ),
    price: "2,778",
    description: "Product Sold",
    profit: "361(9.6%)",
  },
  {
    avatar: (
      <StorefrontIcon
        style={{
          background: "#BCF4BC",
          fontSize: "3rem",
          color: "#005500",
          borderRadius: "50%",
        }}
      />
    ),
    price: "1,356",
    description: "Product in Stock",
    profit: "361(9.6%)",
  },
];

export default Overview;
