import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    // configuring state for 'Filter By Year' dropdown, bind inputFilter year === '2022' to selected keyword which we'll use as a default view on our page
    const [inputFilterYear, setInputFilterYear] = useState('2022');
    // we'll receive selectedYear from ExpenseFilter component, binded with onChangeFilter keyword
    const filterChangeHandler = (selectedYear) => {
        
        console.log(`Year we selected: ${selectedYear}`);
        setInputFilterYear(selectedYear);
    };

    // function for filtering all expenses by selected year
    const filterItemsByYearHandler = props.items.filter(expenses => 
            expenses.date.getFullYear().toString() === inputFilterYear);
    
    return(

        <Card className='expenses'>
            <ExpenseFilter selected = {inputFilterYear} onChangeFilter = {filterChangeHandler}/> {/*  dropdownChangeHandler inside ExpenseFilter component will send value to onChangeFilter keyword and then pass it to filterChangeHandler */}
            <ExpensesChart expenses = {filterItemsByYearHandler}/>
            <ExpensesList 
                items = {filterItemsByYearHandler}
            />
        </Card>
    )
}


export default Expenses;