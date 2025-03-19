import {
  Box,
  Button,
  Tab,
  Tabs,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { lightTheme, mainTheme } from "@/utils/theme/DefaultTheme";
import EditDetails from "./EditDetails";

interface props {
  imageView?: string | null;
  pageNumber: (e: any) => void;
  selectedFlowers: string[];
  renderCircularSlices: () => JSX.Element[];
  selectedTheme: typeof mainTheme | typeof lightTheme;
  isEditDetailPage: boolean;
  isSetting: (e: any) => void;
}

const AddDetails = (props: props) => {
  const [selectedTab, setSelectedTab] = useState<number>(() => {
    return parseInt(localStorage.getItem("selectedTab") || "0");
  });

  const [textFieldValues, setTextFieldValues] = useState<string[]>(() => {
    const savedValues = localStorage.getItem("textFieldValues");
    return savedValues ? JSON.parse(savedValues) : ["", "", "", ""];
  });

  const [showEditPage, setEditPage] = useState<boolean>(() => {
    return localStorage.getItem("showEditPage") === "false";
  });
  const themebreak = useTheme();
  const isMobile = useMediaQuery(themebreak.breakpoints.down("md"));

  useEffect(() => {
    localStorage.setItem("selectedTab", selectedTab.toString());
  }, [selectedTab]);

  useEffect(() => {
    localStorage.setItem("textFieldValues", JSON.stringify(textFieldValues));
  }, [textFieldValues]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = [...textFieldValues];
    newValues[selectedTab] = e.target.value;
    setTextFieldValues(newValues);
  };

  const handleNext = () => {
    setEditPage(true);
  };

  return (
    <>
      {showEditPage ? (
        <EditDetails
          selectedTheme={props.selectedTheme}
          pageNumber={props.pageNumber}
          isEditDetailPage={props.isEditDetailPage}
          isSetting={props.isSetting}
        />
      ) : (
        <>
          <Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: "300px", sm: "400px", md: "600px" },
                height: { xs: "300px", sm: "400px", md: "600px" },
                background: props.selectedTheme.palette.secondary.light,
                clipPath:
                  "polygon(15.6% 15.6%, 50% 0, 85.3% 14.6%, 100% 50%, 83% 83.3%, 50% 100%, 16.6% 83.3%, 0 50%)",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                zIndex: 100,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: props.selectedTheme.palette.primary.light,
                  clipPath:
                    "polygon(15.8% 16%, 50% 1%, 85% 15.5%, 99% 50%, 82.5% 82.5%, 51% 99%, 17.2% 82.5%, 1% 50%)",
                  zIndex: -1,
                },
              }}
            >
              {props.renderCircularSlices()}

              <Box
                sx={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: { xs: "150px", sm: "150px", md: "200px" },
                  height: { xs: "150px", sm: "150px", md: "200px" },
                  background: props.selectedTheme.palette.action.hover,
                  clipPath:
                    "polygon(15.6% 15.6%, 50% 0, 85.3% 14.6%, 100% 50%, 83% 83.3%, 50% 100%, 16.6% 83.3%, 0 50%)",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                  zIndex: 999,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {props.imageView ? (
                  <Image
                    src={props.imageView}
                    alt="Preview"
                    width={200}
                    height={200}
                    objectFit={"cover"}
                  />
                ) : (
                  <></>
                )}
              </Box>
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
              <div className="line line4"></div>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "74%", sm: "80%", md: "85%" },
              left: { xs: "45%", sm: "48%", md: "48.5%" },
              transform: "translate(-50%, -50%)",
              width: { xs: "330px", sm: "489px", md: "819px" },
              height: { xs: "50px", sm: "80px", md: "100px" },
              background: props.selectedTheme.palette.secondary.light,
              clipPath:
                "polygon(15.5% 50%, 20.5% 2%, 89.5% 2%, 94.5% 48%, 94.5% 48%, 90.5% 97%, 20.5% 97%, 15.5% 50%)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
              zIndex: 120,
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
                background: props.selectedTheme.palette.secondary.main,
                clipPath:
                  "polygon(16% 50%, 20.6% 4%, 89.5% 4%, 94.4% 50%, 94.1% 50%, 90.3% 95%, 20.6% 95%, 16% 50%)",
                zIndex: -1,
              },
            }}
          >
            <Typography
              variant="h5"
              color={props.selectedTheme.palette.action.hover}
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.5rem",
                  md: "2rem",
                  paddingLeft: "50px",
                },
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Gardener Configures
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "115%", sm: "143%", md: "146.9%" },
              left: { xs: "50%", sm: "50%", md: "50%" },
              transform: "translate(-50%, -50%)",
              width: "100vw",
              height: { xs: "500px", sm: "800px", md: "600px" },
              background: props.selectedTheme.palette.primary.light,
              clipPath: {
                md: "polygon(5% 0%, 96% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 10%)",
                lg: "polygon(5% 0%, 96% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 10%)",
                xs: "none",
              },
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
              px: 2,
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "83%", sm: "92%", md: "100.5%", lg: "100.1%" },
              left: { xs: "50%", sm: "50%", md: "50%", lg: "47.5%" },
              transform: "translate(-50%, -50%)",
              minWidth: { xs: "100%", sm: "100%", md: "100%", lg: "1200px" },
              height: { xs: "120px", sm: "150px", md: "200px", lg: "200px" },
              background: props.selectedTheme.palette.secondary.light,
              clipPath: {
                md: "none",
                lg: "polygon(15.5% 50%, 20.5% 2%, 89.5% 2%, 94.5% 48%, 94.5% 48%, 90.5% 97%, 20.5% 97%, 15.5% 50%)",
                sm: "none",
                xs: "none",
              },
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
              zIndex: 110,
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              px: 2,
              flexDirection: "column",
              paddingTop: "100px",
              paddingLeft: { xs: "0px", sm: "0px", md: "0px", lg: "100px" },
              paddingRight: "-10px",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: props.selectedTheme.palette.primary.main,
                clipPath: {
                  md: "none",
                  lg: "polygon(16% 50%, 20.6% 4%, 89.5% 4%, 94.4% 50%, 94.1% 50%, 90.3% 95%, 20.6% 95%, 16% 50%)",
                  sm: "none",
                  xs: "none",
                },
                zIndex: -1,
              },
            }}
          >
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="fullWidth"
              sx={{
                width: "100%",
                height: "100%",
                color: props.selectedTheme.palette.primary.contrastText,
                "& .MuiTab-root": {
                  backgroundColor: props.selectedTheme.palette.grey[200],
                  fontWeight: "bold",
                  height: isMobile ? "50px" : "100px",
                  minHeight: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: props.selectedTheme.palette.primary.contrastText,
                },
                "& .Mui-selected": {
                  backgroundColor: props.selectedTheme.palette.secondary.main,
                  color: props.selectedTheme.palette.action.hover,
                },
              }}
            >
              <Tab
                label="Bio"
                style={{ paddingLeft: isMobile ? "0px" : "60px" }}
              />
              <Tab label="Title" />
              <Tab label="Social Links" />
              <Tab
                label="Website"
                style={{ paddingRight: isMobile ? "0px" : "60px" }}
              />
            </Tabs>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "110%", sm: "121%", md: "134.5%" },
              left: "48.7%",
              transform: "translate(-50%, -50%)",
              minWidth: { xs: "103%", sm: "102.5%", md: "103%", lg: "938px" },
              height: { xs: "200px", sm: "220px", md: "250px" },
              background: "transparent",
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
            }}
          >
            <TextField
              variant="standard"
              placeholder="Type something..."
              multiline
              value={textFieldValues[selectedTab]}
              onChange={handleTextFieldChange}
              rows={4}
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                backgroundColor:
                  props.selectedTheme.palette.primary.contrastText,
                width: "100%",
                height: "100%",
                paddingLeft: "123px",
                paddingRight: "24px",
                paddingTop: "50px",
              }}
            />
          </Box>
          <Button
            variant="contained"
            className="border"
            onClick={handleNext}
            sx={{
              backgroundColor: props.selectedTheme.palette.grey[100],
              color: props.selectedTheme.palette.text.primary,
              width: { xs: "100px", sm: "200px", md: "300px" },
              height: { xs: "30px", sm: "50px", md: "50px" },
              position: "absolute",
              top: { xs: "125.5%", sm: "138%", md: "154%" },
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 120,
            }}
          >
            Next
          </Button>
        </>
      )}
    </>
  );
};

export default AddDetails;
