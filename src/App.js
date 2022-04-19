import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimpleBottomNavigation from "./components/mainNav";
import { Container } from "@mui/material";
import Trending from "./components/pages/Trending/Trending";
import Movies from "./components/pages/Movies/Movies";
import TvShows from "./components/pages/TvShows/TvShows";
import Search from "./components/pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container sx={{margin: "inherit"}}>
          <Routes>
            <Route path="/" element={Trending} />
            <Route path="/movies" element={Movies} />
            <Route path="/series" element={TvShows} />
            <Route path="/search" element={Search} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
