import React from 'react';
import Container from '../components/Container';
import TeamName from '../components/TeamName';

export default () => (
	<Container>
		<TeamName />
		<p>
			{
				`Somos um time de beisebol amador de Joinville.
				Campeão Catarinense 2018.
				Nossos treinos são abertos a todos os interessados, basta comparecer com roupas leves, água e protetor solar.
				Temos equipamentos para iniciantes.`
			}
		</p>
		<p>
			{
				`Treinamos aos sábados as 15h00.
				Nosso campo fica na Av. Santos Dumont, 1860, no Bom Retiro, próximo ao Garten Shopping (mapa: https://tinyurl.com/joinvillebeisebol).`
			}
		</p>
	</Container>
);