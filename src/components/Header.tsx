import * as React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.nav`
	background: #44ffdc;
	color: white;
`;

const HeaderLink = styled.a`
	color: #434343;
	text-decoration: none;
	display: inline-block;
	padding: 20px;
`;

export default function() {
	return (
		<HeaderWrapper>
			<HeaderLink href="/">top</HeaderLink>
			<HeaderLink href="/new">new</HeaderLink>
			<HeaderLink href="/show">show</HeaderLink>
			<HeaderLink href="/ask">ask</HeaderLink>
			<HeaderLink href="/jobs">jobs</HeaderLink>
		</HeaderWrapper>
	);
}
