import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },
  section: {
    display: "flex",
    color: "white",
    padding: 30,
    backgroundColor: "#00586e",
    alignItems: "center",
    justifyContent: "center",
  },
  heading1: {
    fontWeight: "extrabold",
    fontSize: 26,
  },
  subHeading: {
    fontStyle: "italic",
    fontSize: 18,
  },
  contactItem: {
    fontSize: 14,
  },
  contentBreak: {
    margin: "3px",
  },
  mainContainer: {
    padding: "10px",
  },
  sectionTitleContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "lightgrey",
    padding: "5px",
    borderRadius: "3px",
    justifyContent: "center",
  },
  sectionTitle: {
    fontWeight: "extrabold",
    color: "#002c47",
    fontSize: 14,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View>
          <Text style={styles.heading1}>Nathnael Yewondwosen Akale</Text>
        </View>
        <View style={styles.contentBreak} />
        <View>
          <Text style={styles.subHeading}>
            Software Engineer - ( Full-stack Developer )
          </Text>
        </View>
        <View style={styles.contentBreak} />
        <View>
          <Text style={styles.contactItem}>
            nathnaelakale@gmail.com nathnael-yewondwosen nattigy
          </Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        {Array.from(Array(15)).map((a) => (
          <>
            <View>
              <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>Professional Expereince</Text>
              </View>
              <View>
                <Text>
                  • Engineered a comprehensive platform connecting tutors with
                  parents, featuring two Flutter-based mobile apps and a client
                  website developed with ReactJS and NextJS. The platform
                  currently serves over 5,000 users, facilitating seamless
                  interactions. • Spearheaded the automation of the admin
                  system, resulting in a 500% increase in serving capacity.
                  Utilized ReactJS for the front end, implemented a GraphQL API
                  with NodeJS, NestJS, and ApolloServer, and managed data with
                  MongoDB. • Used MicroService architecture with RabbitMQ, which
                  resulted in increased performance and data security. • Used
                  Continuous Integration tools like CircleCI, TravisCI, and Git
                  for DevOps. • Efficiently used the Jira Project Management
                  tool to define and distribute tasks for my team.
                </Text>
              </View>
            </View>
          </>
        ))}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
