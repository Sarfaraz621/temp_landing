import React from "react";
import { useState } from "react";
import { Button, TextField, Box, Typography, IconButton } from "@mui/material";
import { Facebook, Google } from "@mui/icons-material";
import LeftSideImage from "./Screen/Group 39479sign_up_image.png";
import SuperimposedImageUrl from "./Screen/Group 39481sign_up_image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import { styled } from "@mui/system";
import { InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FacebookAvatar from "./Screen/Facebook.png";
import AppleAvatar from "./Screen/Apple.png";
import GoogleAvatar from "./Screen/Google.png";

const OrContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  margin: "20px 0",
  "&::before, &::after": {
    content: '""',
    flexGrow: 1,
    background:
      "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.1))",
    height: "1px",
    marginRight: "10px",
    marginLeft: "10px",
  },
});
function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "flex-right",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src={SuperimposedImageUrl}
        alt="Superimposed"
        style={{
          position: "absolute",
          top: "50%",
          left: "-15px",
          transform: "translateY(-50%)", // This will vertically center the superimposed image
        }}
      />
      <Box
        sx={{
          width: "40%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <img src={LeftSideImage} alt="Left Side" style={{ width: "100%" }} />
      </Box>
      <Box sx={{ width: "30%", padding: "2em", marginLeft: "12em" }}>
        <Typography
          // sx={{ marginBottom: "1em" }}
          style={{ fontWeight: "700", fontSize: "4em" }}
        >
          Sign Up
        </Typography>
        <Typography
          style={{ fontWeight: "600", fontSize: "2em", marginTop: "1em" }}
        >
          Create an account
        </Typography>
        <Box component="form" sx={{ width: "100%", mt: 3 }}>
          <TextField
            fullWidth
            label="Full Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Location"
            margin="normal"
            variant="outlined"
            select
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={handleTogglePasswordVisibility}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{
              marginTop: "1em",
              backgroundColor: "#EA580C",
              padding: "1em",
            }}
          >
            Sign Up
          </Button>
        </Box>
        <OrContainer>
          <Typography variant="body2">OR</Typography>
        </OrContainer>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 2 }}>
          <IconButton color="primary">
            <img src={FacebookAvatar} alt="FaceBook Logo" />
          </IconButton>
          <IconButton>
            <img src={GoogleAvatar} alt="Google Logo" />
          </IconButton>
          <IconButton>
            <img src={AppleAvatar} alt="Apple Logo" />
          </IconButton>
        </Box>
        <Typography sx={{ mt: 2, textAlign: "center" }}>
          Already have an account?{" "}
          <a href="/login" style={{ textDecoration: "none", color: "#EA580C" }}>
            Login
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default SignUpForm;
