import { useDispatch, useSelector } from "react-redux";
import { toggleSimulation, restartSimulation, getLeftWeight, getRightWeight } from "../store/actions";
import "./panel.scss";

const Panel = () => {
  const { paused, ended, leftElements, rightElements, fallingElements } =
    useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const handleToggleSimulation = () => {
    dispatch(toggleSimulation());
  };

  const handleRestartGame = () => {
    dispatch(restartSimulation());
  };

  return (
    <div className="panel">
      <div className="panel-stats">
        <div>
          Total weight:
          <span className="panel-stats-weight">{getLeftWeight(leftElements)} kg</span>
        </div>
        <div>
          Momentum:
          <span className="panel-stats-weight">
            {fallingElements[0] && fallingElements[0].weight}
          </span>
        </div>
      </div>

      <div>
        <button
          className="play-btn"
          tabIndex="-1"
          onClick={handleToggleSimulation}
          disabled={ended}
        >
          {paused ? "Play" : "Pause"}
        </button>

        <button
          className="refresh-btn"
          tabIndex="-1"
          onClick={handleRestartGame}
        >
          Refresh
        </button>
      </div>

      <div className="panel-stats">
        <div>
          Total weight:
          <span className="panel-stats-weight">{getRightWeight(rightElements)} kg</span>
        </div>
      </div>
    </div>
  );
};

export default Panel;
