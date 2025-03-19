import { lightTheme, mainTheme } from "@/utils/theme/DefaultTheme";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

interface props {
  selectedTheme: typeof mainTheme | typeof lightTheme;
  pageNumber: (e: any) => void;
  isEditDetailPage: boolean;
  isSetting: (e : any) => void
}

const EditDetails = (props: props) => {
  const handleEdit = () => {
    return props.pageNumber(1);
  };

  const handleContinue = () => {
    return props.isSetting(true)
  };

  const storedDataString: any = localStorage.getItem("registerFormData");

  const storedData = JSON.parse(storedDataString);

  const fname = storedData.fname;
  const lname = storedData.lname;
  
  return (
    <>

        <Box>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "58%", sm: "54%", md: "50%" },
              left: { xs: "45%", sm: "48%", md: "50%" },
              transform: "translate(-50%, -50%)",
              width: { xs: "333px", sm: "501px", md: "800px" },
              height: { xs: "150px", sm: "250px", md: "400px" },
              background: props.selectedTheme.palette.action.hover,
              clipPath:
                "polygon(10% 50%, 20% 0%, 90% 0%, 100% 50%, 100% 50%, 90% 100%, 20% 100%, 10% 50%)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
              zIndex: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <Image
              src={"/images/profile.jpg"}
              alt="Preview"
              width={800}
              height={400}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "74%", sm: "80%", md: "85%" },
              left: { xs: "45%", sm: "48%", md: "49.8%" },
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
                  paddingLeft: "50px",
                },
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {fname} {lname}
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "152%", sm: "143%", md: "131.9%" },
              left: { xs: "50%", sm: "50%", md: "50%" },
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: { xs: "1000px", sm: "800px", md: "600px" },
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
              justifyContent: "center",
              alignItems: "center",
              px: 2,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                justifyContent: "start",
                top: 100,
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                color={props.selectedTheme.palette.action.hover}
                fontSize={"2rem"}
              >
                Done
              </Typography>
              <Typography
                color={props.selectedTheme.palette.primary.contrastText}
                fontSize={"2rem"}
                textAlign={"center"}
              >
                Text that everything is ready and the user can continue or can
                continue with more detailed design
              </Typography>

              <Box
                sx={{
                  position: "relative",
                  marginTop: "50px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Button
                  variant="contained"
                  className="flower-btn"
                  onClick={handleEdit}
                  style={{
                    background: props.selectedTheme.palette.grey[100],
                    color: props.selectedTheme.palette.text.primary,
                    fontWeight: "bold",
                    minWidth: "150px",
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  className="flower-btn"
                  onClick={handleContinue}
                  style={{
                    background: props.selectedTheme.palette.action.hover,
                    color: props.selectedTheme.palette.text.primary,
                    fontWeight: "bold",
                    minWidth: "150px",
                  }}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
  
    </>
  );
};

export default EditDetails;
