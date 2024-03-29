import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const linksArr = ["home", "diaries", "auth"];
const loggedInLinks = ["home", "diaries", "add", "profile"];

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar value={1} sx={{ bgcolor: "transparent", height: 60, position: "sticky" }}>
      <Toolbar>
        <TravelExploreIcon sx={{ color: "black" }} />
        <Tabs value={value} onChange={(e, val) => setValue(val)} sx={{ ml: "auto", textDecoration: "none" }}>
          {isLoggedIn
            ?loggedInLinks.map((link) => (
              <Tab
                LinkComponent={Link}
                to={`/${link === "home" ? "" : link}`}
                sx={{
                  textDecoration: "none",
                  ":hover": {
                    textDecoration: "underline",
                    textUnderlineOffset: "18px",
                  },
                }}
                key={link}
                label={link}
              />
            ))
            : linksArr.map((link) => (
              <Tab
                LinkComponent={Link}
                to={`/${link === "home" ? "" : link}`}
                sx={{
                  textDecoration: "none",
                  ":hover": {
                    textDecoration: "underline",
                    textUnderlineOffset: "18px",
                  },
                }}
                key={link}
                label={link}
              />
            ))
          }
        



        </Tabs>
      </Toolbar>


    </AppBar>
  );

};

export default Header;
