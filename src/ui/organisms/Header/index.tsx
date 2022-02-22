import React, { useState, useEffect } from 'react';

import { Logo } from 'ui/molecules';

import { Props } from './index.model';
import { S } from './index.styled';

const Header: React.FunctionComponent<Props> = ({ isLogoShrinked = false }) => {
	return (
		<S.Header className={`${isLogoShrinked ? 'is-shrinked' : ''}`}>
			<Logo />
		</S.Header>
	);
};

export { Header };
