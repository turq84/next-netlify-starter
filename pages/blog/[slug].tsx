import React from 'react';
import Link from 'next/link';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';
import Layout from '../../components/Layout';
import getSlugs from '../../utils/blog/getSlugs';

const BlogPost = ({ frontmatter, markdownBody }) => {
  if (!frontmatter) return <></>;

  return (
    <Layout
      title={frontmatter.title}
      description={frontmatter.title}
      keywords={frontmatter.keywords}
    >
      <BackButton>
        <Link href="/blog">Back to blogs</Link>
      </BackButton>
      <ContentContainer>
        <Title>{frontmatter.title}</Title>
        {frontmatter.hero_image && (
          <Image src={frontmatter.hero_image} alt={frontmatter.title} />
        )}
        <Content>
          <ReactMarkdown source={markdownBody} />
        </Content>
      </ContentContainer>
    </Layout>
  );
};

export default BlogPost;

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;

  const content = await import(`../../blog/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    return getSlugs(context);
  })(require.context('../../blog', true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

const BackButton = styled.button`
  display: block;
  border-radius: 8px;
  border: none;
  background-color: #eee;
  padding: 10px 15px;
  margin-right: 15px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.15s linear 0s;

  &:hover {
    box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.25);
    transition: all 0.15s linear 0s;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

const ContentContainer = styled.article`
  width: 100%;
  max-width: 1000px;
  margin: auto;
`;

const Content = styled.div`
  padding-top: 40px;
  width: 70ch;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

const Image = styled.img`
  width: 100%;
`;
