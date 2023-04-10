import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    // MULTIPLE STATES APPROACH IS PREFERED WAY
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (e) => {

        setEnteredTitle = e.target.value;

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // }); // since React schedules component state, this approach is not guaranteeing that ...userInput is retrieveing latest state 
    
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: e.target.value}
        // }); // this approach guarantees that will return latest state for non-overwritten fields


    };

    const amountChangeHandler = (e) => {

        setEnteredAmount = e.target.value;

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // });

        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: e.target.value};
        // });
    };

    const dateChangeHandler = (e) => {

        setEnteredDate = e.target.value

        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // })

        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: e.target.value};
        // });
    };

    return(

        <form>
           <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='text' min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>

    );


};


export default ExpenseForm;