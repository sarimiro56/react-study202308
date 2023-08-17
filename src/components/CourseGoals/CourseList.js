import React from 'react';
import './CourseList.css';
import CourseItem from './CourseItem';

const CourceList = ({ items , onDelete}) => {
  return (
    <ul className='goal-list'>
        {items.map((item) => (
            <CourseItem key={item.id} item={item} omDelete={onDelete}/>
        ))}
    </ul>
  );
};

export default CourceList;
