require('dotenv').config();
const { GET_ONE_LINK } = require('./utils/linkQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
  const { id } = JSON.parse(event.body);
  const variables = { id };

  try {
    const res = await sendQuery(GET_ONE_LINK, variables);
    const data = res.findLinkByID;
    return formattedResponse(200, data);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: 'Something went wrong' });
  }
};
