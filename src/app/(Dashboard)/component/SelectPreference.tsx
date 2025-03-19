import { lightTheme, mainTheme } from "@/utils/theme/DefaultTheme";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

interface props {
  image: string | null;
  pageNumber: (e: any) => void;
  selectedFlowers: string[];
  setSelectedFlowers: (flowers: string[]) => void;
  renderCircleSlice: () => JSX.Element[];
  handleFlowerClick: (flowerName: string, index: number) => void;
  currentListIndex: number;
  setCurrentListIndex: (e: any) => void;
  selectedTheme: typeof mainTheme | typeof lightTheme;
}

const SelectPreference = (props: props) => {
  const totalOptions = 8;
  const flowerLists: string[][] = [
    ["Hope", "Love", "Peace", "Joy", "Gratitude", "Kindness", "Humility"],
    ["Hope", "Love", "Peace", "Joy", "Gratitude", "Kindness", "Humility"],
    ["Hope", "Love", "Peace", "Joy", "Gratitude", "Kindness", "Humility"],
    ["Hope", "Love", "Peace", "Joy", "Gratitude", "Kindness", "Humility"],
    ["Hope", "Love", "Peace", "Joy", "Gratitude", "Kindness", "Humility"],
    ["Hope", "Love", "Peace", "Joy", "Gratitude", "Kindness", "Humility"],
    ["Hope", "Love", "Peace", "Joy", "Gratitude", "Kindness", "Humility"],
    ["Hope", "Love", "Peace", "Joy", "Gratitude", "Kindness", "Humility"],
  ];

  const handleNext = () => {
    if (props.currentListIndex < flowerLists.length - 1) {
      props.setCurrentListIndex(props.currentListIndex + 1);
    }
  };

  const handlePrev = () => {
    if (props.currentListIndex > 0) {
      props.setCurrentListIndex(props.currentListIndex - 1);
    }
  };

  const handleCreate = () => {
    return props.pageNumber(3);
  };

  const renderCircles = (): JSX.Element[] => {
    return Array(totalOptions)
      .fill(null)
      .map((_, index) => (
        <div
          key={index}
          className={`circle ${props.selectedFlowers[index] ? "filled" : ""}`}
          style={{
            width: "22px",
            height: "22px",
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            background: props.selectedFlowers[index]
              ? props.selectedTheme.palette.action.selected
              : props.selectedTheme.palette.grey[100],
            margin: "0 5px",
          }}
        ></div>
      ));
  };

  return (
    <>
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
            " polygon(15.6% 15.6%, 50% 0, 85.3% 14.6%, 100% 50%, 83% 83.3%, 50% 100%, 16.6% 83.3%, 0 50%)",
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
        {props.renderCircleSlice()}

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
          }}
        >
          {props.image ? (
            <Image
              src={props.image}
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
      <Box
        sx={{
          position: "absolute",
          top: { xs: "74%", sm: "80%", md: "91%" },
          left: { xs: "48%", sm: "47%", md: "47.5%", lg: "48.5%" },
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
          Choose Your Flowers
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "115%", sm: "143%", md: "137.9%" },
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
      >
        <div className="progress-container">{renderCircles()}</div>
        <div className="mb-5">
          <h1>Trending</h1>
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            flexDirection: "row",
          }}
        >
          <Box
            className="flower-list"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100vw",
              height: "100px",
              overflowX: "auto",
              overflowY: "hidden",
              padding: "10px",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
            }}
          >
            <Button
              onClick={handlePrev}
              disabled={props.currentListIndex === 0}
              sx={{
                minWidth: "50px",
                height: "50px",
                color: props.selectedTheme.palette.primary.contrastText,
                marginRight: "10px",
              }}
            >
              <ArrowBackIos />
            </Button>
            <Box
              className="flower-list-inner"
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "nowrap",
                justifyContent: "start",
                minWidth: "max-content",
              }}
            >
              {flowerLists[props.currentListIndex].map((flower, index) => (
                <Button
                  className="flower-btn"
                  key={index}
                  sx={{
                    background:
                      props.selectedFlowers[props.currentListIndex] === flower
                        ? props.selectedTheme.palette.action.selected
                        : props.selectedTheme.palette.secondary.main,
                    color: props.selectedTheme.palette.primary.contrastText,
                    "&:hover": {},
                    width: { sm: "150px", xs: "150px", md: "200px" },
                  }}
                  onClick={() =>
                    props.handleFlowerClick(flower, props.currentListIndex)
                  }
                >
                  {flower}
                </Button>
              ))}
            </Box>
            <Button
              onClick={handleNext}
              disabled={props.currentListIndex === flowerLists.length - 1}
              sx={{
                minWidth: "50px",
                height: "50px",
                color: props.selectedTheme.palette.primary.contrastText,
                marginLeft: "10px",
              }}
            >
              <ArrowForwardIos />
            </Button>
          </Box>
        </Box>

        <div className="flowers-list mt-5">
          <Button
            variant="contained"
            className="flower-btn"
            onClick={handleCreate}
            style={{
              background: props.selectedTheme.palette.grey[100],
              color: props.selectedTheme.palette.text.primary,
              fontWeight: "bold",
              minWidth: "200px",
            }}
          >
            +Create
          </Button>
        </div>
      </Box>
    </>
  );
};

export default SelectPreference;
