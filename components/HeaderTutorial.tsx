// components/header.js

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const Header = () => {
  const router = useRouter();

  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data: user, mutate: mutateUser } = useSWR('/api/user', fetcher);

  const logout = async () => {
    const res = await fetch('/api/logout');
    if (res.ok) {
      mutateUser(null);
      router.push('/login');
    }
  };

  return (
    <div>
      <header>
        <nav>
          <Link href="/tutorial">
            <a>Home</a>
          </Link>

          <ul>
            {user ? (
              <>
                <li>
                  <Link href="/tutorial">
                    <a>{user.email}</a>
                  </Link>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <Link href="/signup">
                    <a>Signup</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
