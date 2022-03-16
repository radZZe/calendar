import React from 'react';
import classname  from './Category.module.css'
import TypeOfCategory from './TypeOfCategory/TypeOfCategory';

const Category = (props) => {

  return (
  <div className={classname.wrapper}>
    <TypeOfCategory dispatch={props.dispatch} state={props.state}/>

  </div>
  );
}

export default Category;
