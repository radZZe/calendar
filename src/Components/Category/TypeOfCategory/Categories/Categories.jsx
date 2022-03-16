import React from 'react';
import CartCategory from './CartCategory/CartCategory';
import NewCartCategory from './NewCartCategory/NewCartCategory';
import classname from './Categories.module.css'
import {Link} from 'react-router-dom'

const Categories =(props)=> {
  return (
      <div>
          <div className={classname.description}>Для того чтобы сделать категорию активной/неактивной нажмите на нее и измените тип:'Активно'</div>
          <div className={classname.wrapper}>
              {props.state.categoryReducer.categories.map((item) =>{
                      if(props.active){
                          if(item.active){
                              return(<CartCategory state={props.state} dispatch={props.dispatch} item={item}  active={item.active} title={item.title}/>)
                          }
                      }else{
                          if(!item.active){
                              return(<CartCategory state={props.state} dispatch={props.dispatch} item={item} active={item.active} title={item.title}/>)
                          }
                      }
                  }
              )}
              <NewCartCategory/>
          </div>
      </div>

  );
}

export default Categories;
