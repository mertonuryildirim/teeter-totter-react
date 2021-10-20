import { useDispatch, useSelector } from "react-redux";
import { toggleSimulationAction, initGameAction } from "../store/actions";
import "./panel.scss";

const Panel = () => {
  const dispatch = useDispatch();
  const { droppedShapes, randomlyPlacedShapes, fallingShapes, isGamePaused } =
    useSelector((state) => state.reducer);

  const toggleSimulation = () => {
    dispatch(toggleSimulationAction());
  };

  const initGame = () => {
    dispatch(initGameAction());
  };

  const getTotalWeight = (shapes = []) => {
    return shapes.reduce((total, current) => (total += current.weight), 0);
  };

  const totalDroppedShapesWeight = () => {
    return getTotalWeight(droppedShapes);
  };

  const totalRandomShapesWeight = () => {
    return getTotalWeight(randomlyPlacedShapes);
  };

  return (
    <div className="panel">
      <div className="panel-stats">
        <div>
          Total weight:
          <span className="panel-stats-weight">
            {totalDroppedShapesWeight()} kg
          </span>
        </div>
        <div>
          Momentum:
          <span className="panel-stats-weight">
            {fallingShapes[0] && fallingShapes[0].weight}
          </span>
        </div>
      </div>

      <div>
        <button className="play-btn" tabIndex="-1" onClick={toggleSimulation}>
          {isGamePaused ? "Play" : "Pause"}
        </button>

        <button className="refresh-btn" tabIndex="-1" onClick={initGame}>
          Refresh
        </button>
      </div>

      <div className="panel-stats">
        <div>
          Total weight:
          <span className="panel-stats-weight">
            {totalRandomShapesWeight()} kg
          </span>
        </div>
        <div>
          Momentum:
          <span className="panel-stats-weight"></span>
        </div>
      </div>
    </div>
  );
};

export default Panel;
