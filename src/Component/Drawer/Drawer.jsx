import React, { useState } from "react";
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
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";
import data from "./drawerList";
import SearchIcon from "@mui/icons-material/Search";
import "./drawer.css";
import Ezzy from "../../assets/test3.jpg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const drawerWidth = 240;
const DrawerComp = () => {
  const [open, setOpen] = useState(true);
  const [draw, setDraw] = useState(false);

  console.log(open);
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
            <IconButton onClick={() => setOpen(!open)}>
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
              <Badge color='secondary' badgeContent={<FiberManualRecordIcon />}>
                <NotificationsIcon />
              </Badge>
              <Avatar src={Ezzy} alt='image' />
              <div className='toolbarRight'>
                <Typography sx={{ marginTop: "2rem" }}>
                  Dr Abel Edwin <ArrowDropDownIcon />
                </Typography>
                <div className='date'>
                  <h4>
                    January 2022 <CalendarMonthIcon />
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />

      {open && (
        <Drawer
          open={open}
          style={{ width: 300 }}
          variant='permanent'
          className='drawer'
        >
          <div className='drawerContent'>
            <div className='drawerHead'>
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
                <IconButton onClick={() => setOpen(!open)}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
            </div>
            <Divider />

            <List>
              {data.map((item, index) => (
                <ListItem key={index}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <div className='logout'>
              <IconButton>
                <LogoutIcon />
                Logout
              </IconButton>
            </div>
          </div>
        </Drawer>
      )}
    </>
  );
};

export default DrawerComp;
