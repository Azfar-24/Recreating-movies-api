import axios from "axios";
import React, { useEffect, useState } from "react";
import { SingleContent } from "../../SingleContent/SingleContent";
import "./Trending.css";
import { CustomPagination } from "../../CustomPagination/CustomPagination";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  const FetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=124b078b3a77d5719ea1f5da1969d540&page=${page}`
    );
    console.log(data);
    setContent(data.results);
    // setPage(data.total_pages);
  };
  useEffect(() => {
    FetchTrending();
  }, [page]);
  return (
    <div className="main-container">
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content
          ? content.map((data) => (
              <SingleContent
                key={data.id}
                id={data.id}
                poster={data.poster_path}
                title={data.title || data.name}
                date={data.first_air_date || data.release_date}
                media={data.media_type}
                vote={data.vote_average}
                overview={data.overview}
              />
            ))
          : ""}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};
export default <Trending />;
