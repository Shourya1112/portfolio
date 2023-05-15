import React from "react";
import { Typography, Box, styled } from "@mui/material";

const About = () => {
    const BoxScroll = styled(Box) (() => ({
        height: "100%",
        borderRadius: "30px",
        overflow: "hidden",
        flexWrap: "nowrap",

        '&:hover': {
        overflow: "scroll",
        scrollBehavior: "smooth",
        "&::-webkit-scrollbar": {display: "none",}
    }
  }))

    return (
        <BoxScroll>
            <Box sx={{ height: "100%" }}>
                <Typography 
                sx={{ color: "#999999" , fontSize: "1.5rem" , marginBottom: "15px"}}
                >
                --About
                </Typography>
                <Typography
                sx={{ fontSize: "1.2rem" , color: "#FAF9F6" }}
                >
                Tech enthusiast turned full stack developer. Passionate about creating seamless user experiences through clean and efficient code. Equipped with a diverse skill set in front-end and back-end technologies, I strive to bring innovative solutions to life. Ready to tackle challenges and make a positive impact in the digital world.
                </Typography>
            </Box>
        </BoxScroll>
    )
}
        
        // -- I am a driven MERN Stack Developer with a solid background in JavaScript and expertise in Reactjs and Expressjs.
        // <br/>
        // -- I am passionate about web development and eager to contribute my skills to a company that values innovation and collaboration.
export default About;