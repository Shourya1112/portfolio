import React from "react";
import { Typography, Box } from "@mui/material";

const Frontend = () => {
    const styles= {
        head: {
            height: "72px",
            color: "#999999",
            fontSize: "1.5rem",
            marginBottom: "20px"
        },
        items: {
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "15px"
        },
        li: {
            lineHeight: "1.6",
            fontSize: "1.5rem",
            marginInline: "7px",
            color: "#f5f5f5",
            fontWeight: "400",
        }
    }

    return (
        <Box className="skills-back" style={styles.back}>
            <Typography style={styles.head}>
            -- Front-end Tecnologies
            </Typography>
            <Typography style={styles.items}>
                    <li style={styles.li}>ReactJS</li>
                    <li style={styles.li}>JavaScript</li>
                    <li style={styles.li}>Material UI</li>
                    <li style={styles.li}>SCSS / SASS</li>
                    <li style={styles.li}>HTML</li>
                    <li style={styles.li}>CSS</li>
            </Typography>
        </Box>
    )
}

export default Frontend;