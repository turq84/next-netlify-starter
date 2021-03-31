const API_URL = process.env.DATABASE_URL;
const API_TOKEN = process.env.FAUNA_SECRET_KEY;

const deleteAPI = async (query, data) => {
  const { _id: id } = data;
  const variables = { id };

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

export default deleteAPI;
