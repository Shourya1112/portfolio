import React from "react";
import { Typography, Box } from "@mui/material";

const Backend = () => {
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
        <Box className="skills-back" style={styles.back }>
            <Typography style={styles.head}>
            -- Back-end Tecnologies
            </Typography>
            <Typography style={styles.items}>
                    <li style={styles.li}>NodeJS</li>
                    <li style={styles.li}>ExpressJS</li>
                    <li style={styles.li}>MongoDB</li>
                    <li style={styles.li}>Python</li>
            </Typography>
        </Box>
    )
}

export default Backend;