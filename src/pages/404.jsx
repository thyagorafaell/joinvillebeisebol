import React from 'react';
import Container from '../components/Container';

export default () => {
    const failIndex = (Math.random() * 10).toFixed(0) % 2 ? 2 : 1;

	return (
        <Container>
            <img src={`./fail${failIndex}.jpg`} alt={'Página não encontrada'} width={'33%'} />
        </Container>
    );
};