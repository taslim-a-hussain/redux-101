import React from 'react';
import {Link} from 'react-router-dom';
import numeral from 'numeral';

export default ({total, length}) => (
    <div>
        {length > 1 && <p>Viewing {length} expenses totalling {numeral(total/100).format('$0,0.00')}</p>}
        {length === 1 && <p>Viewing {length} expense totalling {numeral(total/100).format('$0,0.00')}</p>}
        {length === 0 && <p>No expense. <Link to="/create">Create Expense</Link> </p>}
    </div>
);