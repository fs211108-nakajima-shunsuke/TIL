import Child from "./components/Child";
import "./App.css";
import CountContextProvider from "./provider/CountProvider";

function App() {
  return (
    <div className="App">
      <h1>App.jsxです</h1>
      <CountContextProvider>
        <Child />
      </CountContextProvider>
    </div>
  );
}

export default App;
