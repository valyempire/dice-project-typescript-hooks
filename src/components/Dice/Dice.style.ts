/*
 Imports styled
 */
import { styled } from "@mui/system";

/**
 * Imports FontAwesome
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Imports types
 */
import { IconProps } from "./DiceProps.types";


/**
 * Styles the Icon
 */
export const Icon = styled(FontAwesomeIcon, {
  shouldForwardProp: (propName) => propName !== 'rolling',
})<IconProps>((props) => {
  const { rolling } = props;
  return {
    fontSize: '10em',
    padding: '0.25em',
    color: '#ff0000',
    ' @keyframes wobble': {
      from: {
        transform: 'translate3d(0,0,0)',
      },
      '15%': {
        transform: 'translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)',
      },
      '30%': {
        transform: 'translate3d(20%,0,0) rotate3d(0,0,1,3deg)',
      },
      '45%': {
        transform: 'translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)',
      },
      '60%': {
        transform: 'translate3d(10%,0,0) rotate3d(0,0,1,2deg)',
      },
      '75%': {
        transform: 'translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)',
      },
      to: {
        transform: 'translate3d(0,0,0)',
      },
    },
    ...(rolling && {
      animationName: 'wobble',
      animationDuration: '1s',
    }),
  };
});

