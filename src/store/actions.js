const TOGGLE_SIMULATION = "TOGGLE_SIMULATION";
const INIT_GAME = "INIT_GAME";

export const toggleSimulationAction = () => ({
  type: TOGGLE_SIMULATION,
});

export const initGameAction = () => ({
  type: INIT_GAME,
  payload: true,
});
