import React from "react";
import { format } from "date-fns";
// import { Content } from '../../content/Content';
// import { Meta } from '../../layout/Meta';
// import { Main } from '../../templates/Main';
import { getAllPosts, getPostBySlug } from "../../utils/api";
import { MDXProvider } from "@mdx-js/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Page, CenterWrap, Wrap } from "../../components/styles";
import { markdownToHtml } from '../../utils/Markdown';

const DisplayPost = (props) => (
  <CenterWrap>
  <Page>
    <Wrap>
      <Navbar />
      <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
      <Footer />
    </Wrap>
  </Page>
</CenterWrap>
);

export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug, [
    "title",
    "description",
    "date",
    "modified_date",
    "image",
    "content",
    "slug",
  ]);
    const content = await markdownToHtml(post.content || '');

  return {
    props: {
      title: post.title,
      description: post.description,
      date: post.date,
      modified_date: post.modified_date,
      image: post.image,
      content,
    },
  };
};

export default DisplayPost;
