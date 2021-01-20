import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/global.css';

export default ({ children }) => (
	<>
		<Header />
        <main>
		    <article>
                { children }
            </article>
        </main>
        <Footer />
    </>
);