import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme , CssBaseline, Box , styled } from "@mui/material";
import '@mui/icons-material';

function App() {
  const [ isMobile , setIsMobile ] = React.useState(window.innerWidth <= 900)

  const handleResize = () => setIsMobile(window.innerWidth <= 900);

  React.useEffect(() => {
    window.addEventListener("resize", () => handleResize);
    return () => window.removeEventListener("resize", () => handleResize);
  }, []);

  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
      default: "#020202",
    },
    Box: {
      background: {
        default: "#070707"
      }
    },
  }
})
  
  const Scrollbar = styled(Box) (() => ({
   '&:hover::-webkit-scrollbar': {
        display: 'block',
        },
        '&::-webkit-scrollbar': {
        display: 'none',
        width: '0.512rem',
        },
        '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#8d8e90',
        height: '8px',
        borderRadius: '8px',
        },
}))

const BoxScroll = styled(Box) (() => ({
      height: "80vh",
      borderRadius: "30px",
      padding: "10px",
      overflow: "scroll",
      scrollBehavior: "smooth",
      "&::-webkit-scrollbar": {display: "none",}
  }))

const commonStyle = {
      backgroundColor: "#101010",
      borderRadius: "30px",
}
    
const Animation = styled(Box) (() => ({
    transform: "scale(1)",

    '&:hover': {
    transform: "scale(1.03)",
    }
}))


// const vh = document.documentElement.clientHeight;
// const vw = document.documentElement.clientWidth;
// console.log(vh, vw)

  return (
    <Scrollbar>
    <ThemeProvider theme={theme}>
    <Box minWidth={ isMobile ? null : "1500px"}>

      <Box component={"div"} padding={ isMobile ? "10px" : "30px" }>
      <CssBaseline />
        <Nav style={commonStyle} Animation={Animation} Mobile={isMobile}/>
        <Home Animation={Animation} Mobile={isMobile}/>
      </Box>
      
      <Contact Mobile={isMobile}/>
      <Footer Mobile={isMobile}/>
    </Box>
    </ThemeProvider>
    </Scrollbar>
  );
}

export default App;
