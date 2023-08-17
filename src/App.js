import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourceList from './components/CourseGoals/CourceList';
import './App.css';



const App = () => {

  return (
    <div>
      <section id = "goal-form">
        <CourseInput />
      </section>
      <section id = "goals">
        <CourceList />
      </section>
    </div>
  );
};

export default App;