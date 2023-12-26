import React, { useEffect, useState } from "react";
import { Typography, TextField } from "@mui/material";
import { useContent } from "../../context/content_context";
import { Content } from "./entity/content.type";

const SingleContent = ({ content }: { content: string }) => {
  const contentState = useContent();

  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    const newMap = new Map(contentState?.contentState?.content)
    newMap.set(content, {
        title: content,
        description,
    })
    contentState?.setContentState({
        content: newMap
    })
  },[description])

  return (
    <div>
      <Typography>{content}</Typography>
      <TextField
        name="content"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};

export default SingleContent;
