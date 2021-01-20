import React from 'react';
import Container from '../components/Container';
import TeamName from '../components/TeamName';

export default () => (
	<Container>
		<TeamName language={'es'} />
		<p>
			{
				`Somos un equipo de béisbol amateur de Joinville.
                Campeona Santa Catarina 2018.
                Nuestras sesiones de entrenamiento están abiertas a cualquier persona interesada, solo preséntate con ropa ligera, agua y protector solar.
                Disponemos de equipamiento para principiantes.`
			}
		</p>
		<p>
			{
				`Entrenamos los sábados a las 3 pm.
                Nuestro campo está ubicado en la Avenida Santos Dumont, 1860, en Bom Retiro, cerca de Garten Shopping (mapa: https://tinyurl.com/joinvillebeisebol).`
			}
		</p>
	</Container>
);