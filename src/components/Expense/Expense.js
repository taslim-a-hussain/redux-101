import React from 'react';

export default ({match}) => (
    <div>
        <h2>Edit Expense</h2>
        {match.params.id}
    </div>
);