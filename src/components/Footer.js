import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = (props) => {
    const Mobile = props.Mobile;

    const pcStyles = {
        footer: {
            height: "35vh",
            display: "flex",
            justifyContent: "space-between",
            padding: "100px",
            paddingInline: "300px",
            backgroundColor: "#050505"
        },
        head: {
            fontSize: "1.6rem"
        },
        update: {
            fontSize: "1.2rem",
            color: "#808080"
        },
        side: {
            textAlign: "right"
        },
        contact: {
            fontSize: "1.5rem"
        },
        contactInfo: {
            fontSize: "1.2rem"
        }
    }
    
    const phoneStyles = {
        footer: {
            height: "35%",
            width: "auto",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#050505"
        },
        head: {
            fontSize: "1.6rem",
            textAlign: "center"
        },
        update: {
            fontSize: "1.2rem",
            color: "#808080",
            textAlign: "center"
        },
        side: {
            
        },
        contact: {
            fontSize: "1.5rem",
            textAlign: "center"
        },
        contactInfo: {
            fontSize: "1.2rem",
            textAlign: "center"
        }
    }

    return (
        <Box className="footer" style={( Mobile ? phoneStyles : pcStyles).footer}>
            <Box>
                <Typography className="footer-head" style={( Mobile ? phoneStyles : pcStyles).head}>Portfolio Website by:<br/>Shourya Mishra</Typography>
                <Typography className="footer-update" style={( Mobile ? phoneStyles : pcStyles).update}>Last Updated <br/>28.April.2023</Typography>
            </Box>
            <br/>
            <Box className="footer-side" style={( Mobile ? phoneStyles : pcStyles).side}>
                <Typography className="footer-contact" style={( Mobile ? phoneStyles : pcStyles).contact}>Contact Info:</Typography>
                <br/>
                <Typography className="footer-contactInfo" style={( Mobile ? phoneStyles : pcStyles).contactInfo}>Email: Shourya.desk@gmail.com <br/> Phone: +91 81306 76218</Typography>
            </Box>
        </Box>
    )
}

export default Footer;