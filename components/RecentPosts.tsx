import Link from "next/link";
import styled from "styled-components";
import { Url } from "url";
import { GhostPostsOrPages, GhostPostOrPage } from "../lib/ghost";
import { PageSection, PageTitle } from "./styled";
import { Article, CardTitle, PostCardImage } from "./styled/PostCard";
import { PostFeed } from "./styled/PostFeed";

const MaxWidth = styled.div`
  max-width: 960px;
  margin: 0 auto;

  a {
    border-bottom: 0;
    transition: all ease 200ms;
    text-decoration: underline;
    text-decoration-thickness: from-font;

    &:hover {
      transform: scale(1.05);
      img {
        box-shadow: 0 0 20px 0 rgba(200, 200, 200, 0.1);
      }
    }
  }
`;

const DiscoverSection = styled.p`
  margin-top: 2rem;
  font-size: 1.2rem;
`;

const RecentPosts = ({ posts }: { posts: GhostPostsOrPages | [] }) => (
  <PageSection>
    <PageTitle>Recent Publications</PageTitle>
    <MaxWidth>
      <PostFeed>
        {posts.slice(0, 6).map((post: GhostPostOrPage) => (
          <a href={post.url} key={post.id}>
            <Article>
              <PostCardImage src={post.feature_image as string} />
              <CardTitle>{post.title}</CardTitle>
            </Article>
          </a>
        ))}
      </PostFeed>
    </MaxWidth>
    <DiscoverSection>
      Discover more on <a href="https://time2hack.com">Time to Hack</a>.
    </DiscoverSection>
  </PageSection>
);

export default RecentPosts;
