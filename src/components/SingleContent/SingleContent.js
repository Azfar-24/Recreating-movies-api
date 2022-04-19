import { Badge } from "@mui/material";
import React from "react";
import { img_300, unavailable } from "../configs/configs";
import "./SingleContent.css";

export const SingleContent = ({
  id,
  poster,
  title,
  date,
  media,
  vote,
  overview,
}) => {
  // console.log(title);
  return (
    <div className="media">
      <Badge badgeContent={vote} color={vote > 6 ? "success" : "error"} />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <div className="overview">{overview}</div>
      <b className="title">{title}</b>
      <div className="subTitle">
        <span className="detail">
          {media ? (media === "movie" ? "Movie" : "Tv Show") : ""}
        </span>
        <span className="detail"> {date}</span>
      </div>
    </div>
  );
};
