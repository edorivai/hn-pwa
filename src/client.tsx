import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './App';

const client = new ApolloClient({
	link: new HttpLink({}),
	cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client as any}><App /></ApolloProvider>,
	document.getElementById('root')
);
