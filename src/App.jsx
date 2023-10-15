import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskAdder from "./components/TaskAdder";
import "./App.css";

function App() {
  const [Tasks, setList] = useState([]);
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    if (isDark) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [isDark]);

  return (
    <div className={`app-container ${isDark ? "dark" : "light"}`}>
      <Header setIsDark={setIsDark} isDark={isDark} />
      <TaskAdder setList={setList} />
      <TaskList Tasks={Tasks} />
    </div>
  );
}

export default App;
