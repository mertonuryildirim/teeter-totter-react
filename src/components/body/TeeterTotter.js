import FallArea from "./FallArea"
import TeeterTotterObject from "./TeeterTotterObject"
import "./teeterTotter.css"

const TeeterTotter = () => {
    return (
        <div className="teeter-totter">
            <FallArea />

            <TeeterTotterObject />
        </div>
    )
}

export default TeeterTotter
