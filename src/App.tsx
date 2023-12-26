import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import ContentManager from "./components/contents/content";
import MyDocument from "./components/pdf-preview";
import content from "./components/contents/content";
import { useContent } from "./context/content_context";
import { ContentProvider } from "./context/content_context";

function App() {
  const contentState = useContent();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={1}>
          <Box>Home</Box>
          <Box>Content</Box>
          <Box>Layout</Box>
        </Grid>

        <Grid item xs={12} md={5}>
          Content
          <PDFDownloadLink
              document={
                <MyDocument contentMap={contentState?.contentState?.content} />
              }
              fileName="somename.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download now!"
              }
            </PDFDownloadLink>
          <ContentManager />
        </Grid>

        <Grid item xs={12} md={6}>
          Preview
          <Box>
            <PDFViewer
              style={{
                width: "100%",
                height: "80vh",
              }}
              showToolbar={false}
            >
              <MyDocument contentMap={contentState?.contentState?.content} />
            </PDFViewer>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
