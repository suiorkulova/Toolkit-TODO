import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <AppBar sx={{ background: "black" }} position="static">
          <Toolbar sx={{ width: "80%", margin: "0 auto" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              TODO LIST
            </Typography>
            <Box sx={{ display: "flex", gap: "50px" }}>
              <Typography
                onClick={() => navigate("/admin")}
                sx={{ fontSize: "22px", cursor: "pointer", fontWeight: "bold" }}
              >
                Admin
              </Typography>
              <Typography
                onClick={() => navigate("/list")}
                sx={{ fontSize: "22px", cursor: "pointer", fontWeight: "bold" }}
              >
                Home
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
