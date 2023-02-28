import React from "react";

/**
 * Imports styles
 */
import { Icon } from "./Dice.style";

/**
 * Imports FontAwesomes icons
 */
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
 
} from "@fortawesome/free-solid-svg-icons";

/**
 * Imports types
 */
import { DiceProps } from "./DiceProps.types";

/**
 * Displays the component
 */
const Dice: React.FC<DiceProps> = (props) => {

  const {face, rolling} = props

  /**
   * Handles the faces of dice using icons
   */
  const getDiceIcon = () => {
    switch (face) {
      case "two":
        return faDiceTwo;
      case "three":
        return faDiceThree;
      case "four":
        return faDiceFour;
      case "five":
        return faDiceFive;
      case "six":
        return faDiceSix;
      default:
        return faDiceOne;
    }
  };

  return (
      <Icon
        rolling={rolling}
        icon={getDiceIcon()}
      />
  );
};

export default Dice
