import React from 'react';
import styled from 'styled-components';
import { Heading } from '../../text';
import { Row, Column, Container } from '../index';

const Content = styled.div`
	background-color: ${({ theme }) => theme.colors.primary[400]};
	height: 50px;
	margin-bottom: 10px;
	width: 100%;
`;

const Template = ({ grids }) => {
	return grids.map((cols, indx) => (
		<Container key={`${cols}_${indx}`}>
			<Row>
				<Column col={{ lg: 12 }}>
					<Heading size='xSmall'>Colum {12 / cols}</Heading>
				</Column>
				{Array.from(Array(cols)).map((itm, indx) => {
					const col = 12 / cols;
					const colXs = col !== 12 ? col * 2 : col;
					const colSm = col;
					const colMd = col;
					const colLg = col;

					return (
						<Column
							key={`${col}_${indx}`}
							colXs={colXs}
							colSm={colSm}
							colMd={colMd}
							colLg={colLg}
						>
							<Content />
						</Column>
					);
				})}
			</Row>
		</Container>
	));
};

export default {
	title: 'Gudz/UI/Grid',
	component: Container,
};

export const Default = Template.bind({});

Default.args = {
	grids: [12, 6, 3, 2, 1],
};
