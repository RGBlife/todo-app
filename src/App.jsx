import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskAdder from "./components/TaskAdder";
import "./App.css";

function App() {
  const [Tasks, setList] = useState([]);
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`app-container ${isDark ? 'dark' : 'light'}`}>
      <Header setIsDark={setIsDark} isDark={isDark} />
      <TaskAdder setList={setList} />
      <TaskList Tasks={Tasks} />
    </div>
  );
}

export default App;
