import React, {useState} from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {



    const dropdownChangeHandler = (event) => {

        console.log("This value will be passed as an event target value: " +event.target.value);
        props.onChangeFilter(event.target.value); // event.target.value === ONO STO SMO ODABRALI SA DROPDOWN LISTE
    };


    return (
        <div className='expenses-filter'>
          <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select value={props.selected} onChange={dropdownChangeHandler}> {/* onChange: u ovom slucaju kad selektujemo neki <option>, value ce se proslediti i trigerovace f-ju dropdownChangeHandler */}
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
              <option value='2019'>2019</option>
            </select>
          </div>
        </div>
      );

}


export default ExpenseFilter;