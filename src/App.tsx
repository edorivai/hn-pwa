import * as React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import TopList from './components/TopList';

export default class App extends React.Component {
	// TODO: Search for the git issue on this bug(?)/feature!
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<Hello>
				<Header />
				<TopList />
			</Hello>
		);
	}
}

const Hello = styled.div`
	color: palevioletred;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
		Helvetica Neue, sans-serif;
`;
