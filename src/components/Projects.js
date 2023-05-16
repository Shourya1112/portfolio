import React from "react";
import data from "../Assets/data.json"
import { Typography , CardMedia , Box , styled , IconButton, Divider} from "@mui/material";
import { GitHub } from '@mui/icons-material';
import TvIcon from '@mui/icons-material/Tv';

const Projects = () => {

    const BoxScroll = styled(Box) (() => ({
      height: "80vh",
      minHeight: "760px",
      borderRadius: "30px",
      padding: "10px",
      overflow: "scroll",
      scrollBehavior: "smooth",
      "&::-webkit-scrollbar": {display: "none",}
  }))

  return (
    <BoxScroll id="projects">
    <Typography 
    sx={{ color: "#999999" , fontSize: "1.5rem" , marginBottom: "20px" }}
    >
    -- Projects
    </Typography>
      {data.projects.map((i) => (
        <ProjectComponent
          key={i.date}
          title={i.title}
          type={i.tag}
          description={i.description}
          github={i.github}
          image={i.imgSrc}
          live={i.liveUrl}
        />
      ))}
    </BoxScroll>
  );
};

const ProjectComponent = ({ title, description, github, live, image, type, Mobile }) => {
  return (
    <Box className="projectComponent" sx={{ display: "flex" , flexDirection: "column" , justifyContent: "space-between" , height: "fit-content"}}>
      <Divider/>
      <CardMedia
      component="img"
      src={image}
      alt={title} 
      sx={{ width: "100%" , borderRadius: "15px" , marginTop: "10px" }}
      />
        <Box className="titleBox" sx={{ marginBottom: "15px"}}>
          <Typography sx={{ fontSize: "2rem" , margin: "10px" , display: "inline-flex" }}>- {title}</Typography>
          <Box sx={{ backgroundColor: "whitesmoke"  , borderRadius: "20px" , border: "2px solid" , margin: "10px" , display: "inline-flex"  , verticalAlign: "6px" }}>
            <Typography sx={{ color: "black", fontSize: "1rem" , marginInline: "10px" , textAlign: "center" , fontWeight: "600" }}>{type}</Typography>
          </Box>
        </Box>
        <Box className="descriptionBox">
            <Typography sx={{ fontSize: "1.3rem" , color: "#f5f5f5" , lineHeight: "1.6" }}>
              {description}
            </Typography>
        </Box>
        <br/>
        <Box className="linkBox" sx={{ display: "flex" , justifyContent: "space-evenly" , alignItems: "center" , marginBottom: "10px" }}>
            <IconButton 
                size="large" 
                href={github}
                target="_blank"
                sx={{ borderRadius: "30px" }}
            >
                <GitHub fontSize="large"/>
                <Typography sx={{ fontSize: "1rem" , marginLeft: "5px"}}>Repo</Typography>
            </IconButton>
            { live ? <IconButton 
                size="large" 
                href={live}
                target="_blank"
                sx={{ borderRadius: "30px" }}
            >
                <TvIcon fontSize="large"/>
                <Typography sx={{ fontSize: "1rem" , marginLeft: "5px"}}>Demo</Typography>
            </IconButton> : null}
          </Box>
        <br/>
    </Box>
  );
};

export default Projects;