import React, { useState } from 'react';
import Select from 'react-select'
import TextField from '@mui/material/TextField';
import classname from './AddCategory.module.css'
import {Link} from 'react-router-dom';
import { addCategoryActionCreator } from '../../../../../../redux/category-reducer';
const AddCategory=(props)=> {

    const [title,setTitle] = useState('');
    const [name, setName] = useState('');
    const [numberRooms, setNumberRooms] = useState(0);

    const categories =[
        { value: 'Дом', label: 'Дом' },
        { value: 'Койко-место', label: 'Койко-место' },
        { value: 'Номер', label: 'Номер' },
        { value: 'Апартаменты с кухней', label: 'Апартаменты с кухней' },
    ]
    const numberOfRooms =[
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' },
        { value: '11', label: '11' },
        { value: '12', label: '12' },
        { value: '13', label: '13' },
        { value: '14', label: '14' },
        { value: '15', label: '15' },
        { value: '16', label: '16' },
        { value: '17', label: '17' },
        { value: '18', label: '18' },
        { value: '19', label: '19' },
        { value: '20', label: '20' },
        { value: '21', label: '21' },
        { value: '22', label: '22' },
        { value: '23', label: '23' },
        { value: '24', label: '24' },
        { value: '25', label: '25' },
        { value: '26', label: '26' },
        { value: '27', label: '27' },
        { value: '28', label: '28' },
        { value: '29', label: '29' },
        { value: '30', label: '30' },
    ]
    const ownCategoryHandler = (value) =>{
        categories.push({value:value.target.value,label:value.target.value,});
        setTitle(value.target.value)
    }
  return (
  <div className={classname.wrapper}>
    <Select defaultValue={title} onChange={(value) => setTitle(value.value)}  className={`${classname.zindex} ${classname.select}`} options={categories} placeholder='Тип категории '/>
      <span>Не нашли нужную категорию , создайте свою в поле ниже</span>
      <TextField  onChange={(value)=> ownCategoryHandler(value)} className={classname.width} id="outlined-basic" label="Своя категория" variant="outlined" />
    <TextField onChange={(value) => setName(value.target.value)}  className={classname.width} id="outlined-basic" label="Название объекта (проверяется модератором)" variant="outlined" />
    <Select onChange={(value) => setNumberRooms(value.value)} className={classname.select} options={numberOfRooms} placeholder='Количество '/>
    <button onClick={() => props.dispatch(addCategoryActionCreator(title,name , Number(numberRooms)))} className={classname.create_btn}>Создать</button>
  </div>
  );
}

export default AddCategory;
