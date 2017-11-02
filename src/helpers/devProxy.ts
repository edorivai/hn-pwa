import * as convert from 'koa-convert';
import * as proxy from 'koa-proxy';

const noopMiddleware = (_: any, next: Function) => next();

const production = process.env.NODE_ENV === 'production';

export default (production
	? noopMiddleware
	: convert(
			proxy({
				host: 'http://localhost:3001',
				match: /^\/dist\//,
			})
		));
