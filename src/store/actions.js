import { MAX_BENDING_PERCENTAGE, MAX_POWER_DIFF } from "../utils/constants";

export const TOGGLE_SIMULATION = "TOGGLE_SIMULATION";
export const SIMULATION_RESET = "SIMULATION_RESET";
export const SIMULATION_END = "SIMULATION_END";
export const INSERT_RIGHT_ELEMENT = "INSERT_RIGHT_ELEMENT";
export const INSERT_LEFT_ELEMENT = "INSERT_LEFT_ELEMENT";
export const MOVE_RIGHT = "MOVE_RIGHT";
export const MOVE_LEFT = "MOVE_LEFT";
export const INITIALIZE_FALLING_ELEMENTS = "INITIALIZE_FALLING_ELEMENTS";
export const INSERT_FALLING_ELEMENT = "INSERT_FALLING_ELEMENT";

export const toggleSimulation = () => ({
  type: TOGGLE_SIMULATION,
});

export const simulationReset = () => {
  return { type: SIMULATION_RESET };
};

export const simulationEnd = () => {
  return { type: SIMULATION_END };
};

export const insertRightElement = () => {
  return { type: INSERT_RIGHT_ELEMENT };
};

export const insertLeftElement = () => {
  return { type: INSERT_LEFT_ELEMENT };
};

export const moveRight = () => {
  return { type: MOVE_RIGHT };
};

export const moveLeft = () => {
  return { type: MOVE_LEFT };
};

export const initializeFallingElements = () => {
  return { type: INITIALIZE_FALLING_ELEMENTS };
};

export const insertFallingElement = () => {
  return { type: INSERT_FALLING_ELEMENT };
};

export const restartSimulation = () => {
  return (dispatch, getState) => {
    dispatch(simulationReset());
    dispatch(insertRightElement());
    dispatch(initializeFallingElements());
  };
};

export const getTotalWeight = (elements) => {
  return elements.reduce((total, element) => {
    return (total += element.weight * element.offset);
  }, 0);
};

export const getLeftWeight = (leftElements) => {
  return getTotalWeight(leftElements);
};

export const getRightWeight = (rightElements) => {
  return getTotalWeight(rightElements);
};

export const getBending = (state) => {
  const totalLeft = getLeftWeight(state.leftElements);
  const totalRight = getRightWeight(state.rightElements);
  if (!totalLeft) {
    return MAX_BENDING_PERCENTAGE;
  } else {
    return totalLeft > totalRight
      ? ((totalLeft - totalRight) / totalLeft) * -100
      : ((totalRight - totalLeft) / totalRight) * 100;
  }
};

export const getStatus = state => {
  const totalLeft = getLeftWeight(state.leftElements);
  const totalRight = getRightWeight(state.rightElements);
	const bending = getBending(state);
	return (
		bending > MAX_BENDING_PERCENTAGE ||
		bending < -1 * MAX_BENDING_PERCENTAGE ||
		Math.abs(totalLeft - totalRight) > MAX_POWER_DIFF
	);
};

export const fallEnded = () => {
	return (dispatch, getState) => {
		dispatch(insertLeftElement());
		setTimeout(() => {
			const { Seesaw: state } = getState();
			if (getStatus(state)) {
				setTimeout(() => {
					dispatch(toggleSimulation());
					dispatch(simulationEnd());
				}, 0);
			} else {
				dispatch(insertFallingElement());
				if (
					state.leftElements &&
					state.leftElements.length + 1 !== state.rightElements.length
				) {
					dispatch(insertRightElement());
				}
			}
		}, 250);
	};
};
