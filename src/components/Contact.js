import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Typography,
  Box,
  FormControl,
  TextField,
  Button,
  Alert,
  AlertTitle
} from "@mui/material";

const Contact = (props) => {
  const Mobile = props.Mobile;

  const [error, setError] = useState(null); // Track error state
  const [success, setSuccess] = useState(null); // Track success state
  
  // ----------------Email component-------------------------
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_3jza02f', 'template_rwac91p', form.current, 'C4PS8UmEi6zd2EZin')

    .then((result) => {
        console.log(result.text);
        setError(null); // Clear the error
        setSuccess("Message delivered successfully!"); // Set the success message
      })
      .catch((error) => {
        console.log(error.text);
        setError("Message not sent — Please try again later!"); // Set the error message
        setSuccess(null); // Clear the success message
      });

      e.target.reset()
    }
    //----------------------------------------------------------
    
    const pcStyles = {
      contact: {
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        backgroundColor: "#050505",
        padding: "70px",
        marginBottom: "2px",
      },
      formPage: {
        width: "400px",
      },
      formEl: {
        width: "100%", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center"
      },
      textInput: {
        borderRadius: "10px"
      },
      submitBtn: {
        width: "100%",
        backgroundColor: "#01537e",
        borderRadius: "10px",
        marginTop: "10px"
      }
    }
    
    const phoneStyles = {
      contact: {
        height: "auto",
        width: "100%",
        backgroundColor: "#050505",
        marginBottom: "2px",
        padding: "5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      formPage: {
        width: "90%",
      },
      formEl: {
        width: "100%", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center"
      },
      textInput: {
        borderRadius: "10px"
      },
      submitBtn: {
        width: "100%",
        backgroundColor: "#01537e",
        borderRadius: "10px",
        marginTop: "10px"
      }
    }

  return (
    <Box className="contact" style={( Mobile ? phoneStyles : pcStyles).contact}>
      <Box className="contact-formPage" style={( Mobile ? phoneStyles : pcStyles).formPage}>
        <Typography variant="h2">Contact Me</Typography>
        {error && ( // Render the error alert if there's an error
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}
        {success && ( // Render the success alert if there's a success message
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            {success}
          </Alert>
        )}
        <form  ref={form} onSubmit={sendEmail}>
          <FormControl style={( Mobile ? phoneStyles : pcStyles).formEl}>
          <TextField
            style={( Mobile ? phoneStyles : pcStyles).textInput}
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
            style={( Mobile ? phoneStyles : pcStyles).textInput}
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            name="user_email"
            margin="normal"
            required
          />
          <TextField
            style={( Mobile ? phoneStyles : pcStyles).textInput}
            fullWidth
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
          style={( Mobile ? phoneStyles : pcStyles).submitBtn}
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