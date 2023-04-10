import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {

    // state for showing/closing ExpenseForm
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log('in saveExpenseDataHandler in NewExpense.js');
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditing = () => {
        setIsEditing(false);
    }

    return(

        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}
                onCancel = {stopEditing}
            />}
        </div>

    );

};


export default NewExpense;