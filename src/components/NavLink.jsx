import React from 'react';
import { Link } from "gatsby"

export default ({ name, link }) => (
	<li>
        <Link to={link}>{ name }</Link>
    </li>
);