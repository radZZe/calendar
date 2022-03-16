import React from 'react';
import classname from './EditBtn.module.css'

const EditBtn =(props) => {
  return (
  <div onClick={props.showMenu}>
      <button className={classname.btn}>РЕДАКТИРОВАТЬ</button>
  </div>
  );
}

export default EditBtn;
