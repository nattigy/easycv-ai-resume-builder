import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import content from "./contents/content";
import { Content } from "./contents/entity/content.type";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = ({
  contentMap,
}: {
  contentMap: Map<string, Content> | null | undefined;
}) => (
  <Document>
    <Page size="A4">
      <View>
        {contentMap &&
          Array.from(contentMap.keys()).map((key) => {
            const description =
              contentMap.get(key)?.description
            const title = contentMap.get(key)?.title
            return description && description?.length > 0 ? (
              <Text>
                Title: {title}, Description: {description}
              </Text>
            ) : (<></>)
          })}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
