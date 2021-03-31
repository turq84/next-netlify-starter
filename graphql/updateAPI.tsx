const API_URL = 'https://graphql.fauna.com/graphql';
const API_TOKEN = process.env.FAUNA_SECRET_KEY;

const updateAPI = async (query, data) => {
  const { name, url, description, _id: id, archived } = data;
  const variables = { name, url, description, archived, id };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
};

export default updateAPI;
