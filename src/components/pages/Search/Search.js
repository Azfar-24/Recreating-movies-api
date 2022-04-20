import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import { Tab, Tabs } from "@mui/material";
import axios from "axios";
import { SingleContent } from "../../SingleContent/SingleContent";
import { CustomPagination } from "../../CustomPagination/CustomPagination";

const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [search, SetSearch] = useState("");
  const [content, setContent] = useState();
  const [totalPages, setTotalPages] = useState(1);

  const theme = createTheme({
    palette: {
      type: "dark",
      primary: { main: "#fff" },
    },
  });

  const FetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${
        type ? "tv" : "movie"
      }?&api_key=124b078b3a77d5719ea1f5da1969d540&query=${search}&page=${page}`
    );

    setContent(data.results);
    setTotalPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    FetchSearch();
  }, [page, type]);

  return (
    <div className="search">
      <ThemeProvider theme={theme}>
        <div style={{ display: "flex", width: "100vw" }}>
          <TextField
            id="filled-basic"
            className="searchBox"
            label="Search"
            variant="filled"
            style={{ flex: 1 }}
            onChange={(e) => {
              SetSearch(e.target.value);
              console.log(e.target.value);
            }}
          />
          <Button
            variant="contained"
            sx={{ marginLeft: 2, marginRight: 6 }}
            onClick={FetchSearch}
          >
            <SearchIcon />
          </Button>
        </div>
        <div className="filter">
          <Tabs sx={{ width: "100%" }}
            textColor="primary"
            indicatorColor="primary"
            value={type}
            onChange={(event, newValue) => {
              setType(newValue);
              setPage(1);
            }}
            aria-label="basic tabs example"
          >
            <Tab label="Search Movies" sx={{ width: "50%" }} />
            <Tab label="Search Tv Series" sx={{ width: "50%" }} />
          </Tabs>
        </div>
      </ThemeProvider>
      <div className="main-container">
        <div className="trending">
          {content
            ? content.map((data) => (
                <SingleContent
                  key={data.id}
                  id={data.id}
                  poster={data.poster_path}
                  title={data.title || data.name}
                  date={data.forst_air_date || data.release_date}
                  media={data.media_type}
                  vote={data.vote_average}
                  overview={data.overview}
                />
              ))
            : ""}
        </div>
        {content ? (
          <CustomPagination setPage={setPage} totalPages={totalPages} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default <Search />;
