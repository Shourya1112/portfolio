import React from "react";
import { Typography, Box } from "@mui/material";

const Profile = () => {
    return (
        <Box sx={{ height: "100%" , display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Typography sx={{ fontSize: "3rem" , color: "white" , fontWeight: "bold" , textAlign: "center" }}>
                FULL STACK DEVELOPER
            </Typography>
        </Box>
    )
}

export default Profile;