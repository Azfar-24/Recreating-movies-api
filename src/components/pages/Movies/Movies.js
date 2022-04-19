import React, { useEffect, useState } from "react";
import axios from "axios";
import { SingleContent } from "../../SingleContent/SingleContent";
import { CustomPagination } from "../../CustomPagination/CustomPagination";

const Movies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const FetchMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=124b078b3a77d5719ea1f5da1969d540&page=${page}`
    );
    setContent(data.results);
    setTotalPages(data.total_pages);
  };
  useEffect(() => {
    FetchMovie();
  }, [page]);
  return (
    <div className="main-container">
      <span className="pageTitle">Movies</span>

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
      <CustomPagination setPage={setPage} totalPages={totalPages} />
    </div>
  );
};
export default <Movies />;

// api_key=124b078b3a77d5719ea1f5da1969d540
