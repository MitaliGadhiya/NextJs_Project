"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SpaIcon from "@mui/icons-material/Spa";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloudIcon from "@mui/icons-material/Cloud";
import Image from "next/image";
import { mainTheme } from "@/utils/theme/DefaultTheme";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const HeaderLogin = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = (open: boolean) => (): void => {
    setDrawerOpen(open);
  };
  const [selectedLink, setSelectedLink] = useState("");

  const handleLinkClick = (link: any) => {
    setSelectedLink(link);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: mainTheme.palette.primary.main,
        boxShadow: "none",
        width: "100vw",
        height: "90px",
        justifyContent: "center",
        fontFamily: mainTheme.typography.fontFamily,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 1rem",
        }}
      >
        <Box display="flex" alignItems="center" gap={3}>
          <Image
            src={"/images/logo.png"}
            alt={"Logo Image"}
            width={120}
            height={50}
          />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 5,
            }}
          >
            <a
              href="/component/MainPage"
              onClick={() => handleLinkClick("flowers")}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{
                  color:
                    selectedLink === "flowers"
                      ? mainTheme.palette.action.hover // Active color
                      : mainTheme.palette.primary.contrastText, // Default color
                  fontWeight: "bold",
                  fontFamily: mainTheme.typography.fontFamily,
                  textDecoration: selectedLink === "flowers" ? "none" : "none", // Remove default underline
                  paddingTop: selectedLink === "flowers" ? "5px" : "0", // Padding top if selected
                  borderBottom:
                    selectedLink === "flowers"
                      ? `2px solid ${mainTheme.palette.action.hover}`
                      : "none", // Custom underline
                  paddingBottom: selectedLink === "flowers" ? "5px" : "0", // Space between text and underline
                  "&:hover": {
                    color: mainTheme.palette.action.hover, // Hover color
                    borderBottom: `2px solid ${mainTheme.palette.action.hover}`, // Hover underline
                    paddingBottom: "5px", // Space between text and underline on hover
                  },
                }}
              >
                flowers
              </Typography>
            </a>

            <a
              href="/shadows"
              onClick={() => handleLinkClick("shadows")}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{
                  color:
                    selectedLink === "shadows"
                      ? mainTheme.palette.action.hover // Active color
                      : mainTheme.palette.primary.contrastText, // Default color
                  fontWeight: "bold",
                  fontFamily: mainTheme.typography.fontFamily,
                  textDecoration: selectedLink === "shadows" ? "none" : "none", // Remove default underline
                  paddingTop: selectedLink === "shadows" ? "5px" : "0", // Padding top if selected
                  borderBottom:
                    selectedLink === "shadows"
                      ? `2px solid ${mainTheme.palette.action.hover}`
                      : "none", // Custom underline
                  paddingBottom: selectedLink === "shadows" ? "5px" : "0", // Space between text and underline
                  "&:hover": {
                    color: mainTheme.palette.action.hover, // Hover color
                    borderBottom: `2px solid ${mainTheme.palette.action.hover}`, // Hover underline
                    paddingBottom: "5px", // Space between text and underline on hover
                  },
                }}
              >
                shadows
              </Typography>
            </a>

            <a
              href="/ripples"
              onClick={() => handleLinkClick("ripples")}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{
                  color:
                    selectedLink === "ripples"
                      ? mainTheme.palette.action.hover // Active color
                      : mainTheme.palette.primary.contrastText, // Default color
                  fontWeight: "bold",
                  fontFamily: mainTheme.typography.fontFamily,
                  textDecoration: selectedLink === "ripples" ? "none" : "none", // Remove default underline
                  paddingTop: selectedLink === "ripples" ? "5px" : "0", // Padding top if selected
                  borderBottom:
                    selectedLink === "ripples"
                      ? `2px solid ${mainTheme.palette.action.hover}`
                      : "none", // Custom underline
                  paddingBottom: selectedLink === "ripples" ? "5px" : "0", // Space between text and underline
                  "&:hover": {
                    color: mainTheme.palette.action.hover, // Hover color
                    borderBottom: `2px solid ${mainTheme.palette.action.hover}`, // Hover underline
                    paddingBottom: "5px", // Space between text and underline on hover
                  },
                }}
              >
                ripples
              </Typography>
            </a>

            <IconButton color="inherit">
              <MoreHorizIcon />
            </IconButton>
          </Box>

          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer(true)}
            color="inherit"
            aria-label="open menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 4,
          }}
        >
          <IconButton color="inherit">
            <LocalFloristIcon />
          </IconButton>
          <IconButton color="inherit">
            <SpaIcon />
          </IconButton>
          <IconButton color="inherit">
            <AutoAwesomeIcon />
          </IconButton>
          <IconButton color="inherit">
            <CloudIcon />
          </IconButton>

          <Button
            variant="contained"
            className="border"
            sx={{
              backgroundColor: mainTheme.palette.action.focus,
              color: mainTheme.palette.primary.contrastText,
              width: "150px",
              height: "50px",
              fontSize: "0.8rem",
              paddingLeft: "30px",
              wordSpacing: "10px",
            }}
          >
            Start
          </Button>
        </Box>
      </Toolbar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: mainTheme.palette.primary.main,
            color: mainTheme.palette.primary.contrastText,
          },
        }}
      >
        <Box
          sx={{
            width: 250,
            height: "100%",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "1rem",
            }}
          >
            <IconButton onClick={toggleDrawer(false)} color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            <ListItem>
              <ListItemButton
                component="a"
                href="/component/MainPage"
                style={{ cursor: "pointer" }}
              >
                <ListItemText primary="flowers" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="/shadows">
                <ListItemText primary="shadows" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="/ripples">
                <ListItemText primary="ripples" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="/start">
                <ListItemText primary="Start" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};
export default HeaderLogin;
