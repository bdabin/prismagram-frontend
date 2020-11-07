import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Logo } from './Icons';

const Animation = keyframes`
	0% {
		opacity: 0;
		transform: rotate(0deg);
	}
	50% {
		opacity: 1;
		transform: rotate(360deg);
	}
	100% {
		opacity: 0;
		transform: rotate(0deg);
	}
`;

const Loader = styled.div`
	animation: ${Animation} 2s linear infinite;
`;

export default () => (
	<Loader>
		<Logo size={36} />
	</Loader>
);
