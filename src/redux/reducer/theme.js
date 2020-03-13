import {DefaultTheme} from '@react-navigation/native';
import {THEME_CHANGE} from '../action/types';

export default function(state = DefaultTheme, {type, theme}) {
  switch (type) {
    case THEME_CHANGE:
      return {
        ...state,
        ...theme,
        colors: {
          ...state.colors,
          ...theme.colors,
        },
      };
    default:
      return state;
  }
}
