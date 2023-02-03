import "./App.css";
import Adresse from "./component/Profile/Adresse";
import FullName from "./component/Profile/FullName";
import ProfilePhoto from "./component/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Adresse />
    </div>
  );
}

export default App;
