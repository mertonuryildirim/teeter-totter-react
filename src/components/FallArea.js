import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeFallingElements,
  moveLeft,
  moveRight,
} from "../store/actions";
import {
  MOVEMENT_DELAY,
  MOVEMENT_DELAY_DECREASE_AFTER,
  MOVEMENT_DELAY_DECREASE,
} from "../utils/constants";
import "./fallArea.scss";
import FallingElement from "./FallingElement";

const FallArea = () => {
  const [fallingTimeout, setFallingTimeout] = useState(MOVEMENT_DELAY);
  const [iterationCounter, setIterationCounter] = useState(0);
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.keyCode === 37) dispatch(moveLeft());
    if (e.keyCode === 39) dispatch(moveRight());
  };

  const onFallEnd = () => {
    setIterationCounter(iterationCounter + 1);
    if (iterationCounter === MOVEMENT_DELAY_DECREASE_AFTER) {
      setFallingTimeout(fallingTimeout - MOVEMENT_DELAY_DECREASE);
      setIterationCounter(0);
    }
  };
  
  useEffect(() => {
    dispatch(initializeFallingElements());
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="fall-area">
      {state.fallingElements
        ? state.fallingElements.map((element, index) => (
            <FallingElement
              element={element}
              index={index}
              timeout={fallingTimeout}
              onFallEnd={onFallEnd}
              key={element.id}
            />
          ))
        : null}
    </div>
  );
};

export default FallArea;
