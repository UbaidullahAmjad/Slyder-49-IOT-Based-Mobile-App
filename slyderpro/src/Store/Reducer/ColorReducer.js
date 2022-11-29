import {
    CHANGE_TURN_ON_DARK_THEME,
    CHANGE_TURN_OFF_DARK_THEME,
    CHANGE_THEME
} from '../Actions/type';

const initialState = {
    isDarkThemeOn: false,
    bgColor: ['#202427', '#3E4345', '#131617'],
    primary: '#AAAAAA',
    primaryLight: "#606060",
    secondary: "#000000",
    secondaryLight: "#191919",
    insideShadow: {
        upper: "#242424",
        lower: "#3B3B3B"
    },
    tabtext: "#777777",
    mainColor: "#242424",
    statusColor: {
        unactive: ['#515151', '#191919'],
        active: ['#039805', '#039805']
    },
    scrollviewColor: "#A8A8A8",
    light: "#fff",
    iconNormalColor: "#808080",
    lightDarkColor: '#B1B1B1',
    weatherText: "#EBDCDC",
    btnstatus: "#98FF31",
    graphBg: '#2E2D2D'

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_TURN_ON_DARK_THEME:
            return {
                ...state,
                bgColor: ['#0F0F10', '#2B2E2F', '#121315'],
                primary: '#B3001C',
                primaryLight: "#B3001C",
                secondary: "#B3001C",
                secondaryLight: "#B3001C",
                tabtext: "#B3001C",
                mainColor: "#141517",
                statusColor: {
                    unactive: ['#151617', '#1C1D1E'],
                    active: ['#B3001C', '#B3001C']
                },
                scrollviewColor: "#B3001C",
                light: "#B3001C",
                iconNormalColor: "#B3001C",
                lightDarkColor: '#B3001C',
                weatherText: "#B3001C",
                btnstatus: "#B3001C",
                graphBg: '#141819'

            };
        case CHANGE_TURN_OFF_DARK_THEME:
            return {
                ...state,
                bgColor: ['#202427', '#3E4345', '#131617'],
                primary: '#AAAAAA',
                primaryLight: "#606060",
                secondary: "#000000",
                secondaryLight: "#191919",
                insideShadow: {
                    upper: "#242424",
                    lower: "#3B3B3B"
                },
                tabtext: "#777777",
                mainColor: "#242424",
                statusColor: {
                    unactive: ['#515151', '#191919'],
                    active: ['#039805', '#039805']
                },
                scrollviewColor: "#A8A8A8",
                light: "#fff",
                iconNormalColor: "#808080",
                lightDarkColor: '#B1B1B1',
                weatherText: "#EBDCDC",
                btnstatus: "#98FF31",
                graphBg: '#2E2D2D'

            };
        case CHANGE_THEME:
            return {
                ...state,
                isDarkThemeOn: payload
            };

        default:
            return state;
    }
};