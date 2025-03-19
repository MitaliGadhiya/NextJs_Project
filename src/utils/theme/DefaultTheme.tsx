import { createTheme } from "@mui/material/styles";
import { Montserrat_Alternates} from "next/font/google";


export const dm = Montserrat_Alternates({
  subsets: ['latin'], 
  weight: ['400', '700'], 
});

const mainTheme = createTheme({
  direction: "ltr",
  palette:{
    primary :{
      main : "#493973",
      dark : "#241A34",
      contrastText: "#ffffff",
      light : "linear-gradient(to bottom, #100E1A, #8858B5)"
    },
    secondary : {
      main : "#8858B5",
      dark : "#583A77",
      light : "#9F79C3", //border color
      contrastText: "#ffffff",
    },
    action :{
      focus : "#AE5CAA",
      hover : "#FFF200",
      selected : "#FAA81A",
    },
    text:{
      primary: "#AE5CAA",
      secondary : "#FFF200",
    },
    grey:{
      100 : "#D5D1ED",
      200 : "#786EA4"
    }
  },
  typography: {
    fontFamily: `${dm.style.fontFamily}, Montserrat Alternates`,
    h1: {
      fontWeight: 500,
      fontSize: "1.875rem",
      lineHeight: "1.5",
    },
    h2: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "1.5",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.3125rem",
      lineHeight: "1.5",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: "1.5",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    h6: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
    button: {
      textTransform: "none",
      fontWeight: "400",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: "400",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: "400",
    },
  },
})

const lightTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#1E90FF", 
      dark: "#0056B3", 
      contrastText: "#FFFFFF", 
      light : "linear-gradient(to bottom, #1F2937, #00BFFF)"
    },
    secondary: {
      main: "#00BFFF",
      dark: "#0088CC", 
      light : "#9F79C3", //border color
      contrastText: "#FFFFFF", 
    },
    action: {
      focus: "#3399FF", 
      hover: "#CCE7FF", 
      selected: "#1A73E8", 
    },
    text: {
      primary: "#1F2937", 
      secondary: "#4B5563", 
    },
    grey: {
      100: "#F7FAFC",
      200: "#E2E8F0", 
    },
    background: {
      default: "#FFFFFF", 
      paper: "#F9FBFD", 
    },
  },
  typography: {
    fontFamily: `${dm.style.fontFamily}, Montserrat Alternates`,
    h1: {
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: "1.5",
      color: "#1E90FF", 
    },
    h2: {
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: "1.5",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "1.5",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: "1.5",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: "1.5",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: "500",
      color: "#FFFFFF", 
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: "400",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: "400",
    },
    body1: {
      color: "#4B5563", 
      fontSize: "1rem",
    },
    body2: {
      color: "#6B7280", 
      fontSize: "0.875rem",
    },
  },
  shape: {
    borderRadius: 8, 
  },
});

const midnightTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#2C3E50", 
      dark: "#1A2631", 
      contrastText: "#ECF0F1",
      light : "linear-gradient(to bottom, #ECF0F1, #8E44AD)"
    },
    secondary: {
      main: "#8E44AD", 
      dark: "#6C1D84", 
      light : "#9F79C3",
      contrastText: "#ECF0F1", 
    },
    action: {
      focus: "#5C6BC0", 
      hover: "#D0D3D4", 
      selected: "#9B59B6", 
    },
    text: {
      primary: "#ECF0F1", 
      secondary: "#BDC3C7", 
    },
    grey: {
      100: "#34495E", 
      200: "#7F8C8D", 
    },
    background: {
      default: "#2C3E50", 
      paper: "#34495E", 
    },
  },
  typography: {
    fontFamily: `${dm.style.fontFamily}, Montserrat Alternates`,
    h1: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: "1.4",
      color: "#8E44AD", 
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: "1.4",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
      lineHeight: "1.4",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: "1.4",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: "1.4",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.4",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: "600",
      color: "#ECF0F1", 
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: "400",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: "400",
    },
    body1: {
      color: "#BDC3C7",
      fontSize: "1rem",
    },
    body2: {
      color: "#95A5A6", 
      fontSize: "0.875rem",
    },
  },
  shape: {
    borderRadius: 10, 
  },
});

const sunsetOrangeTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#FF7F50", 
      dark: "#FF6347",
      contrastText: "#FFFFFF", 
      light : "linear-gradient(to bottom, #2F4F4F, #FFD700)"
    },
    secondary: {
      main: "#FFD700",
      dark: "#FFB800", 
      light : "#9F79C3",
      contrastText: "#FFFFFF", 
    },
    action: {
      focus: "#FFA07A", 
      hover: "#FFE4B5",
      selected: "#FF4500",
    },
    text: {
      primary: "#2F4F4F", 
      secondary: "#8B4513", 
    },
    grey: {
      100: "#FFF8DC",
      200: "#FFDAB9", 
    },
    background: {
      default: "#FFF5EE",
      paper: "#FFF8DC", 
    },
  },
  typography: {
    fontFamily: `${dm.style.fontFamily}, Montserrat Alternates`,
    h1: {
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: "1.5",
      color: "#FF7F50", 
    },
    h2: {
      fontWeight: 500,
      fontSize: "2.25rem",
      lineHeight: "1.5",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: "1.5",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "1.5",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: "1.5",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: "600",
      color: "#FFFFFF", 
    },
    body1: {
      color: "#8B4513", 
      fontSize: "1rem",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const emeraldGreenTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#2E8B57", 
      dark: "#006400", 
      contrastText: "#FFFFFF", 
      light : "linear-gradient(to bottom, #2F4F4F, #32CD32)"
    },
    secondary: {
      main: "#32CD32", 
      dark: "#228B22", 
      light : "#9F79C3",
      contrastText: "#FFFFFF", 
    },
    action: {
      focus: "#66CDAA",
      hover: "#98FB98", 
      selected: "#228B22", 
    },
    text: {
      primary: "#2F4F4F", 
      secondary: "#6B8E23", 
    },
    grey: {
      100: "#F0FFF0", 
      200: "#B0E57C",
    },
    background: {
      default: "#F0FFF0",
      paper: "#E0F8E0", 
    },
  },
  typography: {
    fontFamily: `${dm.style.fontFamily}, Montserrat Alternates`,
    h1: {
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: "1.5",
      color: "#2E8B57", 
    },
    h2: {
      fontWeight: 500,
      fontSize: "2.25rem",
      lineHeight: "1.5",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: "1.5",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "1.5",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: "1.5",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: "600",
      color: "#FFFFFF", 
    },
    body1: {
      color: "#6B8E23", 
      fontSize: "1rem",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const frostedLavenderTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#9B59B6", 
      dark: "#8E44AD", 
      contrastText: "#FFFFFF", 
      light : "linear-gradient(to bottom, #4A4A4A, #8ECAE6)"
    },
    secondary: {
      main: "#8ECAE6", 
      dark: "#5A9BD4",
      light : "#9F79C3",
      contrastText: "#FFFFFF",
    },
    action: {
      focus: "#D6A4C4", 
      hover: "#D5B7E6",
      selected: "#9B59B6", 
    },
    text: {
      primary: "#4A4A4A", 
      secondary: "#6C757D", 
    },
    grey: {
      100: "#F8F9FA", 
      200: "#E9ECEF", 
    },
    background: {
      default: "#F8F9FA", 
      paper: "#F1F3F5",
    },
  },
  typography: {
    fontFamily: `${dm.style.fontFamily}, Montserrat Alternates`,
    h1: {
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: "1.5",
      color: "#9B59B6", 
    },
    h2: {
      fontWeight: 500,
      fontSize: "2.25rem",
      lineHeight: "1.5",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: "1.5",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "1.5",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: "1.5",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: "600",
      color: "#FFFFFF", 
    },
    body1: {
      color: "#6C757D", 
      fontSize: "1rem",
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export { mainTheme, lightTheme, midnightTheme, sunsetOrangeTheme, emeraldGreenTheme, frostedLavenderTheme };
