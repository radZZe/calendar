import React from 'react';
import classname from './NewCartCategory.module.css'
import { Routes , Route,Link} from 'react-router-dom';
import Categories from '../Categories';
import AddCategory from './AddCategory/AddCategory';
const NewCartCategory =() => {
  return (
  <div className={classname.wrapper}>
      <span className={classname.cart_add}>
      </span>
      <Link to='/create_category'>Добавить категорию</Link>
      <Routes>
          <Route path='/create_category' element={<AddCategory/>}/>
      </Routes>
  </div>
  );
}

export default NewCartCategory;
