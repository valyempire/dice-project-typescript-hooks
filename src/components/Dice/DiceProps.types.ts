/**
 * Defines the DiceProps interface
 */
export interface DiceProps {
    face: DiceFace;
    rolling: boolean;
  }
  
/**
 * Defines the DiceFace type
 */
  export type DiceFace = 'one' | 'two' | 'three' | 'four' | 'five' | 'six';

/**
 * Defines the IconProps interface
 */
  export interface IconProps {
    rolling: boolean
  }