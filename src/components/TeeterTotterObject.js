import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBending, insertRightElement } from "../store/actions";
import { BOARD_HEIGHT, MAX_BENDING_PERCENTAGE } from "../utils/constants";
import Shape from "./Shape";
import "./teeterTotterObject.scss";

const TeeterTotterObject = () => {
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const bending = getBending(state);

  useEffect(() => {
    dispatch(insertRightElement());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="teeter-totter-object">
      <div
        className="teeter-totter-object-board"
        style={{
          transform: `rotate(${
            Math.min(Math.abs(bending / 2), MAX_BENDING_PERCENTAGE) *
            (bending > 0 ? 1 : -1)
          }deg)`,

          height: `${BOARD_HEIGHT}px`,
        }}
      >
        {state.leftElements
          ? state.leftElements.map((element) => (
              <Shape
                side="left"
                type={element.type}
                size={element.size}
                weight={element.weight}
                offset={element.offset}
                key={element.id}
              />
            ))
          : null}
        {state.rightElements
          ? state.rightElements.map((element) => (
              <Shape
                side="right"
                type={element.type}
                size={element.size}
                weight={element.weight}
                offset={element.offset}
                key={element.id}
              />
            ))
          : null}
      </div>

      <div className="teeter-totter-object-foundation"></div>
    </div>
  );
};

export default TeeterTotterObject;
