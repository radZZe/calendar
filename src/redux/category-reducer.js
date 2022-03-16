import moment from 'moment';

const ADD_CATEGORY = 'ADD-CATEGORY';
const EDIT_CATEGORY = 'EDIT-CATEGORY';
const CHANGE_EDIT_ITEM = 'CHANGE-EDIT-ITEM'
const BOOKING_CATEGORY = 'BOOKING-CATEGORY'
const DELETE_CATEGORY = 'DELETE-CATEGORY'
const PRICE_CATEGORY = "PRICE-CATEGORY"
const ADD_DISCOUNT = 'ADD-DISCOUNT'
const DEL_DISCOUNT = 'DEL-DISCOUNT'

let initialState = {
    categories: [
        {
            id: '1243234543',
            title: 'Дом',
            active: true,
            subtype: 'Коттедж',
            name: 'Дом1',
            numberOfGuests: 1,
            maxPlace: 1,
            description: 'Вот такая хорошая у меня квартира',
            typeOfHouse: 'Кирпичный',
            totalArea: 25,
            areaRooms: 23,
            numberFloor: 5,
            numberRooms: 5,
            numberBedrooms: 2,
            kitchen: 'В доме',
            wifi: true,
            internet: true,
            safe: false,
            intercom: true,
            videoIntercom: false,
            securitySystem: false,
            fireAlarm: true,
            balcony: true,
            sauna: true,
            doubleBed: 12,
            oneBed: 2,
            sofaTwoPlaces: 12,
            sofaOnePlace: 5,
            bunkBedTwoPlace: 4,
            foldingChair: 2,
            cot: 5,
            babyCrib: 5,
            bedDress: 10,
            bathRoom: 'В доме',
            toilet: 'В доме',
            numberBathRooms: 5,
            clothesDryer: true,
            warmFloor: false,
            hairDryer: true,
            washingMachine: false,
            bath: true,
            hydroMassageBath: true,
            showerCabin: false,
            shampoo: true,
            towels: false,
            bathrobes: true,
            toiletries: false,
            musicCenter: false,
            karaoke: false,
            childrensCorner: true,
            iron: false,
            tv: true,
            lcdTv: false,
            fan: true,
            heater: true,
            ironingBoard: true,
            mosquito: true,
            furnace: false,
            firePlace: false,
            cableTv: true,
            billiards: true,
            airConditioner: false,
            gasStove: false,
            electricStove: true,
            cutlery: false,
            setOfDishes: true,
            waterFilter: false,
            oven: false,
            coffeeMachine: false,
            electricKettle: true,
            microWave: false,
            fridge: false,
            dishwasher: false,
            playground: true,
            swimmingPool: true,
            ownShore: false,
            fencedArea: true,
            brazier: true,
            tennisTable: true,
            orchard: false,
            sunLoungers: true,
            alcove: false,
            terrace: false,
            smoking: 'no',
            cleaning: 'yes_in_cost',
            photo: 'true',
            classRoom: '',
            city: false,
            lake: false,
            park: false,
            sea: false,
            courtyard: false,
            garden: false,
            mountain: false,
            river: false,
            roadway: false,
            sanUzel: 0,
            addNumberOfGuests: 4,
        },
    ],
    edit_item_id: 0,
    booking_categories: [
        {id: '1243234543', book: []}
    ],
    price_categories: [
        {id: '1243234543', price: []}
    ],
    discount_categories: [
        {id: '1243234543', discount: [], typeDiscount: ''}
    ]
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_CATEGORY:
            const deleteIndex = state.categories.findIndex(item => item.id === action.edit_item);
            state.categories.splice(deleteIndex, 1)
            state.booking_categories.splice(deleteIndex, 1)
            return state
        case ADD_CATEGORY:
            alert('Категория создана')
            let newCategory = {
                id: moment().format('x'),
                title: action.title,
                active: false,
                subtype: '',
                name: action.name,
                numberOfGuests: 0,
                maxPlace: 0,
                description: '',
                typeOfHouse: '',
                totalArea: 0,
                areaRooms: 0,
                numberFloor: 0,
                numberRooms: action.numberRooms,
                numberBedrooms: 0,
                kitchen: '',
                wifi: false,
                internet: false,
                safe: false,
                intercom: false,
                videoIntercom: false,
                securitySystem: false,
                fireAlarm: false,
                balcony: false,
                sauna: false,
                doubleBed: 0,
                oneBed: 0,
                sofaTwoPlaces: 0,
                sofaOnePlace: 0,
                bunkBedTwoPlace: 0,
                foldingChair: 0,
                cot: 0,
                babyCrib: 0,
                bedDress: 0,
                bathRoom: '',
                toilet: '',
                numberBathRooms: 0,
                clothesDryer: false,
                warmFloor: false,
                hairDryer: false,
                washingMachine: false,
                bath: false,
                hydroMassageBath: false,
                showerCabin: false,
                shampoo: false,
                towels: false,
                bathrobes: false,
                toiletries: false,
                musicCenter: false,
                karaoke: false,
                childrensCorner: false,
                iron: false,
                tv: false,
                lcdTv: false,
                fan: false,
                heater: false,
                ironingBoard: false,
                mosquito: false,
                furnace: false,
                firePlace: false,
                cableTv: false,
                billiards: false,
                airConditioner: false,
                gasStove: false,
                electricStove: false,
                cutlery: false,
                setOfDishes: false,
                waterFilter: false,
                oven: false,
                coffeeMachine: false,
                electricKettle: false,
                microWave: false,
                fridge: false,
                dishwasher: false,
                playground: false,
                swimmingPool: false,
                ownShore: false,
                fencedArea: false,
                brazier: false,
                tennisTable: false,
                orchard: false,
                sunLoungers: false,
                alcove: false,
                terrace: false,
                smoking: '',
                cleaning: '',
                photo: 'true',
                classRoom: '',
                city: false,
                lake: false,
                park: false,
                sea: false,
                courtyard: false,
                garden: false,
                mountain: false,
                river: false,
                roadway: false,
                sanUzel: 0,
                addNumberOfGuests: 0,
            };
            state.booking_categories.push({id: newCategory.id, book: []})
            state.price_categories.push({id: newCategory.id, price: []})
            state.discount_categories.push({id: newCategory.id, discount: []})
            state.categories.push(newCategory)
            return state;
        case EDIT_CATEGORY:
            alert('Изменения сохранены')
            const index = state.categories.findIndex(item => item.id === action.edit_item)
            const changeState = () => {
                debugger
                state.categories[index].id = action.id;
                state.categories[index].name = action.name;
                state.categories[index].title = action.title;
                state.categories[index].active = action.active;
                state.categories[index].subtype = action.subtype;
                state.categories[index].numberOfGuests = action.numberOfGuests;
                state.categories[index].maxPlace = action.maxPlace;
                state.categories[index].description = action.description;
                state.categories[index].typeOfHouse = action.typeOfHouse;
                state.categories[index].totalArea = action.totalArea;
                state.categories[index].areaRooms = action.areaRooms;
                state.categories[index].numberFloor = action.numberFloor;
                state.categories[index].numberRooms = action.numberRooms;
                state.categories[index].numberBedrooms = action.numberBedrooms;
                state.categories[index].kitchen = action.kitchen;
                state.categories[index].wifi = action.wifi;
                state.categories[index].internet = action.internet;
                state.categories[index].safe = action.safe;
                state.categories[index].intercom = action.intercom;
                state.categories[index].videoIntercom = action.videoIntercom;
                state.categories[index].securitySystem = action.securitySystem;
                state.categories[index].fireAlarm = action.fireAlarm;
                state.categories[index].balcony = action.balcony;
                state.categories[index].sauna = action.sauna;
                state.categories[index].doubleBed = action.doubleBed;
                state.categories[index].oneBed = action.oneBed;
                state.categories[index].sofaTwoPlaces = action.sofaTwoPlaces;
                state.categories[index].sofaOnePlace = action.sofaOnePlace;
                state.categories[index].bunkBedTwoPlace = action.bunkBedTwoPlace;
                state.categories[index].foldingChair = action.foldingChair;
                state.categories[index].cot = action.cot;
                state.categories[index].babyCrib = action.babyCrib;
                state.categories[index].bedDress = action.bedDress;
                state.categories[index].bathRoom = action.bathRoom;
                state.categories[index].toilet = action.toilet;
                state.categories[index].numberBathRooms = action.numberBathRooms;
                state.categories[index].clothesDryer = action.clothesDryer;
                state.categories[index].warmFloor = action.warmFloor;
                state.categories[index].hairDryer = action.hairDryer;
                state.categories[index].washingMachine = action.washingMachine;
                state.categories[index].bath = action.bath;
                state.categories[index].hydroMassageBath = action.hydroMassageBath;
                state.categories[index].showerCabin = action.showerCabin;
                state.categories[index].shampoo = action.shampoo;
                state.categories[index].towels = action.towels;
                state.categories[index].bathrobes = action.bathrobes;
                state.categories[index].toiletries = action.toiletries;
                state.categories[index].musicCenter = action.musicCenter;
                state.categories[index].karaoke = action.karaoke;
                state.categories[index].childrensCorner = action.childrensCorner;
                state.categories[index].iron = action.iron;
                state.categories[index].tv = action.tv;
                state.categories[index].lcdTv = action.lcdTv;
                state.categories[index].fan = action.fan;
                state.categories[index].heater = action.heater;
                state.categories[index].ironingBoard = action.ironingBoard;
                state.categories[index].mosquito = action.mosquito;
                state.categories[index].furnace = action.furnace;
                state.categories[index].firePlace = action.firePlace;
                state.categories[index].cableTv = action.cableTv;
                state.categories[index].billiards = action.billiards;
                state.categories[index].airConditioner = action.airConditioner;
                state.categories[index].gasStove = action.gasStove;
                state.categories[index].electricStove = action.electricStove;
                state.categories[index].cutlery = action.cutlery;
                state.categories[index].setOfDishes = action.setOfDishes;
                state.categories[index].waterFilter = action.waterFilter;
                state.categories[index].oven = action.oven;
                state.categories[index].coffeeMachine = action.coffeeMachine;
                state.categories[index].electricKettle = action.electricKettle;
                state.categories[index].microWave = action.microWave;
                state.categories[index].fridge = action.fridge;
                state.categories[index].dishwasher = action.dishwasher;
                state.categories[index].playground = action.playground;
                state.categories[index].swimmingPool = action.swimmingPool;
                state.categories[index].ownShore = action.ownShore;
                state.categories[index].fencedArea = action.fencedArea;
                state.categories[index].brazier = action.brazier;
                state.categories[index].tennisTable = action.tennisTable;
                state.categories[index].orchard = action.orchard;
                state.categories[index].sunLoungers = action.sunLoungers;
                state.categories[index].alcove = action.alcove;
                state.categories[index].terrace = action.terrace;
                state.categories[index].smoking = action.smoking;
                state.categories[index].cleaning = action.cleaning;
                state.categories[index].photo = action.photo;
                state.categories[index].classRoom = action.classRoom;
                state.categories[index].city = action.city;
                state.categories[index].lake = action.lake;
                state.categories[index].park = action.park;
                state.categories[index].sea = action.sea;
                state.categories[index].courtyard = action.courtyard;
                state.categories[index].garden = action.garden;
                state.categories[index].mountain = action.mountain;
                state.categories[index].river = action.river;
                state.categories[index].roadway = action.roadway;
                state.categories[index].sanUzel = action.sanUzel;
                state.categories[index].addNumberOfGuests = action.addNumberOfGuests

            }
            changeState();
            return state
        case CHANGE_EDIT_ITEM:
            debugger;
            state.edit_item_id = action.edit_item_id
            return state;
        case BOOKING_CATEGORY:
            let testDay = moment(action.days[0].toDateString());
            let testEndDay = moment(action.days[1].toDateString()).add(1, 'day')
            let testDayArray = []
            while (!(testDay.isSame(testEndDay))) {
                testDayArray.push(testDay.clone());
                testDay.add(1, 'day').clone();
            }
            const indexOfItem = state.booking_categories.findIndex(item => item.id === action.id);
            const generateBookItem = (array) => {
                array.forEach((item) => {
                    if (state.booking_categories[indexOfItem].book.some((itemBook) => (itemBook[item.format('YYYYMMDD')] === true) || (itemBook[item.format('YYYYMMDD')] === false))) {
                        let idDate = item.format('YYYYMMDD')
                        let index = state.booking_categories[indexOfItem].book.findIndex((itemOf) => (itemOf[item.format('YYYYMMDD')] === true) || (itemOf[item.format('YYYYMMDD')] === false))
                        state.booking_categories[indexOfItem].book[index][idDate] = action.book
                    } else {
                        let idDate = item.format('YYYYMMDD');
                        let child = {};
                        child[idDate] = action.book
                        state.booking_categories[indexOfItem].book.push(child)
                    }

                })
            }
            generateBookItem(testDayArray);
            return state;
        case PRICE_CATEGORY:
            debugger
            let testDayPrice = moment(action.days[0].toDateString());
            let testEndDayPrice = moment(action.days[1].toDateString()).add(1, 'day')
            let DayArrayPrice = []
            while (!(testDayPrice.isSame(testEndDayPrice))) {
                DayArrayPrice.push(testDayPrice.clone());
                testDayPrice.add(1, 'day').clone();
            }
            const indexOfItemPrice = state.price_categories.findIndex(item => item.id === action.id);
            const generatePriceItem = (array) => {
                array.forEach((item) => {
                    if (state.price_categories[indexOfItemPrice].price.some((itemPrice) => (itemPrice[item.format('YYYYMMDD')]))) {
                        let idDatePrice = item.format('YYYYMMDD')
                        let index = state.price_categories[indexOfItemPrice].price.findIndex((itemOf) => (itemOf[item.format('YYYYMMDD')]))
                        state.price_categories[indexOfItemPrice].price[index][idDatePrice] = action.price
                    } else {
                        let idDatePrice = item.format('YYYYMMDD');
                        let child = {};
                        child[idDatePrice] = action.price
                        state.price_categories[indexOfItemPrice].price.push(child)
                    }

                })
            }
            generatePriceItem(DayArrayPrice)
            return state;
        case ADD_DISCOUNT:
            let testDayDiscount = moment(action.days[0].toDateString());
            let testEndDayDiscount = moment(action.days[1].toDateString()).add(1, 'day')
            let DayArrayDiscount = []
            while (!(testDayDiscount.isSame(testEndDayDiscount))) {
                DayArrayDiscount.push(testDayDiscount.clone());
                testDayDiscount.add(1, 'day').clone();
            }
            const indexOfItemDiscount = state.price_categories.findIndex(item => item.id === action.id);
            const generateDiscountItem = (array) => {
                debugger
                array.forEach((item) => {
                    if (state.price_categories[indexOfItemDiscount].price.some((itemPrice) => (itemPrice[item.format('YYYYMMDD')]))) {
                        let idDateDiscount = item.format('YYYYMMDD')
                        let index = state.price_categories[indexOfItemDiscount].price.findIndex((itemOf) => (itemOf[item.format('YYYYMMDD')]))
                        let afterPrice = 0
                        let indexDiscount = state.discount_categories[indexOfItemDiscount].discount.findIndex((itemOf) => (itemOf[item.format('YYYYMMDD')]))

                        if (action.typeDiscount === 'procent') {
                            afterPrice = Math.round((action.price / 100) * (100 - action.discount))
                            state.price_categories[indexOfItemDiscount].price[index][idDateDiscount] = afterPrice
                        } else if (action.typeDiscount === 'rubles') {
                            afterPrice = action.price - action.discount
                            state.price_categories[indexOfItemDiscount].price[index][idDateDiscount] = afterPrice
                        }
                        if (state.discount_categories[indexOfItemDiscount].discount.some((itemPrice) => (itemPrice[item.format('YYYYMMDD')]))) {
                            state.discount_categories[indexOfItemDiscount].discount[indexDiscount][idDateDiscount] = action.discount
                            state.discount_categories[indexOfItemDiscount].discount[indexDiscount]['typeDiscount'] = action.typeDiscount
                            state.discount_categories[indexOfItemDiscount].typeDiscount = action.typeDiscount
                        } else {
                            let child = {};
                            child[idDateDiscount] = action.discount
                            child['typeDiscount'] = action.typeDiscount
                            state.discount_categories[indexOfItemDiscount].typeDiscount = action.typeDiscount
                            state.discount_categories[indexOfItemDiscount].discount.push(child)
                        }
                    }
                })
            }
            generateDiscountItem(DayArrayDiscount)
            return state;
        case DEL_DISCOUNT:
            let DayDiscount = moment(action.days[0].toDateString());
            let EndDayDiscount = moment(action.days[1].toDateString()).add(1, 'day')
            let DayArrayDiscountDel = []
            while (!(DayDiscount.isSame(EndDayDiscount))) {
                DayArrayDiscountDel.push(DayDiscount.clone());
                DayDiscount.add(1, 'day').clone();
            }
            const indexOfItemDiscountDel = state.price_categories.findIndex(item => item.id === action.id);
            const generateDiscountDelItem = (array) => {
                debugger
                array.forEach((item) => {
                    let idDateDiscount = item.format('YYYYMMDD')
                    let index = state.price_categories[indexOfItemDiscountDel].price.findIndex((itemOf) => (itemOf[item.format('YYYYMMDD')]))
                    state.discount_categories[indexOfItemDiscountDel].discount.splice(index, 1)
                    state.price_categories[indexOfItemDiscountDel].price[index][idDateDiscount] = action.price

                })
            }
            generateDiscountDelItem(DayArrayDiscountDel)
            return state;
        default:
            return state;
    }
}
export default categoryReducer;
export const addCategoryActionCreator = (title, name, numberRooms) => {
    return {type: ADD_CATEGORY, title: title, name: name, numberRooms: numberRooms}
}
export const editCategoryActionCreator = (classRoom, active, edit_item, id, title, subtype, name, numberOfGuests,
                                          maxPlace, description, typeOfHouse, totalArea, areaRooms, numberFloor,
                                          numberRooms, numberBedrooms, kitchen, wifi, internet, safe, intercom,
                                          videoIntercom, securitySystem, fireAlarm, balcony, sauna, doubleBed, oneBed,
                                          sofaTwoPlaces, sofaOnePlace, bunkBedTwoPlace, foldingChair, cot, babyCrib,
                                          bedDress, bathRoom, toilet, numberBathRooms, clothesDryer, warmFloor,
                                          hairDryer, washingMachine, bath, hydroMassageBath, showerCabin, shampoo,
                                          towels, bathrobes, toiletries, musicCenter, karaoke, childrensCorner, iron,
                                          tv, lcdTv, fan, heater, ironingBoard, mosquito, furnace, firePlace, cableTv,
                                          billiards, airConditioner, gasStove, electricStove, cutlery, setOfDishes,
                                          waterFilter, oven, coffeeMachine, electricKettle, microWave, fridge,
                                          dishwasher, playground, swimmingPool, ownShore, fencedArea, brazier,
                                          tennisTable, orchard, sunLoungers, alcove, terrace, smoking, cleaning, photo,
                                          city, lake, park, sea, courtyard, garden, mountain, river, roadway, sanUzel,
                                          addNumberOfGuests) => {
    return {
        classRoom: classRoom,
        active: active,
        edit_item: edit_item,
        type: EDIT_CATEGORY,
        id: id,
        title: title,
        subtype: subtype,
        name: name,
        numberOfGuests: numberOfGuests,
        maxPlace: maxPlace,
        description: description,
        typeOfHouse: typeOfHouse,
        totalArea: totalArea,
        areaRooms: areaRooms,
        numberFloor: numberFloor,
        numberRooms: numberRooms,
        numberBedrooms: numberBedrooms,
        kitchen: kitchen,
        wifi: wifi,
        internet: internet,
        safe: safe,
        intercom: intercom,
        videoIntercom: videoIntercom,
        securitySystem: securitySystem,
        fireAlarm: fireAlarm,
        balcony: balcony,
        sauna: sauna,
        doubleBed: doubleBed,
        oneBed: oneBed,
        sofaTwoPlaces: sofaTwoPlaces,
        sofaOnePlace: sofaOnePlace,
        bunkBedTwoPlace: bunkBedTwoPlace,
        foldingChair: foldingChair,
        cot: cot,
        babyCrib: babyCrib,
        bedDress: bedDress,
        bathRoom: bathRoom,
        toilet: toilet,
        numberBathRooms: numberBathRooms,
        clothesDryer: clothesDryer,
        warmFloor: warmFloor,
        hairDryer: hairDryer,
        washingMachine: washingMachine,
        bath: bath,
        hydroMassageBath: hydroMassageBath,
        showerCabin: showerCabin,
        shampoo: shampoo,
        towels: towels,
        bathrobes: bathrobes,
        toiletries: toiletries,
        musicCenter: musicCenter,
        karaoke: karaoke,
        childrensCorner: childrensCorner,
        iron: iron,
        tv: tv,
        lcdTv: lcdTv,
        fan: fan,
        heater: heater,
        ironingBoard: ironingBoard,
        mosquito: mosquito,
        furnace: furnace,
        firePlace: firePlace,
        cableTv: cableTv,
        billiards: billiards,
        airConditioner: airConditioner,
        gasStove: gasStove,
        electricStove: electricStove,
        cutlery: cutlery,
        setOfDishes: setOfDishes,
        waterFilter: waterFilter,
        oven: oven,
        coffeeMachine: coffeeMachine,
        electricKettle: electricKettle,
        microWave: microWave,
        fridge: fridge,
        dishwasher: dishwasher,
        playground: playground,
        swimmingPool: swimmingPool,
        ownShore: ownShore,
        fencedArea: fencedArea,
        brazier: brazier,
        tennisTable: tennisTable,
        orchard: orchard,
        sunLoungers: sunLoungers,
        alcove: alcove,
        terrace: terrace,
        smoking: smoking,
        cleaning: cleaning,
        photo: photo,
        city: city,
        lake: lake,
        park: park,
        sea: sea,
        courtyard: courtyard,
        garden: garden,
        mountain: mountain,
        river: river,
        roadway: roadway,
        sanUzel: sanUzel,
        addNumberOfGuests: addNumberOfGuests
    }
}
export const changeEditItemActionCreator = (edit_item_id) => {
    return {type: CHANGE_EDIT_ITEM, edit_item_id: edit_item_id}
}
export const addBookingDateActionCreator = (id, days, book) => {
    return {type: BOOKING_CATEGORY, id: id, days: days, book: book}
}
export const addPriceDateActionCreator = (id, days, price) => {
    return {type: PRICE_CATEGORY, id: id, days: days, price: price}
}
export const deleteCategoryActionCreator = (edit_item) => {
    return {type: DELETE_CATEGORY, edit_item: edit_item}
}
export const addDiscountActionCreator = (id, days, discount, typeDiscount, price) => {
    return {type: ADD_DISCOUNT, id: id, days: days, discount: discount, typeDiscount: typeDiscount, price: price}
}
export const delDiscountActionCreator = (id, days, discount, price) => {
    return {type: DEL_DISCOUNT, id: id, days: days, discount: discount, price: price}
}
