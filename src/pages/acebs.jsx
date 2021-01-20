import React from 'react';
import Container from '../components/Container';
import OrganizationChart from '../components/OrganizationChart';

export default () => (
	<Container>
		<h3>
            {'Associação Cultural Esportiva de Beisebol e Softbol de Joinville'}
        </h3>
        <h4>
            {'ACEBS Joinville'}
        </h4>
		<p>
            {'Somos uma associação com o intuito de incentivar e promover a prática esportiva do beisebol e softbol em Joiville e Santa Catarina.'}
        </p>
        <OrganizationChart />
	</Container>
);