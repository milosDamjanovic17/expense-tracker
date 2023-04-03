import Expenses from "./components/Expenses/Expenses";

const App = () => {

  const expenses = [

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
      date: new Date(2021, 4, 12)
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


  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses
        items = {expenses}
      />
    </div>
  );
}

/*
  HOW WAS REACT RETURN STATEMENT WRITTEN BEFORE JSX, USING REACT OBJ
  
  React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started"),
    React.createElement(Expenses, { items: expenses })
  )

*/

export default App;
