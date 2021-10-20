import TeeterTotter from "./components/TeeterTotter";
import Panel from "./components/Panel";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Panel />
      
      <TeeterTotter />
    </div>
  );
};

export default App;
