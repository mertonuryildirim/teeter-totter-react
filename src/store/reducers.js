const initialState = {
  droppedShapes: [],
  fallingShapes: [],
  randomlyPlacedShapes: [],
  isGamePaused: true,
  fallingIntervalGap: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SIMULATION":
      return { ...state, isGamePaused: !state.isGamePaused };
    case "INIT_GAME":
      return { ...state, isGamePaused: action.payload };
    default:
      return state;
  }
};

export default reducer;
