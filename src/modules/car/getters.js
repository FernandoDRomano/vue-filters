export function getCartsFilters(state){
    let cars = state.carts

    switch (state.filters.status) {
        case 'new':
            cars = cars.filter(car => car.status === 'new')
            break;
    
        case 'used':
            cars = cars.filter(car => car.status === 'used')
            break;
    }

    if(state.filters.model !== ''){
        cars = cars.filter(car => {
            return car.car_model.includes(state.filters.model)
        })
    }

    if(state.filters.min_price){
        cars = cars.filter(car => {
            const priceCar = parseFloat(car.price.replace('$', ''))
            return priceCar >= state.filters.min_price 
        })
    }

    if(state.filters.max_price){
        cars = cars.filter(car => {
            const priceCar = parseFloat(car.price.replace('$', ''))
            return priceCar <= state.filters.max_price
        })
    }

    if(state.filters.from_date){
        cars = cars.filter(car => car.car_model_year >= state.filters.from_date)
    }

    if(state.filters.to_date){
        cars = cars.filter(car => car.car_model_year <= state.filters.to_date)
    }

    return cars
}