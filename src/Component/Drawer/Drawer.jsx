import React, { useState, useEffect } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  IconButton,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Badge,
  Avatar,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";
import data from "./drawerList";
import SearchIcon from "@mui/icons-material/Search";
import "./drawer.css";
import Ezzy from "../../assets/test3.jpg";
import Rectangle from "../../assets/Rectangle.png";

const drawerWidth = 240;
const DrawerComp = () => {
  // const [clicked, setClicked] = useState(true);

  const handleClick = (e) => {
    const ul = e.target.closest("ul");
    const el = e.target.closest("li");
    // for collecting siblings
    let siblings = [];
    let getSiblings = function (e) {
      // if no parent, return no sibling
      if (!ul) {
        return siblings;
      }
      // first child of the parent node
      let sibling = ul.firstChild;

      // collecting siblings
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
          siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
      }
      console.log(siblings);
      return siblings;
    };
    getSiblings();
    siblings.map((sib, index) => sib.classList.remove("active"));
    el.classList.add("active");
    // console.log(e.target.closest("ul"));
    // const ul = e.target.closest("ul");
    // const el = e.target.closest("li");
    // const children = ul.children;
    // console.log(children);
    // // children && children.classList.remove("active");
    // children.classList.toggle("active");
    // el.classList.add("active");

    // const nextSiblings = el.nextSibling;
    // const prevSiblings = el.previousSibling;
    // nextSiblings && nextSiblings.classList.remove("active");
    // prevSiblings && prevSiblings.classList.remove("active");
    // el.classList.add("active");
  };
  const [innerWidth, setInnerWidth] = useState({
    width: undefined,
  });
  const [bigDraw, setBigDraw] = useState(true);
  const [smallDraw, setSmallDraw] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <AppBar
        elevation={0}
        position='fixed'
        sx={{
          // width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          background: " #E5E5E5",
          color: "#030303",
          paddingTop: "0",
          paddingBottom: "0",
        }}
      >
        <Toolbar>
          <div className='menu__icons'>
            <IconButton onClick={() => setSmallDraw(!smallDraw)}>
              <MenuIcon />
            </IconButton>
          </div>
          <div className='toolbar'>
            <div className='searchbar'>
              <SearchIcon
                sx={{ fontSize: "3rem", color: "#EFE7E6", marginTop: "1rem" }}
              />
              <InputBase variant='filled' fullWidth placeholder='Search...' />
            </div>
            <div className='farRight'>
              <Badge color='secondary' badgeContent={5}>
                <NotificationsIcon />
              </Badge>
              <Avatar src={Ezzy} alt='image' />
              <div className='toolbarRight'>
                <h2 className='toolbarH2' sx={{ marginTop: "2rem" }}>
                  Dr Abel Edwin
                  <ArrowDropDownIcon />
                </h2>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar style={{ marginBottom: "38px" }} />
      {/* <Toolbar /> */}

      <Drawer
        open={innerWidth.width > 800 ? bigDraw : smallDraw}
        hideBackdrop
        transitionDuration={1000}
        ModalProps={{
          disableScrollLock: true,
        }}
      >
        <div className='drawerContent'>
          <div className='drawerHead'>
            <img src={Rectangle} alt='rec' />
            <Typography
              sx={{
                fontSize: "1.5rem",
                color: "#87459E",
                fontWeight: "900",
                boxShadow: "5px 5px 5px  #9e4589",
                border: "none",
              }}
            >
              StockBoard
            </Typography>
            <div className='menu__icons'>
              <IconButton onClick={() => setSmallDraw(!smallDraw)}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
          </div>
          <Divider />

          <List>
            {data.map((item, index) => (
              <ListItem key={index} onClick={(e) => handleClick(e)}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: bigDraw ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={(e) => {
                    if (innerWidth.width > 800) setBigDraw(true);
                    if (innerWidth.width < 800) setSmallDraw(!smallDraw);
                    // setClicked(true);
                  }}
                  // className={clicked ? "active" : ""}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: bigDraw ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{ opacity: bigDraw ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <div className='logout'>
            <IconButton style={{ color: "#FE6F63" }}>
              <LogoutIcon />
              Logout
            </IconButton>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerComp;
