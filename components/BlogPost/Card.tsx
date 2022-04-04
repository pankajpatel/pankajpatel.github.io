import { PostFeed } from "../styled/PostFeed";
import { Article, CardTitle, PostCardImage } from "../styled/PostCard";

import { Duration } from "./Duration";

const RecentPosts = ({ title, featuredImage }) => (
  <PostFeed>
    <Article>
      <PostCardImage src={featuredImage} />
      <CardTitle>{title}</CardTitle>
    </Article>
  </PostFeed>
);

export default RecentPosts;
