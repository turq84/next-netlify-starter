import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { gql } from 'graphql-request';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { graphQLClient } from '../utils/authTutorial/graphql-client';
import { getAuthCookie } from '../utils/authTutorial/auth-cookies';

const New = ({ token }) => {
  const router = useRouter();

  const { data: user } = useSWR('/api/user');

  const [errorMessage, setErrorMessage] = useState('');

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = handleSubmit(async ({ task }) => {
    if (errorMessage) setErrorMessage('');

    const mutation = gql`
      mutation CreateATodo($task: String!, $owner: ID!) {
        createTodo(
          data: { task: $task, completed: false, owner: { connect: $owner } }
        ) {
          task
          completed
          owner {
            _id
          }
        }
      }
    `;

    const variables = {
      task,
      owner: user && user.id,
    };

    try {
      await graphQLClient(token).request(mutation, variables);

      // Redirect after submitted todo
      router.push('/tutorial');
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  });

  return (
    <Layout title="" description="" keywords="">
      <h1>Create New Todo</h1>

      <form onSubmit={onSubmit} className={utilStyles.form}>
        <div>
          <label>Task</label>
          <input
            type="text"
            name="task"
            placeholder="e.g. do something"
            ref={register({ required: 'Task is required' })}
          />
          {errors.task && (
            <span role="alert" className={utilStyles.error}>
              {errors.task.message}
            </span>
          )}
        </div>

        <div className={utilStyles.submit}>
          <button type="submit">Create</button>
        </div>
      </form>

      {errorMessage && (
        <p role="alert" className={utilStyles.errorMessage}>
          {errorMessage}
        </p>
      )}
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const token = getAuthCookie(context.req);
  return { props: { token: token || null } };
}

export default New;
