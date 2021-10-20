import FallArea from "./FallArea";
import TeeterTotterObject from "./TeeterTotterObject";
import "./teeterTotter.scss";
const TeeterTotter = () => {
  return (
    <div className="teeter-totter">
      <FallArea />

      <TeeterTotterObject />
    </div>
  );
};

export default TeeterTotter;
