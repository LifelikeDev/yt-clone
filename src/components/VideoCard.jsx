import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/constants";


const formatTextWithHtmlEntities = title => {
  const text = document.createElement("textarea");
  text.innerHTML = title;
  return text.value;
}

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#282828",
          height: "106px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {`${
              formatTextWithHtmlEntities(snippet?.title.slice(0, 50).trim()) ||
              demoVideoTitle.slice(0, 60).trim()
            }...`}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="#bbb">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "#aaa", ml: "5px" }}
            />
          </Typography>
        </Link>
        <Typography
          variant="subtitle2"
          fontSize="13px"
          color="#aaa"
          marginY="10px"
        >
          {`${new Date(snippet?.publishedAt)
            .toDateString()
            .substring(4)} at ${snippet?.publishedAt
            .split("T")[1]
            .slice(0, -4)}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
