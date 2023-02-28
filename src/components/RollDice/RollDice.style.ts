/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the RollDice components
 * 
 */
export const Container = styled('div')(() => {
  return {
    display: 'flex',
    flexFlow: 'column nowrap',
    minHeight: '100vh',
  };
});


export const RollDiceContainer = styled('div')(() =>{
return {
  display: "flex",
  justifyContent: "center",
  alignItems: 'center',}
})

export const RollDiceButton = styled('button')(() => {
  return {
    alignSelf: 'center',
    width: '15em',
    padding: '1.5em',
    fontize: '1em',
    border: '0px',
    borderRadius: '10px',
    color: 'white',
    backgroundColor: 'black',
    marginTop: '3em',
    '&:hover': {
      backgroundColor: 'rgb(39, 19, 169)',
      cursor: 'pointer',
    },
  };
});

