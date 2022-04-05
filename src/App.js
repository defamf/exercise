import "./App.css";
import Search from "./pages/search";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Search />
      </Provider>
    </div>
  );
}
export default App;
