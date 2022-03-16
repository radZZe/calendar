import React, { useState } from 'react';
import classname from './CalendarMenu.module.css'
import Select from 'react-select'
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import moment from "moment";
import styled from "styled-components";
import {TextField ,FormControlLabel,Checkbox ,FormControl,Radio ,RadioGroup,FormLabel} from '@mui/material';

import * as ruTimeZoneNames from '../../../../node_modules/cldr-data/main/ru/timeZoneNames.json';
import * as numbers from '../../../../node_modules/cldr-data/main/ru/numbers.json';
import * as gregorian from '../../../../node_modules/cldr-data/main/ru/ca-gregorian.json';
import * as numberingSystems from '../../../../node_modules/cldr-data/supplemental/numberingSystems.json';
import {
    addBookingDateActionCreator,
    addDiscountActionCreator,
    addPriceDateActionCreator, delDiscountActionCreator
} from "../../../redux/category-reducer";
import Button from "../../Button/Button";


loadCldr(numberingSystems, gregorian, numbers, ruTimeZoneNames);

L10n.load({
  'ru': {
'daterangepicker': {
  applyText: 'Подтвердить',
  cancelText: 'Отмена',
  customRange: 'benutzerdefinierten Bereich',
  days: 'дней',
  endLabel: 'Последняя дата ',
  placeholder: 'Выберите дату',
  selectedDays: 'Выбранные дни',
  startLabel: 'Начальная дата'
}
}
});

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  font-family: 'Montserrat';
`
const ButtonDate = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-family: 'Montserrat';
`
const DiscountWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const WarningBlock = styled.span`
    margin-top: 10%;
    text-align: center;
    font-size: 15px;
    color: grey;
`
const CalendarMenu =(props)=> {
    const [typeDiscount, setTypeDiscount] = useState('rubles');
    const [price,setPrice] = useState(0)
    const [discount,setDiscount] = useState(0)
    const [days,setDays] = useState([])
    const typeDiscountHandleChange = (event) => {
        setTypeDiscount(event.target.value);
    };
  const fade = props.fade;
  const setFade = props.setFade;
  const closeMenu=()=>{
    setFade(true);
  }
  const buttonHandler = (type) => {
      if(type === 'openBook') {
          props.dispatch(addBookingDateActionCreator(props.state.categoryReducer.edit_item_id, days, true))
      }else if(type === 'closeBook'){
          props.dispatch(addBookingDateActionCreator(props.state.categoryReducer.edit_item_id, days, false))
      }else if(type === 'setPrice'){
          props.dispatch(addPriceDateActionCreator(props.state.categoryReducer.edit_item_id, days, price))
      }else if(type === 'setDiscount'){
          props.dispatch(addDiscountActionCreator(props.state.categoryReducer.edit_item_id, days, discount,typeDiscount,price))
      }else if(type === 'delDiscount'){
          props.dispatch(delDiscountActionCreator(props.state.categoryReducer.edit_item_id, days, discount,price))
      }
    }
  console.log(props.state.categoryReducer)
  return (
  <div className={`${classname.wrapper} ${fade === true ? classname.fade:''}`}>
      <div className={classname.title}>
        <span className={classname.title_text}>Редактирование</span>
        <span onClick={closeMenu} className={classname.close}>
            <svg  width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path data-v-34c178b1="" d="M7.82 7.004l6.002-6.001a.583.583 0 10-.825-.825l-6 6.002L.994.178a.583.583 0 00-.825.825l6.002 6.001L.17 13.005a.583.583 0 00.825.825l6.001-6.001 6.001 6a.583.583 0 00.825-.824l-6.001-6z" fill="#A0A0A0"></path></svg>
        </span>
      </div>
      <hr></hr>
      <div className={classname.content}>
          <DateRangePickerComponent onChange={(value)=> setDays(value.value) }  cssClass='customCSS' locale='ru' placeholder='Выберите даты'  id="daterangepicker" />
          {props.price?
              <TextField className={classname.text_menu} onChange={(value)=>setPrice(value.target.value)}  id="outlined-basic" label="Введите цену" variant="outlined" />
              :''}
          <ButtonWrapper>
              {props.price?
                  <button className={classname.setPrice_btn} onClick={()=> buttonHandler('setPrice')}>Установить цену</button>
                  :<ButtonDate>
                      <button onClick={()=> buttonHandler('closeBook')} className={classname.close_date_btn}>Закрыть даты</button>
                      <button onClick={()=> buttonHandler('openBook')} className={classname.close_date_btn}>Открыть даты</button>
                  </ButtonDate>}
          </ButtonWrapper>
          {props.price?
              <div className={classname.content_discount}>
                  <DiscountWrapper>
                      <TextField className={classname.text_menu} onChange={(value)=>setDiscount(value.target.value)}  id="outlined-basic" label="Введите скидку" variant="outlined" />
                      <FormControl>
                          <RadioGroup
                              className={classname.radio}
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={typeDiscount}
                              onChange={typeDiscountHandleChange}
                          >
                              <FormControlLabel value="procent" control={<Radio />} label="В процентах" />
                              <FormControlLabel value="rubles" control={<Radio />} label="В рублях" />
                          </RadioGroup>
                      </FormControl>
                      <ButtonDate>
                          <button className={classname.setDiscount_btn} onClick={()=> buttonHandler('setDiscount')}>Установить скидку</button>
                          <button className={classname.setDiscount_btn} onClick={()=> buttonHandler('delDiscount')}>Удалить скидку</button>
                      </ButtonDate>
                      <WarningBlock>Перед тем как вводить скидку , всегда вводите цену от которой будет считаться скидка </WarningBlock>
                  </DiscountWrapper>
              </div>
              :''}
      </div>
      {props.price ? <Button/>:""}
  </div>
  );
}
export default CalendarMenu;
