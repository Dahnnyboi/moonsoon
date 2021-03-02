import {
    COLD_THEME,
    WARM_THEME
} from './theme.types'

export const initialThemeState = 'cold'

export const themeReducer = (state, action) => {
    switch(action.type){
        case COLD_THEME:
            return 'cold'
        case WARM_THEME:
            return 'warm'

        default:
            return state
    }
}

