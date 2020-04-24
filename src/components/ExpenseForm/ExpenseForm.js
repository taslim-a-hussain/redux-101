import React from 'react';
import {SingleDatePicker} from "react-dates";
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './ExpenseForm.scss';


export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            error: '',
            class: 'error',
            focused: false
        }; 
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
    }


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
        if (createdAt) {
            this.setState(() => ({
                createdAt
            }));
        }
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({focused}));
    };

    resetState = () => {
        this.setState(() => ({
            description: '',
            note: '',
            amount: '',
            createdAt: moment()
        }));
    };

    // Set restState to false
    setResetState = () => {
        this.resetState = false;
    };

    focus = () => {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            const error = 'Please provide description and amount.';
            this.setState(() => ({
                error
            }));
            return;
        }
        this.setState(() => ({
            error: ''
        }));
        
        this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
        }, this.resetState);

    };

    render() {
        return (
            <div>
                {this.state.error && <p className={this.state.class}>{this.state.error}</p>}
                <form id="expenseForm" autoComplete="off" className="expense-form" onSubmit={this.onSubmit}>
                    <input type="text" id="yo" placeholder="Description" ref={this.textInput} autoFocus value={this.state.description} onChange={this.onChangeDescription} />
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onChangeAmount} />
                    <SingleDatePicker 
                      date={this.state.createdAt} 
                      onDateChange={this.onDateChange} 
                      focused={this.state.focused} 
                      onFocusChange={this.onFocusChange} 
                      numberOfMonths={1}
                      isOutsideRange={() => false}
                      displayFormat="Do MMM, YYYY"
                    />
                    <div>
                    <textarea placeholder="Add a note for your expense" value={this.state.note} onChange={this.onChangeNote} />
                    </div>
                    <button onClick={this.focus}>{this.props.label ? this.props.label : 'Add More'}</button>
                    {this.props.exitBtn && <button onClick={this.setResetState}>Add Expense & Exit</button>}
                </form>
            </div>
        );  
    };
    
} // End of the class