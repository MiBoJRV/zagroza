import './App.css';
import {CustomDropdown} from "./components/CustomDropdown/CustomDropdown";

function App() {

  const asyncSearchFunction = async (options, query) => {
    //
    //
  };
  return (
    <div className="App">
      <CustomDropdown hed = "Оберіть ваше місто"  />
      <CustomDropdown hed = "Оберіть вашу вулицю"/>
    </div>
  );
}

export default App;
