import React, {useState} from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense"; 

  // dummy starting collection(array) of expenses
  const DUMMY_EXPENSES = [

    {
      id: 'e1',
      amount: 210.23,
      title: 'Car insurance',
      date: new Date(2021, 7, 16)
    },

    {
      id: 'e2',
      amount: 167.3,
      title: 'New TV',
      date: new Date(2020, 4, 12)
    },

    {
      id: 'e3',
      amount: 750,
      title: 'Flat rent',
      date: new Date(2021, 8, 31)
    },

    {
      id: 'e4',
      amount: 880,
      title: 'PS5',
      date: new Date(2021, 9, 2)
    }

  ];

  const App = () => {
  
    // using destructuring, set current and new state of expenses collection
   const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

   // define action and add expense that user created, remember that React provide us with current state for free, in this case prevExpenses === expenses(useState(DUMMY_EXPENSES))
   const addExpenseHandler = expense => {
    
    // when we update the state and we depend on the previous one, we want to make sure that we get latest state, therefore it's recommended to use function within a state
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  
  return (
    <div>
      {/* Rendering NewExpense component and passing addExpenseHandler to add expense */}
      <NewExpense onAddExpense = {addExpenseHandler}/>
      {/* Storing Expenses object and passing to Expenses component where will further manipulate with it */}
      <Expenses
        items = {expenses}
      />
    </div>
  );
}

export default App;

/*
  HOW WAS REACT RETURN STATEMENT WRITTEN BEFORE JSX, USING REACT OBJ
  
  React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started"),
    React.createElement(Expenses, { items: expenses })
  )

*/


