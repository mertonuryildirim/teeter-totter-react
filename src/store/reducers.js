import { FALLING_ELEMENTS } from "../utils/constants";
import generateRandomElement from "../utils/helper";
import {
  INITIALIZE_FALLING_ELEMENTS,
  INSERT_FALLING_ELEMENT,
  INSERT_LEFT_ELEMENT,
  INSERT_RIGHT_ELEMENT,
  MOVE_LEFT,
  MOVE_RIGHT,
  SIMULATION_END,
  SIMULATION_RESET,
  TOGGLE_SIMULATION,
} from "./actions";

const initialState = {
  ended: false,
  paused: true,
  leftElements: [],
  rightElements: [],
  fallingElements: [],
};

const reducer = (state = initialState, action) => {
  let randomElement = {};
  let fallingElements = [];
  switch (action.type) {
    case TOGGLE_SIMULATION:
      return {
        ...state,
        paused: !state.paused,
      };
    case INSERT_RIGHT_ELEMENT:
      randomElement = generateRandomElement();
      return {
        ...state,
        rightElements: [...state.rightElements, randomElement],
      };
    case INSERT_LEFT_ELEMENT:
      fallingElements = [...state.fallingElements];
      const leftElement = fallingElements.shift();
      return {
        ...state,
        fallingElements,
        leftElements: [...state.leftElements, leftElement],
      };
    case MOVE_RIGHT:
      if (
        state.paused ||
        (state.fallingElements &&
          state.fallingElements.length &&
          state.fallingElements[0].offset - 1 <= 0)
      )
        return state;
      fallingElements = [...state.fallingElements];
      if (fallingElements.length) fallingElements[0].offset -= 1;
      return {
        ...state,
        fallingElements,
      };
    case MOVE_LEFT:
      if (
        state.paused ||
        (state.fallingElements &&
          state.fallingElements.length &&
          state.fallingElements[0].offset + 1 <= 0)
      )
        return state;
      fallingElements = [...state.fallingElements];
      if (fallingElements.length) fallingElements[0].offset += 1;
      return {
        ...state,
        fallingElements,
      };
    case SIMULATION_RESET:
      fallingElements = [...state.fallingElements];
      if (fallingElements.length) fallingElements[0].offset += 1;
      return initialState;
    case INSERT_FALLING_ELEMENT:
      randomElement = generateRandomElement();
      return {
        ...state,
        fallingElements: [...state.fallingElements, randomElement],
      };
    case INITIALIZE_FALLING_ELEMENTS:
      fallingElements = [];
      for (let i = 0; i < FALLING_ELEMENTS; i++) {
        randomElement = generateRandomElement();
        fallingElements.push(randomElement);
      }
      return {
        ...state,
        fallingElements,
      };
    case SIMULATION_END:
      return {
        ...state,
        ended: true,
      };
    default:
      return state;
  }
};

export default reducer;
