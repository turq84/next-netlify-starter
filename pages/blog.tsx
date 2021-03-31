import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';
import getPosts from '../utils/blog/getPosts';

const Index = ({ blogs, title, description, ...props }) => {
  return (
    <>
      <Layout title={title} description={description} keywords="">
        <Title>Welcome to this demo blog!</Title>

        <p className="description">
          This is a simple blog built with Next, easily deployable on{' '}
          <a href="https://url.netlify.com/r1j6ybSYU">Netlify</a>.
        </p>
        <main>
          <BlogList blogs={blogs} />
        </main>
        <p>
          You can look at the repository for this project{' '}
          <a href="https://github.com/cassidoo/next-netlify-blog-starter">
            here
          </a>
          , and a tutorial on how to build it {` `}
          <a href="https://url.netlify.com/ByVW0bCF8">here</a>.
        </p>
      </Layout>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const blogs = ((context) => {
    return getPosts(context);
  })(require.context('../blog', true, /\.md$/));

  const title = 'Blog';
  const description = 'A general blog description.';

  return {
    props: {
      blogs,
      title,
      description,
    },
  };
}

const Title = styled.h1`
  margin: 1rem auto;
  font-size: 3rem;
`;
