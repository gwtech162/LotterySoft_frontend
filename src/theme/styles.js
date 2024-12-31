import { background } from "@chakra-ui/system";

export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
    brand: {
      50: "#cbbff8",
      100: "#876cea",
      200: "#582CFF",
      300: "#542de1",
      400: "#4a25d0",
      500: "#3915bc",
      600: "#300eaa",
      700: "#1c0377",
      800: "#130156",
      900: "#0e0042"
    },
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "Plus Jakarta Display",
        backgroundColor: 
          "linear-gradient(159.02deg, #0F123B 14.25%, #090D2E 56.45%, #020515 86.14%)",
      },
      "*::placeholder": {
        color: "gray.400",
      },
      html: {
        fontFamily: "Plus Jakarta Display",
        background:
          "linear-gradient(159.02deg, #0F123B 14.25%, #090D2E 56.45%, #020515 86.14%)"
      },
    }),
  },
};
