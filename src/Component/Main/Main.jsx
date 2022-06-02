import React from "react";
import "./main.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Overview from "./OverviewData";
import ImageReport from "../../assets/image 1.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BestSellingProducts from "./Bestselling/BestSellingProducts";
import ProgressReport from "./ProgressReport/ProgressReport";
import Summary from "./Summary/Summary";
import { Avatar, Divider } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import Chart from "./Chart/Chart";
import ProductAlert from "./ProductAlert/ProductAlert";
const Main = () => {
  return (
    <>
      <div className='main'>
        <div className='mainLeft'>
          <div className='mainoverview'>
            <h2 style={{ color: "#87459E" }}>Overview</h2>
            <div className='overview'>
              {Overview.map((view, index) => (
                <div key={index} className='view'>
                  {view.avatar}
                  <div className='view__info'>
                    <h3>{view.price}</h3>
                    <h4>{view.description}</h4>
                    <h5>
                      <TrendingUpIcon />
                      {view.profit}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='products'>
            <div className='products__content'>
              <h2>
                Best Selling Products <MoreHorizIcon />
              </h2>
              <BestSellingProducts />
            </div>
            <div className='pro'>
              <h2>
                Progress Report
                <MoreHorizIcon
                  style={{
                    color: "#87459E",
                  }}
                />
              </h2>
              <div className='progressReport'>
                <ProgressReport
                  style={{
                    color: "#87459E",
                  }}
                />
                <div className='progress__img'>
                  <img src={ImageReport} alt='inventory' />
                </div>
              </div>
            </div>
          </div>
          <div className='summary'>
            <h2>
              Sales Summary
              <MoreHorizIcon
                style={{
                  color: "#87459E",
                }}
              />
            </h2>
            <Summary />
          </div>
        </div>
        <div className='mainRight'>
          <div className='rightTop'>
            <Avatar src='+' alt='new' sx={{ background: "#F6DFFD" }} />
            <h2 className='stockh2'>Add New Stock</h2>
            <HistoryEduIcon sx={{ fontSize: "3rem" }} />
          </div>

          <div className='rightBottom'>
            <h2>
              Number of Units Sold
              <MoreHorizIcon
                style={{
                  color: "#87459E",
                }}
              />
            </h2>

            <Divider sx={{ marginBottom: "1rem" }} />
            {/* <div className='chart'>
              <Chart />
            </div> */}

            <ProductAlert />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
