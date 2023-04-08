import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [inputFilterYear, setInputFilterYear] = useState('All');

    const filterChangeHandler = (selectedYear) => {

        setInputFilterYear(selectedYear);
    };



    const filterItemsByYearHandler = props.items.filter(expenses => 
            expenses.date.getFullYear().toString() === inputFilterYear);
    
    return(

        <Card className='expenses'>
            <ExpenseFilter selected = {inputFilterYear} onChangeFilter = {filterChangeHandler}/>
            <ExpensesChart expenses = {filterItemsByYearHandler}/>
            <ExpensesList 
                items = {filterItemsByYearHandler}
            />
        </Card>
    )
}


export default Expenses;