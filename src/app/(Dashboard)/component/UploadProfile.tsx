import { lightTheme, mainTheme } from "@/utils/theme/DefaultTheme";
import { CloudUpload } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

interface props {
  handleFile: (e: any) => void;
  imageView?: string | null;
  pageNumber: (e: any) => void;
  selectedTheme: typeof mainTheme | typeof lightTheme;
}

const UploadProfile = (props: props) => {
  const nextPage = () => {
    return props.pageNumber(2);
  };
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "250px", sm: "300px", md: "500px" },
          height: { xs: "250px", sm: "300px", md: "500px" },
          background: props.selectedTheme.palette.secondary.light,
          clipPath:
            "polygon(13.6% 15.6%, 50% 0, 85.3% 16.6%, 100% 50%,86.3% 83.3%, 50% 100%, 14.6% 83.3%, 0 50%)",
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
              "polygon(14% 16%, 50% 1%, 85% 17%, 99% 50%, 85.5% 83%, 50% 99%, 15.8% 83%, 1% 50%)",
            zIndex: -1,
          },
        }}
      >
        <Box
          sx={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "100px", sm: "150px", md: "200px" },
            height: { xs: "100px", sm: "150px", md: "200px" },
            background: props.selectedTheme.palette.action.hover,
            clipPath:
              "polygon(13.6% 15.6%, 50% 0, 85.3% 16.6%, 100% 50%,86.3% 83.3%, 50% 100%, 14.6% 83.3%, 0 50%)",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <input
            type="file"
            accept="image/*"
            name="imagePreview"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0,
              cursor: "pointer",
            }}
            onChange={props.handleFile}
          />
          {props.imageView ? (
            <Image
              src={props.imageView}
              alt="Preview"
              width={200}
              height={200}
              objectFit={"cover"}
            />
          ) : (
            <CloudUpload
              sx={{
                fontSize: { xs: "40px", sm: "60px", md: "80px" },
                color: props.selectedTheme.palette.secondary.main,
              }}
            />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "74%", sm: "80%", md: "85%" },
          left: { xs: "43%", sm: "46%", md: "46.5%", lg: "48%" },
          transform: "translate(-50%, -50%)",
          width: { xs: "330px", sm: "489px", md: "819px" },
          height: { xs: "50px", sm: "80px", md: "100px" },
          background: props.selectedTheme.palette.secondary.light,
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
            },
            paddingLeft: { xs: "24px", sm: "30px", md: "50px" },
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Upload a Selfie
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
          left: { xs: "50%", sm: "50%", md: "50%", lg: "47%" },
          transform: "translate(-50%, -50%)",
          width: { xs: "100%", sm: "100%", md: "100%", lg: "1200px" },
          height: { xs: "120px", sm: "150px", md: "200px", lg: "200px" },
          background: props.selectedTheme.palette.secondary.light,
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
          px: 2,
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
        <Typography
          variant="h5"
          color={props.selectedTheme.palette.primary.contrastText}
          sx={{
            paddingLeft: { xs: "0px", sm: "10px", md: "119px" },
            paddingTop: "18px",
            fontSize: { xs: "0.7rem", sm: "1rem", md: "1.8rem" },
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Lorem Ipsum has been the industrys <br />
          standard dummy text ever since the 1500s
        </Typography>
      </Box>

      <Button
        variant="contained"
        className="border"
        onClick={nextPage}
        sx={{
          backgroundColor: props.selectedTheme.palette.action.hover,
          color: props.selectedTheme.palette.text.primary,
          width: { xs: "100px", sm: "200px", md: "300px" },
          height: { xs: "30px", sm: "50px", md: "50px" },
          position: "absolute",
          top: { xs: "92%", sm: "104%", md: "114.5%" },
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          fontWeight: "bold",
        }}
      >
        Continue
      </Button>
    </>
  );
};

export default UploadProfile;
