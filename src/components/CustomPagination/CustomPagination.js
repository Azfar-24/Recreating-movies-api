import React from "react";
import { createTheme, Pagination } from "@mui/material";
import { ThemeProvider } from "@mui/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: { main: "#fff" },
  },
});

export const CustomPagination = (props) => {
  return (
    <div
      style={{
        width: "100%",
        margin: "2rem 0",
        position: "relative",
        bottom: "5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Pagination
          count={props.totalPages}
          hidePrevButton
          hideNextButton
          color="primary"
          onClick={(e) => {
            props.setPage(e.target.textContent);
            console.log(e.target.textContent);
            window.scrollTo(0, 0);
          }}
        />
      </ThemeProvider>
    </div>
  );
};
