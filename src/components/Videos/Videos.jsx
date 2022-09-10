import React from "react";
import { Stack, Box } from "@mui/system";
import { ChannelCard, VideoCard } from "../";
import { Typography } from "@mui/material";

const Videos = ({ videos, direction }) => {

  if (!videos?.length)
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


  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      gap={2}
      justifyContent="start"
    >
      {!videos.length ? (
        <Typography
          variant="h5"
          textAlign="center"
          letterSpacing="7px"
          margin="25vh auto"
        >
          Loading...
        </Typography>
      ) : (
        videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))
      )}
    </Stack>
  );
};

export default Videos;
