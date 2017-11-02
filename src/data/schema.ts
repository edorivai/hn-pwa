import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Item {
  id: Int
  deleted: Boolean
	type: String
	by: String
	time: Int
	text: String
	dead: Boolean
	parent: Int
	url: String
	score: Int
	title: String
	commentCount: Int
	kids: [Int]
}
type TopListPage {
	items: [Item]
	totalCount: Int
	pageSize: Int
}
type Query {
	item(id: Int): Item
	topListPage(page: Int): TopListPage
}
`;

export default makeExecutableSchema({ typeDefs, resolvers });
