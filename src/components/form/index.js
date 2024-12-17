import React, { useState } from "react";
import { Box, Button, TextField, Stack, Card, CardContent,AppBar, IconButton,Typography, Toolbar } from "@mui/material";
import { Link } from 'react-router-dom';
import {LocalizationProvider, DatePicker} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "./Form.css"; 
import axios from "axios";
import dayjs from "dayjs";

export default function Form(){


    const [formData, setFormData] = useState({
        username: "",
        fullname: "",
        password: "",
        email: "",
        number_phone: "",
        date: null
    });

    const handleInputChange = (e) => {
        const {id , value} = e.target; // captura el `id` y `value` del campo
        setFormData((prevData) =>({
            ...prevData,
            [id]: value, //Actualiza el estado dinamicamente
        }))
    };

    const handleDateChange = (newValue) =>{
        setFormData((prevData)=> ({
            ...prevData,
            date: newValue ? newValue.format("MM/DD/YYYY"): null //Formato de la fecha
        }));
    };

    const handleSubmit = async () => {
        try{
            const response = await axios.post("http://127.0.0.1:5000/users/register", formData, {
                headers: {"Content-Type": "application/json"},
            });
            alert("Usuario registrado correctamente")
            setFormData({
                username: "",
                fullname: "",
                password: "",
                email: "",
                number_phone: "",
                date: null
            })
            console.log(response.data)
        } catch(error){
            console.error("Error al registrar el usuario: ", error);
            alert("Error al registrar el usuario");
        } 
    };

    const handleCancel = () => {
        setFormData({
            username: "",
            fullname: "",
            password: "",
            email: "",
            number_phone: "",
            date: null
        });
    };

    return (
        <div>
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
                    <Button color="inherit" component={Link} to="/">Sign out</Button>
                </Toolbar>
                </AppBar>
            </Box>

            <h1>Beca2</h1>
            <div className="card-container">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Box id="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }}} noValidate autoComplete="off">
                            <TextField 
                                id = "username" 
                                label= "Usuario" 
                                variant="outlined"
                                value={formData.username}
                                onChange={handleInputChange} 
                            />
                            <TextField 
                                id = "fullname" 
                                label= "Nombre completo" 
                                variant="outlined" 
                                value={formData.fullname}
                                onChange={handleInputChange}    
                            />
                            <TextField 
                                id = "password" 
                                label= "Contraseña" 
                                variant="outlined" 
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            <TextField 
                                id = "email" 
                                label= "Correo" 
                                variant="outlined" 
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <TextField 
                                id = "number_phone" 
                                label= "Telefono" 
                                variant="outlined" 
                                value={formData.number_phone}
                                onChange={handleInputChange}
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker 
                                        value={formData.date ? dayjs(formData.date): null}
                                        onChange={handleDateChange}
                                        label= "Fecha de nacimiento"
                                    />
                            </LocalizationProvider>
                            <Stack spacing={2} direction={"row"}>
                                <Button variant="contained" onClick={handleSubmit}>Guardar</Button>
                                <Button variant="outlined" onClick={handleCancel}>Cancelar</Button>
                            </Stack>
                        </Box>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}