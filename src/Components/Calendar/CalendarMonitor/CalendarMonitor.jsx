import React  from 'react';
import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding-top: 10px;
  
`
const MonthYearBlock = styled.div`
  display: flex;
  margin-left: 1%;
`
const TextWrapper = styled.div`
  color: #000;
  font-size: 32px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 15px;
  }
`
const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 5%;
`
const ButtonWrapper = styled('button')`
  border: unset;
  background-color: #002f34;
  color: #E6E6E6;
  margin-right: 2px;
  border-radius: 4px;
  height: 24px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    height: 24px;
    font-size: 10px;
  }
`
const CurrentDayButton = styled(ButtonWrapper)`
  padding: 0px 16px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    padding: 0px 8px;
  }
`
const CategoryName = styled.div`
        color: #000;
        font-size: 15px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 12px;
  }
    `
const  CalendarMonitor = (props) => {
    return (
        <DivWrapper>
            <MonthYearBlock>
                <TitleWrapper>{props.today.format('MMMM')}</TitleWrapper>
                <TextWrapper>{props.today.format('YYYY')}</TextWrapper>
            </MonthYearBlock>
            <div>
                <CategoryName>Категория: {props.currentCategory}</CategoryName>
            </div>
            <div>
                <ButtonWrapper onClick={props.prevHandler}>&lt;</ButtonWrapper>
                <CurrentDayButton onClick={props.todayHandler}><b>Cегодня</b></CurrentDayButton>
                <ButtonWrapper onClick={props.nextHandler}>&gt;</ButtonWrapper>
            </div>
        </DivWrapper>
    );
}

export default CalendarMonitor;