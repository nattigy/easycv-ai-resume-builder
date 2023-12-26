import React, { useEffect, useState } from "react";
import {
  Typography,
  TextField,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import { useContent } from "../../context/content_context";
import { Content } from "./entity/content.type";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SingleContent = ({ content }: { content: string }) => {
  const contentState = useContent();

  const [description, setDescription] = useState<string>("");

  const handleOnSave = () => {
    const newMap = new Map(contentState?.contentState?.content);
    newMap.set(content, {
      title: content,
      description,
    });
    contentState?.setContentState({
      content: newMap,
    });
  };

  return (
    <Box my={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{content}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            name="content"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Box>
            <Button onClick={handleOnSave}>save</Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SingleContent;
