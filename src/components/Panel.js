import "./panel.scss";

const Panel = () => {
  return (
    <div className="panel">
      <div className="panel-stats">
        <div>
          Total weight:
          <span className="panel-stats-weight"> ? kg</span>
        </div>
        <div>
          Momentum:
          <span className="panel-stats-weight"></span>
        </div>
      </div>

      <div>
        <button className="play-btn">Pause / Replay</button>

        <button className="refresh-btn">Refresh</button>
      </div>

      <div className="panel-stats">
        <div>
          Total weight:
          <span className="panel-stats-weight"> ? kg</span>
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
