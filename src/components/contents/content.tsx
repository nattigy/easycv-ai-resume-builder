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
          <SingleContent content={content}/>
        ))}
      </Box>
    </div>
  );
};

export default ContentManager;
