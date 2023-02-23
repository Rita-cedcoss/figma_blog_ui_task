import React from "react";
import ArticleBanner from "./ArticleBanner";
import ArticleBlog from "./ArticleBlog";
import Grid from "./Grid";
import ArticleGrid from "./Grid";

const Blog = () => {
  return (
    <section>
      <ArticleBanner />
      <ArticleBlog />
      <Grid />
    </section>
  );
};

export default Blog;
