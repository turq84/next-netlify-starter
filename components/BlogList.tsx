import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const BlogList = ({ blogs }) => {
  if (blogs === 'undefined') return null;

  console.log('Blogs: ', blogs);

  return (
    <Container>
      {!blogs && <div>No posts!</div>}

      {blogs &&
        blogs.map((blog) => (
          <BlogCardContainer key={blog.slug}>
            <BlogCard href={{ pathname: `/blog/${blog.slug}` }}>
              <div>
                <h3>{blog.frontmatter.title}</h3>

                <p>
                  {blog.markdownBody.substring(0, 300)}
                  {blog.markdownBody.length > 300 ? '...' : ''}
                </p>

                <p>{blog.frontmatter.date}</p>
              </div>
            </BlogCard>
          </BlogCardContainer>
        ))}
    </Container>
  );
};

export default BlogList;

const Container = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const BlogCardContainer = styled.div`
  cursor: pointer;
  border: 1px solid #eee;
  padding: 15px 10px;
  border-radius: 8px;
  flex: 0 0 32%;
  transition: all 0.15s linear 0s;

  &:hover {
    box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.25);
    transition: all 0.15s linear 0s;
  }
`;

const BlogCard = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
