import React from 'react';

function Button({ name, isDisabled }) {

    return (
        <button disabled={isDisabled}>{name}</button>
    );
}

export default Button;