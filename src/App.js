import React,{useState} from "react";
import data from './data';
import List from "./list";
function App() {
  const [people,setPeople] = useState(data);
  return (
    <div className="App">
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </div>
  );
}
export default App;
