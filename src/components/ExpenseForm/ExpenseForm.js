import React from 'react';
import './ExpenseForm.scss';

export default class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        amount: '',
        error: '',
        class: 'error'
    };

    onChangeDescription = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    };

    onChangeNote = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }));
    };

    onChangeAmount = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.*\d{0,2})?$/)) {
            this.setState(() => ({
                amount,
                error: ''
            }));
        
        } else if (amount.match(/^\d*(\.*\d{0,9})?$/)) {
            const error = 'Number is already valid.';
            this.setState(() => ({
                error,
                class: 'success'
            }));
        } else {
            const error = 'Enter valid number eg. 249 or 249.00';
            this.setState(() => ({
                error
            }));
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p className={this.state.class}>{this.state.error}</p>}
                <form className="expense-form">
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onChangeDescription} />
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onChangeAmount} />
                    <textarea placeholder="Add a note for your expense" value={this.state.note} onChange={this.onChangeNote} />
                    <button>Add Expense</button>
                </form>
            </div>
        );
    };
    
}