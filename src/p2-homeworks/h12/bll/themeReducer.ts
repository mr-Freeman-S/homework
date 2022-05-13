const initState = {
    currentTheme: 'dark'
};
type initStateType = {
    currentTheme: string
}
export type themeType = 'dark' | 'red' | 'some'
export const themeReducer = (state: initStateType = initState, action: changeThemeType): initStateType => { // fix any
    switch (action.type) {
        case "SET-THEME": {
            return {...state, currentTheme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string): changeThemeType => ({type: "SET-THEME", theme} as const); // fix any
export type changeThemeType = { type: string, theme: string }