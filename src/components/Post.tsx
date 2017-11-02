import * as React from 'react';
import styled from 'styled-components';

interface PostProps {
	title: string;
	type: 'story' | 'job';
	url: string;
	score: number;
	by: string;
	time: number;
	commentCount: number;
}

const PostContainer = styled.li`
	padding: 20px;
`;

const Title = styled.h4`
	font-weight: normal;
	font-size: 1.2em;
	padding: 4px 0;
	margin: 0;
`;

function hoursAgo(time: number): number {
	return Math.round((Date.now() / 1000 - time) / 60 / 60);
}

export default function Post({ title, /* type, url,*/ score, by, time, commentCount}: PostProps) {
	return (
		<PostContainer>
			<Title>{title}</Title>
			<div>{score} points by {by} {hoursAgo(time)} hours ago | {commentCount} comments</div>
		</PostContainer>
	);
}
