import React from 'react';
import { Routes , Route,Link} from 'react-router-dom';
import CalendarGrid from '../../Calendar/CalendarGrid/CalendarGrid';
import CartCategory from './Categories/CartCategory/CartCategory';
import Categories from './Categories/Categories';
import classname from './TypeOfCategory.module.css'
const TypeOfCategory =(props) => {
  let active =  0
  let notActive = 0
  const setActive = () =>{
    props.state.categoryReducer.categories.forEach((item) =>{
      if(item.active){
        active = active + 1
      }else{
        notActive = notActive + 1
      }
    })
  }
  setActive();
  return (
  <div className={classname.wrapper}>
      <Link className={classname.link} to='active'>Активные ({active})</Link>
      <Link className={classname.link} to='not_active'>Неактивные ({notActive})</Link>
      <Routes>
        <Route path='/active/*' element={<Categories active={true} dispatch={props.dispatch} state={props.state}/>}/>
        <Route path='/not_active/*' element={<Categories active={false} dispatch={props.dispatch} state={props.state}/>}/>
      </Routes>
  </div>);
}

export default TypeOfCategory;
