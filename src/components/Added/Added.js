import React from 'react';


export default ({expense}) => (
    <div>
        {expense && <p>Description: {expense.description}</p>}
    </div>
);