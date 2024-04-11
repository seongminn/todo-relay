import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from 'relay-runtime';
let environment: Environment;

async function fetchQuery(operation: RequestParameters, variables: Variables) {
  const response = await fetch(`http://localhost:1337/graphql`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
  return await response.json();
}

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

export function createEnvironment() {
  if (environment) return environment;

  environment = new Environment({
    network,
    store,
  });

  return environment;
}
