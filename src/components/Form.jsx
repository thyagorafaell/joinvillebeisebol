import React from 'react';
import LabelledField from './LabelledField';

export default () => (
    <form action={'https://formsquash.io/f/N3LFwgVvL85rZPJl5MTa'} method={'POST'}>
        <LabelledField name={'nome'} />
        <LabelledField type={'email'} name={'email'} />
        <LabelledField type={'phone'} name={'contato'} />
        <LabelledField Field={'textarea'} name={'mensagem'} />
    </form>
);