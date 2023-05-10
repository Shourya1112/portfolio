import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Typography,
  Box,
  FormControl,
  TextField,
  Button,
} from "@mui/material";

const Contact = (props) => {
  const Mobile = props.Mobile;

  
  // ----------------Email component-------------------------
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_3jza02', 'template_rwac91p', form.current, 'C4PS8UmEi6zd2EZin')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
      });
      e.target.reset()
    }
    //----------------------------------------------------------
    
    const pcStyles = {
      contact: {
        display: "flex",
        justifyContent: "space-evenly",
        height: "65vh",
        width: "100%",
        backgroundColor: "#050505",
        padding: "70px",
        marginBottom: "2px",
      },
      form: {
        width: "400px",
      }
    }
    
    const phoneStyles = {
      contact: {
        height: "auto",
        width: "100%",
        backgroundColor: "#050505",
        marginBottom: "2px",
        padding: "5%"
      },
      form: {
        width: "90%",
        
      }
    }

  return (
    <Box className="contact" style={( Mobile ? phoneStyles : pcStyles).contact}>
      <Box className="contact-form" style={( Mobile ? phoneStyles : pcStyles).form}>
        <Typography variant="h2">Contact Me</Typography>
        <form  ref={form} onSubmit={sendEmail} sx={{ width: "100%" }}>
          <FormControl sx={{ width: "100%" , display: "flex" , flexDirection: "column" , justifyContent: "center" , alignItems: "center"}}>
          <TextField
            sx={{ borderRadius: "10px" }}
            fullWidth
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            name="user_name"
            margin="normal"
            required
          />
          <TextField
            sx={{ width: "100%", borderRadius: "10px" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            name="user_email"
            margin="normal"
            required
          />
          <TextField
            sx={{ width: "100%" , borderRadius: "10px" }}
            id="outlined-basic"
            label="Message"
            variant="outlined"
            type="text"
            name="user_message"
            margin="normal"
            rows={5}
            multiline
            required
          />
          <Button
          type="submit"
          margin="normal"
          sx={{
            width: "100%",
            backgroundColor: "#01537e",
            borderRadius: "10px",
            marginTop: "10px"
          }}
          >
          <Typography variant="h5" sx={{ color: "white" }}>
          Send
          </Typography>
          </Button>
          </FormControl>
        </form>
      </Box>
      <Box className="contact-img">
        { Mobile ? null : <img
          src="https://res.cloudinary.com/dkrinlbmx/image/upload/v1683273318/vecteezy_3d-business-mail-send-icon-or-3d-business-important-mail_10915785_381_1_yrlyzs.png"
          alt="message illustration"
          width="600px"
        />}
      </Box>
    </Box>
  )
}

export default Contact;