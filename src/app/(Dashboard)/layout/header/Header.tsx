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
import Image from "next/image";
import {
  emeraldGreenTheme,
  frostedLavenderTheme,
  lightTheme,
  mainTheme,
  midnightTheme,
  sunsetOrangeTheme,
} from "@/utils/theme/DefaultTheme";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

interface props {
  selectedTheme:
    | typeof mainTheme
    | typeof lightTheme
    | typeof midnightTheme
    | typeof emeraldGreenTheme
    | typeof frostedLavenderTheme
    | typeof sunsetOrangeTheme;
  image: string | null;
}

const Header = (props: props) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = (open: boolean) => (): void => {
    setDrawerOpen(open);
  };
  const [selectedLink, setSelectedLink] = useState("flowers");

  const handleLinkClick = (link: any) => {
    setSelectedLink(link);
  };

  const storedDataString: any = localStorage.getItem("registerFormData");

  const storedData = JSON.parse(storedDataString);

  const fname = storedData.fname;

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: props.selectedTheme.palette.primary.main,
        boxShadow: "none",
        width: "100vw",
        height: "90px",
        justifyContent: "center",
        fontFamily: props.selectedTheme.typography.fontFamily,
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
                      ? props.selectedTheme.palette.action.hover
                      : props.selectedTheme.palette.primary.contrastText,
                  fontWeight: "bold",
                  fontFamily: props.selectedTheme.typography.fontFamily,
                  textDecoration: selectedLink === "flowers" ? "none" : "none", 
                  paddingTop: selectedLink === "flowers" ? "5px" : "0", 
                  borderBottom:
                    selectedLink === "flowers"
                      ? `2px solid ${props.selectedTheme.palette.action.hover}`
                      : "none", 
                  paddingBottom: selectedLink === "flowers" ? "5px" : "0", 
                  "&:hover": {
                    color: props.selectedTheme.palette.action.hover, 
                    borderBottom: `2px solid ${props.selectedTheme.palette.action.hover}`,
                    paddingBottom: "5px",
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
                      ? props.selectedTheme.palette.action.hover 
                      : props.selectedTheme.palette.primary.contrastText, 
                  fontWeight: "bold",
                  fontFamily: props.selectedTheme.typography.fontFamily,
                  textDecoration: selectedLink === "shadows" ? "none" : "none", 
                  paddingTop: selectedLink === "shadows" ? "5px" : "0", 
                  borderBottom:
                    selectedLink === "shadows"
                      ? `2px solid ${props.selectedTheme.palette.action.hover}`
                      : "none", 
                  paddingBottom: selectedLink === "shadows" ? "5px" : "0",
                  "&:hover": {
                    color: props.selectedTheme.palette.action.hover,
                    borderBottom: `2px solid ${props.selectedTheme.palette.action.hover}`,
                    paddingBottom: "5px", 
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
                      ? props.selectedTheme.palette.action.hover 
                      : props.selectedTheme.palette.primary.contrastText, 
                  fontWeight: "bold",
                  fontFamily: props.selectedTheme.typography.fontFamily,
                  textDecoration: selectedLink === "ripples" ? "none" : "none", 
                  paddingTop: selectedLink === "ripples" ? "5px" : "0",
                  borderBottom:
                    selectedLink === "ripples"
                      ? `2px solid ${props.selectedTheme.palette.action.hover}`
                      : "none", 
                  paddingBottom: selectedLink === "ripples" ? "5px" : "0", 
                  "&:hover": {
                    color: props.selectedTheme.palette.action.hover,
                    borderBottom: `2px solid ${props.selectedTheme.palette.action.hover}`, 
                    paddingBottom: "5px", 
                  },
                }}
              >
                ripples
              </Typography>
            </a>

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
          <a href="" style={{ cursor: "pointer" }}>
            Create Your Profile
          </a>
          <Box
            sx={{
              marginLeft: "10px",
              zIndex: 100,
              position: "relative",
              display: "flex",
              alignItems: "center", 
            }}
          >
            {props.image ? (
              <Image
                src={props.image}
                alt="Preview"
                width={60}
                height={60}
                objectFit="cover"
                style={{
                  clipPath:
                    "polygon(15.6% 15.6%, 50% 0, 85.3% 14.6%, 100% 50%, 83% 83.3%, 50% 100%, 16.6% 83.3%, 0 50%)",
                  marginRight: "-54px", 
                  zIndex :120
                }}
              />
            ) : (
              <></>
            )}
            <Button
              variant="contained"
              className="border"
              sx={{
                backgroundColor: props.selectedTheme.palette.action.focus,
                color: props.selectedTheme.palette.primary.contrastText,
                width: "150px",
                height: "50px",
                fontSize: "0.8rem",
                paddingLeft: props.image ? "60px" : "30px",
                wordSpacing: "10px",
                display: "flex",
                flexDirection : "column",
                alignItems: "center",
              }}
            >
              welcome,<strong>{fname}</strong>
            </Button>
          </Box>
        </Box>
      </Toolbar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: props.selectedTheme.palette.primary.main,
            color: props.selectedTheme.palette.primary.contrastText,
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
export default Header;
