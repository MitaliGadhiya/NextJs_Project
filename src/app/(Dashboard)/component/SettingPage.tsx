import { Box, Typography } from "@mui/material";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import { useEffect, useState } from "react";
import Image from "next/image";
import { lightTheme, mainTheme } from "@/utils/theme/DefaultTheme";

interface props {
  imageView?: string | null;
  selectedFlowers: string[];
  renderCircularSlices: () => JSX.Element[];
  selectedTheme: typeof mainTheme | typeof lightTheme;
}

const SettingPage = (props: props) => {
  const [selection, setSelection] = useState<boolean[]>(Array(12).fill(false));

  const handleFlowerClick = (index: number) => {
    setSelection((prev) => {
      const newSelection = [...prev];
      newSelection[index] = !newSelection[index];
      localStorage.setItem("selection", JSON.stringify(newSelection));
      return newSelection;
    });
  }

    useEffect(() => {
    const storedSelection = localStorage.getItem("selection");
    if (storedSelection) {
      setSelection(JSON.parse(storedSelection));
    }
  }, []);
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
          left: { xs: "44%", sm: "47%", md: "48%" },
          transform: "translate(-50%, -50%)",
          width: { xs: "330px", sm: "575px", md: "819px" },
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
          Change More
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "113%", sm: "143%", md: "131.9%" },
          left: { xs: "50%", sm: "50%", md: "50%" },
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: { xs: "500px", sm: "800px", md: "600px" },
          background: props.selectedTheme.palette.primary.light,
          clipPath: {
            md: "none",
            lg: "polygon(5% 0%, 96% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 10%)",
            xs: "none",
          },
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: "22%", sm: "18%", md: "27%" },
            left: { xs: "45.8%", sm: "48.8%", md: "48.5%" },
            zIndex: 100,
            transform: "translate(-50%, -50%)",
            minWidth: { xs: "78%", sm: "58%", md: "634px" },
            height: { xs: "200px", sm: "220px", md: "250px" },
            background: props.selectedTheme.palette.secondary.light,
            clipPath:
              "polygon(10% 0%, 0% 0%, 90% 0%, 100% 0%, 100% 90%, 96% 100%, 14% 100%, 10% 90%)",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: props.selectedTheme.palette.primary.dark, 
              clipPath: "polygon(10.5% 0%, 0% 0%, 89.5% 0%, 99.5% 0%, 99.5% 89.5%, 96% 99%, 14.5% 99%, 10.5% 89.5%)", 
              zIndex: -1, 
            },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: "20px",
              justifyItems: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              paddingLeft: { xs: "20px", sm: "20px", md: "48px" },
            }}
          >
            {Array.from({ length: 12 }, (_, index) => (
              <FilterVintageIcon
                key={index}
                sx={{
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "2.5rem",
                    lg: "3rem",
                  },
                  color: selection[index]
                    ? props.selectedTheme.palette.action.hover
                    : props.selectedTheme.palette.grey[100],
                  cursor: "pointer",
                  paddingLeft: "10px",
                  animation: "rotateIcon 3s linear infinite",
                }}
                onClick={() => handleFlowerClick(index)}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SettingPage;
