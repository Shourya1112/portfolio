import React from "react";
import data from "../Assets/data.json"
import { Typography , CardMedia , Box , styled , IconButton, Divider} from "@mui/material";
import { GitHub } from '@mui/icons-material';
import TvIcon from '@mui/icons-material/Tv';


const Projects = () => {
    const BoxScroll = styled(Box) (() => ({
      height: "80vh",
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

// const points = (description) => {
//   data.description.map((i) => {
//     description[i] + "<br>";
//     }
//   )
//   }

const ProjectComponent = ({ title, description, github, live, image, type }) => {
  return (
    <Box className="projectComponent" sx={{ height: "100%" }}>
      <Divider/>
      <CardMedia
      component="img"
      src={image}
      alt={title} 
      sx={{ width: "100%" , borderRadius: "15px" , marginTop: "10px" }}
      />
        <Box>
        <Typography sx={{ fontSize: "1.5rem" , margin: "10px" , display: "inline-flex" }}>- {title}</Typography>
        <Box sx={{ backgroundColor: "black" , padding: "5px" , borderRadius: "30px" , margin: "10px" , display: "inline-flex"  }}>
        <Typography sx={{ fontSize: "1rem" , marginInline: "10px"}}>{type}</Typography></Box>
        <br/>
        </Box>
        <Typography
            variant="p" 
            >
            {description.map((desc, i) => (
              <Typography sx={{ fontSize: "1.3rem" , color: "	#FAF9F6" , listStyles: "none"}} key={i} >- {desc}</Typography>
            ))}
        </Typography>
        <br/>
        <Box sx={{ display: "flex" , justifyContent: "space-evenly" , alignItems: "center" }}>
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
    </Box>
  );
};

export default Projects;