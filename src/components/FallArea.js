import "./fallArea.scss";
import Shape from "./Shape";

const FallArea = ({ shape }) => {
  return (
    <div className="fall-area">
      <Shape shape={shape} />
    </div>
  );
};

export default FallArea;
