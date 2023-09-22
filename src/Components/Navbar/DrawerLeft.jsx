import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Box, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const NavMenu = [
  "Home",
  "Biographic Sketch",
  "Articles",
  "Papers",
  "Photos",
  "Videos",
  "Contact Me",
];
export const DrawerLeft = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerCloseOnClicked = () => {
    setOpen(false);
    console.log("Clicked");
  };
  return (
    <>
      <Box display="inline-block" ml="auto">
        <Button size="large" onClick={handleDrawerOpen} sx={{ color: "white" }}>
          <MenuIcon />
        </Button>
        <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
          <List>
            {NavMenu.map((data, key) => {
              let itemWithoutSpaces = data.replace(/\s/g, "").toLowerCase();
              return (
                <Box key={key}>
                  {itemWithoutSpaces === "home" ? (
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {" "}
                      <ListItemButton onClick={handleDrawerCloseOnClicked}>
                        <ListItemText primary={data} />
                      </ListItemButton>
                    </Link>
                  ) : (
                    <Link
                      to={`/${itemWithoutSpaces}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <ListItemButton onClick={handleDrawerCloseOnClicked}>
                        <ListItemText primary={data} />
                      </ListItemButton>
                    </Link>
                  )}
                </Box>
              );
            })}
          </List>
        </Drawer>
      </Box>
    </>
  );
};
