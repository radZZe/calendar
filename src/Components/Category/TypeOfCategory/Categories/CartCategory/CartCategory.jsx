import React from 'react';
import classname from './CartCategory.module.css'
import photo from '../../../../../assets/images/auth-bg-345345.jpg'
import {Link,Routes,Route} from 'react-router-dom'
import CreateCategory from '../NewCartCategory/CreateCategory/CreateCategory';
import { changeEditItemActionCreator } from '../../../../../redux/category-reducer';
const CartCategory = (props)=> {
  const categories = ['Дом','Номер','Апартаменты с кухней','Койко-место']
  return (
  <div onClick={() => props.dispatch(changeEditItemActionCreator(props.item.id))} className={classname.wrapper}>
    <Link className={classname.link_block} to={`/edit_category`}>
      <div className={classname.cart_img}>
        <img src={photo}></img>
      </div>
      <span className={classname.caption_title}>Категория : {props.title}</span>
      <div className={classname.cart_caption}>
        <h4 className={classname.caption_name}>{props.item.name}</h4>
        <div className={`${classname.caption_status} ${props.active ? classname.active : classname.not_active}`}></div>
      </div>
    </Link>
  </div>
  );
}

export default CartCategory;
