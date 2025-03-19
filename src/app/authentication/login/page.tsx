"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Alert, AlertTitle } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { mainTheme } from "@/utils/theme/DefaultTheme";
import CustomFormTextField from "@/app/(Dashboard)/component/form/CustomFormTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/validators/authentication.validator";
import HeaderLogin from "@/app/(Dashboard)/layout/header/HeaderLogin";

const Login = () => {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(LoginSchema),
  });

  const [error, setError] = useState<string | null>(null);
  const onSubmit = (data: any) => {
    const storedDataString = localStorage.getItem("registerFormData");

    if (!storedDataString) {
      setError("User Not Found");
      return;
    }

    const storedData = JSON.parse(storedDataString);
    if (
      storedData.email === data.email &&
      storedData.password === data.password
    ) {
      router.push("/component/MainPage");
    } else {
      setError("Invalid User Credentials");
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <>
      <Box
        sx={{ position: "relative" }}
        style={{
          background: mainTheme.palette.primary.light,
          height: "100vh",
          fontFamily: "Montserrat Alternates",
        }}
      >
        <div>
          {error && (
            <Alert
              severity="error"
              variant="filled"
              className="p-5"
              style={{
                position: "fixed",
                zIndex: 1000,
                width: "100%",
              }}
            >
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          )}
        </div>
        <HeaderLogin />
        <Box
          className = "img-fluid"
          sx={{
            width: "100%",
            position: "relative",
            height: "564px",
          }}
        >
          <Image
            src="/images/mainBackground.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box
          sx={{ position: "relative" }}
          style={{
            background: mainTheme.palette.primary.light,
            height: "100vh",
          }}
        >
          <Box
            sx={{
              width: "100%",
              position: "relative",
              height: "500px",
            }}
          >
            <Image
              src="/images/vector.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              style={{
                opacity: 0.1,
              }}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              zIndex: 10,
            }}
          >
            <Box
            
              sx={{
                position: "absolute",
                top: { xs: "-54%", sm: "-19%", md: "-199%" },
                left: { xs: "45%", sm: "48%", md: "48.5%" },
                transform: "translate(-50%, -50%)",
                width: { xs: "330px", sm: "489px", md: "819px"},
                height: { xs: "50px", sm: "80px", md: "100px" },
                background: mainTheme.palette.secondary.light,
                clipPath:
                  "polygon(15.5% 50%, 20.5% 2%, 89.5% 2%, 94.5% 48%, 94.5% 48%, 90.5% 97%, 20.5% 97%, 15.5% 50%)",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                zIndex: 100,
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                px: 2,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: mainTheme.palette.secondary.main,
                  clipPath:
                    "polygon(16% 50%, 20.6% 4%, 89.5% 4%, 94.4% 50%, 94.1% 50%, 90.3% 95%, 20.6% 95%, 16% 50%)",
                  zIndex: -1,
                },
              }}
            >
              <Typography
                fontWeight="bold"
                textAlign="center"
                fontFamily={mainTheme.typography.fontFamily}
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.5rem",
                    md: "2rem",
                    paddingLeft: "30px",
                  },
                }}
              >
                <span style={{ color: mainTheme.palette.action.hover }}>⟨</span>
                compassion
                <span style={{ color: mainTheme.palette.action.hover }}>
                  ⟩Compost
                </span>
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                alignContent: "start",
                width: "100%",
                height: "50%",
                px: { xs: "100px", sm: "100px", md: "160px" },
                paddingLeft: { xs: "100px", sm: "none", md: "113px" },
                paddingRight: { xs: "100px", sm: "none", md: "100px" },
              }}
            >
              <Box
                sx={{
                  clipPath:
                    "polygon(15.6% 15.6%, 50% 0, 85.3% 14.6%, 100% 50%, 83% 83.3%, 50% 100%, 16.6% 83.3%, 0 50%)",
                  zIndex: 120,
                  transform: {
                    xs: "translate(-20%, 4%)",
                    sm: "translate(-20%, 4%)",
                    md: "translate(-20%, 349%)",
                    lg: "translate(-20%, 4%)",
                  },
                  backgroundColor: mainTheme.palette.secondary.light,
                  marginTop: { xs: "125px", sm: "264px", md: "-53px" },
                  width: { xs: "40px", sm: "60px", md: "100px" },
                  height: { xs: "40px", sm: "60px", md: "100px" },

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: mainTheme.palette.primary.main,
                    clipPath:
                      "polygon(15.8% 16%, 50% 1%, 85% 16%, 99% 50%, 82.5% 82.5%, 51% 99%, 17.2% 82.5%, 1% 50%)",
                    zIndex: -1,
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "-19.1%", sm: "1.1%", md: "1.1%", lg: "1.5%" },
                  left: { xs: "50%", sm: "50%", md: "50%", lg: "47.5%" },
                  transform: "translate(-50%, -50%)",
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "1200px" },
                  height: {
                    xs: "120px",
                    sm: "150px",
                    md: "200px",
                    lg: "200px",
                  },
                  background: mainTheme.palette.primary.main,
                  clipPath: {
                    md: "none",
                    lg: "polygon(15.5% 50%, 20.5% 2%, 89.5% 2%, 94.5% 48%, 94.5% 48%, 90.5% 97%, 20.5% 97%, 15.5% 50%)",
                    sm: "none",
                    xs: "none",
                  },
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                  zIndex: 10,
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  p: { xs: 0, sm: 0, md: "100px" },
                }}
              >
                <Typography
                  variant="h5"
                  color={mainTheme.palette.grey[100]}
                  fontFamily={mainTheme.typography.fontFamily}
                  sx={{
                    paddingTop: { md: "30px" },
                    paddingLeft: { xs: "0px", md: "0px", lg: "124px" },
                    fontSize: { xs: "0.7rem", sm: "1rem", md: "1.5rem" },
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Around the world, a new awareness is blooming — that our
                  emotions, like our bodies, are a part of nature, and that we
                  can cultivate them like a garden.
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "46%", sm: "55%", md: "464.5%" },
                  left: { xs: "50%", sm: "50%", md: "48.4%"},
                  transform: "translate(-50%, -50%)",
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "927px" },
                  height: { xs: "138px", sm: "220px", md: "250px" },
                  background: mainTheme.palette.primary.contrastText,
                  clipPath: {
                    md: "none",
                    lg: "polygon(10% 0%, 0% 0%, 90% 0%, 100% 0%, 100% 90%, 96% 100%, 14% 100%, 10% 90%)",
                    sm: "none",
                    xs: "none",
                  },
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                  zIndex: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  px: 4,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="text.primary"
                  fontFamily={mainTheme.typography.fontFamily}
                  sx={{
                    fontSize: {
                      xs: "0.5rem",
                      sm: "0.8rem",
                      md: "1rem",
                    },
                    paddingTop: { md: "10px" },
                    paddingLeft: { md: "100px" },
                  }}
                >
                  Around the world, a new awareness is blooming — that our
                  emotions, like our bodies, are a part of nature, and that we
                  can cultivate them like a garden. Around the world, a new
                  awareness is blooming — that our emotions, like our bodies,
                  are a part of nature, and that we can cultivate them like a
                  garden. Around the world, a new awareness is blooming — that
                  our emotions, like our bodies, are a part of nature, and that
                  we can cultivate them like a garden.
                </Typography>
              </Box>

              <Box
                sx={{
                  clipPath:
                    "polygon(15.6% 15.6%, 50% 0, 85.3% 14.6%, 100% 50%, 83% 83.3%, 50% 100%, 16.6% 83.3%, 0 50%)",
                  zIndex: 120,
                  transform: {
                    xs: "translate(-20%, 4%)",
                    sm: "translate(-20%, 4%)",
                    md: "translate(-20%, 349%)",
                    lg: "translate(-20%, 4%)",
                  },
                  backgroundColor: mainTheme.palette.secondary.light,
                  marginTop: { xs: "125px", sm: "264px", md: "-53px" },
                  width: { xs: "40px", sm: "60px", md: "100px" },
                  height: { xs: "40px", sm: "60px", md: "100px" },

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: mainTheme.palette.primary.main,
                    clipPath:
                      "polygon(15.8% 16%, 50% 1%, 85% 16%, 99% 50%, 82.5% 82.5%, 51% 99%, 17.2% 82.5%, 1% 50%)",
                    zIndex: -1,
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                left: { xs: "50%", sm: "50%", md: "48.5%"},
                zIndex: 90,
                transform: "translate(-50%, -50%)",
                minWidth: { xs: "100%", sm: "100%", md: "100%", lg: "928px" },
                height: { xs: "330px", sm: "320px", md: "365px" },
                background: mainTheme.palette.secondary.dark,
                clipPath: {
                  md: "none",
                  lg: "polygon(10% 0%, 0% 0%, 90% 0%, 100% 0%, 100% 90%, 96% 100%, 14% 100%, 10% 90%)",
                  sm: "none",
                  xs: "none",
                },
                top: { xs: "19.5rem", sm: "28rem", md: "30rem" },
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                padding: { xs: "20px", sm: "40px", md: "60px" },
                paddingLeft: { xs: "40px", sm: "80px", md: "150px" },
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                  display="flex"
                  border={"none"}
                  flexWrap="wrap"
                  flexDirection="column"
                  gap={2}
                >
                  <CustomFormTextField
                    control={control}
                    size="small"
                    fullWidth
                    errors={errors}
                    id="email"
                    name="email"
                    label="| Email"
                    type="email"
                    style={{
                      background: mainTheme.palette.secondary.main,
                      clipPath:
                        "polygon(2% 0px, 98% 0px, 103% 50%, 98% 100%, 2% 100%, -25px 54%)",
                      disableUnderline: true,
                    }}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    InputLabelProps={{
                      sx: {
                        color: mainTheme.palette.primary.contrastText,
                      },
                    }}
                    variant="filled"
                    defaultValue=""
                    className={"required"}
                    autoComplete="new-email"
                  />
                  <CustomFormTextField
                    control={control}
                    size="small"
                    errors={errors}
                    id="password"
                    name="password"
                    label="| Password"
                    fullWidth
                    type="password"
                    style={{
                      background: mainTheme.palette.secondary.main,
                      clipPath:
                        "polygon(2% 0px, 98% 0px, 103% 50%, 98% 100%, 2% 100%, -25px 54%)",
                      disableUnderline: true,
                    }}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    InputLabelProps={{
                      sx: {
                        color: mainTheme.palette.primary.contrastText,
                      },
                    }}
                    variant="filled"
                    defaultValue=""
                    className={"required"}
                    autoComplete="new-password"
                  />
                </Box>
                <Box
                  mt={4}
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    color: mainTheme.palette.action.selected,
                    curser: "pointer",
                  }}
                >
                  <a href="/authentication/register">SignUp to Inner...?</a>
                </Box>
                <Box
                  className = "container"
                  mt={2}
                  zIndex={100}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    className="border"
                    type="submit"
                    sx={{
                      fontWeight: "bold",
                      width: { xs: "12rem", sm: "15rem" },
                      height: "4rem",
                      background: mainTheme.palette.action.selected,
                      paddingLeft : "33px"
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: { xs: "32rem", sm: "42rem", md: "44rem" },
              width: "100%",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <Typography
              variant="body1"
              fontFamily={mainTheme.typography.fontFamily}
              color={mainTheme.palette.primary.contrastText}
            >
              * In the spirit of the gift economy, journaling is by donation.
              You decide what you can afford to pay.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
