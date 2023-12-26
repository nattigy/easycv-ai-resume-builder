import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import SingleContent from "./single_content";

const ContentList = [
  "Personal Info",
  "Profile",
  "Professional Experience",
  "Education",
  "Skills",
  "Projects",
];

const ContentManager = () => {
  return (
    <div>
      <Box>
        {ContentList.map((content) => (
          <Box mx={3}>
            <SingleContent content={content} />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default ContentManager;
