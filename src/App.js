import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  // const $h2 = React.createElement('h2', null, '반가워요~~');
  const $h2 = <h2>반가워요~</h2>;

  return (
    <>
      <ExpenseItem />
    </>
  );
}

export default App;
