import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  TextField,
  Grid,
  Box,
  Avatar,
  Card,
  CardContent,
  Paper,
  IconButton,
  Divider,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import medicineImage from "./Screen/g8landing_image.png";
import Logo from "./Screen/lowRxxLogo.png";
import howItWorksImage from "./Screen/Desktophow_it_work_video_image.png";
import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import PlayStoreVector from "./Screen/Play Store Vector.png";
import AppleVector from "./Screen/Apple Vector.png";
import HowItWorkBackImg from "./Screen/how_it_work.png";
import LeftBackImgPopularPharmacy from "./Screen/Blob Grouppopular_image_left.png";
import RightBackImgPopularPharmacy from "./Screen/Blob Grouppopular_image_right.png";
import WalmartLogo from "./Screen/walmartLogo.png";
import SliderLeft from "./Screen/SliderLeft.png";
import SliderRight from "./Screen/SliderRight.png";
import {
  Language as GlobeIcon, // Represents the globe
  Euro as EuroIcon, // Represents the Euro currency
  Accessible as AccessibilityIcon, // Represents accessibility
} from "@mui/icons-material";
import Check from "./Screen/check.png";
import RightArrow from "./Screen/arrow-right.png";
import AccessabilityVector from "./Screen/accessibility.png";

SwiperCore.use([Navigation]);
const PageContainer = styled("div")({
  fontFamily: "Roboto, sans-serif",
  width: "100%",
  height: "100%",
});
function LandingPage() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const sliderRef = useRef(null);
  const swiperIndex = 0;

  const settings = {
    infinite: true,
    slidesToShow: 3, // Or however many you want to show at once
    slidesToScroll: 1,
    arrows: false, // We're providing custom arrows
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <PageContainer>
      <Box>
        {/* Header */}
        <AppBar
          position="static"
          style={{ backgroundColor: "#FFFFFF", boxShadow: "none" }}
        >
          <Toolbar style={{ justifyContent: "space-between" }}>
            <IconButton edge="start" color="inherit" aria-label="logo">
              <img
                src={Logo}
                alt="LowRxx Logo"
                style={{ height: "40px", marginLeft: "0.23em" }}
              />
            </IconButton>
            <div
              style={{
                marginRight: "2.8em",
                gap: "1rem",
              }}
            >
              <Link
                to="/login"
                style={{ textDecoration: "none", marginRight: "1rem" }}
              >
                <Button
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    lineHeight: "1.5rem",
                    letterSpacing: "0.5px",
                    textAlign: "left",
                    color: "#0F172A",
                  }}
                >
                  Log In
                </Button>
              </Link>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    border: "2px solid #61B3DB",
                    fontWeight: "500",
                    fontSize: "1rem",
                    color: "#0F172A",
                  }}
                >
                  Sign Up Now
                </Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        {/* Main Content */}

        <Paper
          elevation={0}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "3.2em",
            background: "#FFFFFF",
            flexWrap: "wrap",
            overflow: "hidden",
            // width: "Fill (1,440px)",
            // height: "Hug (700px)",
            // padding: "5rem",
            // gap: "5rem",
          }}
        >
          <Box
            style={{
              maxWidth: "60%",
              flexBasis: "60%",
              minWidth: "60%",
              width: "100%", // Take full width when wrapped
            }}
          >
            <Typography
              variant="h3"
              style={{
                fontWeight: "600",
                fontSize: "4rem",
                marginLeft: "-0.3rem",
                color: "#0F172A",
              }}
            >
              Stop paying too
              <br /> much for
              <br /> prescriptions!
            </Typography>
            <Typography
              variant="body1"
              style={{
                margin: "0.8rem 0",
                marginLeft: "-0.25rem",
                maxWidth: "90%",
                fontWeight: "400",
                fontSize: "1.5rem",
                color: "#0F172A",
              }}
            >
              Sand is a granular material composed of finely divided mineral
              particles. Sand has various compositions but is defined by its
              grain size. Sand grains are smaller than gravel and coarser than
              silt. Sand can also refer to a textural class of soil or soil
              type; i.e., a soil containing more than 85 percent sand-sized
              particles by mass.[2] The composition of sand varies
            </Typography>

            <TextField
              label="Enter a medicine"
              variant="outlined"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                width: "25rem",
              }}
              InputProps={{
                style: {
                  borderRadius: "20px",
                },
                notchedOutline: {
                  border: "2px solid #E4E4E7",
                },
              }}
            />
            <Button
              variant="contained"
              style={{
                backgroundColor: "#EA580C",
                marginLeft: "0.5rem",
                width: "15rem",
                height: "3.5rem",
              }}
            >
              <span>Get the lowest price</span>
            </Button>
          </Box>

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "40%",
              flexBasis: "40%",
              minWidth: "40%",
              width: "100%", // Take full width when wrapped
            }}
          >
            <img
              src={medicineImage}
              alt="Prescription items"
              style={{ width: "100%" }}
            />
          </Box>
        </Paper>
        {/* Popular Pharmacies Section */}
        <Box
          style={{
            position: "relative",
            padding: "4em 0",
            // background: `#F1F5F9`,
            backgroundSize: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#F1F5F9",
              zIndex: -2,
            }}
          ></div>
          {/* Both background img */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              marginTop: "15rem",
              width: "20%", // adjust as needed
              backgroundImage: `url("./Screen/Blob Grouppopular_image_left.png")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              zIndex: -1,
            }}
          >
            <img src={LeftBackImgPopularPharmacy} alt="Left" />
          </div>

          <div
            style={{
              position: "absolute",
              top: 20,
              right: 0,
              bottom: 0,
              // marginBottom: "3rem",
              width: "25%", // adjust as needed
              backgroundImage: `url("./Screen/Blob Grouppopular_image_right.png")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              // overflow: "auto",
              zIndex: -1,
            }}
          >
            <img
              src={RightBackImgPopularPharmacy}
              alt="Right"
              style={{ marginLeft: "0.5rem" }}
            />
          </div>
          {/* Heading and Subheading */}

          <Typography
            align="center"
            style={{ fontWeight: "800", fontSize: "4.5rem", color: "#0F172A" }}
            gutterBottom
          >
            Popular Pharmacies
          </Typography>
          <Typography
            align="center"
            style={{ fontWeight: "400", fontSize: "1.5rem", color: "#0F172A" }}
          >
            Sit elit feugiat turpis sed integer accumsan turpis. Sed suspendisse
            nec lorem mauris.
          </Typography>
          <Typography
            align="center"
            style={{ fontWeight: "400", fontSize: "1.5rem", color: "#0F172A" }}
          >
            Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
          </Typography>

          {/* Card */}
          {/* <Box display="flex"></Box> */}
          <Box display="flex" justifyContent="center" mt={15} gap={3}>
            {Array(3)
              .fill()
              .map((_, index) => (
                <Card
                  key={index}
                  style={{
                    padding:
                      index === 1
                        ? isSmallScreen
                          ? "0.5em"
                          : "0.8em"
                        : "0.5em",
                    width:
                      index === 1
                        ? isSmallScreen
                          ? "20em"
                          : "22em"
                        : isSmallScreen
                        ? "18em"
                        : "17em",
                    height:
                      index === 1
                        ? isSmallScreen
                          ? "18em"
                          : "28em"
                        : isSmallScreen
                        ? "21em"
                        : "22em",
                    margin: index === 1 ? "1rem" : "0.6rem",
                    marginTop: index === 1 ? "1em" : "3.5em",
                    border: "2px solid #FFD700",
                    boxShadow: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: index === 1 && "center",
                  }}
                >
                  {index === 1 ? (
                    <CardContent>
                      <Typography
                        style={{
                          marginTop: "-5rem",
                          color: "#808080",
                          fontWeight: "700",
                          fontSize: "1.5rem",
                        }}
                      >
                        WALMART
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: "800",
                          fontSize: "1.9rem",
                          marginTop: "0.1rem",
                        }}
                      >
                        Paracetamol
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: "400",
                          fontSize: "0.9rem",
                          marginTop: "0.2rem",
                        }}
                      >
                        40mg, 30 tablets
                      </Typography>
                      <Divider />
                      <Typography
                        style={{
                          textDecoration: "line-through",
                          fontWeight: "700",
                          marginTop: "2rem",
                          color: "#808080",
                          fontSize: "1.5rem",
                        }}
                      >
                        $123
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          style={{
                            marginTop: "1rem",
                            fontWeight: "600",
                            fontSize: "3.5rem",
                            lineHeight: "2.4rem",
                          }}
                        >
                          $62.5
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: "700",
                            marginLeft: "1.5rem",
                            marginTop: "0.6rem",
                            color: "#0000009E",
                          }}
                        >
                          <span style={{ color: "green" }}>50.81%</span> off
                          with LowRx
                        </Typography>
                      </Box>
                      <Typography
                        style={{
                          fontWeight: "700",
                          fontSize: "1.2rem",
                          marginTop: "2.3rem",
                        }}
                      >
                        Login for{" "}
                        <span
                          style={{
                            color: "green",
                            fontWeight: "700",
                          }}
                        >
                          10% +{" "}
                        </span>{" "}
                        discount to get it at $52.5
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{
                          width: "10rem",
                          height: "3.5rem",
                          borderRadius: "8px",
                          backgroundColor: "#EA580C",
                          marginBottom: "-6rem",
                          boxShadow: "none",
                          padding: "16px, 40px, 16px, 40px",
                        }}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  ) : (
                    <CardContent
                      style={{
                        // padding: "18rem 4rem ",

                        borderRadius: "10px",
                        border: "1px",
                        gap: "3px",
                      }}
                    >
                      <Typography
                        style={{
                          marginTop: "-0.5rem",
                          color: "#808080",
                          fontWeight: "700",
                          fontSize: "1rem",
                        }}
                      >
                        WALMART
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: "800",
                          fontSize: "1.4rem",
                          marginTop: "0.1rem",
                        }}
                      >
                        Paracetamol
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: "400",
                          fontSize: "0.7rem",
                          marginTop: "0.2rem",
                        }}
                      >
                        40mg, 30 tablets
                      </Typography>
                      <Divider />
                      <Typography
                        style={{
                          textDecoration: "line-through",
                          fontWeight: "700",
                          marginTop: "2rem",
                          color: "#808080",
                          fontSize: "0.8rem",
                        }}
                      >
                        $123
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          style={{
                            marginTop: "0.6rem",
                            fontWeight: "600",
                            fontSize: "2.3rem",
                            lineHeight: "2.4rem",
                          }}
                        >
                          $62.5
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: "700",
                            marginLeft: "1.4rem",
                            marginTop: "0.7rem",
                            color: "#0000009E",
                          }}
                        >
                          <span style={{ color: "green" }}>50.81%</span> off
                          with LowRx
                        </Typography>
                      </Box>
                      <Typography
                        style={{
                          fontWeight: "700",
                          fontSize: "0.9rem",
                          marginTop: "2.3rem",
                        }}
                      >
                        Login for{" "}
                        <span
                          style={{
                            color: "green",
                            fontWeight: "700",
                          }}
                        >
                          10% +{" "}
                        </span>{" "}
                        discount to get it at $52.5
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{
                          width: "9rem",
                          height: "2.5rem",
                          borderRadius: "8px",
                          backgroundColor: "#EA580C",
                          marginTop: "1.5rem",
                          boxShadow: "none",
                          padding: "8px, 20px, 8px, 20px",
                        }}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  )}
                </Card>
              ))}
          </Box>
          {/* Bottom Icons (Placeholder) */}
          <Box display="flex" justifyContent="center" mt={6} gap={12.5}>
            <Box>
              <IconButton>
                <img src={WalmartLogo} alt="Walmart Logo" />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <img src={WalmartLogo} alt="Walmart Logo" />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <img src={WalmartLogo} alt="Walmart Logo" />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <img src={WalmartLogo} alt="Walmart Logo" />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <img src={WalmartLogo} alt="Walmart Logo" />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <img src={WalmartLogo} alt="Walmart Logo" />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <img src={WalmartLogo} alt="Walmart Logo" />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <img src={WalmartLogo} alt="Walmart Logo" />
              </IconButton>
            </Box>
          </Box>
        </Box>
        {/* How It Works Section */}

        <Paper
          width="100%"
          // display="flex"
          // justifyContent="space-between"
          elevation={0}
          height="100%"
          style={{
            marginBottom: "4em",
            marginTop: "8em",
            marginLeft: "2.95em",
          }}
        >
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={0} md={6} height="50%">
              <Typography
                gutterBottom
                style={{
                  fontWeight: "700",
                  fontSize: "3.5rem",
                  width: "55%",
                  height: "10%",
                }}
              >
                How It Works
              </Typography>
              <Box display="flex" alignItems="center" width="50%">
                <img
                  src={Check}
                  alt="Check"
                  style={{ marginRight: 8, marginBottom: 15 }}
                />
                <Typography
                  paragraph
                  style={{
                    fontWeight: "400",
                    fontSize: "1.5rem",
                    color: "#0F172A",
                  }}
                >
                  24*7 Customer Support
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" width="50%">
                <img
                  src={Check}
                  alt="Check"
                  style={{ marginRight: 8, marginBottom: 15 }}
                />
                <Typography
                  paragraph
                  style={{
                    fontWeight: "400",
                    fontSize: "1.5rem",
                    color: "#0F172A",
                  }}
                >
                  Fast Deliveries
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" width="50%">
                <img
                  src={Check}
                  alt="Check"
                  style={{ marginRight: 8, marginBottom: 15 }}
                />
                <Typography
                  paragraph
                  style={{
                    fontWeight: "400",
                    fontSize: "1.5rem",
                    color: "#0F172A",
                  }}
                >
                  Free Home Delivery
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                mt={0}
                style={{ marginLeft: "0.1em" }}
              >
                <Box mt={3.9}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: "blue" }}
                  >
                    Download the app for ease
                  </Typography>
                </Box>
                <Box mt={4}>
                  <img
                    src={RightArrow}
                    alt="Right Arrow"
                    style={{
                      //marginBottom: "0",
                      marginLeft: "0.5em",
                    }}
                  />
                </Box>
                {/* <ArrowForwardIosIcon style={{ marginLeft: '10px' }}/> */}
              </Box>

              <Box
                mt={3}
                display="flex"
                style={{
                  width: "80%",
                  marginLeft: "0.2em",
                  height: "80%",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={
                    <img
                      src={PlayStoreVector}
                      alt="Play Store Vector"
                      style={{ width: "80%", height: "80%" }}
                    />
                  }
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "40%",
                    height: "30%",
                    backgroundColor: "#54C7E6",
                    // paddingLeft: "1.5em",
                    // marginLeft: "1em",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      top: 0,
                      bottom: 0,
                      margin: 0,
                      padding: 0,
                      fontSize: "0.73rem",
                      color: "#0F172A",
                    }}
                  >
                    Download on the
                    <br />
                    <span
                      style={{
                        margin: 0,
                        padding: 0,
                        top: 0,
                        bottom: 0,
                        fontWeight: "600",
                        fontSize: "1.2rem",
                        color: "#0F172A",
                      }}
                    >
                      Play Store
                    </span>
                  </span>
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<img src={AppleVector} alt="Apple Vector" />}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "40%",
                    height: "40%",
                    backgroundColor: "#54C7E6",
                    paddingLeft: "1.5em",
                    marginLeft: "1em",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      height: "30%",
                      top: 0,
                      bottom: 0,
                      margin: 0,
                      padding: 0,
                      fontSize: "0.73rem",
                      color: "#0F172A",
                    }}
                  >
                    Download on the
                    <br />
                    <span
                      style={{
                        margin: 0,
                        padding: 0,
                        top: 0,
                        bottom: 0,
                        fontWeight: "600",
                        fontSize: "1.2rem",
                        color: "#0F172A",
                      }}
                    >
                      App Store
                    </span>
                  </span>
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                position="relative"
                display="flex"
                justifyContent="center"
                elevation={0}
              >
                <Box
                  component="img"
                  src={howItWorksImage}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 110,
                    width: "80%",
                    // height: '100%',
                    objectFit: "cover",
                    zIndex: 1,
                  }}
                />
                <Box
                  component="img"
                  src={HowItWorkBackImg}
                  sx={{
                    position: "relative",
                    top: 20,
                    right: 160,
                    width: "50%",
                    marginBottom: "2rem",
                    // height: '100%',
                    objectFit: "cover",
                    zIndex: 0,
                  }}
                />

                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  sx={{ position: "absolute", zIndex: 2 }}
                  bottom="5%" // Adjust this value for exact positioning
                  left="48%"
                  style={{
                    transform: "translateX(-50%)",
                    width: "80%",
                  }}
                >
                  {["Featured", "Popular", "New"].map((title, index) => (
                    <Card
                      variant="outlined"
                      key={index}
                      style={{
                        width: "calc(33.33% - 20px)",
                        marginRight: index !== 2 ? "2%" : "0", // No marginRight for the last card
                        display: "flex", // This pushes the card up
                        height:
                          index === 2
                            ? "calc(10rem + 35px)"
                            : "calc(10rem + 10px)",
                        flexDirection: "row",
                        // justifyContent: "center",
                        // alignItems: "center",
                        borderRadius: "9px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <CardContent>
                        {index === 0 && (
                          <>
                            <Typography
                              style={{
                                color: "#6B21A8",
                                display: "flex",
                                height: "1.5em",
                                padding: "0.1rem",
                                width: "50%",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "4px",
                                background: "#F3E8FF",
                              }}
                            >
                              {title}
                            </Typography>
                            <Typography
                              style={{
                                fontWeight: "700",
                                fontSize: "1rem",
                                marginTop: "0.3rem",
                              }}
                            >
                              Compare Prices
                            </Typography>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <Typography
                              style={{
                                color: "#166534",
                                display: "flex",
                                height: "1.5em",
                                padding: "0.1rem",
                                width: "50%",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "4px",
                                background: "#DCFCE7",
                              }}
                            >
                              {title}
                            </Typography>
                            <Typography
                              style={{
                                fontWeight: "700",
                                fontSize: "1rem",
                                marginTop: "0.3rem",
                              }}
                            >
                              Show to your pharmacist
                            </Typography>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <Typography
                              style={{
                                color: "#1E40AF",
                                display: "flex",
                                height: "1.5em",
                                padding: "0.1rem",
                                width: "50%",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "4px",
                                background: "#DBEAFE",
                              }}
                            >
                              {title}
                            </Typography>
                            <Typography
                              style={{
                                fontWeight: "700",
                                fontSize: "1rem",
                                marginTop: "0.3rem",
                              }}
                            >
                              Get Free Coupons
                            </Typography>
                          </>
                        )}
                        <Typography
                          variant="body2"
                          style={{ marginTop: "0.3rem" }}
                        >
                          This is a mock para.This is a mock para.{" "}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/*Mid Blue Section */}
        <Paper
          elevation={0}
          style={{
            backgroundColor: "#0F172A",
            padding: "5rem",
            alignItems: "center",
          }}
        >
          <Container maxWidth="md">
            <Grid container justifyContent="space-between">
              {/* Featured */}
              <Grid item>
                <Typography
                  variant="h3"
                  style={{
                    color: "#FFD700",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  component="h3"
                  gutterBottom
                >
                  195
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    color: "#FFD700",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Users
                </Typography>
              </Grid>

              {/* Popular */}
              <Grid item>
                <Typography
                  variant="h3"
                  style={{
                    color: "#FFD700",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  component="h3"
                  gutterBottom
                >
                  1M
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    color: "#FFD700",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Downloads
                </Typography>
              </Grid>

              {/* New */}
              <Grid item>
                <Typography
                  variant="h3"
                  component="h3"
                  style={{
                    color: "#FFD700",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  gutterBottom
                >
                  17M
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    color: "#FFD700",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Pharmacies
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        {/* Testimonials Section */}
        <Box
          py={10}
          display="flex"
          flexDirection="column"
          height="200%"
          justifyContent="space-between"
          overflow="hidden"
          sx={{ position: "relative" }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                style={{
                  fontWeight: "800",
                  fontSize: "3em",
                  alignContent: "Left",
                  marginLeft: "3.2rem",
                }}
                gutterBottom
              >
                What everyone says
              </Typography>
            </Box>
            <Box mr={8.5}>
              <IconButton
                className={
                  "custom-swiper-button-prev " + // This classname for styling
                  ("custom-swiper-button-prev-" + swiperIndex) // and this for letting swiper know the triggered button
                }
                disableFocusRipple
                disableRipple
              >
                <img src={SliderLeft} alt="Slider Left" />
              </IconButton>
              <IconButton
                className={
                  "custom-swiper-button-next " + // This classname for styling
                  ("custom-swiper-button-next-" + swiperIndex) // and this for letting swiper know the triggered button
                }
                disableFocusRipple
                disableRipple
              >
                <img src={SliderRight} alt="Slider Right" />
              </IconButton>
            </Box>
          </Box>
          {/* <Slider ref={sliderRef} {...settings}> */}
          <Box
            display="flex"
            alignItems="center"
            flexDirection="row"
            // justifyContent="center"
            py={7}
            width="100%"
            // marginLeft="1rem"
            marginRight="1rem"
          >
            <Swiper
              id={"cards-slider-" + swiperIndex}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3.1 },
              }}
              navigation={{
                prevEl: `.custom-swiper-button-prev-${swiperIndex}`,
                nextEl: `.custom-swiper-button-next-${swiperIndex}`,
              }}
              className="cards-slider " // added class name to stype it
            >
              <SwiperSlide width="40%">
                <Card
                  style={{
                    width: "90%",
                    margin: "1%",
                    marginLeft: "3.2rem",
                    // marginTop: "0.5%",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderRadius: "20px",
                  }}
                >
                  <CardContent>
                    <Typography variant="body1" paragraph>
                      Lacus vestibulum ultricies mi risus, dui... Lacus
                      vestibulum ultricies mi risus, dui... Lacus vestibulum
                      ultricies mi risus, dui... Lacus vestibulum ultricies mi
                      risus, dui... Lacus vestibulum ultricies mi risus, dui...
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Avatar src="/path_to_hellen_jimmy.jpg" />
                      <Box ml={2}>
                        <Typography variant="subtitle1" fontWeight="bold">
                          Hellen Jimmy
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Financial Counselor
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </SwiperSlide>
              <SwiperSlide width="40%">
                <Card
                  style={{
                    width: "90%",
                    margin: "1%",
                    marginLeft: "2.2rem",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderRadius: "20px",
                  }}
                >
                  <CardContent>
                    <Typography variant="body1" paragraph>
                      Lacus vestibulum ultricies mi risus, dui... Lacus
                      vestibulum ultricies mi risus, dui... Lacus vestibulum
                      ultricies mi risus, dui... Lacus vestibulum ultricies mi
                      risus, dui... Lacus vestibulum ultricies mi risus, dui...
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Avatar src="/path_to_hellen_jimmy.jpg" />
                      <Box ml={2}>
                        <Typography variant="subtitle1" fontWeight="bold">
                          Batman
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Superhero
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </SwiperSlide>
              <SwiperSlide width="40%">
                <Card
                  style={{
                    width: "90%",
                    margin: "1%",
                    marginLeft: "1.2rem",
                    // marginRight: "-1rem",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderRadius: "20px",
                  }}
                >
                  <CardContent>
                    <Typography variant="body1" paragraph>
                      Lacus vestibulum ultricies mi risus, dui... Lacus
                      vestibulum ultricies mi risus, dui... Lacus vestibulum
                      ultricies mi risus, dui... Lacus vestibulum ultricies mi
                      risus, dui... Lacus vestibulum ultricies mi risus, dui...
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Avatar src="/path_to_hellen_jimmy.jpg" />
                      <Box ml={2}>
                        <Typography variant="subtitle1" fontWeight="bold">
                          Bruce Wayne
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Philanthropist
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </SwiperSlide>
              <SwiperSlide width="40%">
                <Card
                  style={{
                    width: "90%",
                    margin: "1%",
                    marginLeft: "0.1rem",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderRadius: "20px",
                  }}
                >
                  <CardContent>
                    <Typography variant="body1" paragraph>
                      Lacus vestibulum ultricies mi risus, dui... Lacus
                      vestibulum ultricies mi risus, dui... Lacus vestibulum
                      ultricies mi risus, dui... Lacus vestibulum ultricies mi
                      risus, dui... Lacus vestibulum ultricies mi risus, dui...
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Avatar src="/path_to_hellen_jimmy.jpg" />
                      <Box ml={2}>
                        <Typography variant="subtitle1" fontWeight="bold">
                          Jimmy Fallon
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Talk Show Host
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </SwiperSlide>
            </Swiper>
          </Box>
          {/* </Slider> */}
        </Box>
        {/* Subscription Section */}
        <Box style={{ padding: "7rem", backgroundColor: "#FACC15" }}>
          <Container>
            <Typography
              variant="h4"
              align="center"
              style={{ color: "#0F172A" }}
              gutterBottom
            >
              Join a world of coupons now
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ marginBottom: "1.6rem" }}
            >
              Malesuada ut aliquam...
            </Typography>
            <Typography align="center" component="div">
              {/* <TextField
                placeholder="Enter your email"
                variant="outlined"
                size="small"
                align="center"
                style={{ marginBottom: "1.5rem", backgroundColor: "white" }}
                
              /> */}

              <TextField
                label="Enter your email"
                variant="outlined"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  width: "25rem",
                  background: "white",
                }}
                InputProps={{
                  style: {
                    borderRadius: "20px",
                  },
                  notchedOutline: {
                    border: "2px solid #E4E4E7",
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                align="center"
                style={{
                  backgroundColor: "#EA580C",
                  marginLeft: "1rem",
                  height: "3.5rem",
                  fontWeight: "700",
                }}
              >
                Subscribe
              </Button>
            </Typography>
          </Container>
        </Box>

        {/* Footer */}
        <Box
          style={{
            backgroundColor: "#0F172A",
            paddingTop: "4em",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxHeight: "100%",
          }}
        >
          <Container style={{ width: "100%" }} maxWidth={false}>
            <Grid container spacing={0}>
              {/* ... other Grid items ... */}

              <Grid item xs={12} style={{ marginRight: "3.5em" }}>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Box marginLeft="-1em">
                    <Typography
                      variant="h6"
                      style={{
                        color: "white",
                        fontSize: "1.5rem",
                        marginBottom: "1.6rem",
                      }}
                    >
                      <img
                        src={Logo}
                        alt="LowRxx Logo"
                        style={{ height: "3.2rem", marginLeft: "0.7em" }}
                      />
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      style={{ marginBottom: "0.8rem", color: "white" }}
                    >
                      Product
                    </Typography>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1.5rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Pricing
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Overview
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Browse
                    </Link>

                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Accessability
                      <span
                        style={{
                          padding: "0.15rem",
                          paddingLeft: "0.2rem",
                          paddingRight: "0.2rem",
                          marginLeft: "0.5rem",
                          marginBottom: "0.5rem",
                          color: "#6B21A8",
                          background: "#F3E8FF",
                          borderRadius: "4px",
                          fontSize: "0.6rem",
                        }}
                      >
                        BETA
                      </span>
                    </Link>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      style={{ marginBottom: "0.8rem", color: "white" }}
                    >
                      Solutions
                    </Typography>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1.5rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Brainstroming
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Ideation
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Wireframing
                    </Link>

                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Research
                    </Link>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      style={{ marginBottom: "0.8rem", color: "white" }}
                    >
                      Resources
                    </Typography>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1.5rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Help Center
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Blog
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Tutorials
                    </Link>

                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      FAQs
                    </Link>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      style={{
                        marginBottom: "0.8rem",
                        color: "white",
                        fontStyle: "bold",
                      }}
                    >
                      Support
                    </Typography>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1.5rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Developers
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Documentation
                    </Link>

                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Integrations
                    </Link>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      style={{ marginBottom: "0.8rem", color: "white" }}
                    >
                      Company
                    </Typography>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1.5rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      About
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Press
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Events
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      style={{
                        display: "block",
                        marginTop: "1rem",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Request Demo
                      {/* <img
                        src={RightArrowVector}
                        alt="Right Arrow Vector"
                        // style={{ marginLeft: "0.2rem", marginTop: "0.5rem" }}
                      /> */}
                    </Link>
                  </Box>
                </Box>
                <Divider
                  style={{
                    marginTop: "3rem",
                    width: "100%",
                    marginBottom: "1.2rem",
                  }}
                />
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="body2" style={{ color: "white" }}>
                    © 2023. All rights reserved.
                  </Typography>
                  <Box>
                    <Link
                      style={{
                        textDecoration: "none",
                        margin: "0px 0.8rem",
                        color: "white",
                      }}
                    >
                      Terms
                    </Link>
                    <Link
                      style={{
                        textDecoration: "none",
                        margin: "0px 0.8rem",
                        color: "white",
                      }}
                    >
                      Privacy
                    </Link>
                    <Link
                      style={{
                        textDecoration: "none",
                        margin: "0px 0.8rem",
                        color: "white",
                      }}
                    >
                      Contact
                    </Link>
                    <IconButton
                      style={{
                        textDecoration: "none",
                        margin: "0px 0.8rem",
                        color: "white",
                      }}
                    >
                      <GlobeIcon />
                      <span
                        style={{
                          fontSize: "0.9rem",
                          marginLeft: "0.5rem",
                        }}
                      >
                        EN
                      </span>
                    </IconButton>
                    <IconButton
                      style={{
                        textDecoration: "none",
                        margin: "0px 10px",
                        color: "white",
                      }}
                    >
                      <EuroIcon />
                      <span
                        style={{
                          fontSize: "0.9rem",
                          marginLeft: "0.5rem",
                        }}
                      >
                        EUR
                      </span>
                    </IconButton>
                    <IconButton
                      style={{
                        textDecoration: "none",
                        margin: "0px 10px",
                        color: "white",
                      }}
                    >
                      <img src={AccessabilityVector} alt="Accessability" />
                    </IconButton>
                    {/* You can add more icons in the same manner */}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </PageContainer>
  );
}

export default LandingPage;
