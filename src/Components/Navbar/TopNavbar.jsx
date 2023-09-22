import React from "react";
import AppBar from "@mui/material/AppBar";
import { Avatar, Box, Stack, Toolbar, Typography, Button } from "@mui/material";
import { DrawerLeft } from "./DrawerLeft";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const NavMenu = [
  "HOME",
  "BIOGRAPHIC SKETCH",
  "ARTICLES",
  "PAPERS",
  "PHOTOS",
  "VIDEOS",
  "CONTACT ME",
];
const TopNavbar = () => {
  const isMdOrLess = useMediaQuery("(max-width:1140px)");
  const Item = ({ children }) => {
    return <div>{children}</div>;
  };
  return (
    <>
      <AppBar sx={{ backgroundColor: "#59bfa9" }} position="sticky">
        <Toolbar>
          <Box display="flex" alignItems="center">
            <Avatar alt="logo Image" src="./Images/logo.png" />
            <Typography m={1} variant="h6" fontWeight="bold">
              Ram Krishna Paudel
            </Typography>
          </Box>
          {isMdOrLess ? (
            <DrawerLeft />
          ) : (
            <>
              <Box m="auto">
                <Stack direction="row" spacing={2}>
                  {NavMenu.map((data, key) => {
                    let itemWithoutSpaces = data
                      .replace(/\s/g, "")
                      .toLowerCase();
                    return itemWithoutSpaces == "home" ? (
                      <Link to="/">
                        <div key={key}>
                          <Item>
                            <Button
                              size="large"
                              sx={{
                                color: "white",
                                ":hover": {
                                  backgroundColor: "white",
                                  color: "black",
                                },
                              }}
                            >
                              {data}
                            </Button>
                          </Item>
                        </div>
                      </Link>
                    ) : (
                      <>
                        <Link to={`/${itemWithoutSpaces}`}>
                          <div key={key}>
                            <Item>
                              <Button
                                size="large"
                                sx={{
                                  color: "white",
                                  ":hover": {
                                    backgroundColor: "white",
                                    color: "black",
                                  },
                                }}
                              >
                                {data}
                              </Button>
                            </Item>
                          </div>
                        </Link>
                      </>
                    );
                  })}
                </Stack>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopNavbar;
