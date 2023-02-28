import React, { useState} from "react";

/**
 * Imports components
 */
import Dice from "../Dice/Dice";

/**
 * Imports styles
 */
import { Container, RollDiceContainer, RollDiceButton } from './RollDice.style'

/**
 * Imports types
 */
import { DiceFace} from "../Dice/DiceProps.types";

/**
 * Defines the sides of dice
 */
const sides: DiceFace[] = ["one", "two", "three", "four", "five", "six"];

/**
 * Displays the component
 */
const RollDice: React.FC = (props) => {
  /**
   * Initializes the first dice
   */
  const [die1, setDie1] = useState< DiceFace > ("one");

  /**
   * Initializes the second dice
   */
  const [die2, setDie2] = useState< DiceFace > ("one");

  /**
   * Initializes the rolling
   */
  const [rolling, setRolling] = useState(false);

  /**
   * Handle display the dice
   */
  const roll = () => {
    /**
     * pick 2 new rolls
     */
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];

    /**
     * set the new state with new rolls
     */
    setDie1(newDie1);
    setDie2(newDie2);
    setRolling(true);

    /**
     * wait one second, then set rolling to false
     */
    setTimeout(() => {
      setRolling(false);
    }, 1000);
  };

  return (
    <Container>
      <RollDiceContainer>
        <Dice face={die1} rolling={rolling} />
        <Dice face={die2} rolling={rolling} />
      </RollDiceContainer>

      <RollDiceButton onClick={roll} disabled={rolling}>
        {rolling ? "Rolling..." : "Roll Dice!"}
      </RollDiceButton>
    </Container>
  );
};

export default RollDice;
