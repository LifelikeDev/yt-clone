import React from "react";
import { Link } from "react-router-dom";
import { Box, CardMedia, CardContent, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {channelDetail?.snippet?.thumbnails?.medium?.url && (
            <>
              <CardMedia
                image={
                  channelDetail?.snippet?.thumbnails?.medium?.url ||
                  demoProfilePicture
                }
                alt={channelDetail?.snippet?.title}
                sx={{
                  borderRadius: "50%",
                  height: "180px",
                  width: "180px",
                  mb: 2,
                  border: "1px solid #e3e3e3",
                  zIndex: 5,
                }}
              />

              <Typography variant="h6">
                {channelDetail?.snippet?.title}{" "}
                <CheckCircleIcon
                  sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
                />
              </Typography>
              {channelDetail?.statistics?.subscriberCount && (
                <Typography
                  sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
                >
                  {channelDetail?.statistics?.subscriberCount.length > 6
                    ? `${parseInt(channelDetail?.statistics?.subscriberCount)
                        .toLocaleString("en-US")
                        .substring(0, 2)
                        .replace(/\W/, "")}M`
                    : parseInt(
                        channelDetail?.statistics?.subscriberCount
                      ).toLocaleString("en-US")}{" "}
                  Subscribers
                </Typography>
              )}
            </>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
