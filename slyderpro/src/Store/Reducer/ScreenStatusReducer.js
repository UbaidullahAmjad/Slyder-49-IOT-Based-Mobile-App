import {CHANGE_CURRENT_SCREEN} from '../Actions/type';

const initialState = {
  currentScreen: 'welcome',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case CHANGE_CURRENT_SCREEN:
      return {
        ...state,
        currentScreen: payload,
      };
    default:
      return state;
  }
};
