import React from 'react';
import {SingleDatePicker} from "react-dates";
import moment from 'moment';
import 'react-dates/initialize';
import './ExpenseForm.scss';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

console.log(now.format('Do MMM, YYYY'));

export default class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        error: '',
        class: 'error',
        focused: false
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
        if (!amount || amount.match(/^\d{1,}(\.*\d{0,2})?$/)) {
            this.setState(() => ({
                amount,
                error: ''
            }));
        
        } else if (!amount || amount.match(/^\d{1,}(\.*\d{0,9})?$/)) {
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

    onDateChange = (createdAt) => {
        this.setState(() => ({
            createdAt
        }))
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({focused}));
    };

    render() {
        return (
            <div>
                {this.state.error && <p className={this.state.class}>{this.state.error}</p>}
                <form className="expense-form">
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onChangeDescription} />
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onChangeAmount} />
                    <SingleDatePicker 
                      date={this.state.createdAt} 
                      onDateChange={this.onDateChange} 
                      focused={this.state.focused} 
                      onFocusChange={this.onFocusChange} 
                      numberOfMonths={1}
                      isOutsideRange={() => false}
                    />
                    <textarea placeholder="Add a note for your expense" value={this.state.note} onChange={this.onChangeNote} />
                    <button>Add Expense</button>
                </form>
            </div>
        );
    };
    
}