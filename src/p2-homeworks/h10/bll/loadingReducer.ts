const initState = {
    isLoading: false
}
type initStateType = {
    isLoading: boolean
}
export const loadingReducer = (state: initStateType = initState, action: loadingACType): initStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state,...action.payload} // хоть тут и не нужно payload но мне нравится.
        }
        default:
            return state
    }
}
type loadingACType = { type: string, payload: { isLoading: boolean } }
export const loadingAC = (isLoading: boolean): loadingACType => {
    return {type: "LOADING", payload: {isLoading}} as const
} // fix any