import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
	flexWrap: 'wrap',
	padding: '0px 8px'
};

const navigationStyle = {
	marginLeft: 'auto'
};

const navigationItems = [{
	name: 'Home',
	link: '/'
}, {
	name: 'Diretoria',
	link: '/acebs'
}, {
	name: 'Apoie',
	link: '/apoie'
}, {
	name: 'Contato',
	link: '/contato'
}, {
	name: 'Español',
	link: '/es'
}];

export default () => (
	<div style={containerStyle}>
		<Logo />
		<div style={navigationStyle}>
			<Navigation items={navigationItems} />
		</div>
	</div>
);