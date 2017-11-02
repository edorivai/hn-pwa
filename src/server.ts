import * as http from 'http';
import * as path from 'path';

import * as Koa from 'koa';
import * as serve from 'koa-static';
import * as compress from 'koa-compress';
import * as koaBody from 'koa-bodyparser';
import * as Router from 'koa-router';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import html from './helpers/html';
import webpackDevProxy from './helpers/devProxy';
import schema from './data/schema';

const port = process.env.PORT || 3000;

const app = new Koa();
app.proxy = true;

const server = http.createServer(app.callback());

app.use(compress());

const graphqlRouter = new Router();
graphqlRouter.post('/graphql', koaBody(), graphqlKoa({ schema }));
graphqlRouter.get('/graphql', graphqlKoa({ schema }));

graphqlRouter.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(graphqlRouter.routes());
app.use(graphqlRouter.allowedMethods());

// Proxy to webpack dev server
app.use(webpackDevProxy);

app.use(serve(path.join(__dirname, '..', '..', '..', '..', 'static')));

// HTML page renderer
app.use(html);

server.listen(port, (err?: Error) => {
	if (err) {
		console.error(err);
	}
	console.info('----\n==> ✅  HN PWA is running.');
	console.info(`==> 💻  Open http://localhost:${port} in a browser to view the app.`);
});
