import './assets/css/App.css'
import './assets/css/schema_dark.css'
import './assets/css/animate.css'
import './assets/css/bootstrap-select.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/line-awesome.min.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Calendar from './Components/Calendar/Calendar'
import Button from './Components/Button/Button'
import Title from './Components/Title/Title'
import {useRef, useState, useEffect} from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import classname from './assets/css/Navbar.module.css'
import moment from 'moment'
import Category from './Components/Category/Category'
import AddCategory from './Components/Category/TypeOfCategory/Categories/NewCartCategory/AddCategory/AddCategory'
import CreateCategory
    from './Components/Category/TypeOfCategory/Categories/NewCartCategory/CreateCategory/CreateCategory'

function App(props) {
    const startDay = moment().startOf('month').startOf('day').add(1, 'month')
    console.log(startDay)
    const [calendarFade, setCalendarFade] = useState(true)
    const [activePage, setActivePage] = useState('Календарь')

    return (
        <div className="App">
            <Header/>
            <div className='App_wrapper'>
                <Title text={activePage}/>
                <div className={classname.content}>
                    <div className={classname.links}>
                        <Link onClick={() => setActivePage('Категории')} to='/category'>Категории</Link>
                        <Link onClick={() => setActivePage('Календарь')} to='/'>Календарь</Link>
                        <Link onClick={() => setActivePage('Цены')} to='/price'>Цены</Link>
                    </div>
                    <hr></hr>
                </div>
                <Routes>
                    <Route path='/' element={<Calendar dispatch={props.dispatch} state={props.state} fade={calendarFade}
                                                       setFade={setCalendarFade}/>}/>
                    <Route path='/price'
                           element={<Calendar price dispatch={props.dispatch} state={props.state} fade={calendarFade}
                                              setFade={setCalendarFade}/>}/>
                    <Route path='/category/*' element={<Category dispatch={props.dispatch} state={props.state}/>}/>
                    <Route path='/create_category' element={<AddCategory dispatch={props.dispatch}/>}/>
                    <Route path={`/edit_category`}
                           element={<CreateCategory dispatch={props.dispatch} state={props.state}/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
