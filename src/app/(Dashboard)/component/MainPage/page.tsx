"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  Box,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Star, Palette, Circle, Adjust, Settings } from "@mui/icons-material";
import Header from "../../layout/header/Header";
import UploadProfile from "../UploadProfile";
import SelectPreference from "../SelectPreference";
import AddDetails from "../AddDetails";
import SettingPage from "../SettingPage";
import Theme from "../Theme";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import Image from "next/image";
import {
  emeraldGreenTheme,
  frostedLavenderTheme,
  lightTheme,
  mainTheme,
  midnightTheme,
  sunsetOrangeTheme,
} from "@/utils/theme/DefaultTheme";
import { useRouter } from "next/navigation";

const MainPage = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [setting, setSetting] = useState(false);
  const [theme, setTheme] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("setting");
  const totalOptions = 8;
  const [currentListIndex, setCurrentListIndex] = useState(0);
  const themebreak = useTheme();
  const isMobile = useMediaQuery(themebreak.breakpoints.down("md"));
  const isEditDetailsPage = false;
  const [selectedFlowers, setSelectedFlowers] = useState<string[]>(() => {
    const storedFlowers = localStorage.getItem("selectedFlowers");
    return storedFlowers ? JSON.parse(storedFlowers) : Array(8).fill(null);
  });
  const [selectTheme, setSelectTheme] = useState(mainTheme);
  const router = useRouter();
  const handleThemeChange = ( 
    theme:
      | typeof mainTheme
      | typeof lightTheme
      | typeof midnightTheme
      | typeof emeraldGreenTheme
      | typeof frostedLavenderTheme
      | typeof sunsetOrangeTheme
  ) => {
    setSelectTheme(theme);
  };

  useEffect(() => {
    const savedImagePreview = localStorage.getItem("imagePreview");
    const savedPageNumber = localStorage.getItem("pageNumber");
    const savedSelectedFlowers = localStorage.getItem("selectedFlowers");

    if (savedImagePreview) setImagePreview(savedImagePreview);
    if (savedPageNumber) setPageNumber(parseInt(savedPageNumber, 10));
    if (savedSelectedFlowers)
      setSelectedFlowers(JSON.parse(savedSelectedFlowers));
  }, []);

  useEffect(() => {
    localStorage.setItem("imagePreview", imagePreview || "");
    localStorage.setItem("pageNumber", pageNumber.toString());
    localStorage.setItem("selectedFlowers", JSON.stringify(selectedFlowers));
  }, [imagePreview, pageNumber, selectedFlowers]);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as any);
      reader.readAsDataURL(file);
    }
  };

  const handleFlowerClick = (flowerName: string, index: number) => {
    const updatedFlowers = [...selectedFlowers];
    updatedFlowers[index] = flowerName;
    setSelectedFlowers(updatedFlowers);
    setCurrentListIndex(index);
  };

  const handlePage = (event: any, value: any) => {
    setPageNumber(value);
  };

  const handleSetting = () => {
    setSetting(true);
    setTheme(false);
  };

  const handleTheme = () => {
    setSetting(false);
    setTheme(true);
  };

  useEffect(() => {
    setSetting(false);
    setTheme(false);
  }, [pageNumber]);

  const renderCircularSlices = (): JSX.Element[] => {
    return Array(totalOptions)
      .fill(null)
      .map((_, index) => {
        const flowerName = selectedFlowers[index];
        const isSelected = !!flowerName;
        const isCurrent = currentListIndex === index;
        const baseRotation = -currentListIndex * 45;

        return (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: "0%",
              left: "0%",
              width: "100%",
              height: "100%",
              clipPath: "polygon(50% 50%, 100% 0%, 100% 50%, 50% 100%)",
              transform: `rotate(${
                index * 45 + baseRotation
              }deg) translateY(-50%)`,
              backgroundColor:
                pageNumber === 2 && !setting && !theme
                  ? isCurrent
                    ? selectTheme.palette.action.hover
                    : isSelected
                    ? selectTheme.palette.action.selected
                    : "transparent"
                  : "transparent",
              transition: "background-color 0.8s ease, transform 0.8s ease",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {isSelected && flowerName && (
              <Box
                sx={{
                  marginTop: {
                    xs: "40%",
                    sm: "42%",
                    md: "41%",
                    lg: "41%",
                  },
                  marginLeft: {
                    xs: "25%",
                    sm: "24%",
                    md: "24.5%",
                    lg: "25%",
                  },
                  transform: "rotate(21deg)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    color:
                      pageNumber === 2 && !setting && !theme
                        ? isCurrent
                          ? selectTheme.palette.secondary.main
                          : isSelected
                          ? selectTheme.palette.primary.contrastText
                          : selectTheme.palette.action.hover
                        : selectTheme.palette.action.hover,
                    fontWeight: "bold",
                    fontSize: {
                      xs: "0.7rem",
                      sm: "1rem",
                      md: "1.4rem",
                      lg: "1.5rem",
                    },
                  }}
                >
                  {flowerName}
                </Typography>
                <FilterVintageIcon
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      sm: "1.5rem",
                      md: "2rem",
                      lg: "2.5rem",
                    },
                    color:
                      pageNumber === 2 && !setting && !theme
                        ? isCurrent
                          ? selectTheme.palette.primary.main
                          : selectTheme.palette.primary.contrastText
                        : selectTheme.palette.primary.contrastText,
                    marginTop: {
                      xs: "0.8rem",
                      sm: "1.3rem",
                      md: "1.7rem",
                    },
                  }}
                />
              </Box>
            )}
          </Box>
        );
      });
  };

  const commanStyle = {
    backgroundColor: selectTheme.palette.primary.main,
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    borderRadius: 0,
  };

  const handleAnother = () => {
    router.push("./");
  };

  return (
    <ThemeProvider theme={selectTheme}>
      <Header selectedTheme={selectTheme} image={imagePreview} />
      <Box
        sx={{
          width: "100vw",
          position: "relative",
          overflowX: "clip",
        }}
      >
        {!isEditDetailsPage && (
          <Toolbar
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              px: "0rem",
              py: "0rem",
              position: "absolute",
              width: "100%",
              background: selectTheme.palette.secondary.main,
              opacity: "0.7",
              zIndex: 10,
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
                gap: 2,
                flex: { xs: "1 1 100%", md: "unset" },
                py: 1,
                backgroundColor: isMobile
                  ? selectTheme.palette.secondary.light
                  : "rgba(136,88,181,0.7)",
              }}
            >
              <Pagination
                count={3}
                variant="outlined"
                size="large"
                page={pageNumber}
                onChange={handlePage}
                hidePrevButton
                hideNextButton
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: selectTheme.palette.primary.contrastText,
                    borderColor: selectTheme.palette.action.hover,
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    borderRadius: 0,
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "-2px",
                      left: "-2px",
                      right: "-2px",
                      bottom: "-2px",
                      background: selectTheme.palette.primary.main,
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      zIndex: -1,
                    },
                  },
                  "& .Mui-selected": {
                    color: selectTheme.palette.action.hover,
                    borderColor: selectTheme.palette.action.hover,
                    fontWeight: "bold",
                  },
                }}
              />
            </Stack>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
                flex: { xs: "1 1 100%", md: "unset" },
                gap: 1,
                py: 1,
              }}
            >
              {[
                { icon: <Settings />, handler: handleSetting },
                { icon: <Palette />, handler: handleTheme },
                { icon: <Star />, handler: handleAnother },
                { icon: <Circle />, handler: handleAnother },
                { icon: <Adjust />, handler: handleAnother },
              ].map((item: any, index: any) => (
                <IconButton
                  key={index}
                  color="inherit"
                  sx={{
                    ...commanStyle,
                    color:
                      selectedIcon === index
                        ? selectTheme.palette.action.hover
                        : selectTheme.palette.primary.contrastText,
                  }}
                  onClick={() => {
                    setSelectedIcon(index);
                    item.handler();
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Toolbar>
        )}

        <Box>
          {setting ? (
            <SettingPage
              imageView={imagePreview}
              selectedFlowers={selectedFlowers}
              renderCircularSlices={renderCircularSlices}
              selectedTheme={selectTheme}
            />
          ) : theme ? (
            <Theme
              imageView={imagePreview}
              selectedFlowers={selectedFlowers}
              renderCircularSlices={renderCircularSlices}
              selectedTheme={selectTheme}
              onThemeChange={handleThemeChange}
            />
          ) : (
            <>
              {pageNumber === 1 && (
                <UploadProfile
                  handleFile={handleFileChange}
                  imageView={imagePreview}
                  pageNumber={setPageNumber}
                  selectedTheme={selectTheme}
                />
              )}
              {pageNumber === 2 && (
                <SelectPreference
                  image={imagePreview}
                  pageNumber={setPageNumber}
                  selectedFlowers={selectedFlowers}
                  setSelectedFlowers={setSelectedFlowers}
                  renderCircleSlice={renderCircularSlices}
                  handleFlowerClick={handleFlowerClick}
                  currentListIndex={currentListIndex}
                  setCurrentListIndex={setCurrentListIndex}
                  selectedTheme={selectTheme}
                />
              )}
              {pageNumber === 3 && (
                <AddDetails
                  imageView={imagePreview}
                  pageNumber={setPageNumber}
                  selectedFlowers={selectedFlowers}
                  renderCircularSlices={renderCircularSlices}
                  selectedTheme={selectTheme}
                  isEditDetailPage={isEditDetailsPage}
                  isSetting={setSetting}
                />
              )}
            </>
          )}
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "640px", sm: "640px", md: "640px" },
          
          }}
        >
          <Image
            src="/images/stage1.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            style={{
             
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainPage;
