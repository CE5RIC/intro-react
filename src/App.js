
import './App.css';
import InputField from "./components/InputField";
import SubmitButton from "./components/SubmitButton";
import Todos from "./components/Todos";


function App() {
  return (
    <div className="App">

      <InputField />
      <SubmitButton />
      <Todos />

    </div>
  );
}

export default App;
