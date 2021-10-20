import { useEffect } from "react";
import { WIDTH } from "../utils/constants";
import "./shape.scss";
import PropTypes from "prop-types";
import classnames from "classnames";

const Shape = ({
  top,
  type,
  side,
  size,
  weight,
  offset,
  setBottom,
  style,
  className,
  ...restProps
}) => {
  let element = null;
  const styles = {
    left: `${
      side === "right"
        ? Math.min(50 + offset * 10, 100)
        : Math.max(50 - offset * 10, 0)
    }%`,
    fontSize: `${size}em`,
  };

  useEffect(() => {
    setBottom(element && element.getBoundingClientRect().bottom);
    // eslint-disable-next-line
  }, [top]);

  return (
    <div
      className={classnames(
        "shape",
        `shape--${type}`,
        { [`shape--${side}`]: side },
        {
          [className]: className,
        }
      )}
      style={{ ...style, ...styles }}
      ref={(ref) => (element = ref)}
      {...restProps}
    >
      <span className="shape__inner">{weight}</span>
    </div>
  );
};

Shape.propTypes = {
  top: PropTypes.number,
  type: PropTypes.string.isRequired,
  side: PropTypes.string,
  size: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  setBottom: PropTypes.func,
};

Shape.defaultProps = {
  top: 0,
  type: "sqaure",
  side: null,
  size: 30,
  weight: 3,
  offset: WIDTH / 2 - 1,
  setBottom: () => {},
};

export default Shape;
