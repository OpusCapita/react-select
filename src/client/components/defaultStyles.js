import { mergeStyles } from 'react-select';

const defaultStyles = {
  option: (styles, { isSelected, isFocused }) => {
    return {
      ...styles,
      backgroundColor:
        isSelected ? 'rgba(0, 126, 255, 0.04)' :
        isFocused ? 'rgba(0, 126, 255, 0.08)' :
        '#ffffff',
    }
  }
}

export const mergeDefaultStyles = styles => mergeStyles(defaultStyles, styles);
