import React from 'react';
import classname from './CalendarGrid.module.css'
import moment from "moment";
import styled from "styled-components";

const CalendarGrid = (props) => {
    const indexOfItem = props.state.categoryReducer.booking_categories.findIndex(item => item.id === props.state.categoryReducer.edit_item_id);
    const indexOfItemPrice = props.state.categoryReducer.price_categories.findIndex(item => item.id === props.state.categoryReducer.edit_item_id);
    const indexOfItemDiscount = props.state.categoryReducer.discount_categories.findIndex(item => item.id === props.state.categoryReducer.edit_item_id);


    const GridWrapper = styled.div`
      font-family: 'Montserrat';
      width: 100%;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      //grid-template-rows: repeat(6,1fr);
      background-color: ${props => props.isHeader ? '#1E1F21' : '#002f34'};
      grid-gap: 1px;
      ${props => props.isHeader ? 'border-bottom: 1px solid #404040' : ''};

    `
    const CellWrapper = styled.div`
      min-width: 140px;
      min-height: ${props => props.isHeader ? 24 : 80}px;
      background-color: ${props => props.book ? '#11455c' : '#1E1F21'};
      color: ${props => props.isSelectedMonth ? '#000' : 'grey'};
      background-color: ${props => props.weekend && props.book ? '#3e8591' : props.weekend ? '#fff' : props.book ? '#62b9c7' : '#fff'};
      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        min-width: 45px;
        min-height: ${props => props.isHeader ? 12 : 40}px;
        font-size: 8px;
      }
      @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
        min-width: 70px;
        min-height: ${props => props.isHeader ? 20 : 50}px;
        font-size: 12px;
      }
    `
    const day = props.startDay.clone()
    const totalDays = 42;
    const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
    const isSelectedMonth = (day) => props.today.isSame(day, 'month')
    const searchData = (data, object = {book: []},) => {
        return object.book.some((item) => item[data] === true)
    }
    const searchDataPrice = (data, object = {price: []},) => {
        let index = object.price.findIndex(item => item[data])
        if (index != -1) {
            debugger
            return object.price[index][data]
        } else {
            return 0
        }
    }
    const searchDataDiscount = (data, object = {discount: [], typeDiscount: ''}) => {
        let index = object.discount.findIndex(item => item[data])
        if (index != -1) {
            debugger
            if (object.discount[index]['typeDiscount'] === 'procent') {
                return `${object.discount[index][data]}%`
            } else if (object.discount[index]['typeDiscount'] === 'rubles') {
                return `${object.discount[index][data]}₽`
            }
        } else {
            return 0
        }
    }

    return (
        <>
            <GridWrapper isHeader>
                {[...Array(7)].map((_, i) => (
                    <CellWrapper isSelectedMonth isHeader>
                        <div className={classname.grid_rowInCell}>
                            {moment().day(i + 1).format('dd')}
                        </div>
                    </CellWrapper>
                ))}
            </GridWrapper>
            <GridWrapper>
                {daysArray.map((dayItem) => (
                    <CellWrapper
                        book={searchData(dayItem.format('YYYYMMDD'), props.state.categoryReducer.booking_categories[indexOfItem])}
                        isSelectedMonth={isSelectedMonth(dayItem)} key={dayItem.format('x')}
                        weekend={(dayItem.format('dd') === 'Сб') || (dayItem.format('dd') === 'Вс') ? classname.weekend : ''}>
                        <div className={classname.grid_rowInCell}>
                            <div
                                className={`${classname.grid_dayWrapper} ${dayItem.isSame(moment(), 'day') ? classname.today : ''}`}>{dayItem.format('D')}</div>
                            {props.price ?
                                <div>
                                    <div>Цена:{searchDataPrice(dayItem.format('YYYYMMDD'), props.state.categoryReducer.price_categories[indexOfItemPrice])}₽</div>
                                    {searchDataDiscount(dayItem.format('YYYYMMDD'), props.state.categoryReducer.discount_categories[indexOfItemDiscount]) === 0 ?
                                        ''
                                        :
                                        <div>Скидка:{searchDataDiscount(dayItem.format('YYYYMMDD'), props.state.categoryReducer.discount_categories[indexOfItemDiscount])}</div>}
                                </div>
                                : ''}
                        </div>
                    </CellWrapper>
                ))}
            </GridWrapper>
        </>
    );
}

export default CalendarGrid;