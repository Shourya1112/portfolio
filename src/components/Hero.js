import React from "react";
import { Typography, Box , CardMedia } from "@mui/material";

const Hero = () => {
    return (
        <Box>
            <Box
            sx={{ padding: "15px" }}
            >  
                <CardMedia
                component="img"
                alt="profile"
                sx={{ borderRadius: "30px" }}
                image="https://res.cloudinary.com/dkrinlbmx/image/upload/v1683134134/original-e45d64f17d751c023f241dea1837c995-removebg-preview_qy2lym.png"
                />
            </Box>  
            <Box 
            sx={{ paddingInline: "30px" }}
            >   
                <Typography sx={{ color: "yellow" , fontWeight: "bold" , fontSize: "3rem" , display: "inline-block"}}>Hi</Typography>
                <Typography  
                sx={{ fontSize: "2.5rem" , color: "#9a9a9a" , display: "inline-block"}}
                >
                , I Am
                </Typography>
                <Typography  
                color="#fff" 
                sx={{ fontSize: "4rem" , fontWeight: "bold"}}
                >
                    Shourya<br/>Mishra
                </Typography>
            </Box>
        </Box>
    )
}

export default Hero;