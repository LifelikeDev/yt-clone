import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { CardMedia } from "@mui/material";
import { demoProfilePicture } from "../utils/constants";

const ChannelDetail = () => {
  const [channelContent, setChannelContent] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelContent(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setChannelVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <CardMedia
          image={
            `${channelContent?.snippet?.thumbnails?.medium?.url}` ||
            demoProfilePicture
          }
          style={{
            filter: "brightness(.5)",
            height: "300px",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelContent} marginTop="-125px" />
      </Box>

      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={channelVideos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
