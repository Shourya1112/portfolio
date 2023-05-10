import React from "react";
import { Typography, Box } from "@mui/material";

const About = () => {
    return (
        <Box>
            <Typography 
            sx={{ color: "#999999" , fontSize: "1.5rem" , marginBottom: "20px"}}
            >
            --About
            </Typography>
            <Typography 
            variant="p" 
            sx={{ fontSize: "1.3rem" , color: "	#FAF9F6" }}
            >
            -- I am a driven MERN Stack Developer with a solid background in JavaScript and expertise in Reactjs and Expressjs.
            <br/>
            -- I am passionate about web development and eager to contribute my skills to a company that values innovation and collaboration.
            </Typography>
        </Box>
    )
}

export default About;