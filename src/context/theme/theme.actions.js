import {
    COLD_THEME,
    WARM_THEME
} from './theme.types'

export const turnToColdTheme = () => {
    return {
        type: COLD_THEME
    }
}

export const turnToWarmTheme = () => {
    return {
        type: WARM_THEME
    }
}