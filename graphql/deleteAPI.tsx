const API_URL = 'https://graphql.fauna.com/graphql';
const API_TOKEN = process.env.FAUNA_SECRET_KEY;

const deleteAPI = async (query, data) => {
  const id = JSON.parse(data);

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      id,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
};

export default deleteAPI;
