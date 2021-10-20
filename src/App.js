import TeeterTotter from "./components/body/TeeterTotter";
import Panel from "./components/header/Panel";
import "./app.css"

const App = () => {
  return (
    <div className="app">
      <Panel />

      <TeeterTotter />
    </div>
  );
};

export default App;
