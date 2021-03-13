import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    svgHover: {
        fill: theme.palette.foreground.default,
        "&:hover": {
            fill: theme.palette.primary.main,
        },
        transition: "all 0.5s ease",
    },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      className={classes.svgHover}
  > 
  
  <path d="M62.9221 144.749L62.9221 62.9168C62.9221 28.1696 34.7545 0.00112725 0.00732422 0L0.00732422 259.63C-0.132684 273.244 1.73285 287.038 5.75727 300.594C23.2354 359.467 77.2882 399.884 138.701 400C215.546 400.133 277.886 337.876 277.886 261.061C277.886 184.328 215.679 122.122 138.947 122.122C138.939 152.425 154.368 180.644 179.882 196.992C208.296 215.153 221.352 249.86 211.953 282.245C202.554 314.631 172.945 336.955 139.224 337.082C97.2581 337.234 62.9222 302.438 62.9222 260.471L62.9222 144.748L62.9221 144.749Z" 
  transform="translate(60.11438 0)" 
  id="Shape" fill-rule="evenodd" stroke="none" />
  
  <path d="M0 0L400 0L400 400L0 400L0 0Z" id="Shape" fill="none" fill-rule="evenodd" stroke="none" />

  </svg>
    
    );
};
