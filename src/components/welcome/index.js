import React from "react";
import { Link } from 'react-router-dom';
import {AppBar, IconButton, Button,Typography, Toolbar, Box } from '@mui/material';
import NavBar from "./componentes/AppBar";

export default function Welcome(){
    return (
        <div>
            <NavBar />

            {/* Contenido debajo del NavBar */}
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <h1>Bienvenidos</h1>
            </div>
        </div>
    )
}