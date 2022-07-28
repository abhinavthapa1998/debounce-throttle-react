import "./styles.css";
import useDebounce from "./hooks/useDebounce";
import useThrottle from "./hooks/useThrottle";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const throttledSearch = useThrottle(search, 1000);
  return (
    <div className="App">
      <h1>Simple Debouncing and Throttling in React</h1>
      <div style={{ border: "solid 1px gray", padding: "20px" }}>
        <input onChange={(e) => setSearch(e.target.value)} type="text" />
        <h2>Normal</h2>
        <div>Normal Result: </div>
        <div>{search}</div>
        <h2>Debouncing</h2>
        <div>Debounced Result: </div>
        <div>{debouncedSearch}</div>
        <h2>Throttling</h2>
        <div>Throttled Result: </div>
        <div>{throttledSearch}</div>
      </div>
    </div>
  );
}
