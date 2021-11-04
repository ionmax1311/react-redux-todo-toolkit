import { Provider } from "react-redux";
import { Todo } from "./containers/Todo";
import "./App.css";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TODO APP</h1>
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
