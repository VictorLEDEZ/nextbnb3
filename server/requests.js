// File were we keep all the GraphQL requests

// Endpoint URL of our graphql server to fetch data and put them in the front end
const endpointURL = 'http://localhost:9000/graphql';

// As the previous example, we use the fetch API to make HTTP requests
// We export this function to use it in other files
// we use async to await the response

export async function loadAnnonce(id) {
  const response = await fetch(endpointURL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      query: `query AnnonceQuery($id: ID!){
            annonce(id: $id){
                id
                title
                utilisateur{
                    id
                    name
                }
                description
            }
        }`,
      variables: { id },
    }),
  });
  const responseBody = await response.json();
  return responseBody.data.annonce;
}

export async function loadAnnonces() {
  const response = await fetch(endpointURL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      query: `{
            annonces{
                id
                title
                utilisateur{
                    id
                    name
                }
            }
        }`,
    }),
  });
  const responseBody = await response.json();
  return responseBody.data.annonces;
}
