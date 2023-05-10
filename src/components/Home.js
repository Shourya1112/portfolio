import React from "react";
import Hero from "./Hero";
import Profile from "./Profile";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import { Box, CssBaseline } from "@mui/material";

function Home(props) {
    const Animation = props.Animation;
    const Mobile = props.Mobile;

    const phoneStyles = {
        home: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "30px"
        },
        hero: {
            backgroundColor: "#101010",
            borderRadius: "30px", 
            marginBottom: "30px"
        }, 
        profile: {
            backgroundColor: "#101010",
            borderRadius: "30px", 
            marginBottom: "30px"
           
        }, 
        about: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            padding: "20px",
            marginBottom: "30px"
        },
        skills: {
            width: "100%",
            marginBottom: "30px"
        },
        projects: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            padding: "15px",
            marginBottom: "30px"
        }
    }
    
    const pcStyles = {
        home: {
             width: "100%",
             display: "grid",
             gridTemplateColumns: "26% 40% 30%", 
             gridTemplateRows: "37% 40% 15%",
             gap: "30px"
        },
        hero: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            width: "100%", 
            xs: "100%", 
            gridColumn: "1", 
            gridRow: "1 / 3" 
        }, 
        profile: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            width: "154%", 
            gridColumn: 1, 
            gridRow: 3 
        }, 
        about: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            width: "100%",
            minWidth: "400px",
            padding: "20px",
            gridColumn: "2",
            gridRow: "1" 
        },
        skills: {
            width: "100%",
            gridColumn: "2",
            gridRow: "2/3"
        },
        projects: {
            backgroundColor: "#101010",
            borderRadius: "30px",
             width: "100%",
             padding: "15px",
             gridColumn: "3",
             gridRow: "1/4"
        }
    }

    return (
    <Box className='home' style={(Mobile ? phoneStyles : pcStyles).home }>
    <CssBaseline />
        <Animation className="hero" style={(Mobile ? phoneStyles : pcStyles).hero }>
            <Hero />
        </Animation>
        <Animation className="profile" style={(Mobile ? phoneStyles : pcStyles).profile }>
            <Profile />
        </Animation>
        <Animation className="about" style={(Mobile ? phoneStyles : pcStyles).about }>
            <About />
        </Animation>
        <Box className="skills" style={(Mobile ? phoneStyles : pcStyles).skills }>
            <Skills Animation={Animation} Mobile={Mobile}/>
        </Box>
        <Animation className="projects" style={(Mobile ? phoneStyles : pcStyles).projects }>
            <Projects />
        </Animation>
    </Box>
    )
}
                
export default Home;