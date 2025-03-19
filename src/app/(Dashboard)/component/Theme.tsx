import { Box, Button,Typography } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import {
  emeraldGreenTheme,
  frostedLavenderTheme,
  lightTheme,
  mainTheme,
  midnightTheme,
  sunsetOrangeTheme,
} from "@/utils/theme/DefaultTheme";

interface props {
  imageView?: string | null;
  selectedFlowers: string[];
  renderCircularSlices: () => JSX.Element[];
  selectedTheme:
    | typeof mainTheme
    | typeof lightTheme
    | typeof midnightTheme
    | typeof emeraldGreenTheme
    | typeof frostedLavenderTheme
    | typeof sunsetOrangeTheme;
  onThemeChange: (
    theme:
      | typeof mainTheme
      | typeof lightTheme
      | typeof midnightTheme
      | typeof emeraldGreenTheme
      | typeof frostedLavenderTheme
      | typeof sunsetOrangeTheme
  ) => void;
}

const themes = [
  mainTheme,
  lightTheme,
  emeraldGreenTheme,
  frostedLavenderTheme,
  sunsetOrangeTheme,
  midnightTheme,
];
const Theme = (props: props) => {
  const [selection, setselection] = useState<boolean[]>(Array(6).fill(false));
  const handleThemeClick = (index: number) => {
    setselection((prevSelectedTheme) =>
      prevSelectedTheme.map((_, i) => i === index)
    );
    props.onThemeChange(themes[index]);
  };
  
  return (
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
                "polygon(15.8% 16%, 50% 1%, 85% 16%, 99% 50%, 82.5% 82.5%, 51% 99%, 17.2% 82.5%, 1% 50%)",
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
              zIndex: 200,
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
          zIndex: 110,
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
          Change More
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "152%", sm: "143%", md: "131.9%" },
          left: { xs: "50%", sm: "49.9%", md: "49.5%" },
          transform: "translate(-50%, -50%)",
          maxWidth: "100%",
          width: "100%",
          height: { xs: "1000px", sm: "800px", md: "600px" },
          background: props.selectedTheme.palette.primary.light,
          overflow : "hidden",
          clipPath: {
            md: "polygon(5% 0%, 96% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 10%)",
            lg: "polygon(5% 0%, 96% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 10%)",
            xs: "none",
          },
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          zIndex: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 101,
            top: "100px",
            color: props.selectedTheme.palette.primary.contrastText,
          }}
        >
          <h1>Color Template</h1>
        </Box>

        <Box
          sx={{
            display: "grid",
            paddingTop : {md : "200px"},
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)", 
              sm: "repeat(3, 1fr)", 
            },
            
          }}
        >
          {Array.from({ length: 6 }, (_, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: "200px",
              }}
            >
              <Button
                className="flower-btn"
                sx={{
                  maxWidth: "100%",
                  height: "80px",
                  width: {sm : "150px", xs: "120px", md : "200px"},
                  transition: "opacity 0.3s ease",
                  opacity: selection[index] ? 1 : 0.3,
                  backgroundImage: `url('/images/themeImage.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => handleThemeClick(index)}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Theme;
