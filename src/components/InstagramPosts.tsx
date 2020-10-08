import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
import InstagramCard from "./InstagramCard";
import styled from "styled-components";
import { PageSection } from "../styled";
import { IInstagramCard } from "../types";

// const query = graphql`
//   {
//     posts: allInstaNode(limit: 9, sort: { order: DESC, fields: timestamp }) {
//       nodes {
//         likes
//         preview
//         username
//         comments
//         timestamp
//         mediaType
//         original
//         id
//         localFile {
//           childImageSharp {
//             fluid(maxWidth: 400, maxHeight: 400) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;

const Grid = styled(PageSection)`
  display: flex;
  flex-wrap: wrap;
  max-width: 768px;
  margin: 0 auto;
  & > * {
    min-width: 33.3333%;
  }
`;

const InstagramPosts = () => {
  // const data = useStaticQuery(query);
  const data = { posts: { nodes: [] } };
  return (
    <Grid>
      {data.posts.nodes.map((post: IInstagramCard) => (
        <InstagramCard {...post} key={post.id} />
      ))}
    </Grid>
  );
};

export default InstagramPosts;
