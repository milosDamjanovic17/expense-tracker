import React, {useState} from 'react'
import './ExpenseForm.css'
import react from 'react';


const ExpenseForm = (props) => {

    // ASSIGNING MULTIPLE STATES IS THE PREFERED WAY
    const [enteredTitle, setEneteredTitle] = react.useState('');
    const [enteredAmount, setEnteredAmount] = react.useState('');
    const [enteredDate, setEnteredDate] = react.useState('');
   
//    const [userInput, setUserInput] = useState({

//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: ''
//    }
//);

   const titleChangeHandler = (e) =>{

    // prefered way with assigning to specific state field
    setEneteredTitle(e.target.value);

    // not prefered way since react schedule state updates, and this logic doesn't assure we'll receive latest state update
        // setEneteredTitle({
        // ...userInput,
        // enteredTitle: e.target.value
        // });

    // prefered way when working with previous states that may change/update in previous occasion 
        // setEneteredTitle((prevState) => {
        //     return {...prevState, enteredTitle: e.target.value};
        // })
    };

    const amountChangeHandler = (e) => {

        setEnteredAmount(e.target.value);

    };

    const dateChangeHandler = (e) => {


        setEnteredDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        
        console.log('in submitHandler function in ExpenseForm.js');
        props.onSaveExpenseData(expenseData);

        setEneteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
    
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" 
                        min='0.01' 
                        step='0.01' 
                        value={enteredAmount}
                        onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" 
                        min='2019-01-01' 
                        max='2022-12-31' 
                        value={enteredDate}
                        onChange={dateChangeHandler}/>
                </div>
            </div>

        <button type='submit'>Add Expense</button>
        </form>


    );
   

}


export default ExpenseForm;