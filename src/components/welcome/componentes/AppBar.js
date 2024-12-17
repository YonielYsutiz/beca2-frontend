import React from "react";
import { Link } from 'react-router-dom';
import {AppBar, IconButton, Button,Typography, Toolbar, Box } from '@mui/material';

export default function NavBar(){
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Beca2
            </Typography>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/form">sign up</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}