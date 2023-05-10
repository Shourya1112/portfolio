import React from "react";
import { Typography, Box } from "@mui/material";

const Skills = (props) => {
    const Animation = props.Animation;
    const Mobile = props.Mobile;
    
    const mobileStyles = {
        skills: {
            display: "flex",
            flexDirection: "column",
            gap: "30px"
        },
        back: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            padding: "20px"
        },
        front: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            padding: "20px"
        },
        other: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            padding: "20px"
        },
        head: {
            color: "#999999",
            fontSize: "1.5rem",
            marginBottom: "20px"
        },
    }

    const pcStyles= {
        skills: {
            display: "flex",
            justifyContent: "space-between",
            gap: "30px"
        },
        back: {
            height: "80%",
            backgroundColor: "#101010",
            borderRadius: "30px",
            padding: "20px"
        },
        front: {
            height: "100%",
            backgroundColor: "#101010",
            borderRadius: "30px",
            padding: "20px"
        },
        other: {
            height: "100%",
            backgroundColor: "#101010",
            borderRadius: "30px",
            padding: "20px"
        },
        head: {
            color: "#999999",
            fontSize: "1.5rem",
            marginBottom: "20px"
        },
    }

    return (
        <Box className="skills" style={(Mobile ? mobileStyles : pcStyles).skills }>
            <Animation className="skills-back" style={(Mobile ? mobileStyles : pcStyles).back }>
                <Typography style={pcStyles.head}>
                -- Back-end Tecnologies
                </Typography>
                <Typography variant="h5" sx={{ lineHeight: "2" , listStyle: "none"  }}>
                        <li>- NodeJS</li>
                        <li>- ExpressJS</li>
                        <li>- MongoDB</li>
                        <li>- Python</li>
                </Typography>
            </Animation>
            <Animation className="skills-front" style={(Mobile ? mobileStyles : pcStyles).front }>
                <Typography style={pcStyles.head}>
                -- Front-end Tecnologies
                </Typography>
                <Typography variant="h5" sx={{ lineHeight: "2.3" , listStyle: "none"  }}>
                        <li>- ReactJS</li>
                        <li>- JavaScript</li>
                        <li>- Material UI</li>
                        <li>- SCSS/SASS</li>
                        <li>- HTML</li>
                        <li>- CSS</li>
                </Typography>
            </Animation>
            <Animation className="skills-other" style={(Mobile ? mobileStyles : pcStyles).other }>
                <Typography style={pcStyles.head}>
                -- Other Tecnologies
                </Typography>
                <Typography variant="h5" sx={{ lineHeight: "2.3" , listStyle: "none"  }}>
                        <li>- Git</li>
                        <li>- Figma</li>
                        <li>- Blender</li>
                        <li>- Docker</li>
                        <li>- Autodesk Fusion 360</li>
                </Typography>
            </Animation>
        </Box>
    )
}

export default Skills;