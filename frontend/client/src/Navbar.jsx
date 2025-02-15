import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  School as SchoolIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material";

export default function Navbar({ isMobile, darkMode, onThemeChange }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <SchoolIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          StudentHub
        </Typography>
        <IconButton color="inherit" onClick={onThemeChange}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {isMobile ? (
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        ) : (
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Testimonials</Button>
            <Button color="inherit">Contact</Button>
            <Button variant="contained" color="secondary">
              Sign Up
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}
