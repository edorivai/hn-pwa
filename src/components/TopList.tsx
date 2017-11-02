import * as React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Post from './Post';

// here we create a query opearation
const TopListQuery = gql`
	query TopListQuery($page: Int!) {
		topListPage(page: $page) {
			items {
				id
				title
				type
				url
				score
				by
				time
				commentCount
			}
		}
	}
`;

class TopListBody extends React.Component<{ data: any }> {
	render() {
		const { data: { topListPage }} = this.props;
		return <ol>{topListPage && topListPage.items.map((item: any) => <Post key={item.id} {...item} />)}</ol>;
	}
}

// We then can use the graphql container to pass the query results returned by MY_QUERY
// to a component as a prop (and update them as the results change)
const TopListBodyContainer = graphql(TopListQuery, {
	options: (props: any) => ({
		variables: { page: props.page },
	}),
})(TopListBody);

interface TopListState {
	page: number;
}

export default class TopList extends React.Component<{}, TopListState> {
	constructor(props: any) {
		super(props);
		this.state = { page: 0 };
	}
	render() {
		return (
			<div>
				Here comes the header and pagination
				<br />
				<TopListBodyContainer page={this.state.page} />
			</div>
		);
	}
}
