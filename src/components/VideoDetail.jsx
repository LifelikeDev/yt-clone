import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Typography, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import { Video } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);

  if (!videoDetail?.snippet)
    return (
      <Box
        minHeight="95vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h5"
          sx={{ textAlign: "center", letterSpacing: "7px" }}
        >
          Loading...
        </Typography>
      </Box>
    );

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography variant="h5" fontWeight="bold" color="white" p={2}>
              {title}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "white" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Stack direction="row" alignItems="center" gap="5px">
                  <Typography variant="body2" color="white">
                    {channelTitle}
                  </Typography>
                  <CheckCircle sx={{ fontSize: "15px", color: "gray" }} />
                </Stack>
              </Link>

              <Stack direction="row" gap="20px" alignItems="center">
                <Stack
                  direction="row"
                  gap="5px"
                  alignItems="center"
                  sx={{ opacity: 0.7 }}
                >
                  <RemoveRedEyeIcon fontSize="13px" />
                  <Typography variant="body1">
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  gap="5px"
                  alignItems="center"
                  sx={{ opacity: 0.7 }}
                >
                  <ThumbUpAltIcon fontSize="13px" />
                  <Typography variant="body1">
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack p={2} mb={4}>
              <Typography variant="body2" color="#ccc" fontSize="15px">
                {description.length < 620
                  ? description
                  : `${description.substring(0, 620).trim()}...`}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
