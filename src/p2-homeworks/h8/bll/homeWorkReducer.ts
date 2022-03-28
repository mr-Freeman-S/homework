import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action:actionType ): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return [...state].sort((a, b) => {
                if (action.payload === "up") {
                    return a.name > b.name ? 1 : -1
                } else return a.name > b.name ? -1 : 1
            })
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}

export type actionType = { type: string, payload: string | number }