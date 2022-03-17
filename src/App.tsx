import React from "react";
import Todo from "./component/Todo";

const App: React.FC = () => {
  const data = [{id: '1', task: 'task 1'}, {id: '2', task: 'task 2'}, {id: '3', task: 'task 3'}];

  return (
    <div>
      <Todo items={data} />
    </div>
  );
}

export default App;
