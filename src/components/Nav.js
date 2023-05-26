import React from "react";
import { CssBaseline, Stack, Button, Divider, IconButton , Box } from "@mui/material";
import { TextSnippetRounded , GitHub , LinkedIn } from '@mui/icons-material';

function Nav(props) {
    const Animation = props.Animation;
    const Mobile = props.Mobile;

    const navStylesPhone = {
        bar: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            height: "60px",
            width: "100%" ,
            position: "relative",
            marginBottom: "20px",
            alignitems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        logo: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "30px",
            paddingInline: "20px"
        },
        resumebtn: {
            color: "#050505",
            backgroundColor: "whitesmoke", 
            height: "60px", 
            fontSize: "1.7rem" ,  
            borderRadius: "30px" , 
            paddingInline: "20px",
            textTransform: "capitalize",
            fontWeight: "600",
            alignSelf: "flex-end"
        }
    }
    const navStyles = {
        bar: {
            backgroundColor: "#101010",
            borderRadius: "30px",
            height: "60px",
            width: "100%" ,
            position: "relative",
            marginBottom: "30px",
            alignitems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        logo: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "30px",
            paddingInline: "20px"
        }, 
        btns: {
            alignItems: "center"
        },
        resumebtn: {
            color: "#050505",
            backgroundColor: "whitesmoke", 
            height: "60px", 
            fontSize: "1.7rem" ,  
            borderRadius: "50px" , 
            paddingInline: "20px",
            textTransform: "capitalize",
            fontWeight: "600"
        }
    }

    return (
        <Box>
        <CssBaseline />
        <Box className="navbar" style={( Mobile ? navStylesPhone : navStyles).bar}>
            <Animation>
                <Button href="/" style={( Mobile ? navStylesPhone : navStyles).logo}>
                <img 
                    src="https://res.cloudinary.com/dkrinlbmx/image/upload/v1682009466/Portfolio/SM_2_nwiqet.png" 
                    alt="logo" 
                    height="30px"
                />
                </Button>
            </Animation>
            <Stack direction={"row"} spacing={5} style={( Mobile ? navStylesPhone : navStyles).btns }>
            { Mobile ? null : <Stack direction={"row"} spacing={5} >
                <Animation>
                    <IconButton 
                    size="large" 
                    href="https://www.linkedin.com/in/shourya-mishra-6b730322b/"
                    target="_blank"
                    >
                    <LinkedIn fontSize="large"/>
                    </IconButton>
                </Animation>
                <Animation>
                    <IconButton 
                    size="large" 
                    href="https://github.com/Shourya1112"
                    target="_blank"
                    >
                    <GitHub fontSize="large"/>
                    </IconButton>
                </Animation> 
                </Stack>
        }
            <Divider orientation="vertical" flexItem />
            <Animation>
                <Button style={( Mobile ? navStylesPhone : navStyles).resumebtn} 
                href="https://drive.google.com/file/d/1GAEwm72fWAC5RIcqDPW8CDB2-rjOK1Ul/view?usp=share_link"
                target="_blank"
                >
                    <TextSnippetRounded size="large" color="#050505" sx={{ marginRight: "10px" }}/>
                        Resume
                </Button>
            </Animation>
            </Stack>
            
            </Box>
            </Box>
            )
        }

export default Nav;