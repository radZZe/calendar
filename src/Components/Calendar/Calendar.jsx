import React, {useState} from 'react';
import classname from './Calendar.module.css'
import moment from 'moment';
import EditBtn from '../EditBtn/EditBtn';
import CalendarMenu from './CalendarMenu/CalendarMenu';
import CalendarMonitor from "./CalendarMonitor/CalendarMonitor";
import CalendarGrid from "./CalendarGrid/CalendarGrid";
import styled from "styled-components";
import Select from 'react-select'
import {changeEditItemActionCreator} from "../../redux/category-reducer";
import Button from "../Button/Button";


moment.updateLocale('ru', {
    months: [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
        "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ],
    weekdays: [
        "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
    ],
    weekdaysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
});


const Calendar = (props) => {
    const [currentCategory, setCurrentCategory] = useState()
    const [today, setToday] = useState(moment())
    const prevHandler = () => {
        setToday(prev => prev.clone().subtract(1, 'month'))
    }
    const todayHandler = () => {
        setToday(moment())
    }
    const nextHandler = () => {
        setToday(prev => prev.clone().add(1, 'month'))
    }
    const startDay = today.clone().startOf('month').startOf('week')
    const endDay = today.clone().endOf('month').startOf('week')
    const categories = props.state.categoryReducer.categories.map((item) => ({value: item.id, label: item.name}))

    const showMenu = () => {
        props.setFade(false)
    }
    const SelectWrapper = styled.div`
      margin-left: 2%;
      width: 35%;
      margin-bottom: 20px;
      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        width: 100%;
        margin-left: 0;
      }
      @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
        width: 100%;
        margin-left: 0;
      }
    `

    const CalendarWrapper = styled.div`
      border: 1px solid black;
      margin-left: 2%;
      width: 90%;
      font-size: 13px;
      justify-content: center;
      border-radius: 8px;
      overflow: hidden;
      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        width: 100%;
        margin-left: 0;
      }
      @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
        width: 100%;
        margin-left: 0;
      }
    `
    const MapCalendarWrapper = styled.div`
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      width: 100%;
      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        flex-direction: column;
      }
    `
    const MapCalendarItem = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        font-size: 15px;
        justify-content: center;
      }
    `
    const ColorBlock = styled.div`
      width: 20px;
      height: 20px;
      box-shadow: 2px 1px 8px #868686;
      background-color: ${props => props.color};
      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        width: 15px;
        height: 15px;
      }
    `

    const changeCategoryHandler = (value) => {
        setCurrentCategory(value.label)
        props.dispatch(changeEditItemActionCreator(value.value))
    }
    return (
        <div>
            <CalendarMenu price={props.price} state={props.state} dispatch={props.dispatch} fade={props.fade}
                          setFade={props.setFade}/>
            <EditBtn showMenu={showMenu}/>
            <SelectWrapper>
                <span>Выберите категорию</span>
                <Select onChange={(value) => changeCategoryHandler(value)} placeholder='Выберите категорию'
                        options={categories}/>
            </SelectWrapper>
            <MapCalendarWrapper>
                <MapCalendarItem>
                    <span>Дни с закрытой бронью - </span>
                    <ColorBlock color={'#fff'}></ColorBlock>
                </MapCalendarItem>
                <MapCalendarItem>
                    <span>Дни с открытой бронью - </span>
                    <ColorBlock color={'#62b9c7'}></ColorBlock>
                </MapCalendarItem>
                <MapCalendarItem>
                    <span>Выходные с открытой бронью - </span>
                    <ColorBlock color={'#3e8591'}></ColorBlock>
                </MapCalendarItem>
            </MapCalendarWrapper>
            <CalendarWrapper>
                <CalendarMonitor currentCategory={currentCategory} nextHandler={nextHandler} todayHandler={todayHandler}
                                 prevHandler={prevHandler} today={today}/>
                <CalendarGrid price={props.price} state={props.state} currentCategory={currentCategory} today={today}
                              startDay={startDay}/>
            </CalendarWrapper>
            {props.price ? <Button/> : ""}
        </div>);
}
export default Calendar;