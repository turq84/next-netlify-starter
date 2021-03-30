import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const Nav = () => {
  return (
    <Background>
      <Container>
        <NavStyle>
          <LinkContainer>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/add-a-link">Add a Link</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </LinkContainer>
        </NavStyle>
      </Container>
    </Background>
  );
};

export default Nav;

const Background = styled.div`
  background-color: #eee;
  height: 75px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 1200px;
  margin: auto;
`;

const LinkContainer = styled.div``;

const NavLink = styled(Link)`
  text-decoration: none;
  margin-right: 30px;
`;

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;

  a {
    font-size: 18px;
    transition: all 0.2s linear 0s;
    padding: 1rem;
    text-decoration: none;
    color: #000;

    &:hover {
      color: #ff3366;
      transition: all 0.2s linear 0s;
    }

    &[aria-current] {
      // background-color: #faf9f4;
      // color: #353637;
    }
  }
`;
