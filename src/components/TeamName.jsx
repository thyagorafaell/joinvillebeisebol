import React from 'react';

const pt = [
	'Somos a Associação Cultural Esportiva de Beisebol e Softbol de Joinville',
	'Somos a ACEBS Joinville',
	'Somos o Joinville Beisebol'
];

const es = [
	'Somos la Asociación Cultural y Deportiva de Beisbol y Softbol de Joinville',
	'Somos ACEBS Joinville',
	'Somos Joinville Beisbol'
];

const languages = { pt, es };

export default ({ language = 'pt', simple = false }) => {
	if (simple) {
		return (
			<div class={'team-name-container'}>
				<h2 class={'joinville-beisebol'}>
					Somos o Joinville Beisebol
				</h2>
			</div>
		);
	}

	const terms = languages[language];

	return (
		<div class={'team-name-container'}>
			<h2 class={'team-name-item full-name'}>{terms[0]}</h2>
			<h2 class={'team-name-item acebs'}>{terms[1]}</h2>
			<h2 class={'team-name-item joinville-beisebol'}>{terms[2]}</h2>
		</div>
	);
};