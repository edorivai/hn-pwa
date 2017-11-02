import * as request from 'superagent';

interface ItemParams {
	id: number;
}

interface TopListParams {
	page: number;
}

interface Item {
	id: number;
	deleted: boolean;
	type: string;
	by: string;
	time: number;
	text: string;
	dead: boolean;
	parent: number;
	url: string;
	score: number;
	title: string;
	kids: number[]
}

async function getItem(id: number): Promise<Item> {
	return await request.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.body)
		.then(item => ({
			...item,
			commentCount: item.kids ? item.kids.length : 0,
		}));
}

const pageSize = 30;

const resolvers = {
	Query: {
		item(_: any, { id }: ItemParams) {
			return getItem(id);
		},

		topListPage(_: any, { page }: TopListParams) {
			return request
				.get('https://hacker-news.firebaseio.com/v0/topstories.json')
				.then(res => res.body)
				.then(async ids => ({
					items: await Promise.all(ids.slice(page * pageSize, (page + 1) * pageSize).map(getItem)),
					totalCount: ids.length,
					pageSize,
				}));
		},
	},
};

export default resolvers;
