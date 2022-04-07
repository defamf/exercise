import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Routing } from "./routing";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routing />
      </Provider>
    </div>
  );
}
export default App;
