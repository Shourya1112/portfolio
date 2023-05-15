import React from "react";
import Hero from "./Hero";
import Profile from "./Profile";
import About from "./About";
import Backend from "./skills/Backend";
import Frontend from "./skills/Frontend";
import Other from "./skills/Other";
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
            marginBottom: "30px",
            gap: "15px"
        },
        hero: {
            backgroundColor: "#101010",
            borderRadius: "30px",
        }, 
        profile: {
            backgroundColor: "#101010",
            borderRadius: "30px",
           
        }, 
        about: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            padding: "10px"
        },
        skillsBack: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            width: "100%",
            padding: "15px",
            gridColumn: "2",
            gridRow: "2"
        },
        skillsFront: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            width: "100%",
            padding: "15px",
            gridColumn: "3",
            gridRow: "2/4"
        },
        skillsOther: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            width: "auto",
            padding: "15px",
            gridColumn: "4",
            gridRow: "2/4"
        },
        projects: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            padding: "15px"
        }
    }
    
    const pcStyles = {
        home: {
            width: "100%",
            display: "grid",
            gridTemplateColumns: "26% 12.2% 12.2% 12.2% 30%", 
            gridTemplateRows: "34% 42.5% 16.7%",
            gap: "30px"
        },
        hero: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            width: "100%",
            gridColumn: "1", 
            gridRow: "1/3",
        }, 
        profile: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            width: "100%",
            gridColumn: "1/3", 
            gridRow: "3"
        }, 
        about: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            width: "100%",
            height: "100%",
            minWidth: "400px",
            padding: "15px",
            gridColumn: "2/5",
            gridRow: "1"
        },
        skillsBack: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            width: "100%",
            padding: "15px",
            gridColumn: "2",
            gridRow: "2"
        },
        skillsFront: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            width: "100%",
            padding: "15px",
            gridColumn: "3",
            gridRow: "2/4"
        },
        skillsOther: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            width: "100%",
            padding: "15px",
            gridColumn: "4",
            gridRow: "2/4"
        },
        projects: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            width: "100%",
            padding: "15px",
            gridColumn: 5,
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
        <Animation className="skills-back" style={(Mobile ? phoneStyles : pcStyles).skillsBack }>
            <Backend/>
        </Animation>
        <Animation className="skills-front" style={(Mobile ? phoneStyles : pcStyles).skillsFront }>
            <Frontend/>
        </Animation>
        <Animation className="skills-other" style={(Mobile ? phoneStyles : pcStyles).skillsOther }>
            <Other/>
        </Animation>
        <Animation className="projects" style={(Mobile ? phoneStyles : pcStyles).projects }>
            <Projects Mobile={Mobile}/>
        </Animation>
    </Box>
    )
}
                
export default Home;