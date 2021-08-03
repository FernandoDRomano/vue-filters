export function setFilter(state, payload){
    state.filters[payload.filter] = payload.value
}