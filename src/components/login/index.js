import React, {useState} from "react";
import { Box, Button, TextField, Stack, Card, CardContent } from "@mui/material";

export default function Login(){
    const [formData, setFormData] = useState({
        email: "", 
        password: "",
    })

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData({ ...formData, [name]: value})
    }
    
    const handleSumbit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://127.0.0.1:5000/users/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            alert("Inicio de sesion exitosa");
            
            setMessage(`¡Bienvenido, ${data.username}!`);

            setFormData({
                email: "",
                password: "",
            })
        }catch(err){
            setError("Error de conexion al servidor");
            setMessage("");
            console.error(err);
        }
    }

    const handleCancel = () => {
        setFormData({
            email: "",
            password: ""
        });
    };

    return (        
        <div>
            <h1>Beca2</h1>
            <div className="card-container">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Box id="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }}} noValidate autoComplete="off">
                            <TextField 
                                name = "email" 
                                label= "Correo" 
                                variant="outlined"
                                value={formData.email}
                                onChange={handleChange} 
                            />
                            <TextField 
                                name = "password" 
                                label= "Contraseña" 
                                variant="outlined" 
                                value={formData.password}
                                onChange={handleChange}    
                            />
                            <Stack spacing={2} direction={"row"}>
                                <Button variant="contained" onClick={handleSumbit}>Entrar</Button>
                                <Button variant="outlined" onClick={handleCancel}>Cancelar</Button>
                            </Stack>
                        </Box>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}