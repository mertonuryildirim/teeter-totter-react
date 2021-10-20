import FallArea from "./FallArea"
import "./teeterTotter.css"
import TeeterTotterObject from "./TeeterTotterObject"

const TeeterTotter = () => {
    return (
        <div className="teeter-totter">
            <FallArea />

            <TeeterTotterObject />
        </div>
    )
}

export default TeeterTotter
