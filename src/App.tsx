import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import ContentManager from "./components/contents/content";
import content from "./components/contents/content";
import { useContent } from "./context/content_context";
import { ContentProvider } from "./context/content_context";
import jsPDF from "jspdf";
import MyDocument from "./components/preview/MyDocument";
import { BlobProvider, PDFViewer } from "@react-pdf/renderer";

function App() {
  const contentState = useContent();
  const pdfViwer = useRef(null);
  const [height, setHeight] = useState<any>("90vh");

  useEffect(() => {
    setHeight((pdfViwer?.current as any).offsetWidth * 1.41);
  }, [(pdfViwer?.current as any)?.offsetWidth]);

  return (
    <Box p={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={1}>
          <Box>Home</Box>
          <Box>Content</Box>
          <Box>Layout</Box>
        </Grid>

        <Grid item xs={12} md={5}>
          Content
          <Button
            onClick={() => {
              const doc = new jsPDF();

              const elementHTML = document.getElementById("#contentToPrint") as
                | string
                | HTMLElement;

              doc.html(elementHTML, {
                callback: function (doc) {
                  // Save the PDF
                  console.log(doc.getNumberOfPages());
                  // doc.save("document-html.pdf");
                },
                // margin: [10, 10, 10, 10],
                autoPaging: "text",
                x: 0,
                y: 0,
                width: 220, //target width in the PDF document
                windowWidth: 675, //window width in CSS pixels
              });
            }}
          >
            download
          </Button>
          <ContentManager />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography>Preview</Typography>
          <PDFViewer
            innerRef={pdfViwer}
            width="100%"
            height={height}
            showToolbar={false}
          >
            <MyDocument />
          </PDFViewer>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
