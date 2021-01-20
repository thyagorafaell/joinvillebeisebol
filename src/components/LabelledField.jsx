import React from 'react';

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

export default ({ _label, name, Field = 'input', type = 'text' }) => {
    const label = _label || capitalize(name);

    return (
        <label>
            { label }
            <Field type={type} name={name} />
        </label>
    );
};