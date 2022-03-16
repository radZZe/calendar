import React, { useRef } from 'react';
import classname from './CreateCategory.module.css'
import {Switch} from '@mui/material'
import Select from 'react-select'
import {TextField,FormGroup ,FormControlLabel,Checkbox ,FormControl,Radio ,RadioGroup,FormLabel} from '@mui/material';
import down_icon from '../../../../../../assets/images/down_icon.png'
import {deleteCategoryActionCreator, editCategoryActionCreator} from '../../../../../../redux/category-reducer.js'
import { useState } from 'react';
import {Link} from "react-router-dom";

const CreateCategory =(props) => {

  const editItem = props.state.categoryReducer.edit_item_id
  const index = props.state.categoryReducer.categories.findIndex(item => item.id === editItem)
  console.log(index)
  const item = props.state.categoryReducer.categories[index];
  console.log(item)

  const typesOfHouse =[
    {value:'Дача',label:'Дача'},
    {value:'Садовый домик',label:'Садовый домик'},
    {value:'Вилла',label:'Вилла'},
    {value:'Бунгало',label:'Бунгало'},
    {value:'Таунхаус',label:'Таунхаус'},
    {value:'Коттедж',label:'Коттедж'},
  ];
  const typeOfHome = [
    {value:'Кирпичный',label:'Кирпичный'},
    {value:'Деревянный',label:'Деревянный'},
    {value:'Панельный',label:'Панельный'},
    {value:'Блочный',label:'Блочный'},
    {value:'Монолитно-Кирпичный',label:'Монолитно-Кирпичный'},
  ];

  const maxPlaces = [
    {value:'1',label:'1'},
    {value:'2',label:'2'},
    {value:'3',label:'3'},
    {value:'4',label:'4'},
    {value:'5',label:'5'},
    {value:'6',label:'6'},
    {value:'7',label:'7'},
    {value:'8',label:'8'},
    {value:'9',label:'9'},
    {value:'10',label:'10'},
    {value:'11',label:'11'},
    {value:'12',label:'12'},
    {value:'13',label:'13'},
    {value:'14',label:'14'},
    {value:'15',label:'15'},
    {value:'16',label:'16'},
    {value:'17',label:'17'},
    {value:'18',label:'18'},
    {value:'19',label:'19'},
    {value:'20',label:'20'},
    {value:'21',label:'21'},
    {value:'22',label:'22'},
    {value:'23',label:'23'},
    {value:'24',label:'24'},
    {value:'25',label:'25'},
    {value:'26',label:'26'},
    {value:'27',label:'27'},
    {value:'28',label:'28'},
    {value:'29',label:'29'},
    {value:'30',label:'30'},
    {value:'31',label:'31'},
    {value:'32',label:'32'},
    {value:'33',label:'33'},
    {value:'34',label:'34'},
    {value:'35',label:'35'},
    {value:'36',label:'36'},
    {value:'37',label:'37'},
    {value:'38',label:'38'},
    {value:'39',label:'39'},
    {value:'40',label:'40'},
    {value:'41',label:'41'},
    {value:'42',label:'42'},
    {value:'43',label:'43'},
    {value:'44',label:'44'},
    {value:'45',label:'45'},
    {value:'46',label:'46'},
    {value:'47',label:'47'},
    {value:'48',label:'48'},
    {value:'49',label:'49'},
    {value:'50',label:'50'},
  ];

  const places = [
    {value:'1',label:'1'},
    {value:'2',label:'2'},
    {value:'3',label:'3'},
    {value:'4',label:'4'},
    {value:'5',label:'5'},
    {value:'6',label:'6'},
    {value:'7',label:'7'},
    {value:'8',label:'8'},
    {value:'9',label:'9'},
    {value:'10',label:'10'},
    {value:'11',label:'11'},
    {value:'12',label:'12'},
    {value:'13',label:'13'},
    {value:'14',label:'14'},
    {value:'15',label:'15'},
  ];
  const classOfRoom =[
    {value:'Эконом',label:'Эконом'},
    {value:'Стандарт',label:'Стандарт'},
    {value:'Полулюкс',label:'Полулюкс'},
    {value:'Семейный',label:'Семейный'},
    {value:'Люкс',label:'Люкс'},
    {value:'Сюит',label:'Сюит'},
    {value:'Апартаменты',label:'Апартаменты'},
    {value:'Апартаменты-студия',label:'Апартаменты-студия'},
  ]

  const kitchen = [
    {value:'В доме',label:'В доме'},
    {value:'На улице',label:'На улице'},
    {value:'Нет',label:'Нет'},
  ]

  const bathroom = [
    {value:'В доме',label:'В доме'},
    {value:'На улице',label:'На улице'},
    {value:'Нет',label:'Нет'},
  ];
  const toilet =[
    {value:'В доме',label:'В доме'},
    {value:'На улице',label:'На улице'},
  ]
  const [smoke, setSmoke] = React.useState(item.smoking);

  const smokeHandleChange = (event) => {
    setSmoke(event.target.value);
  };

  const [active,setActive] = useState(item.active)

  const [clean, setClean] = React.useState(item.cleaning);

  const cleanHandleChange = (event) => {
    setClean(event.target.value);
  };
  const [description_edit ,setDescription_edit] = useState(item.description)
  const [subtype,setSubtype] = useState(item.subtype)
  const [name,setName] = useState(item.name)
  const [typeOfHouse,setTypeOfHouse] = useState(item.typeOfHouse)
  const [kitchenState,setKitchen] = useState(item.kitchen)
  const [bathRoom,setBathRoom] = useState(item.bathRoom)
  const [toiletState,setToilet] = useState(item.toilet)
  const [photo,setPhoto] = useState(item.photo)


  const [numberOfGuests,setNumberOfGuests] = useState(item.numberOfGuests)
  const [maxPlace,setMaxPlace] = useState(item.maxPlace)
  const [totalArea, setTotalArea] = useState(item.totalArea)
  const [areaRooms,setAreaRooms] = useState(item.areaRooms)
  const [numberFloor,setNumberFloor] = useState(item.numberFloor)
  const [numberRooms,setNumberRooms] = useState(item.numberRooms)
  const [numberBedrooms,setNumberBedrooms] = useState(item.numberBedrooms)
  const [doubleBed,setDoubleBed] = useState(item.doubleBed)
  const [oneBed,setOneBed] = useState(item.oneBed)
  const [sofaTwoPlaces,setSofaTwoPlaces] = useState(item.sofaTwoPlaces)
  const [sofaOnePlace,setSofaOnePlace] = useState(item.sofaOnePlace)
  const [bunkBedTwoPlace,setBunkBedTwoPlace] = useState(item.bunkBedTwoPlace)
  const [foldingChair,setFoldingChair] = useState(item.foldingChair)
  const [cot,setCot] = useState(item.cot)
  const [babyCrib,setBabyCrib] = useState(item.babyCrib)
  const [bedDress,setBedDress] = useState(item.bedDress)
  const [numberBathRooms,setNumberBathRooms] = useState(item.numberBathRooms)

  const[wifi,setWifi] = useState(item.wifi)
  const [internet,setInternet] = useState(item.internet)
  const [safe,setSafe] = useState(item.safe)
  const [intercom,setIntercom] = useState(item.intercom)
  const [videoIntercom,setVideoIntercom] = useState(item.videoIntercom)
  const [securitySystem,setSecuritySystem] = useState(item.securitySystem)
  const [fireAlarm,setFireAlarm] = useState(item.fireAlarm)
  const [balcony,setBalcony] = useState(item.balcony)
  const [sauna,setSauna] = useState(item.sauna)
  const [clothesDryer,setClothesDryer] = useState(item.clothesDryer)
  const [warmFloor,setWarmFloor] = useState(item.warmFloor)
  const [hairDryer,setHairDryer] = useState(item.hairDryer)
  const [washingMachine,setWashingMachine] = useState(item.washingMachine)
  const [bath,setBath] = useState(item.bath)
  const [hydroMassageBath,setHydroMassageBath] = useState(item.hydroMassageBath)
  const [showerCabin,setShowerCabin] = useState(item.showerCabin)
  const [shampoo,setShampoo] = useState(item.shampoo)
  const [towels,setTowels] = useState(item.towels)
  const [bathrobes,setBathrobes] = useState(item.bathrobes)
  const [toiletries,setToiletries] = useState(item.toiletries)
  const [musicCenter,setMusicCenter] = useState(item.musicCenter)
  const [karaoke,setKaraoke] = useState(item.karaoke)
  const [childrensCorner,setChildrensCorner] = useState(item.childrensCorner)
  const [iron,setIron] = useState(item.iron)
  const [tv,setTv] = useState(item.tv)
  const [lcdTv,setLcdTv] = useState(item.lcdTv)
  const [fan,setFan] = useState(item.fan)
  const [heater,setHeater] = useState(item.heater)
  const [ironingBoard,setIroningBoard] = useState(item.ironingBoard)
  const [mosquito,setMosquito] = useState(item.mosquito)
  const [furnace,setFurnace] = useState(item.furnace)
  const [firePlace,setFirePlace] = useState(item.firePlace)
  const [cableTv,setCableTv] =useState(item.cableTv)
  const [billiards,setBilliards] = useState(item.billiards)
  const [airConditioner,setAirConditioner] = useState(item.airConditioner)
  const [gasStove,setGasStove] = useState(item.gasStove)
  const [electricStove,setElectricStove] = useState(item.electricStove)
  const [cutlery,setCutlery] = useState(item.cutlery)
  const [setOfDishes,setSetOfDishes] = useState(item.setOfDishes)
  const [waterFilter,setWaterFilter] = useState(item.waterFilter)
  const [oven,setOven] = useState(item.oven)
  const [coffeeMachine,setCoffeeMachine] = useState(item.coffeeMachine)
  const [electricKettle,setElectricKettle] = useState(item.electricKettle)
  const [microWave,setMicroWave] = useState(item.microWave)
  const [fridge,setFridge] = useState(item.fridge)
  const [dishwasher,setDishwasher] = useState(item.dishwasher)
  const [playground,setPlayground] = useState(item.playground)
  const [swimmingPool,setSwimmingPool] = useState(item.swimmingPool)
  const [ownShore,setOwnShore] = useState(item.ownShore)
  const [fencedArea,setFencedArea] = useState(item.fencedArea)
  const [brazier,setBrazier] = useState(item.brazier)
  const [tennisTable,setTennisTable] = useState(item.tennisTable)
  const [orchard,setOrchard] = useState(item.orchard)
  const [sunLoungers,setSunLoungers] = useState(item.sunLoungers)
  const [alcove,setAlcove] = useState(item.alcove)
  const [terrace,setTerrace] = useState(item.terrace)
  const [classRoom,setClassRoom] = useState(item.classRoom)
  const [city,setCity]= useState(item.city)
  const [lake,setLake] = useState(item.lake)
  const [park,setPark] = useState(item.park)
  const [sea,setSea] = useState(item.sea)
  const [courtyard,setCourtyard] = useState(item.courtyard)
  const [garden,setGarden] = useState(item.garden)
  const [mountain,setMountain] = useState(item.mountain)
  const [river,setRiver] = useState(item.river)
  const [roadway,setRoadway] = useState(item.roadway)
  const [sanUzel,setSanUzel] = useState(item.sanUzel)
  const [addNumberOfGuests,setAddNumberOfGuests] = useState(item.addNumberOfGuests)


 const clothesDryerFunc = (value) => {
   debugger
  setClothesDryer(value.target.checked)
 }
  let component = null
  if(item.title === 'Дом'){
    component = <div className={classname.wrapper} >
      <div className={classname.wrapper_title}>
        <div className={classname.header_title}>Дом</div>
        <div>
          <span>Активно:</span>
          <Switch defaultChecked={item.active} onChange={(value) =>  setActive(value.target.checked)}  />
        </div>
      </div>
      <div className={classname.description_block}>
        <Select onChange={(value) =>setSubtype(value.value)} defaultValue={typesOfHouse[typesOfHouse.findIndex(el => el.value === item.subtype)]} className={`${classname.subtype} ${classname.item}`} options={typesOfHouse} placeholder='Подтип'/>
        <TextField onChange={(value) =>  setName(value.target.value)} defaultValue={item.name} className={classname.item} id="outlined-basic" label="Название объекта (проверяется модератором)" variant="outlined" />
        <TextField onChange={(value) =>  setNumberOfGuests(value.target.value)} defaultValue={`${item.numberOfGuests}`} className={classname.item} id="outlined-basic" label="Количество основных мест" variant="outlined" />
        <TextField onChange={(value) =>  setAddNumberOfGuests(value.target.value)} defaultValue={`${item.addNumberOfGuests}`} className={classname.item} id="outlined-basic" label="Количество дополнительных мест" variant="outlined" />
        <Select onChange={(value) =>  setMaxPlace(value.value)} defaultValue={maxPlaces[maxPlaces.findIndex(el => el.value === `${item.maxPlace}`)]} className={classname.item} options={maxPlaces} placeholder='Макс. количество доп. мест'/>
        <TextField onChange={(value) => setDescription_edit(value.target.value)} id="filled-multiline-static" label="Описание" multiline rows={4} defaultValue={description_edit}variant="filled"
        />
      </div>
      <div className={classname.house_block}>
        <div className={classname.house_block_one}>
          <Select onChange={(value) =>   setTypeOfHouse(value.value)} className={classname.zindex} defaultValue={typeOfHome[typeOfHome.findIndex(el => el.value === item.typeOfHouse)]} options={typeOfHome} placeholder='Тип дома'/>
          <TextField onChange={(value) =>  setTotalArea(value.target.value)} defaultValue={`${item.totalArea}`} className={classname.item} id="outlined-basic" label="Общая площадь жилья" variant="outlined" />
          <TextField onChange={(value) =>  setAreaRooms(value.target.value)} defaultValue={`${item.areaRooms}`} className={classname.item} id="outlined-basic" label="Площадь по комнатам" variant="outlined" />
          <TextField onChange={(value) => setNumberFloor(value.target.value)} defaultValue={`${item.numberFloor}`} className={classname.item} id="outlined-basic" label="Количество этажей в доме" variant="outlined" />
          <TextField onChange={(value) =>  setNumberRooms(value.target.value)} defaultValue={`${item.numberRooms}`} className={classname.item} id="outlined-basic" label="Количество комнат" variant="outlined" />
          <TextField onChange={(value) =>  setNumberBedrooms(value.target.value)} defaultValue={`${item.numberBedrooms}`} className={classname.item} id="outlined-basic" label="Количество спален" variant="outlined" />
          <Select onChange={(value) =>  setKitchen(value.value)} defaultValue={kitchen[kitchen.findIndex(el => el.value === item.kitchen)]} options={kitchen} className={classname.item} placeholder='Кухня'/>
        </div>
        <FormGroup className={classname.house_block_two}>
          <FormControlLabel  control={<Checkbox onChange={(value)=> setWifi(value.target.checked)} defaultChecked={item.wifi}/>}label="Интернет Wi-Fi" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setInternet(value.target.checked)} defaultChecked={item.internet}  />}  label="Интернет проводной" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setSafe(value.target.checked)} defaultChecked={item.safe} />}  label="Сейф" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setIntercom(value.target.checked)} defaultChecked={item.intercom} />}  label="Домофон" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setVideoIntercom(value.target.checked)}defaultChecked={item.videoIntercom} />}  label="Видеодомофон" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setSecuritySystem(value.target.checked)} defaultChecked={item.securitySystem} />}  label="Охранная система" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setFireAlarm(value.target.checked)} defaultChecked={item.fireAlarm} />}  label="Пожарная сигнализация" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setBalcony(value.target.checked)} defaultChecked={item.balcony} />}  label="Балкон" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setSauna(value.target.checked)} defaultChecked={item.sauna} />}  label="Баня/Сауна" />
        </FormGroup>
      </div>
      <div className={classname.sleeping_places_block}>
        <h4>Cпальные места:</h4>
        <div className={classname.sleeping_places_content}>
            <div>
              <span>Двуспальная кровать</span>
              <Select onChange={(value) =>  setDoubleBed(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.doubleBed}`)]} options={places} className={classname.item} placeholder='Двуспальная кровать'/>
            </div>
            <div>
              <span>Односпальная кровать</span>
              <Select onChange={(value) =>  setOneBed(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.oneBed}`)]} options={places} className={classname.item} placeholder='Односпальная кровать'/>
            </div>
            <div>
              <span>Диван (2 места)</span>
              <Select onChange={(value) =>  setSofaTwoPlaces(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.sofaTwoPlaces}`)]} options={places} className={classname.item} placeholder='Диван (2 места)'/>
            </div>
            <div>
              <span>Диван (1 место)</span>
              <Select onChange={(value) =>  setSofaOnePlace(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.sofaOnePlace}`)]} options={places} className={classname.item} placeholder='Диван (1 место)'/>
            </div>
            <div>
              <span>Двухъярусная кровать (2 места)</span>
              <Select onChange={(value) =>  setBunkBedTwoPlace(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.bunkBedTwoPlace}`)]} options={places} className={classname.item} placeholder='Двухъярусная кровать (2 места)'/>
            </div>
            <div>
              <span>Раскладное кресло</span>
              <Select onChange={(value) =>  setFoldingChair(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.foldingChair}`)]} options={places} className={classname.item} placeholder='Раскладное кресло'/>
            </div>
            <div>
              <span>Раскладушка (1 место)</span>
              <Select onChange={(value) =>  setCot(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.cot}`)]} options={places} className={classname.item} placeholder='Раскладушка (1 место)'/>
            </div>
            <div>
              <span>Кроватка для ребенка</span>
              <Select onChange={(value) =>  setBabyCrib(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.babyCrib}`)]} options={places} className={classname.item} placeholder='Кроватка для ребенка'/>
            </div>
            <div>
              <span>Постельные принадлежности</span>
              <Select onChange={(value) =>  setBedDress(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.bedDress}`)]} options={places} className={classname.item} placeholder='Постельные принадлежности'/>
            </div>

        </div>
      </div>
      <div className={classname.amenities_block}>
        <h4>Удобства в номере:</h4>
        <div className={classname.amenities_content}>
            <div>
              <span>Ванная комната</span>
              <Select onChange={(value) =>  setBathRoom(value.value)} defaultValue={bathroom[bathroom.findIndex(el => el.value === item.bathRoom)]} options={bathroom} className={`${classname.item} ${classname.zindex}`} placeholder='Ванная комната'/>
            </div>
            <div>
              <span>Туалет</span>
              <Select  onChange={(value) =>  setToilet(value.value)} defaultValue={toilet[toilet.findIndex(el => el.value === item.toilet)]} options={toilet} className={classname.item} placeholder='Туалет'/>
            </div>
            <TextField onChange={(value) =>  setNumberBathRooms(value.target.value)}  variant="outlined" id="outlined-basic" defaultValue={`${item.numberBathRooms}`} className={`${classname.item} `} label='Количество ванных комнат'/>
        </div>
      </div>
      <div className={classname.bathroom_block}>
        <h4>Ванная комната:</h4>
        <FormGroup className={classname.bathroom_content}>
          <FormControlLabel control={<Checkbox onChange={clothesDryerFunc} defaultChecked={item.clothesDryer} />} label="Сушилка для белья" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setWarmFloor(value.target.checked)} defaultChecked={item.warmFloor}  />} label="Теплый пол" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setHairDryer(value.target.checked)} defaultChecked={item.hairDryer}  />} label="Фен" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setBath(value.target.checked)} defaultChecked={item.bath}  />} label="Ванна" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setHydroMassageBath(value.target.checked)} defaultChecked={item.hydroMassageBath}  />} label="Гидромассажная ванна" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setShowerCabin(value.target.checked)} defaultChecked={item.showerCabin}  />} label="Душевая кабина" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setShampoo(value.target.checked)} defaultChecked={item.shampoo}  />} label="Шампунь" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setTowels(value.target.checked)} defaultChecked={item.towels}  />} label="Полотенца" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setBathrobes(value.target.checked)} defaultChecked={item.bathrobes}  />} label="Халаты" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setWashingMachine(value.target.checked)} defaultChecked={item.washingMachine}  />} label="Стиральная машинка" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setToiletries(value.target.checked)} defaultChecked={item.toiletries}  />} label="Туалетные принадлежности" />
        </FormGroup>
      </div>
      <div className={classname.inRoom_block}>
        <h4>В комнатах:</h4>
        <FormGroup className={classname.inRoom_content}>
          <FormControlLabel control={<Checkbox onChange={(value)=> setMusicCenter(value.target.checked)} defaultChecked={item.musicCenter} />} label="Музыкальный центр" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setKaraoke(value.target.checked)} defaultChecked={item.karaoke} />} label="Караоке" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setChildrensCorner(value.target.checked)} defaultChecked={item.childrensCorner} />} label="Детский уголок" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setIron(value.target.checked)} defaultChecked={item.iron} />} label="Утюг" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setTv(value.target.checked)} defaultChecked={item.tv} />} label="Телевизор" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setLcdTv(value.target.checked)} defaultChecked={item.lcdTv} />} label="ЖК-телевизор" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setFan(value.target.checked)} defaultChecked={item.fan} />} label="Вентилятор" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setHeater(value.target.checked)} defaultChecked={item.heater} />} label="Обогреватель" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setIroningBoard(value.target.checked)} defaultChecked={item.ironingBoard} />} label="Гладильная доска" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setMosquito(value.target.checked)} defaultChecked={item.mosquito} />} label="Москитные сетки на окнах" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setFurnace(value.target.checked)} defaultChecked={item.furnace} />} label="Печь" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setFirePlace(value.target.checked)} defaultChecked={item.firePlace} />} label="Камин" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setCableTv(value.target.checked)} defaultChecked={item.cableTv} />} label="Кабельное ТВ" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setBilliards(value.target.checked)} defaultChecked={item.billiards} />} label="Бильярд" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setAirConditioner(value.target.checked)} defaultChecked={item.airConditioner} />} label="Кондиционер" />
        </FormGroup>
      </div>
      <div className={classname.kitchen_block}>
        <h4>Кухня:</h4>
        <FormGroup className={classname.kitchen_content}>
          <FormControlLabel control={<Checkbox onChange={(value)=> setGasStove(value.target.checked)} defaultChecked={item.gasStove} />} label="Газовая плита" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setElectricStove(value.target.checked)} defaultChecked={item.electricStove} />} label="Электроплита" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setCutlery(value.target.checked)} defaultChecked={item.cutlery} />} label="Столовые приборы" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setSetOfDishes(value.target.checked)} defaultChecked={item.setOfDishes} />} label="Набор посуды" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setWaterFilter(value.target.checked)} defaultChecked={item.waterFilter} />} label="Фильтр для воды" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setOven(value.target.checked)} defaultChecked={item.oven} />} label="Духовка" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setCoffeeMachine(value.target.checked)} defaultChecked={item.coffeeMachine} />} label="Кофеварка" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setElectricKettle(value.target.checked)} defaultChecked={item.electricKettle} />} label="Электрочайник" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setMicroWave(value.target.checked)} defaultChecked={item.microWave} />} label="Микроволновая печь" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setFridge(value.target.checked)} defaultChecked={item.fridge} />} label="Холодильник" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setDishwasher(value.target.checked)} defaultChecked={item.dishwasher} />} label="Посудомоечная машина" />
        </FormGroup>
      </div>
      <div className={classname.territory_block}>
        <h4>На территории:</h4>
        <FormGroup className={classname.territory_content}>
          <FormControlLabel control={<Checkbox onChange={(value)=> setPlayground(value.target.checked)} defaultChecked={item.playground} />} label="Детская площадка" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setSwimmingPool(value.target.checked)} defaultChecked={item.swimmingPool} />} label="Бассейн" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setOwnShore(value.target.checked)} defaultChecked={item.ownShore} />} label="Собственный берег" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setFencedArea(value.target.checked)} defaultChecked={item.fencedArea} />} label="Огороженная территория" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setBrazier(value.target.checked)} defaultChecked={item.brazier} />} label="Мангал" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setTennisTable(value.target.checked)} defaultChecked={item.tennisTable} />} label="Стол для настольного тенниса" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setOrchard(value.target.checked)} defaultChecked={item.orchard} />} label="Фруктовый сад" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setSunLoungers(value.target.checked)} defaultChecked={item.sunLoungers} />} label="Шезлонги" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setAlcove(value.target.checked)} defaultChecked={item.alcove} />} label="Беседка" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setTerrace(value.target.checked)} defaultChecked={item.terrace}  />} label="Терасса (Веранда)" />
        </FormGroup>
      </div>
      <div className={classname.another_block}>
        <h4>Другое:</h4>
        <div className={classname.another_content}>
          <div className={classname.another_one}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Курить запрещено:</FormLabel>
            <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={smoke}
            onChange={smokeHandleChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Да" />
              <FormControlLabel value="no" control={<Radio />} label="Нет" />
            </RadioGroup>
          </FormControl>
          </div>
          <div className={classname.another_two}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Уборка</FormLabel>
            <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={clean}
            onChange={cleanHandleChange}
            >
              <FormControlLabel value="not" control={<Radio />} label="Не предоставляется" />
              <FormControlLabel value="yes_in_cost" control={<Radio />} label="Предоставляется, входит в стоимость" />
              <FormControlLabel value="yes_not_cost" control={<Radio />} label="Предоставляется, не входит в стоимость" />
            </RadioGroup>
          </FormControl>
          </div>
        </div>
      </div>
      <div className={classname.photo_block}>
        <h4>Фотографии</h4>
        <form className={classname.photo_content}>
          <img className={classname.photo_icon} src={down_icon}/>
          <span>Загрузить фотографии</span>
        </form>
      </div>
                </div>
  }else if(item.title === 'Апартаменты с кухней'){
    component = <div className={classname.wrapper}>
      <div className={classname.wrapper_title}>
        <div className={classname.header_title}>Апартаменты с кухней</div>
        <div>
          <span>Активно:</span>
          <Switch defaultChecked={item.active} onChange={(value) =>  setActive(value.target.checked)}  />
        </div>
      </div>
      <div className={classname.description_block}>
        <TextField onChange={(value) =>setName(value.target.value)} defaultValue={item.name} className={classname.item} id="outlined-basic" label="Название объекта (проверяется модератором)" variant="outlined" />
        <TextField onChange={(value) =>  setNumberOfGuests(value.target.value)} defaultValue={`${item.numberOfGuests}`} className={classname.item} id="outlined-basic" label="Количество основных мест" variant="outlined" />
        <TextField onChange={(value) =>  setAddNumberOfGuests(value.target.value)} defaultValue={`${item.addNumberOfGuests}`} className={classname.item} id="outlined-basic" label="Количество дополнительных мест" variant="outlined" />
        <Select onChange={(value) =>  setMaxPlace(value.value)} defaultValue={maxPlaces[maxPlaces.findIndex(el => el.value === `${item.maxPlace}`)]} className={classname.item} options={maxPlaces} placeholder='Макс. количество доп. мест'/>
        <TextField onChange={(value) => setDescription_edit(value.target.value)} id="filled-multiline-static" label="Описание" multiline rows={4} defaultValue={description_edit}variant="filled"
        />
      </div>
      <div className={classname.view_block}>
            <div className={classname.view_textfield}>
              <TextField onChange={(value) => setNumberRooms(value.target.value)} defaultValue={`${item.numberRooms}`} className={classname.item} id="outlined-basic" label="Количество комнат" variant="outlined" />
              <TextField onChange={(value) =>  setTotalArea(value.target.value)} defaultValue={`${item.totalArea}`} className={classname.item} id="outlined-basic" label="Общая площадь жилья" variant="outlined" />
            </div>
            <h4>Вид из окна:</h4>
            <FormGroup className={classname.view_checkbox}>
              <FormControlLabel control={<Checkbox onChange={(value)=> setCity(value.target.checked)} defaultChecked={item.city} />} label="Город"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setLake(value.target.checked)} defaultChecked={item.lake} />} label="Озеро"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setPark(value.target.checked)} defaultChecked={item.park} />} label="Парк"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setSea(value.target.checked)} defaultChecked={item.sea} />} label="Море"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setCourtyard(value.target.checked)} defaultChecked={item.courtyard} />} label="Внутренний двор"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setGarden(value.target.checked)} defaultChecked={item.garden} />} label="Сад"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setMountain(value.target.checked)} defaultChecked={item.mountain} />} label="Горы"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setRiver(value.target.checked)} defaultChecked={item.river} />} label="Река"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setRoadway(value.target.checked)} defaultChecked={item.roadway} />} label="Проезжая часть"/>
            </FormGroup>
            <FormGroup className={classname.house_block_two}>
            <FormControlLabel  control={<Checkbox onChange={(value)=> setWifi(value.target.checked)} defaultChecked={item.wifi}/>}label="Интернет Wi-Fi" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setInternet(value.target.checked)} defaultChecked={item.internet}  />}  label="Интернет проводной" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setSafe(value.target.checked)} defaultChecked={item.safe} />}  label="Сейф" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setBalcony(value.target.checked)} defaultChecked={item.balcony} />}  label="Балкон" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setSauna(value.target.checked)} defaultChecked={item.sauna} />}  label="Сауна/Баня" />
          </FormGroup>
      </div>
      <div className={classname.sleeping_places_block}>
        <h4>Cпальные места:</h4>
        <div className={classname.sleeping_places_content}>
            <div>
              <span>Двуспальная кровать</span>
              <Select onChange={(value) =>  setDoubleBed(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.doubleBed}`)]} options={places} className={classname.item} placeholder='Двуспальная кровать'/>
            </div>
            <div>
              <span>Односпальная кровать</span>
              <Select onChange={(value) =>  setOneBed(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.oneBed}`)]} options={places} className={classname.item} placeholder='Односпальная кровать'/>
            </div>
            <div>
              <span>Диван (2 места)</span>
              <Select onChange={(value) =>  setSofaTwoPlaces(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.sofaTwoPlaces}`)]} options={places} className={classname.item} placeholder='Диван (2 места)'/>
            </div>
            <div>
              <span>Диван (1 место)</span>
              <Select onChange={(value) =>  setSofaOnePlace(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.sofaOnePlace}`)]} options={places} className={classname.item} placeholder='Диван (1 место)'/>
            </div>
            <div>
              <span>Двухъярусная кровать (2 места)</span>
              <Select onChange={(value) =>  setBunkBedTwoPlace(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.bunkBedTwoPlace}`)]} options={places} className={classname.item} placeholder='Двухъярусная кровать (2 места)'/>
            </div>
            <div>
              <span>Раскладное кресло</span>
              <Select onChange={(value) =>   setFoldingChair(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.foldingChair}`)]} options={places} className={classname.item} placeholder='Раскладное кресло'/>
            </div>
            <div>
              <span>Раскладушка (1 место)</span>
              <Select onChange={(value) =>  setCot(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.cot}`)]} options={places} className={classname.item} placeholder='Раскладушка (1 место)'/>
            </div>
            <div>
              <span>Кроватка для ребенка</span>
              <Select onChange={(value) =>  setBabyCrib(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.babyCrib}`)]} options={places} className={classname.item} placeholder='Кроватка для ребенка'/>
            </div>
            <div>
              <span>Постельные принадлежности</span>
              <Select onChange={(value) =>  setBedDress(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.bedDress}`)]} options={places} className={classname.item} placeholder='Постельные принадлежности'/>
            </div>

        </div>
      </div>
      <div className={classname.amenities_block}>
          <h4>Удобства в номере:</h4>
          <div className={classname.amenities_content}>
            <div>
              <span>Ванная комната</span>
              <Select onChange={(value) =>  setBathRoom(value.value)} defaultValue={bathroom[bathroom.findIndex(el => el.value === item.bathRoom)]} options={bathroom} className={`${classname.item} ${classname.zindex}`} placeholder='Ванная комната'/>
            </div>
            <div>
              <span>Туалет</span>
              <Select  onChange={(value) =>  setToilet(value.value)} defaultValue={toilet[toilet.findIndex(el => el.value === item.toilet)]} options={toilet} className={classname.item} placeholder='Туалет'/>
            </div>
            <div>
              <TextField onChange={(value) =>  setSanUzel(value.target.value)} defaultValue={item.sanUzel} className={classname.item} id="outlined-basic" label="Количество С/У" variant="outlined" />
            </div>
          </div>
      </div>
      <div className={classname.bathroom_block}>
           <h4>Ванная комната:</h4>
           <FormGroup className={classname.bathroom_content}>
            <FormControlLabel control={<Checkbox onChange={(value)=> setHairDryer(value.target.checked)} defaultChecked={item.hairDryer}  />} label="Фен" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setBath(value.target.checked)} defaultChecked={item.bath}  />} label="Ванна" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setHydroMassageBath(value.target.checked)} defaultChecked={item.hydroMassageBath}  />} label="Гидромассажная ванна" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setShowerCabin(value.target.checked)} defaultChecked={item.showerCabin}  />} label="Душевая кабина" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setShampoo(value.target.checked)} defaultChecked={item.shampoo}  />} label="Шампунь" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setTowels(value.target.checked)} defaultChecked={item.towels}  />} label="Полотенца" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setBathrobes(value.target.checked)} defaultChecked={item.bathrobes}  />} label="Халаты" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setToiletries(value.target.checked)} defaultChecked={item.toiletries}  />} label="Туалетные принадлежности" />
        </FormGroup>
      </div>
      <div className={classname.inRoom_block}>
        <h4>В комнатах:</h4>
        <FormGroup className={classname.inRoom_content}>
          <FormControlLabel control={<Checkbox onChange={(value)=> setChildrensCorner(value.target.checked)} defaultChecked={item.childrensCorner} />} label="Детский уголок" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setTv(value.target.checked)} defaultChecked={item.tv} />} label="Телевизор" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setLcdTv(value.target.checked)} defaultChecked={item.lcdTv} />} label="ЖК-телевизор" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setFan(value.target.checked)} defaultChecked={item.fan} />} label="Вентилятор" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setMosquito(value.target.checked)} defaultChecked={item.mosquito} />} label="Москитные сетки на окнах" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setCableTv(value.target.checked)} defaultChecked={item.cableTv} />} label="Кабельное ТВ" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setAirConditioner(value.target.checked)} defaultChecked={item.airConditioner} />} label="Кондиционер" />
        </FormGroup>
      </div>
      <div className={classname.kitchen_block}>
        <h4>Кухня:</h4>
        <FormGroup className={classname.kitchen_content}>
          <FormControlLabel control={<Checkbox onChange={(value)=> setGasStove(value.target.checked)} defaultChecked={item.gasStove} />} label="Газовая плита" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setElectricStove(value.target.checked)} defaultChecked={item.electricStove} />} label="Электроплита" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setCutlery(value.target.checked)} defaultChecked={item.cutlery} />} label="Столовые приборы" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setSetOfDishes(value.target.checked)} defaultChecked={item.setOfDishes} />} label="Набор посуды" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setOven(value.target.checked)} defaultChecked={item.oven} />} label="Духовка" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setCoffeeMachine(value.target.checked)} defaultChecked={item.coffeeMachine} />} label="Кофеварка" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setElectricKettle(value.target.checked)} defaultChecked={item.electricKettle} />} label="Электрочайник" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setMicroWave(value.target.checked)} defaultChecked={item.microWave} />} label="Микроволновая печь" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setFridge(value.target.checked)} defaultChecked={item.fridge} />} label="Холодильник" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setDishwasher(value.target.checked)} defaultChecked={item.dishwasher} />} label="Посудомоечная машина" />
        </FormGroup>
      </div>
      <div className={classname.another_block}>
        <h4>Другое:</h4>
        <div className={classname.another_content}>
          <div className={classname.another_one}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Курить запрещено:</FormLabel>
            <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={smoke}
            onChange={smokeHandleChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Да" />
              <FormControlLabel value="no" control={<Radio />} label="Нет" />
            </RadioGroup>
          </FormControl>
          </div>
          <div className={classname.another_two}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Уборка</FormLabel>
            <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={clean}
            onChange={cleanHandleChange}
            >
              <FormControlLabel value="not" control={<Radio />} label="Не предоставляется" />
              <FormControlLabel value="yes_in_cost" control={<Radio />} label="Предоставляется, входит в стоимость" />
              <FormControlLabel value="yes_not_cost" control={<Radio />} label="Предоставляется, не входит в стоимость" />
            </RadioGroup>
          </FormControl>
          </div>
        </div>
      </div>
      <div className={classname.photo_block}>
        <h4>Фотографии</h4>
        <form className={classname.photo_content}>
          <img className={classname.photo_icon} src={down_icon}/>
          <span>Загрузить фотографии</span>
        </form>
      </div>
    </div>
  }else if(item.title === 'Номер'){
    component = <div className={classname.wrapper}>
      <div className={classname.wrapper_title}>
        <div className={classname.header_title}>Номер</div>
        <div>
          <span>Активно:</span>
          <Switch defaultChecked={item.active} onChange={(value) =>  setActive(value.target.checked)}  />
        </div>
      </div>
        <div className={classname.description_block}>
          <TextField onChange={(value) => setName(value.target.value)} defaultValue={item.name} className={classname.item} id="outlined-basic" label="Название объекта (проверяется модератором)" variant="outlined" />
          <TextField onChange={(value) =>  setNumberOfGuests(value.target.value)} defaultValue={`${item.numberOfGuests}`} className={classname.item} id="outlined-basic" label="Количество основных мест" variant="outlined" />
          <TextField onChange={(value) =>  setAddNumberOfGuests(value.target.value)} defaultValue={`${item.addNumberOfGuests}`} className={classname.item} id="outlined-basic" label="Количество дополнительных мест" variant="outlined" />
          <Select onChange={(value) =>  setMaxPlace(value.value)} defaultValue={maxPlaces[maxPlaces.findIndex(el => el.value === `${item.maxPlace}`)]} className={classname.item} options={maxPlaces} placeholder='Макс. количество доп. мест'/>
          <TextField onChange={(value) => setDescription_edit(value.target.value)} id="filled-multiline-static" label="Описание" multiline rows={4} defaultValue={description_edit}variant="filled"
          />
          <Select defaultValue={classOfRoom[classOfRoom.findIndex(el => el.value === `${item.classRoom}`)]} onChange={(value) =>  setClassRoom(value.value)} className={classname.item} options={classOfRoom} placeholder='Класс номера'/>
        </div>
        <div className={classname.view_block}>
            <div className={classname.view_textfield}>
              <TextField onChange={(value) =>  setTotalArea(value.target.value)} defaultValue={`${item.totalArea}`} className={classname.item} id="outlined-basic" label="Общая площадь жилья" variant="outlined" />
              <TextField onChange={(value) =>  setNumberRooms(value.target.value)} defaultValue={`${item.numberRooms}`} className={classname.item} id="outlined-basic" label="Количество комнат" variant="outlined" />
            </div>
            <h4>Вид из окна:</h4>
            <FormGroup className={classname.view_checkbox}>
              <FormControlLabel control={<Checkbox onChange={(value)=> setCity(value.target.checked)} defaultChecked={item.city} />} label="Город"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setLake(value.target.checked)} defaultChecked={item.lake} />} label="Озеро"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setPark(value.target.checked)} defaultChecked={item.park} />} label="Парк"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setSea(value.target.checked)} defaultChecked={item.sea} />} label="Море"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setCourtyard(value.target.checked)} defaultChecked={item.courtyard} />} label="Внутренний двор"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setGarden(value.target.checked)} defaultChecked={item.garden} />} label="Сад"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setMountain(value.target.checked)} defaultChecked={item.mountain} />} label="Горы"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setRiver(value.target.checked)} defaultChecked={item.river} />} label="Река"/>
              <FormControlLabel control={<Checkbox onChange={(value)=> setRoadway(value.target.checked)} defaultChecked={item.roadway} />} label="Проезжая часть"/>
            </FormGroup>
            <FormGroup className={classname.house_block_two}>
            <FormControlLabel  control={<Checkbox onChange={(value)=> setWifi(value.target.checked)} defaultChecked={item.wifi}/>}label="Интернет Wi-Fi" />
            <FormControlLabel control={<Checkbox onChange={(value)=>setInternet(value.target.checked)} defaultChecked={item.internet}  />}  label="Интернет проводной" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setSafe(value.target.checked)} defaultChecked={item.safe} />}  label="Сейф" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setBalcony(value.target.checked)} defaultChecked={item.balcony} />}  label="Балкон" />
          </FormGroup>
        </div>
      <div className={classname.sleeping_places_block}>
        <h4>Cпальные места:</h4>
        <div className={classname.sleeping_places_content}>
            <div>
              <span>Двуспальная кровать</span>
              <Select onChange={(value) =>  setDoubleBed(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.doubleBed}`)]} options={places} className={classname.item} placeholder='Двуспальная кровать'/>
            </div>
            <div>
              <span>Односпальная кровать</span>
              <Select onChange={(value) =>  setOneBed(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.oneBed}`)]} options={places} className={classname.item} placeholder='Односпальная кровать'/>
            </div>
            <div>
              <span>Диван (2 места)</span>
              <Select onChange={(value) =>  setSofaTwoPlaces(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.sofaTwoPlaces}`)]} options={places} className={classname.item} placeholder='Диван (2 места)'/>
            </div>
            <div>
              <span>Диван (1 место)</span>
              <Select onChange={(value) =>  setSofaOnePlace(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.sofaOnePlace}`)]} options={places} className={classname.item} placeholder='Диван (1 место)'/>
            </div>
            <div>
              <span>Двухъярусная кровать (2 места)</span>
              <Select onChange={(value) => setBunkBedTwoPlace(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.bunkBedTwoPlace}`)]} options={places} className={classname.item} placeholder='Двухъярусная кровать (2 места)'/>
            </div>
            <div>
              <span>Раскладное кресло</span>
              <Select onChange={(value) =>  setFoldingChair(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.foldingChair}`)]} options={places} className={classname.item} placeholder='Раскладное кресло'/>
            </div>
            <div>
              <span>Раскладушка (1 место)</span>
              <Select onChange={(value) =>  setCot(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.cot}`)]} options={places} className={classname.item} placeholder='Раскладушка (1 место)'/>
            </div>
            <div>
              <span>Кроватка для ребенка</span>
              <Select onChange={(value) =>  setBabyCrib(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.babyCrib}`)]} options={places} className={classname.item} placeholder='Кроватка для ребенка'/>
            </div>
            <div>
              <span>Постельные принадлежности</span>
              <Select onChange={(value) =>  setBedDress(value.value)} defaultValue={places[places.findIndex(el => el.value === `${item.bedDress}`)]} options={places} className={classname.item} placeholder='Постельные принадлежности'/>
            </div>

        </div>
      </div>
        <div className={classname.amenities_block}>
          <h4>Удобства в номере:</h4>
          <div className={classname.amenities_content}>
            <div>
              <span>Ванная комната</span>
              <Select onChange={(value) =>  setBathRoom(value.value)} defaultValue={bathroom[bathroom.findIndex(el => el.value === item.bathRoom)]} options={bathroom} className={`${classname.item} ${classname.zindex}`} placeholder='Ванная комната'/>
            </div>
            <div>
              <span>Туалет</span>
              <Select  onChange={(value) =>  setToilet(value.value)} defaultValue={toilet[toilet.findIndex(el => el.value === item.toilet)]} options={toilet} className={classname.item} placeholder='Туалет'/>
            </div>
          </div>
        </div>
        <div className={classname.bathroom_block}>
           <h4>Ванная комната:</h4>
           <FormGroup className={classname.bathroom_content}>
            <FormControlLabel control={<Checkbox onChange={(value)=> setHairDryer(value.target.checked)} defaultChecked={item.hairDryer}  />} label="Фен" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setBath(value.target.checked)} defaultChecked={item.bath}  />} label="Ванна" />
            <FormControlLabel control={<Checkbox onChange={(value)=>setHydroMassageBath(value.target.checked)} defaultChecked={item.hydroMassageBath}  />} label="Гидромассажная ванна" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setShowerCabin(value.target.checked)} defaultChecked={item.showerCabin}  />} label="Душевая кабина" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setShampoo(value.target.checked)} defaultChecked={item.shampoo}  />} label="Шампунь" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setTowels(value.target.checked)} defaultChecked={item.towels}  />} label="Полотенца" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setBathrobes(value.target.checked)} defaultChecked={item.bathrobes}  />} label="Халаты" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setToiletries(value.target.checked)} defaultChecked={item.toiletries}  />} label="Туалетные принадлежности" />
        </FormGroup>
        </div>
         <div className={classname.inRoom_block}>
           <h4>В комнатах:</h4>
           <FormGroup className={classname.inRoom_content}>
            <FormControlLabel control={<Checkbox onChange={(value)=> setTv(value.target.checked)} defaultChecked={item.tv} />} label="Телевизор" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setLcdTv(value.target.checked)} defaultChecked={item.lcdTv} />} label="ЖК-телевизор" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setFan(value.target.checked)} defaultChecked={item.fan} />} label="Вентилятор" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setMosquito(value.target.checked)} defaultChecked={item.mosquito} />} label="Москитные сетки на окнах" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setCableTv(value.target.checked)} defaultChecked={item.cableTv} />} label="Кабельное ТВ" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setAirConditioner(value.target.checked)} defaultChecked={item.airConditioner} />} label="Кондиционер" />
           </FormGroup>
         </div>
         <div className={classname.kitchen_block}>
           <h4>Кухня:</h4>
           <FormGroup className={classname.kitchen_content}>
            <FormControlLabel control={<Checkbox onChange={(value)=> setElectricKettle(value.target.checked)} defaultChecked={item.electricKettle} />} label="Электрочайник" />
            <FormControlLabel control={<Checkbox onChange={(value)=> setFridge(value.target.checked)} defaultChecked={item.fridge} />} label="Холодильник" />
          </FormGroup>
         </div>
         <div className={classname.another_block}>
        <h4>Другое:</h4>
        <div className={classname.another_content}>
          <div className={classname.another_one}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Курить запрещено:</FormLabel>
            <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={smoke}
            onChange={smokeHandleChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Да" />
              <FormControlLabel value="no" control={<Radio />} label="Нет" />
            </RadioGroup>
          </FormControl>
          </div>
          <div className={classname.another_two}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Уборка</FormLabel>
            <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={clean}
            onChange={cleanHandleChange}
            >
              <FormControlLabel value="not" control={<Radio />} label="Не предоставляется" />
              <FormControlLabel value="yes_in_cost" control={<Radio />} label="Предоставляется, входит в стоимость" />
              <FormControlLabel value="yes_not_cost" control={<Radio />} label="Предоставляется, не входит в стоимость" />
            </RadioGroup>
          </FormControl>
          </div>
        </div>
        </div>
         <div className={classname.photo_block}>
          <h4>Фотографии</h4>
          <form className={classname.photo_content}>
            <img className={classname.photo_icon} src={down_icon}/>
            <span>Загрузить фотографии</span>
          </form>
        </div>
      </div>
  }else if(item.title === 'Койко-место'){
    component = <div className={classname.wrapper}>
      <div className={classname.wrapper_title}>
        <div className={classname.header_title}>Койко-место</div>
        <div>
          <span>Активно:</span>
          <Switch defaultChecked={item.active} onChange={(value) =>  setActive(value.target.checked)}  />
        </div>
      </div>
      <div className={classname.description_block}>
        <TextField onChange={(value) =>  setName(value.target.value)} defaultValue={item.name} className={classname.item} id="outlined-basic" label="Название объекта (проверяется модератором)" variant="outlined" />
        <TextField onChange={(value) =>  setNumberOfGuests(value.target.value)} defaultValue={`${item.numberOfGuests}`} className={classname.item} id="outlined-basic" label="Количество основных мест" variant="outlined" />
        <TextField onChange={(value) =>  setAddNumberOfGuests(value.target.value)} defaultValue={`${item.addNumberOfGuests}`} className={classname.item} id="outlined-basic" label="Количество дополнительных мест" variant="outlined" />
        <Select onChange={(value) =>  setMaxPlace(value.value)} defaultValue={maxPlaces[maxPlaces.findIndex(el => el.value === `${item.maxPlace}`)]} className={classname.item} options={maxPlaces} placeholder='Макс. количество доп. мест'/>
        <TextField onChange={(value) => setDescription_edit(value.target.value)} id="filled-multiline-static" label="Описание" multiline rows={4} defaultValue={description_edit}variant="filled"
        />
      </div>
      <div className={classname.amenities_block}>
        <h4>Удобства в номере:</h4>
        <FormGroup className={classname.amenities_content}>
          <FormControlLabel control={<Checkbox onChange={(value)=> setTv(value.target.checked)} defaultChecked={item.tv} />} label="Телевизор" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setMosquito(value.target.checked)} defaultChecked={item.mosquito}  />} label="Москитные сетки на окнах" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setCableTv(value.target.checked)} defaultChecked={item.cableTv}  />} label="Кабельное ТВ" />
          <FormControlLabel control={<Checkbox onChange={(value)=> setAirConditioner(value.target.checked)} defaultChecked={item.airConditioner}  />} label="Кондиционер" />
        </FormGroup>
      </div>
      <div className={classname.another_block}>
        <h4>Другое:</h4>
        <div className={classname.another_content}>
          <div className={classname.another_two}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Уборка</FormLabel>
            <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={clean}
            onChange={cleanHandleChange}
            >
              <FormControlLabel value="not" control={<Radio />} label="Не предоставляется" />
              <FormControlLabel value="yes_in_cost" control={<Radio />} label="Предоставляется, входит в стоимость" />
              <FormControlLabel value="yes_not_cost" control={<Radio />} label="Предоставляется, не входит в стоимость" />
            </RadioGroup>
          </FormControl>
          </div>
        </div>
      </div>
      <div className={classname.photo_block}>
        <h4>Фотографии</h4>
        <form className={classname.photo_content}>
          <img className={classname.photo_icon} src={down_icon}/>
          <span>Загрузить фотографии</span>
        </form>
      </div>
    </div>
  }else{
    component = <div className={classname.wrapper}>
      <div className={classname.description_block}>
        <div className={classname.header_title}>{item.title}</div>
        <div>
          <span>Активно:</span>
          <Switch defaultChecked={item.active} onChange={(value) =>  setActive(value.target.checked)}  />
        </div>
      </div>
      <div className={classname.photo_block}>
        <h4>Фотографии</h4>
        <form className={classname.photo_content}>
          <img className={classname.photo_icon} src={down_icon}/>
          <span>Загрузить фотографии</span>
        </form>
      </div>
    </div>
  }


  const changeStateFunc = (e) =>{
    e.preventDefault();
    props.dispatch(editCategoryActionCreator(classRoom,active,editItem,item.id,item.title,subtype,name,numberOfGuests,maxPlace,description_edit,typeOfHouse,totalArea,areaRooms,numberFloor,numberRooms,numberBedrooms,kitchenState,wifi,internet,safe,intercom,videoIntercom,securitySystem,fireAlarm,balcony,sauna,doubleBed,oneBed,sofaTwoPlaces,sofaOnePlace,bunkBedTwoPlace,foldingChair,cot,babyCrib,bedDress,bathRoom,toiletState,numberBathRooms,clothesDryer,warmFloor,hairDryer,washingMachine,bath,hydroMassageBath,showerCabin,shampoo,towels,bathrobes,toiletries,musicCenter,karaoke,childrensCorner,iron,tv,lcdTv,fan,heater,ironingBoard,mosquito,furnace,firePlace,cableTv,billiards,airConditioner,gasStove,electricStove,cutlery,setOfDishes,waterFilter,oven,coffeeMachine,electricKettle,microWave,fridge,dishwasher,playground,swimmingPool,ownShore,fencedArea,brazier,tennisTable,orchard,sunLoungers,alcove,terrace,smoke,clean,photo,city,lake,park,sea,courtyard,garden,mountain,river,roadway,sanUzel,addNumberOfGuests))
  }
  const deleteCategoryFunc = (e) => {
    e.preventDefault();
    props.dispatch(deleteCategoryActionCreator(editItem))
  }
  return (
    <div>
      {component}
      <button onClick={changeStateFunc} className={classname.edit_category_btn}>Сохранить</button>
      <button onClick={deleteCategoryFunc} className={classname.edit_category_btn}><Link to='../'>Удалить категорию</Link></button>
    </div>
  );
}

export default CreateCategory;
