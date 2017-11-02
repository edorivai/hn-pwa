import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import * as Koa from 'koa';

function Html() {
	return (
		<html>
			<head>
				<style
					dangerouslySetInnerHTML={{
						__html: `
							body {
								margin: 0;
								padding: 0;
							}
						`,
					}}
				/>
			</head>
			<body>
				<div id="root" />
				<script src="/dist/main.js" />
			</body>
		</html>
	);
}

export default function render(ctx: Koa.Context) {
	ctx.body = `<!doctype html>
		${ReactDOM.renderToString(<Html />)}
	`;
}
